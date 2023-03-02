const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const fs = require('fs');
const fileType = require('detect-file-type');
const multiparty = require('multiparty');
const thumbsupply = require('thumbsupply');
const awsConfig = require('aws-config');
const AWS = require('aws-sdk');
const aws_cf = require('aws-cloudfront-sign');
require('dotenv').config();
const {
  getVideoDurationInSeconds
} = require('get-video-duration');

var s3 = new AWS.S3(awsConfig({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION
}));

// upload file to S3 bucket
const uploadFile = (buffer, bucket, name) => {
  const params = {
    Body: buffer,
    Bucket: bucket,
    ContentType: "",
    Key: name,
    Metadata: {
      isprivatefile: "true"
    }
  };
  return s3.upload(params).promise();
};

// get file from S3 bucket
const getFile = (name) => {
  const params = {
    Bucket: process.env.S3_BUCKET_VIDEO,
    Key: name
  };
  return s3.getObject(params).promise();
};

//  uploads series demo/trailer/description video
//  because seriesid is unique video can go under kigzag-video bucket and thumbnail under kigzag-video-thumbnail
router.post('/upload', authorise, (req, res) => {
  try {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      console.log("fields");
      console.log(fields);
      console.log("files");
      console.log(files);

      // video file
      const videopath = files.video[0].path;
      const videobuffer = fs.readFileSync(videopath);
      const narray = videopath.split("/");
      const name = narray[narray.length - 1];
      const videoFileName = req.username + "/" + name;
      const videoData = await uploadFile(videobuffer, process.env.S3_BUCKET_VIDEO, videoFileName);

      // thumbnail file
      const thumbpath = files.thumbnail[0].path;
      const thumbbuffer = fs.readFileSync(thumbpath);
      const thumbFileName = req.username + "/" + name.split(".")[0] + ".png";
      const thumbData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_VIDEO_THUMBNAIL, thumbFileName);

      // video duration
      console.log("start get duration");
      const duration = await getVideoDurationInSeconds(videopath);
      console.log("complete get duration");

      console.log("DURATION");
      console.log(duration);

      const seriesid = name.split(".")[0];
      const new_series_details = await pool.query(
        "INSERT INTO Creator_series (SeriesId, Creator) VALUES ($1,$2) RETURNING*;",
        [
          seriesid,
          req.username
        ]
      );
      const new_video_details = await pool.query(
        "INSERT INTO Creator_video_docs (VideoId, Creator, SeriesId, Title, Description, Duration, Type, Chronology, CreatedAt, UpdatedAt) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,TO_TIMESTAMP($9),TO_TIMESTAMP($10)) RETURNING*;",
        [
          seriesid,
          req.username,
          seriesid,
          fields['title'][0],
          fields['description'][0],
          Math.round(duration),
          0,
          0,
          Date.now() / 1000,
          Date.now() / 1000,
        ]
      );
      const new_sub = await pool.query(
        "INSERT INTO Creator_Series_Sub (SeriesId, OneMonth, ThreeMonths, OneYear) VALUES ($1,$2,$3,$4) RETURNING*;",
        [
          seriesid,
          fields['onemonth'][0],
          fields['threemonth'][0],
          fields['oneyear'][0]
        ]
      );
      console.log(videoData);
      console.log(thumbData);

      return res.send({
        isSuccessful: true,
        errorMsg: "",
        result: [videoData, thumbData, new_series_details.rows[0], new_video_details.rows[0], new_sub.rows[0]]
      });
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

module.exports = router;
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
      const videoFileName = authAddress + "/" + name;
      const videoData = await uploadFile(videobuffer, process.env.S3_BUCKET_VIDEO, videoFileName);

      // thumbnail file
      const thumbpath = files.thumbnail[0].path;
      const thumbbuffer = fs.readFileSync(thumbpath);
      const thumbFileName = authAddress + "/" + name.split(".")[0] + ".png";
      const thumbData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_THUMBNAIL, thumbFileName);

      const seriesid = name.split(".")[0];
      const new_series_details = await pool.query(
        "INSERT INTO Creator_series (SeriesId, Creator, VideoIds, Title, Description) VALUES ($1,$2,'{}',$3,$4) RETURNING*;",
        [
          seriesid,
          req.username,
          fields['title'][0],
          fields['description'][0]
        ]
      );
      console.log(videoData);
      console.log(thumbData);
      return res.send({
        isSuccessful: true,
        errorMsg: "",
        result: [videoData, thumbData, new_series_details.rows[0]]
      });
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

router.put("/:seriesid", authorise, async (req, res) => {
  try {
    const {
      seriesid
    } = req.params;
    const {
      title,
      description
    } = req.body;

    var series_update;
    if (title != "")
      series_update = await pool.query(
        "UPDATE Creator_series SET Title=$1 WHERE SeriesId=$2 AND Creator=$3 RETURNING*;",
        [title, seriesid, req.username]
      );
    if (description != "")
      series_update = await pool.query(
        "UPDATE Creator_series SET Description=$1 WHERE SeriesId=$2 AND Creator=$3 RETURNING*;",
        [description, seriesid, req.username]
      );
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: series_update.rows
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

// signed url for series description video
router.get('/video/:seriesid/', authorise, async (req, res) => {
  try {
    const {
      seriesid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_series WHERE SeriesId=$1;", [seriesid]);
    const creator = ud.rows[0].creator;
    // console.log(ud.rows[0]);

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (300000)), // 5 mins
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_DOMAIN_NAME + `${creator}/${seriesid}.mp4`, aws_cf_config);
    console.log('Signed URL: ' + signedUrl);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'signedurl': signedUrl
      }]
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

// get series details
router.get("/details/:seriesid", authorise, async (req, res) => {
  try {
    const {
      seriesid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_series WHERE SeriedId=$1;", [seriesid]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

// get all series details of a creator
router.get("/details/creator/:creator", authorise, async (req, res) => {
  try {
    const {
      creator
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_series WHERE Creator=$1;", [creator]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

// get video thumbnail
router.get("/thumbnail/:seriesid", authorise, async (req, res) => {
  try {
    const {
      seriesid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_series WHERE SeriesId=$1;", [seriesid]);
    const creator = ud.rows[0].creator;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (300000)),
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_DOMAIN_NAME + `${creator}/${seriesid}.png`, aws_cf_config);
    // console.log('Signed URL: ' + signedUrl);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'signedurl': signedUrl
      }]
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

// get series video captions if available
router.get("/captions/:seriesid", async (req, res) => {
  try {
    const {
      seriesid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_series WHERE SeriesId=$1;", [seriesid]);
    const creator = ud.rows[0].creator;
    try {
      res.sendFile(process.cwd() + `/assets/${creator}/${seriesid}.vtt`)
    } catch (e) {
      res.json("NOT AVAILABLE");
    }
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});
module.exports = router;
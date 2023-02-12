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
const getFile = (bucket, name) => {
  const params = {
    Bucket: bucket,
    Key: name
  };
  return s3.getObject(params).promise();
};

//  add new creator video
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
      console.log("start upload video file");
      const videoData = await uploadFile(videobuffer, process.env.S3_BUCKET_VIDEO, videoFileName);
      console.log("complete upload video file");

      // thumbnail file
      const thumbpath = files.thumbnail[0].path;
      const thumbbuffer = fs.readFileSync(thumbpath);
      const thumbFileName = req.username + "/" + name.split(".")[0] + ".png";
      console.log("start upload thumb file");
      const thumbData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_VIDEO_THUMBNAIL, thumbFileName);
      console.log("complete upload thumb file");

      // video duration
      console.log("start get duration");
      const duration = await getVideoDurationInSeconds(videopath);
      console.log("complete get duration");

      console.log("DURATION");
      console.log(duration);

      const videoid = name.split(".")[0];
      const ud = await pool.query("SELECT * FROM Creator_series WHERE Creator=$1;", [req.username]);

      // VOD is also a series with seriesid = vod_{username}, hence initialising it in creator series table
      if (ud.rows.length == 0) {
        const new_series_details = await pool.query(
          "INSERT INTO Creator_series (SeriesId, Creator, Title, Description) VALUES ($1,$2,$3,$4) RETURNING*;",
          [
            "vod_" + req.username,
            req.username,
            "DummyTitle",
            "DummyDescription"
          ]
        );
      }

      const new_video_details = await pool.query(
        "INSERT INTO Creator_video (VideoId, Creator, SeriesId, Title, Description, Duration, CreatedAt, UpdatedAt) VALUES ($1,$2,$3,$4,$5,$6,TO_TIMESTAMP($7),TO_TIMESTAMP($8)) RETURNING*;",
        [
          videoid,
          req.username,
          fields['seriesid'] ? fields['seriesid'][0] : "vod_" + req.username,
          fields['title'][0],
          fields['description'][0],
          Math.round(duration),
          Date.now() / 1000,
          Date.now() / 1000,
        ]
      );
      console.log(videoData);
      console.log(thumbData);
      return res.send({
        isSuccessful: true,
        errorMsg: "",
        result: [videoData, thumbData, new_video_details.rows[0]]
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

router.put("/:videoid", authorise, async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const {
      title,
      description
    } = req.body;

    var video_update;
    if (title != "")
      video_update = await pool.query(
        "UPDATE Creator_video SET Title=$1, UpdatedAt=TO_TIMESTAMP($2) WHERE VideoId=$3 AND Creator=$4 RETURNING*;",
        [title, Date.now() / 1000, videoid, req.username]
      );
    if (description != "")
      video_update = await pool.query(
        "UPDATE Creator_video SET Description=$1, UpdatedAt=TO_TIMESTAMP($2) WHERE VideoId=$3 AND Creator=$4 RETURNING*;",
        [description, Date.now() / 1000, videoid, req.username]
      );
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: video_update.rows
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

router.get('/video/:videoid/', authorise, async (req, res) => {
  try {
    const {
      videoid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;
    // console.log(ud.rows[0]);
    // const duration = ud.rows[0].duration;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (3600 * 1000)),
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_DOMAIN_NAME + `${creator}/${videoid}.mp4`, aws_cf_config);
    // console.log('Signed URL: ' + signedUrl);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'signedurl': signedUrl
      }]
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get video details
router.get("/details/:videoid", authorise, async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get all video details of a creator except series videos
router.get("/details/creator/:creator", authorise, async (req, res) => {
  try {
    const {
      creator
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE Creator=$1 AND SeriesId=$2;", [creator, "vod_" + creator]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get all video details of a series (and a series predefines a creator)
router.get("/details/series/:seriesid", authorise, async (req, res) => {
  try {
    const {
      seriesid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE SeriesId=$1;", [seriesid]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get all series demo video for a creator
router.get("/details/seriesdemovid/:creator", authorise, async (req, res) => {
  try {
    const {
      creator
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=SeriesId AND Creator=$1;", [creator]);
    // console.log(ud.rows);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get video thumbnail
router.get("/thumbnail/:videoid", authorise, async (req, res) => {
  // try {
  //   const {
  //     videoid,
  //   } = req.params;

  //   const address = req.req.username;
  //   const body = req.authBody;
  //   const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
  //   const creator = ud.rows[0].creator;

  //   // simply use AWS S3 bucket with public read access
  //   res.status(200).json({
  //     signedurl: process.env.S3_BUCKET_VIDEO_THUMBNAIL_URL + creator + "/" + videoid + ".png"
  //   });
  // } catch (err) {
  //   res.json({
  //   isSuccessful: false,
  //   errorMsg: err.message,
  //   result: []
  // });
  // }

  try {
    const {
      videoid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;
    // console.log(ud.rows[0]);
    const duration = ud.rows[0].duration;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (3600 * 1000)),
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_DOMAIN_NAME + `${creator}/${videoid}.png`, aws_cf_config);
    // console.log('Signed URL: ' + signedUrl);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'signedurl': signedUrl
      }]
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get video captions if available
router.get("/captions/:videoid", authorise, async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;
    try {
      res.sendFile(process.cwd() + `/assets/${creator}/${videoid}.vtt`)
    } catch (e) {
      res.json("NOT AVAILABLE");
    }
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});
module.exports = router;
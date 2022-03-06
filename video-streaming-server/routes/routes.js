const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const urlAuthorise = require("../middleware/urlAuthorise")();
const generator = require('generate-password');
const WAValidator = require("wallet-address-validator");
const fs = require('fs');
const fileType = require('detect-file-type');
const multiparty = require('multiparty');
const Web3Token = require('web3-token');
const thumbsupply = require('thumbsupply');
const awsConfig = require('aws-config');
const AWS = require('aws-sdk');
const aws_cf = require('aws-cloudfront-sign');
// const aws_cf = require("../aws_cf");
require('dotenv').config();
const {
  getVideoDurationInSeconds
} = require('get-video-duration');
// var ImageKit = require("imagekit");

// var imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_API_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_API_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
// });

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

// upload file to S3 bucket
const getFile = (name) => {
  const params = {
    Bucket: process.env.S3_BUCKET_VIDEO,
    Key: name
  };
  return s3.getObject(params).promise();
};

//  add new creator video
router.post('/upload', authorise, (req, res) => {
  const form = new multiparty.Form();
  const authBody = req.authBody;
  const authAddress = req.authAddress;
  var valid = WAValidator.validate(authAddress, "ETH");
  if (valid) {
    form.parse(req, async (error, fields, files) => {
      try {
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

        // video duration
        const duration = await getVideoDurationInSeconds(videopath);

        console.log("DURATION");
        console.log(duration);

        const videoid = name.split(".")[0];
        const new_video_details = await pool.query(
          "INSERT INTO Creator_video (VideoId, Creator, Title, Description, Duration, CreatedAt, UpdatedAt) VALUES ($1,$2,$3,$4,$5,TO_TIMESTAMP($6),TO_TIMESTAMP($7)) RETURNING*;",
          [
            videoid,
            authAddress,
            fields['title'][0],
            fields['description'][0],
            Math.round(duration),
            Date.now() / 1000,
            Date.now() / 1000,
          ]
        );
        console.log(videoData);
        console.log(thumbData);
        return res.status(200).send([videoData, thumbData, new_video_details.rows[0]]);
      } catch (err) {
        console.log(err);
        return res.status(500).send(err);
      }
    });
  } else {
    res.json("Address INVALID");
  }
});

router.put("/:videoid", authorise, async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const {
      creator,
      title,
      description
    } = req.body;

    var video_update;
    if (creator != "")
      video_update = await pool.query(
        "UPDATE Creator_video SET Creator=$1, UpdatedAt=TO_TIMESTAMP($2) WHERE VideoId=$3 RETURNING*;",
        [creator.toLowerCase(), Date.now() / 1000, videoid]
      );
    if (title != "")
      video_update = await pool.query(
        "UPDATE Creator_video SET Title=$1, UpdatedAt=TO_TIMESTAMP($2) WHERE VideoId=$3 RETURNING*;",
        [title, Date.now() / 1000, videoid]
      );
    if (description != "")
      video_update = await pool.query(
        "UPDATE Creator_video SET Description=$1, UpdatedAt=TO_TIMESTAMP($2) WHERE VideoId=$3 RETURNING*;",
        [description, Date.now() / 1000, videoid]
      );
    res.json(video_update.rows);
  } catch (err) {
    res.json(err);
  }
});

router.get('/video/:videoid/', authorise, async (req, res) => {
  try {
    const {
      videoid,
    } = req.params;
    const address = req.authAddress;
    const body = req.authBody;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;
    // console.log(ud.rows[0]);
    const duration = ud.rows[0].duration;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (duration * 1000)),
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_DOMAIN_NAME + `${creator.toLowerCase()}/${videoid}.mp4`, aws_cf_config);
    console.log('Signed URL: ' + signedUrl);
    res.json({
      "signedurl": signedUrl
    })
  } catch (err) {
    res.json(err);
  }
});

// get video details
router.get("/details/:videoid", async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    res.json(ud.rows);
  } catch (err) {
    res.json(err);
  }
});

// get all video details of a creator
router.get("/details/creator/:creator", async (req, res) => {
  try {
    const {
      creator
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE Creator=$1;", [creator.toLowerCase()]);
    res.json(ud.rows);
  } catch (err) {
    res.json(err);
  }
});

// get video thumbnail
router.get("/thumbnail/:videoid", authorise, async (req, res) => {
  try {
    const {
      videoid,
    } = req.params;

    const address = req.authAddress;
    const body = req.authBody;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;

    // simply use AWS S3 bucket with public read access
    res.status(200).json({
      signedurl: process.env.S3_BUCKET_THUMBNAIL_URL + creator.toLowerCase() + "/" + videoid + ".png"
    });
  } catch (err) {
    res.json(err);
  }
});

// get video captions if available
router.get("/captions/:videoid", async (req, res) => {
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
    res.json(err);
  }
});
module.exports = router;
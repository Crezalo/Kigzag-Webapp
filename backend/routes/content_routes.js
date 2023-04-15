const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const fs = require('fs');
const fileType = require('detect-file-type');
const multiparty = require('multiparty');
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

//  upload new merch images
// pass prefix to add before file name
router.post('/merch_images/upload', authorise, (req, res) => {
  try {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      console.log("fields");
      console.log(fields);
      console.log("files");
      console.log(files);

      const productid = fields["productid"][0];

      console.log(files.images);

      // thumbnail file
      const thumbpath = files.thumbnail[0].path;
      const thumbbuffer = fs.readFileSync(thumbpath);
      const thumbFileName = req.username + "/" + productid + "/0.png";
      console.log("start upload thumb file");
      const thumbData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_MERCH, thumbFileName);
      console.log("complete upload thumb file");

      // other images file
      var oimagesData = []
      for (let i = 0; i < files.images.length; i++) {
        console.log("#$#$#$")
        var oimages = files.images[i].path;
        var oimagesbuffer = fs.readFileSync(oimages);
        var oimagesFileName = req.username + "/" + productid + "/" + (i + 1) + ".png";
        console.log("start upload thumb file");
        oimagesData.push(await uploadFile(oimagesbuffer, process.env.S3_BUCKET_MERCH, oimagesFileName));
        console.log("complete upload thumb file");
      }

      console.log(thumbData);
      console.log(oimagesData);

      return res.send({
        isSuccessful: true,
        errorMsg: "",
        result: [thumbData, oimagesData]
      });
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get merch thumbnail
router.get("/merch_images/thumbnail/:productid", authorise, async (req, res) => {
  try {
    const {
      productid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Merchandise WHERE ProductId=$1;", [productid]);
    const creator = ud.rows[0].creator;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (3600 * 1000)),
    }
    var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_MERCH_DOMAIN_NAME + `${creator}/${productid}/0.png`, aws_cf_config);
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

// get merch display images
router.get("/merch_images/allimages/:productid", authorise, async (req, res) => {
  try {
    const {
      productid,
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Merchandise WHERE ProductId=$1;", [productid]);
    const creator = ud.rows[0].creator;

    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (3600 * 1000)),
    }

    let signedUrls = []
    for (let i = 0; i < 5; i++) {
      signedUrls.push(await aws_cf.getSignedUrl(process.env.CLOUDFRONT_MERCH_DOMAIN_NAME + `${creator}/${productid}/${i}.png`, aws_cf_config));
    }
    // console.log('Signed URLs: ' + signedUrls);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'signedurl': signedUrls
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

//  upload profile pic
router.post('/creator_info/upload', authorise, (req, res) => {
  try {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      console.log("fields");
      console.log(fields);
      console.log("files");
      console.log(files);

      if (files.pancard) {
        // pancard file
        const pcpath = files.pancard[0].path;
        const pcbuffer = fs.readFileSync(pcpath);
        const pcFileName = req.username + "/pancard.png";
        console.log("start upload pc file");
        const pcData = await uploadFile(pcbuffer, process.env.S3_BUCKET_CREATOR, pcFileName);
        console.log("complete upload pc file");
        console.log(pcData);
        return res.send({
          isSuccessful: true,
          errorMsg: "",
          result: [pcData]
        });
      }
      if (files.profilepic) {
        // profilepic file
        const thumbpath = files.profilepic[0].path;
        const thumbbuffer = fs.readFileSync(thumbpath);
        const thumbFileName = req.username + "/profilepic.png";
        console.log("start upload thumb file");
        const thumbData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_CREATOR, thumbFileName);
        console.log("complete upload thumb file");
        console.log(thumbData);

        // other images file
        var oimagesData = []

        if (files.otherimages) {
          for (let i = 0; i < files.otherimages.length; i++) {
            console.log("#$#$#$")
            var oimages = files.otherimages[i].path;
            var oimagesbuffer = fs.readFileSync(oimages);
            var oimagesFileName = req.username + "/profilepic" + i + ".png";
            console.log("start upload image" + i + " file");
            oimagesData.push(await uploadFile(oimagesbuffer, process.env.S3_BUCKET_CREATOR, oimagesFileName));
            console.log("complete upload image" + i + " file");
          }
        }

        // logo image file
        var logoData;

        if (files.logo) {
          const thumbpath = files.logo[0].path;
          const thumbbuffer = fs.readFileSync(thumbpath);
          const thumbFileName = req.username + "/logo.png";
          console.log("start upload thumb file");
          logoData = await uploadFile(thumbbuffer, process.env.S3_BUCKET_CREATOR, thumbFileName);
          console.log("complete upload thumb file");
          console.log(logoData)
        }
        return res.send({
          isSuccessful: true,
          errorMsg: "",
          result: [thumbData, oimagesData, logoData]
        });
      }
    });
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get merch thumbnail
// type =>  pancard, profilepic, oimages, logo
router.get("/creator_info/:type/:creator", authorise, async (req, res) => {
  try {
    const {
      type,
      creator
    } = req.params;
    // AWS Cloudfront CDN and other optimizations
    var aws_cf_config = {
      keypairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
      expireTime: (new Date().getTime() + (3600 * 1000)),
    }
    if (type !== "oimages") {
      if (type === "pancard") {
        if (req.username == "admin") {
          var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_CREATOR_DOMAIN_NAME + `${creator}/${type}.png`, aws_cf_config);
          // console.log('Signed URL: ' + signedUrl);
          res.json({
            isSuccessful: true,
            errorMsg: "",
            result: [{
              'signedurl': signedUrl
            }]
          });
        } else {
          res.json({
            isSuccessful: false,
            errorMsg: "unauthorised access",
            result: ""
          });
        }
      } else {
        var signedUrl = await aws_cf.getSignedUrl(process.env.CLOUDFRONT_CREATOR_DOMAIN_NAME + `${creator}/${type}.png`, aws_cf_config);
        // console.log('Signed URL: ' + signedUrl);
        res.json({
          isSuccessful: true,
          errorMsg: "",
          result: [{
            'signedurl': signedUrl
          }]
        });
      }
    } else {
      let signedUrls = []
      for (let i = 0; i < 5; i++) {
        signedUrls.push(await aws_cf.getSignedUrl(process.env.CLOUDFRONT_CREATOR_DOMAIN_NAME + `${creator}/profilepic${i}.png`, aws_cf_config));
      }
      // console.log('Signed URL: ' + signedUrls);
      res.json({
        isSuccessful: true,
        errorMsg: "",
        result: [{
          'signedurls': signedUrls
        }]
      });
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
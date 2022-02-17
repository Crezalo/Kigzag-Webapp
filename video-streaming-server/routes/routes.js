const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const urlAuthorise = require("../middleware/urlAuthorise")();
var generator = require('generate-password');
var WAValidator = require("wallet-address-validator");
const fs = require('fs');
const Web3Token = require('web3-token');
const thumbsupply = require('thumbsupply');

// add new Creator Video details
router.post("/details", authorise, async (req, res) => {
  try {
    const {
      creator,
      title,
      description,
      duration
    } = req.body;
    var valid = WAValidator.validate(creator, "ETH");
    var videoid = generator.generate({
      length: 16,
      numbers: true
    });
    if (valid) {
      const new_video_details = await pool.query(
        "INSERT INTO Creator_video (VideoId, Creator, Title, Description, Duration, CreatedAt, UpdatedAt) VALUES ($1,$2,$3,$4,$5,TO_TIMESTAMP($6),TO_TIMESTAMP($7)) RETURNING*;",
        [
          videoid,
          creator,
          title,
          description,
          duration,
          Date.now() / 1000,
          Date.now() / 1000,
        ]
      );
      res.json(new_video_details.rows);
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
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

router.get('/video/:videoid/:authToken', async (req, res) => {
  try {
    const {
      videoid,
      authToken,
    } = req.params;

    const [verification, address, body] = await urlAuthorise(urlAuthToken = authToken);

    if (verification == "SUCCESS") {
      const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
      const creator = ud.rows[0].creator;
      const path = process.cwd() + `/assets/${creator}/${videoid}.mp4`;
      const stat = fs.statSync(path);
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
        console.log('we have range', range);
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] ?
          parseInt(parts[1], 10) :
          fileSize - 1
        console.log(parts)
        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, {
          start,
          end
        })
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        console.log('no range', range);
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
      }
    } else {
      res.json(verification);
    }
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
router.get("/thumbnail/:videoid", async (req, res) => {
  try {
    const {
      videoid
    } = req.params;
    const ud = await pool.query("SELECT * FROM Creator_Video WHERE VideoId=$1;", [videoid]);
    const creator = ud.rows[0].creator;
    thumbsupply.generateThumbnail(process.cwd() + `/assets/${creator}/${videoid}.mp4`)
      .then(thumb => res.sendFile(thumb))
      .catch(err => console.log(err));
  } catch (err) {
    res.json(err);
  }
});

// get video thumbnail
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
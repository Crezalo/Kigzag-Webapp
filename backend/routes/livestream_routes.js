const router = require("express").Router();
var WAValidator = require("wallet-address-validator");
const pool = require("../db_creation/db");
const Web3Token = require('web3-token');
const authorise = require("../middleware/authorise")();
const isTimestamp = require('validate.io-timestamp');
const http = require('http');
const axios = require('axios');
const crypto = require('crypto');

router.get("/streamkey/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        var valid = WAValidator.validate(creator, "ETH");
        if (valid && (req.useraddress.toLowerCase() == creator.toLowerCase())) {
            const available = await pool.query("SELECT * FROM Creator_LiveStream WHERE Creator=$1", [creator.toLowerCase()]);
            if (available.rows[0]) {
                res.json(available.rows);
            } else {
                const skey = await pool.query(
                    "INSERT INTO Creator_LiveStream (Creator, StreamKey) VALUES ($1,$2) RETURNING*;",
                    [
                        creator.toLowerCase(),
                        crypto.randomBytes(5).toString('hex')
                    ]
                );
                res.json(skey.rows);
            }
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

router.get("/streamkey_force/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        var valid = WAValidator.validate(creator, "ETH");
        if (valid && (req.useraddress.toLowerCase() == creator.toLowerCase())) {
            const available = await pool.query("SELECT * FROM Creator_LiveStream WHERE Creator=$1", [creator.toLowerCase()]);
            if (available.rows[0]) {
                const update = await pool.query("UPDATE Creator_LiveStream SET StreamKey=$2 WHERE Creator=$1 RETURNING*;",
                    [
                        creator.toLowerCase(),
                        crypto.randomBytes(5).toString('hex')
                    ]);
                res.json(update.rows)
                return;
            }
            const skey = await pool.query(
                "INSERT INTO Creator_LiveStream (Creator, StreamKey) VALUES ($1,$2) RETURNING*;",
                [
                    creator.toLowerCase(),
                    crypto.randomBytes(5).toString('hex')
                ]
            );
            res.json(skey.rows);
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

router.get("/:creator", async (req, res) => {
    try {
        const {
            creator
        } = req.params;

        const response = await axios.get("http://localhost:8000/api/streams");

        const streams = await response.data;

        const skey = await pool.query("SELECT StreamKey FROM Creator_LiveStream WHERE Creator=$1", [creator.toLowerCase()]);

        if (streams['live']) {
            for (var x in streams['live']) {
                if (streams['live'][x]['publisher'] && skey.rows[0].streamkey == streams['live'][x]['publisher']['stream']) {
                    res.json({
                        isStreamAvailable: true,
                        streamkey: streams['live'][x]['publisher']['stream']
                    });
                    return;
                }
            }
        }
        else if (skey.rows[0].streamkey != "" && skey.rows[0].streamkey != "undefined") {
            res.json({
                isStreamAvailable: false,
                streamkey: skey.rows[0].streamkey
            });
        } else {
            res.json("Shouldn't reach here");
        }
    } catch (err) {
        console.log("reaching here");
        console.log(err);
        res.json(err);
    }
});

module.exports = router;
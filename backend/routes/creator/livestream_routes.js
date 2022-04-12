const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
const axios = require('axios');
const crypto = require('crypto');
const livestream_sk_vk = require("../../nodeCache");
// const proxy = require('http-proxy-stream');

require("dotenv").config();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////     Creator LiveStream TABLE            ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////   Add New Creator,StreamKey,ViewKey   ///////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        const creator_col = await pool.query("SELECT * FROM Creator_LiveStream WHERE Creator=$1", [req.username]);
        if (creator_col.rows[0]) {
            return res.json({
                isSuccessful: true,
                errorMsg: "",
                result: creator_col.rows
            });
        }
        const streamkey = crypto.randomBytes(10).toString('hex');
        const viewkey = crypto.randomBytes(10).toString('hex');
        const skey = await pool.query(
            "INSERT INTO Creator_LiveStream (Creator, StreamKey, ViewKey) VALUES ($1,$2,$3) RETURNING*;",
            [
                req.username,
                streamkey,
                viewkey
            ]
        );
        livestream_sk_vk.set(streamkey, viewkey);
        console.log(livestream_sk_vk.getStats());
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: skey.rows
        });
    } catch (err) {
        res.status(500).json({
            isSuccessful: false,
            errorMsg: err,
            result: []
        });
    }
});


////////////////////////////////////////   Update StreamKey [In case stream key revealed]   ///////////////////////////////////////
router.put("/", authorise, async (req, res) => {
    try {
        const creator_col = await pool.query("SELECT * FROM Creator_LiveStream WHERE Creator=$1", [req.username]);
        if (creator_col.rows[0]) {
            const streamkey = crypto.randomBytes(10).toString('hex');
            const update = await pool.query("UPDATE Creator_LiveStream SET StreamKey=$2 WHERE Creator=$1 RETURNING*;",
                [
                    req.username,
                    streamkey
                ]);
            livestream_sk_vk.del(creator_col.rows[0].streamkey, creator_col.rows[0].viewkey);
            livestream_sk_vk.set(streamkey, update.rows[0].viewkey);
            console.log(livestream_sk_vk.getStats());
            return res.json({
                isSuccessful: true,
                errorMsg: "",
                result: update.rows
            });
        }

        const streamkey = crypto.randomBytes(10).toString('hex');
        const viewkey = crypto.randomBytes(10).toString('hex');
        const skey = await pool.query(
            "INSERT INTO Creator_LiveStream (Creator, StreamKey, ViewKey) VALUES ($1,$2,$3) RETURNING*;",
            [
                req.username,
                streamkey,
                viewkey
            ]
        );
        livestream_sk_vk.set(streamkey, viewkey);
        console.log(livestream_sk_vk.getStats());
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: skey.rows
        });
    } catch (err) {
        res.status(500).json({
            isSuccessful: false,
            errorMsg: err,
            result: []
        });
    }
});


////////////////////////////////////////   Get ViewKey and check if stream is available   ///////////////////////////////////////
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;

        const response = await axios.get(process.env.LIVESTREAM_API_ENDPOINT);

        const streams = await response.data;

        const vkey = await pool.query("SELECT StreamKey, ViewKey FROM Creator_LiveStream WHERE Creator=$1", [creator]);

        if (streams['live']) {
            for (var x in streams['live']) {
                if (streams['live'][x]['publisher'] && vkey.rows[0].streamkey == streams['live'][x]['publisher']['stream']) {
                    return res.json({
                        isSuccessful: true,
                        errorMsg: "",
                        result: [{
                            isStreamAvailable: true,
                            viewkey: vkey.rows[0].viewkey
                        }]
                    });
                }
            }
        } else {
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: [{
                    isStreamAvailable: false,
                    viewkey: vkey.rows[0].viewkey
                }]
            });
        }
    } catch (err) {
        res.status(500).json({
            isSuccessful: false,
            errorMsg: err,
            result: []
        });
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////     Creator LiveStream NMS ViewKey            /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getViewKey(StreamKey) {
    try {
        const viewkey = await pool.query("SELECT ViewKey FROM Creator_LiveStream WHERE StreamKey=$1;", [StreamKey]);
        if (viewkey.rows[0]) {
            return viewkey.rows[0].viewkey;
        } else {
            return "tester";
        }
    } catch (err) {
        console.log("GetViewKey function ERROR:\n" + err);
    }
}

async function loadStreamKeyViewKeyToCache(livestream_sk_vk) {
    try {
        const skeyvkey = await pool.query("SELECT StreamKey, ViewKey FROM Creator_LiveStream;");
        if (skeyvkey.rows[0]) {
            for (var x in skeyvkey.rows)
                livestream_sk_vk.set(x.streamkey, x.viewkey);
        } else {
            for (var i = 0; i < 50; i++)
                livestream_sk_vk.set("bcb5b41b8" + i, "tester");
        }
        console.log(livestream_sk_vk.getStats());
    } catch (err) {
        console.log("loadStreamKeyViewKeyToCache function ERROR:\n" + err);
    }
}

module.exports = {
    router,
    getViewKey,
    loadStreamKeyViewKeyToCache
};
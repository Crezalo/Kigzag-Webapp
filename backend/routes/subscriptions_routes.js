const router = require("express").Router();
var WAValidator = require("wallet-address-validator");
const pool = require("../db_creation/db");
const Web3Token = require('web3-token');
const authorise = require("../middleware/authorise")();
const isTimestamp = require('validate.io-timestamp');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          1 Month Sub TABLE            //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 1 month sub plans
router.post("/1m", authorise, async (req, res) => {
    try {
        const {
            creator,
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var valid = WAValidator.validate(creator, "ETH");
        if (valid) {
            const new_User = await pool.query(
                "INSERT INTO Creator_Sub_1M (creator, discord_server_id, discord , video_on_demand , live_streaming, video_call) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
                [
                    creator.toLowerCase(),
                    discord_server_id,
                    discord,
                    video_on_demand,
                    live_streaming,
                    video_call
                ]
            );
            res.json(new_User.rows[0]);
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

// update creator's 1 month sub plans
router.put("/1m/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const {
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var new_User;
        if (discord_server_id != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1M SET discord_server_id=$1 WHERE Creator=$2 RETURNING*;",
                [discord_server_id, creator.toLowerCase()]
            );
        if (discord != null)
            new_User = await pool.query(
                "UPDATE Creator_Sub_1M SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, creator.toLowerCase()]
            );
        if (video_on_demand != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1M SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, creator.toLowerCase()]
            );
        if (live_streaming != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1M SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, creator.toLowerCase()]
            );
        if (video_call != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1M SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, creator.toLowerCase()]
            );

        res.json(new_User.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_1M plan for given creator
router.get("/1m/:creator", async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_1M specific plan for given creator
router.get("/1m/:creator/:key", async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord_server_id')
            ud = await pool.query("SELECT discord_server_id FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_1M WHERE Creator=$1;", [creator.toLowerCase()]);
        else
            res.json("WRONG KEY!")
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          3 Month Sub TABLE            //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 3 month sub plans
router.post("/3m", authorise, async (req, res) => {
    try {
        const {
            creator,
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var valid = WAValidator.validate(creator, "ETH");
        if (valid) {
            const new_User = await pool.query(
                "INSERT INTO Creator_Sub_3M (creator, discord_server_id, discord , video_on_demand , live_streaming, video_call) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
                [
                    creator.toLowerCase(),
                    discord_server_id,
                    discord,
                    video_on_demand,
                    live_streaming,
                    video_call
                ]
            );
            res.json(new_User.rows[0]);
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

// update creator's 3 month sub plans
router.put("/3m/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const {
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var new_User;
        if (discord_server_id != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_3M SET discord_server_id=$1 WHERE Creator=$2 RETURNING*;",
                [discord_server_id, creator.toLowerCase()]
            );
        if (discord != null)
            new_User = await pool.query(
                "UPDATE Creator_Sub_3M SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, creator.toLowerCase()]
            );
        if (video_on_demand != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_3M SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, creator.toLowerCase()]
            );
        if (live_streaming != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_3M SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, creator.toLowerCase()]
            );
        if (video_call != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_3M SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, creator.toLowerCase()]
            );

        res.json(new_User.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_3M plan for given creator
router.get("/3m/:creator", async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_3M specific plan for given creator
router.get("/3m/:creator/:key", async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord_server_id')
            ud = await pool.query("SELECT discord_server_id FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_3M WHERE Creator=$1;", [creator.toLowerCase()]);
        else
            res.json("WRONG KEY!")
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          1 Year Sub TABLE            ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 1 year sub plans
router.post("/1y", authorise, async (req, res) => {
    try {
        const {
            creator,
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var valid = WAValidator.validate(creator, "ETH");
        if (valid) {
            const new_User = await pool.query(
                "INSERT INTO Creator_Sub_1Y (creator, discord_server_id, discord , video_on_demand , live_streaming, video_call) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
                [
                    creator.toLowerCase(),
                    discord_server_id,
                    discord,
                    video_on_demand,
                    live_streaming,
                    video_call
                ]
            );
            res.json(new_User.rows[0]);
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

// update creator's 1 year sub plans
router.put("/1y/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const {
            discord_server_id,
            discord,
            video_on_demand,
            live_streaming,
            video_call
        } = req.body;
        var new_User;
        if (discord_server_id != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1Y SET discord_server_id=$1 WHERE Creator=$2 RETURNING*;",
                [discord_server_id, creator.toLowerCase()]
            );
        if (discord != null)
            new_User = await pool.query(
                "UPDATE Creator_Sub_1Y SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, creator.toLowerCase()]
            );
        if (video_on_demand != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1Y SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, creator.toLowerCase()]
            );
        if (live_streaming != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1Y SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, creator.toLowerCase()]
            );
        if (video_call != "")
            new_User = await pool.query(
                "UPDATE Creator_Sub_1Y SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, creator.toLowerCase()]
            );

        res.json(new_User.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_1Y plan for given creator
router.get("/1y/:creator", async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get Creator_Sub_1Y specific plan for given creator
router.get("/1y/:creator/:key", async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord_server_id')
            ud = await pool.query("SELECT discord_server_id FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_1Y WHERE Creator=$1;", [creator.toLowerCase()]);
        else
            res.json("WRONG KEY!")
        res.json(ud.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
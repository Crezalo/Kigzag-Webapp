const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          1 Month Sub TABLE            //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 1 month sub plans
router.post("/1m", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        const new_sub = await pool.query(
            "INSERT INTO Creator_Sub_1M (Creator, Discord, Video_On_Demand, Live_Streaming, Video_Call, Community_Combo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
            [
                req.username,
                discord,
                video_on_demand,
                live_streaming,
                video_call,
                community_combo
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// update creator's 1 month sub plans
router.put("/1m", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        var new_sub;
        if (discord != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1M SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, req.username]
            );
        if (video_on_demand != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1M SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, req.username]
            );
        if (live_streaming != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1M SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, req.username]
            );
        if (video_call != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1M SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, req.username]
            );
        if (community_combo != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1M SET Community_Combo=$1 WHERE Creator=$2 RETURNING*;",
                [community_combo, req.username]
            );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// get Creator_Sub_1M plan for given creator
router.get("/1m/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
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

// get Creator_Sub_1M specific plan for given creator
router.get("/1m/:creator/:key", authorise, async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
        else if (key == 'community_combo')
            ud = await pool.query("SELECT community_combo FROM Creator_Sub_1M WHERE Creator=$1;", [creator]);
        else
            res.json({
                isSuccessful: false,
                errorMsg: "Permitted Key Value: discord, video_on_demand, live_streaming, video_call, community_combo",
                result: []
            })

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          3 Month Sub TABLE            //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 3 month sub plans
router.post("/3m", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        const new_sub = await pool.query(
            "INSERT INTO Creator_Sub_3M (Creator, Discord, Video_On_Demand, Live_Streaming, Video_Call, Community_Combo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
            [
                req.username,
                discord,
                video_on_demand,
                live_streaming,
                video_call,
                community_combo
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// update creator's 3 month sub plans
router.put("/3m", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        var new_sub;
        if (discord != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_3M SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, req.username]
            );
        if (video_on_demand != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_3M SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, req.username]
            );
        if (live_streaming != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_3M SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, req.username]
            );
        if (video_call != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_3M SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, req.username]
            );
        if (community_combo != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_3M SET Community_Combo=$1 WHERE Creator=$2 RETURNING*;",
                [community_combo, req.username]
            );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// get Creator_Sub_3M plan for given creator
router.get("/3m/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
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

// get Creator_Sub_3M specific plan for given creator
router.get("/3m/:creator/:key", authorise, async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
        else if (key == 'community_combo')
            ud = await pool.query("SELECT community_combo FROM Creator_Sub_3M WHERE Creator=$1;", [creator]);
        else
            res.json({
                isSuccessful: false,
                errorMsg: "Permitted Key Value: discord, video_on_demand, live_streaming, video_call, community_combo",
                result: []
            })

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          1 Year Sub TABLE            ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add creator's 1 year sub plans
router.post("/1y", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        const new_sub = await pool.query(
            "INSERT INTO Creator_Sub_1Y (Creator, Discord, Video_On_Demand, Live_Streaming, Video_Call, Community_Combo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
            [
                req.username,
                discord,
                video_on_demand,
                live_streaming,
                video_call,
                community_combo
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// update creator's 1 year sub plans
router.put("/1y", authorise, async (req, res) => {
    try {
        const {
            discord,
            video_on_demand,
            live_streaming,
            video_call,
            community_combo
        } = req.body;
        var new_sub;
        if (discord != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1Y SET discord=$1 WHERE Creator=$2 RETURNING*;",
                [discord, req.username]
            );
        if (video_on_demand != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1Y SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, req.username]
            );
        if (live_streaming != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1Y SET live_streaming=$1 WHERE Creator=$2 RETURNING*;",
                [live_streaming, req.username]
            );
        if (video_call != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1Y SET video_call=$1 WHERE Creator=$2 RETURNING*;",
                [video_call, req.username]
            );
        if (community_combo != 0)
            new_sub = await pool.query(
                "UPDATE Creator_Sub_1Y SET Community_Combo=$1 WHERE Creator=$2 RETURNING*;",
                [community_combo, req.username]
            );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_sub.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

// get Creator_Sub_1Y plan for given creator
router.get("/1y/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
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

// get Creator_Sub_1Y specific plan for given creator
router.get("/1y/:creator/:key", authorise, async (req, res) => {
    try {
        const {
            creator,
            key
        } = req.params;
        var ud;
        if (key == 'discord')
            ud = await pool.query("SELECT discord FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
        else if (key == 'video_on_demand')
            ud = await pool.query("SELECT video_on_demand FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
        else if (key == 'live_streaming')
            ud = await pool.query("SELECT live_streaming FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
        else if (key == 'video_call')
            ud = await pool.query("SELECT video_call FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
        else if (key == 'community_combo')
            ud = await pool.query("SELECT community_combo FROM Creator_Sub_1Y WHERE Creator=$1;", [creator]);
        else
            res.json({
                isSuccessful: false,
                errorMsg: "Permitted Key Value: discord, video_on_demand, live_streaming, video_call, community_combo",
                result: []
            })

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Creator Series Sub TABLE            ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add new series data to Creator_Series_Sub
router.post("/series", authorise, async (req, res) => {
    try {
        const {
            seriesid,
            onemonth,
            threemonths,
            oneyear
        } = req.body;
        const creator = await pool.query("SELECT * FROM Creator_series WHERE SeriesId = $1;", [seriesid]).rows[0].creator;
        if (creator == req.username) {
            const new_sub = await pool.query(
                "INSERT INTO Creator_Series_Sub (SeriesId, OneMonth, ThreeMonths, OneYear) VALUES ($1,$2,$3,$4) RETURNING*;",
                [
                    seriesid,
                    onemonth,
                    threemonths,
                    oneyear
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_sub.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Unauthorized Access: User not creator of given seriesid",
                result: []
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

// update series data to Creator_Series_Sub
router.put("/series", authorise, async (req, res) => {
    try {
        const {
            seriesid,
            onemonth,
            threemonths,
            oneyear
        } = req.body;
        const creator = await pool.query("SELECT * FROM Creator_series WHERE SeriesId = $1;", [seriesid]).rows[0].creator;
        if (creator == req.username) {
            var new_sub;
            if (onemonth != 0)
                new_sub = await pool.query(
                    "UPDATE Creator_Series_Sub SET onemonth=$1 WHERE SeriesId=$2 RETURNING*;",
                    [onemonth, seriesid]
                );
            if (threemonths != 0)
                new_sub = await pool.query(
                    "UPDATE Creator_Series_Sub SET threemonths=$1 WHERE SeriesId=$2 RETURNING*;",
                    [threemonths, seriesid]
                );
            if (oneyear != 0)
                new_sub = await pool.query(
                    "UPDATE Creator_Series_Sub SET oneyear=$1 WHERE SeriesId=$2 RETURNING*;",
                    [oneyear, seriesid]
                );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_sub.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Unauthorized Access: User not creator of given seriesid",
                result: []
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

// get series data to Creator_Series_Sub
router.get("/series/:seriesid", authorise, async (req, res) => {
    try {
        const {
            seriesid
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Series_Sub WHERE SeriesId=$1;", [seriesid]);
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

module.exports = router;
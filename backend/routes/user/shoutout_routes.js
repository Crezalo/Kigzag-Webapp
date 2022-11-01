const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
const parse = require('postgres-date')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////          Shoutout Sub TABLE            ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////  Add New User_Shoutout_Req   ////////////////////////////////////
// add User_Shoutout_Req
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            platform,
            usermessage,
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2) {
            const new_user_vod = await pool.query(
                "INSERT INTO User_Shoutout_Req (UserName, Creator, Platform, UserMessage, CreatorResponse, Status, LastUpdatedAt) VALUES ($1,$2,$3,$4,$5,$6,TO_TIMESTAMP($7)) RETURNING*;",
                [
                    req.username,
                    creator,
                    platform,
                    usermessage,
                    "",
                    0,
                    Date.now() / 1000,
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_user_vod.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Platform Value. 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn",
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

///////////////////////////////////////////   Get All Data   ///////////////////////////////////////////
// Get All Data for given creator 
router.get("/allcreators", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Shoutout_Req WHERE UserName = $1;", [req.username]);

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

///////////////////////////////////////////   Get All Data for Creator  ///////////////////////////////////////////
// Get All Data for given creator 
router.get("/creator", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Shoutout_Req WHERE Creator = $1;", [req.username]);
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

///////////////////////////////////////////   Get All Data   ///////////////////////////////////////////
// Get All Data for given creator 
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Shoutout_Req WHERE UserName = $1 AND Creator = $2;", [req.username, creator]);

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

///////////////////////////////////////////   Update for User  ///////////////////////////////////////////
// Update data count_per_week, price
router.put("/:creator/:platform", authorise, async (req, res) => {
    try {
        const {
            creator,
            platform
        } = req.params;

        const {
            usermessage
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2) {
            const new_user_vod = await pool.query(
                "UPDATE User_Shoutout_Req SET UserMessage = $4, LastUpdatedAt = $5 WHERE UserName = $1 AND Creator = $2 AND Platform = $3 RETURNING*;",
                [
                    req.username,
                    creator,
                    platform,
                    usermessage,
                    Date.now() / 1000
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_user_vod.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Platform Value. 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn",
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

///////////////////////////////////////////   Update for Creator  ///////////////////////////////////////////
// Update 
router.put("/:username/:platform", authorise, async (req, res) => {
    try {
        const {
            username,
            platform
        } = req.params;
        const {
            status,
            creatorresponse
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2) {
            if (status == 1 || status == 2 || status == 3) {
                const new_user_vod = await pool.query(
                    "UPDATE User_Shoutout_Req SET Status = $4, CreatorResponse = $5, LastUpdatedAt = $6 WHERE UserName = $1 AND Creator = $2 AND Platform = $3 RETURNING*;",
                    [
                        username,
                        req.username,
                        platform,
                        status,
                        creatorresponse,
                        Date.now() / 1000
                    ]
                );
                res.json({
                    isSuccessful: true,
                    errorMsg: "",
                    result: new_user_vod.rows
                });
            } else {
                res.json({
                    isSuccessful: false,
                    errorMsg: "Invalid Status Value. 0: Pending, 1: Accepted & Waiting, 2: Completed, 3: Rejected",
                    result: []
                });
            }
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Platform Value. 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn",
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
module.exports = router;
const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
const parse = require('postgres-date')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         User Video Series TABLE            /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////  Add New User_Series_Sub   ////////////////////////////////////
// add User_Series_Sub
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            seriesid,
            type,
            buyingprice
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : type == 1 ? 7888838 : 31556926
            const new_user_vod = await pool.query(
                "INSERT INTO User_Series_Sub (UserName, Creator, SeriesId, Expiry_Date, Type, BuyingPrice, CreatedAt) VALUES ($1,$2,$3,TO_TIMESTAMP($4),$5,$6,TO_TIMESTAMP($7)) RETURNING*;",
                [
                    req.username,
                    creator,
                    seriesid,
                    (Date.now() / 1000 + duration), //// present + 1 month / 3 month / 1 year in seconds
                    type,
                    buyingprice,
                    Date.now()
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
                errorMsg: "Invalid Type Value: 0: 1month, 1: 3month, 2: 1year",
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
        const ud = await pool.query("SELECT * FROM User_Series_Sub WHERE UserName = $1;", [req.username]);

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
router.get("/alluserdata/forcreator/:seriesid", authorise, async (req, res) => {
    try {
        const {
            seriesid
        } = req.params;

        var ud;
        if (seriesid === "all")
            ud = await pool.query("SELECT * FROM User_Series_Sub WHERE Creator = $1;", [req.username]);
        else
            ud = await pool.query("SELECT * FROM User_Series_Sub WHERE Creator = $1 AND Seriesid=$2", [req.username, seriesid]);
        var ent_data = ud.rows;
        var data = []
        for (let i = 0; i < ent_data.length; i++) {
            var temp = data.findIndex(x => x.date == ent_data[i].createdat.toString().split(" ").slice(1, 4).join(" "));
            if (!(temp > -1)) {
                data.push({
                    date: ent_data[i].createdat.toString().split(" ").slice(1, 4).join(" "),
                    total: parseInt(ent_data[i].buyingprice)
                });
            } else {
                data[temp].total += parseInt(ent_data[i].buyingprice);
            }
        }

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: data
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
        const ud = await pool.query("SELECT * FROM User_Series_Sub WHERE UserName = $1 AND Creator = $2;", [req.username, creator]);

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
router.get("/:creator/:seriesid", authorise, async (req, res) => {
    try {
        const {
            creator,
            seriesid
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Series_Sub WHERE UserName = $1 AND Creator = $2 AND SeriesId = $3;", [req.username, creator, seriesid]);

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
router.get("/checkstatus/generic/:videoid", authorise, async (req, res) => {
    try {
        const {
            videoid,
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_video_docs WHERE videoid = $1;", [videoid]);
        if (ud.rows.length > 0) {
            if (ud.rows[0].creator == req.username) {
                res.json({
                    isSuccessful: true,
                    errorMsg: "",
                    result: true
                });
            } else {
                if (ud.rows[0].seriesid == "vod_" + ud.rows[0].creator) {
                    const vd = await pool.query("SELECT * FROM User_Video_On_Demand_Sub WHERE Username=$1 AND Creator=$2;", [req.username, ud.rows[0].creator]);
                    if (vd.rows.filter(x => Date.parse(x.expiry_date) > Date.now()).length > 0) {
                        res.json({
                            isSuccessful: true,
                            errorMsg: "",
                            result: true
                        });
                    }
                } else {
                    const vd = await pool.query("SELECT * FROM User_Series_Sub WHERE Username=$1 AND SeriesId=$2;", [req.username, ud.rows[0].seriesid]);
                    if (vd.rows.filter(x => Date.parse(x.expiry_date) > Date.now()).length > 0) {
                        res.json({
                            isSuccessful: true,
                            errorMsg: "",
                            result: true
                        });
                    }

                }
            }
        }
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: false
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Update   ///////////////////////////////////////////
// Update 
router.put("/:creator/:seriesid", authorise, async (req, res) => {
    try {
        const {
            creator,
            seriesid
        } = req.params;
        const {
            type
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : (type == 1 ? 7888838 : 31556926);

            const uvod = (await pool.query("SELECT Expiry_Date FROM User_Series_Sub WHERE UserName = $1 AND Creator = $2 AND SeriesId = $3;",
                [
                    req.username,
                    creator,
                    seriesid
                ])).rows[0].expiry_date;
            const new_user_vod = await pool.query(
                "UPDATE User_Series_Sub SET Expiry_Date = TO_TIMESTAMP($4) , Type = $5 WHERE UserName = $1 AND Creator = $2  AND SeriesId = $3 RETURNING*;",
                [
                    req.username,
                    creator,
                    seriesid,
                    (new Date(parse(uvod))) / 1000 + duration, //// when user extends subscription then it gets added to the existing value
                    type
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
                errorMsg: "Invalid Type Value: 0: 1month, 1: 3month, 2: 1year",
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
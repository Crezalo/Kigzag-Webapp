const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Creator Shoutout TABLE            /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Shoutout Request   ///////////////////////////////////////////
// add Shoutout
router.post("/", authorise, async (req, res) => {
    try {
        var {
            platform,
            count_per_week,
            price
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2) {
            const new_shoutout = await pool.query(
                "INSERT INTO Creator_Shoutout (Creator, Platform, Count_Per_Week, Week_Till_Date_Exhausted, Price) VALUES ($1,$2,$3,$4,$5) RETURNING*;",
                [
                    req.username,
                    platform,
                    count_per_week,
                    0,
                    price
                ]
            );

            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_shoutout.rows
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

///////////////////////////////////////////   Get Data   ///////////////////////////////////////////
// Get Shoutout Data for given creator 
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Shoutout WHERE Creator = $1;", [creator]);

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

///////////////////////////////////////////   Update   ///////////////////////////////////////////
// Update data count_per_week, price
router.put("/:platform", authorise, async (req, res) => {
    try {
        const {
            platform
        } = req.params;
        const {
            count_per_week,
            price
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2) {
            const new_shoutout = await pool.query(
                "UPDATE Creator_Shoutout SET Count_Per_Week = $3, Price = $4 WHERE Creator = $1 AND Platform = $2 RETURNING*;",
                [
                    req.username,
                    platform,
                    count_per_week,
                    price
                ]
            );

            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_shoutout.rows
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

module.exports = router;
const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
const parse = require('postgres-date')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          VOD TABLE            ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////  Add New User_Video_On_Demand_Sub   ////////////////////////////////////
// add User_Video_On_Demand_Sub
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            type
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : type == 1 ? 7888838 : 31556926
            const new_user_vod = await pool.query(
                "INSERT INTO User_Video_On_Demand_Sub (UserName, Creator, Expiry_Date, Type) VALUES ($1,$2,TO_TIMESTAMP($3),$4) RETURNING*;",
                [
                    req.username,
                    creator,
                    (Date.now() / 1000 + duration), //// present + 1 month / 3 month / 1 year in seconds
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

///////////////////////////////////////////   Get All Data   ///////////////////////////////////////////
// Get All Data of a user
router.get("/allcreators", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Video_On_Demand_Sub WHERE UserName = $1;", [req.username]);
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
        const ud = await pool.query("SELECT * FROM User_Video_On_Demand_Sub WHERE UserName = $1 AND Creator = $2;", [req.username, creator]);

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
router.put("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const {
            type
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : (type == 1 ? 7888838 : 31556926);

            const uvod_data = await pool.query("SELECT Expiry_Date FROM User_Video_On_Demand_Sub WHERE UserName = $1 AND Creator = $2;",
                [
                    req.username,
                    creator
                ]);

            if (uvod_data.rows[0]) {
                const new_user_vod = await pool.query(
                    "UPDATE User_Video_On_Demand_Sub SET Expiry_Date = TO_TIMESTAMP($3) , Type = $4 WHERE UserName = $1 AND Creator = $2 RETURNING*;",
                    [
                        req.username,
                        creator,
                        (Date.parse(uvod_data.rows[0].expiry_date)) / 1000 + duration, //// when user extends subscription then it gets added to the existing value
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
                    isSuccessful: true,
                    errorMsg: "",
                    result: []
                });
            }
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Type Value: 0: 1month, 1: 3month, 2: 1year",
                result: []
            });
        }
    } catch (err) {
        console.log(err);
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

module.exports = router;
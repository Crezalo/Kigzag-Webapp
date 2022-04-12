const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          Creator Colab TABLE            ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Colab Request   ///////////////////////////////////////////
// add Colab
router.post("/", authorise, async (req, res) => {
    try {
        var {
            platform,
            count_per_week,
            price
        } = req.body;
        if (platform == 0 || platform == 1 || platform == 2 || platform == 3 || platform == 4) {
            const new_colab = await pool.query(
                "INSERT INTO Creator_Colab (Creator, Platform, Count_Per_Week, Week_Till_Date_Exhausted, Price) VALUES ($1,$2,$3,$4,$5) RETURNING*;",
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
                result: new_colab.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Platform Value. 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn",
                result: []
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

///////////////////////////////////////////   Get Data   ///////////////////////////////////////////
// Get Colab Data for given creator 
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Colab WHERE Creator = $1;", [creator]);

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: ud.rows
        });
    } catch (err) {
        res.status(500).json({
            isSuccessful: false,
            errorMsg: err,
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
        if (platform == 0 || platform == 1 || platform == 2 || platform == 3 || platform == 4) {
            const new_colab = await pool.query(
                "UPDATE Creator_Colab SET Count_Per_Week = $3, Price = $4 WHERE Creator = $1 AND Platform = $2 RETURNING*;",
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
                result: new_colab.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Platform Value. 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn",
                result: []
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

module.exports = router;
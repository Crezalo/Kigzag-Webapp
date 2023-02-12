const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          Sales TABLE            ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add Sales Product   ///////////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            feature,
            seriesid,
            productid,
            quantity,
            amount
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO Sales (UserName, Creator, Feature, SeriesId, ProductId, Quantity, Amount, DateTime) VALUES ($1,$2,$3,$4,$5,$6,$7, TO_TIMESTAMP($8)) RETURNING*;",
            [
                req.username,
                creator,
                feature,
                seriesid,
                productid,
                quantity,
                amount,
                Date.now() / 1000
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Orders for User   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/user", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM Sales WHERE UserName = $1;", [
            req.username
        ]);

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

///////////////////////////////////////////   Get All Orders for Creator   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/creator", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM Sales WHERE Creator = $1;", [
            req.username
        ]);

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
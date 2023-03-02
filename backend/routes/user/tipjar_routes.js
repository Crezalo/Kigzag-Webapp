const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          Sales TABLE            ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add Sales Product   ///////////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            message,
            amount,
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO User_TipJar (TipId, UserName, Creator, Message, Amount, TippedAt) VALUES ($1,$2,$3,$4,$5, TO_TIMESTAMP($6)) RETURNING*;",
            [
                Math.random().toString(36).slice(2),
                req.username,
                creator,
                message,
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
// Get All Orders for given user 
router.get("/user", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_TipJar WHERE UserName = $1;", [
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
        const ud = await pool.query("SELECT * FROM User_TipJar WHERE Creator = $1;", [
            req.username
        ]);

        var ent_data = ud.rows;
        var data = []
        for (let i = 0; i < ent_data.length; i++) {
            var temp = data.findIndex(x => x.date == ent_data[i].tippedat.toString().split(" ").slice(1, 4).join(" "));
            if (!(temp > -1)) {
                data.push({
                    date: ent_data[i].tippedat.toString().split(" ").slice(1, 4).join(" "),
                    total: parseInt(ent_data[i].amount)
                });
            } else {
                data[temp].total += parseInt(ent_data[i].amount);
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

///////////////////////////////////////////   Get All Order data with Msg for Creator   ///////////////////////////////////////////
// Get All Order data with Msg for given creator 
router.get("/creatorwithordermsg", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_TipJar WHERE Creator = $1 ORDER BY tippedat DESC;", [
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
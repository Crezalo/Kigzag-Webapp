const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
var ifsc = require('ifsc');
const {
    Validator
} = require('format-utils');
require("dotenv").config();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Creator_TipJar_Msg TABLE            /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Creator_TipJar_Msg   ///////////////////////////////////////////
// add Creator_TipJar_Msg
router.post("/", authorise, async (req, res) => {
    try {
        var {
            message
        } = req.body;
        const new_fin = await pool.query(
            "INSERT INTO Creator_TipJar_Msg (Creator, Message) VALUES ($1,$2) RETURNING*;",
            [
                req.username,
                message,
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_fin.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get Data   ///////////////////////////////////////////
// Get Creator Features Data for given creator (which is a username)
router.get("/:creator", authorise, async (req, res) => {
    try {
        var {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_TipJar_Msg WHERE Creator = $1;", [creator]);
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
// Update data for multiple columns
router.put("/", authorise, async (req, res) => {
    try {
        var {
            message,
        } = req.body;
        var new_User;
        const ud = await pool.query("SELECT * FROM Creator_TipJar_Msg WHERE Creator = $1;", [req.username]);
        if (ud.rows[0]) {

            new_User = await pool.query(
                "UPDATE Creator_TipJar_Msg SET Message=$1 WHERE Creator=$2 RETURNING*;",
                [message, req.username]
            );
        } else {
            new_User = await pool.query(
                "INSERT INTO Creator_TipJar_Msg (Creator, Message) VALUES ($1,$2) RETURNING*;",
                [
                    req.username,
                    message,
                ]
            );
        }

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_User.rows
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
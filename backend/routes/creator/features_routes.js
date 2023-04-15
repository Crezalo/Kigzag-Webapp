const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
var ifsc = require('ifsc');
const {
    Validator
} = require('format-utils');
require("dotenv").config();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Creator_Features TABLE            /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Creator_Features   ///////////////////////////////////////////
// add Creator_Features
router.post("/", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.body
        if (req.username == "admin") {
            const new_fin = await pool.query(
                "INSERT INTO Creator_Features (Creator, Video_on_Demand, Courses, Merchandise, Tipjar) VALUES ($1,$2,$3,$4,$5) RETURNING*;",
                [
                    creator,
                    false,
                    false,
                    false,
                    false
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_fin.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "unauthorised access",
                result: ""
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
// Get Creator Features Data for given creator (which is a username)
router.get("/:creator", authorise, async (req, res) => {
    try {
        var {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Features WHERE Creator = $1;", [creator]);
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
            video_on_demand,
            courses,
            merchandise,
            tipjar
        } = req.body;

        var new_User;

        if (video_on_demand != null) {

            new_User = await pool.query(
                "UPDATE Creator_Features SET video_on_demand=$1 WHERE Creator=$2 RETURNING*;",
                [video_on_demand, req.username]
            );
        }

        if (courses != null) {

            new_User = await pool.query(
                "UPDATE Creator_Features SET courses=$1 WHERE Creator=$2 RETURNING*;",
                [courses, req.username]
            );
        }

        if (merchandise != null) {

            new_User = await pool.query(
                "UPDATE Creator_Features SET merchandise=$1 WHERE Creator=$2 RETURNING*;",
                [merchandise, req.username]
            );
        }

        if (tipjar != null) {

            new_User = await pool.query(
                "UPDATE Creator_Features SET tipjar=$1 WHERE Creator=$2 RETURNING*;",
                [tipjar, req.username]
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
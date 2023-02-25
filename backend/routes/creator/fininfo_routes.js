const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
var ifsc = require('ifsc');
const {
    Validator
} = require('format-utils');
require("dotenv").config();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Fin Info TABLE            /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Fin Info   ///////////////////////////////////////////
// add fin info
router.post("/", authorise, async (req, res) => {
    try {
        var {
            aadharnumber,
            pannumber,
            bank_name,
            ifsc_code,
            acc_number
        } = req.body;

        if (ifsc_code == "") {
            return res.json({
                isSuccessful: false,
                errorMsg: "Atleast one of UPI and Bank Details needed",
                result: []
            });
        }

        if (ifsc_code != "" && acc_number == "") {
            return res.json({
                isSuccessful: false,
                errorMsg: "Bank Account Number can't be null",
                result: []
            });

        }

        if (!Validator.pan(pannumber)) {
            return res.json({
                isSuccessful: false,
                errorMsg: "PAN Number Invalid",
                result: []
            });
        }

        if (!(Validator.aadhaar(aadharnumber) || Validator.aadhaarVID(aadharnumber))) {
            return res.json({
                isSuccessful: false,
                errorMsg: "Aadhar Number Invalid",
                result: []
            });
        }


        if (ifsc_code != "") {
            if (!Validator.ifsc(ifsc_code)) {
                return res.json({
                    isSuccessful: false,
                    errorMsg: "IFSC Code Invalid",
                    result: []
                });
            }
            ifsc.fetchDetails(ifsc_code).then(function (res) {
                console.log(res); // gives same result as https://ifsc.razorpay.com/KKBK0000261
                console.log(ifsc.bank.PUNB); // prints PUNB
            });
        }

        const new_fin = await pool.query(
            "INSERT INTO Fin_Info (Creator, aadharnumber, pannumber, bank_name, IFSC_Code, Acc_Number) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
            [
                req.username,
                aadharnumber,
                pannumber,
                bank_name,
                ifsc_code,
                acc_number
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
// Get Fin info Data for given creator (which is a username)
router.get("/alldetails", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM Fin_Info WHERE Creator = $1;", [req.username]);
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

// get value of single column for a given user in fin_info
router.get("/:column", authorise, async (req, res) => {
    try {
        const column = req.params["column"];
        var Users_col;

        if (column == "aadharnumber")
            Users_col = await pool.query(
                "SELECT aadharnumber FROM Fin_Info WHERE Creator = $1;",
                [req.username]
            );
        else if (column == "pannumber")
            Users_col = await pool.query(
                "SELECT pannumber FROM Fin_Info WHERE Creator = $1;",
                [req.username]
            );
        else if (column == "bank_name")
            Users_col = await pool.query(
                "SELECT bank_name FROM Users Fin_Info Creator = $1;",
                [req.username]
            );
        else if (column == "ifsc_code")
            Users_col = await pool.query(
                "SELECT IFSC_Code FROM Fin_Info WHERE Creator = $1;",
                [req.username]
            );
        else if (column == "acc_number")
            Users_col = await pool.query(
                "SELECT Acc_Number FROM Fin_Info WHERE Creator = $1;",
                [req.username]
            );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: Users_col.rows
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
            bank_name,
            ifsc_code,
            acc_number
        } = req.body;

        var new_User;

        if (bank_name != "") {

            new_User = await pool.query(
                "UPDATE Fin_Info SET bank_name=$1 WHERE Creator=$2 RETURNING*;",
                [bank_name, req.username]
            );
        }

        if (ifsc_code != null) {

            if (!Validator.ifsc(ifsc_code)) {
                return res.json({
                    isSuccessful: false,
                    errorMsg: "IFSC Code Invalid",
                    result: []
                });
            }

            ifsc.fetchDetails(ifsc_code).then(function (res) {
                console.log(res); // gives same result as https://ifsc.razorpay.com/KKBK0000261
                console.log(ifsc.bank.PUNB); // prints PUNB
            });

            new_User = await pool.query(
                "UPDATE Fin_Info SET IFSC_Code=$1 WHERE Creator=$2 RETURNING*;",
                [ifsc_code, req.username]
            );

        }

        if (acc_number != "")
            new_User = await pool.query(
                "UPDATE Fin_Info SET Acc_Number=$1 WHERE Creator=$2 RETURNING*;",
                [acc_number, req.username]
            );

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
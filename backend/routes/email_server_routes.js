const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          Marketing TABLE            ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Get All Items for User   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/:sqlquery", authorise, async (req, res) => {
    try {
        const {
            sqlquery
        } = req.params;
        console.log(sqlquery);
        if (req.username == "admin") {
            const ud = await pool.query(sqlquery);
            console.log("done");
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: ud.rows
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

module.exports = router;
const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          User Cart TABLE            ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add User Cart Product   ///////////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        var {
            feedback
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO Feedback (Feedback, CreatedAt) VALUES ($1,TO_TIMESTAMP($2)) RETURNING*;",
            [
                feedback,
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

///////////////////////////////////////////   Get All Items for User   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/allfeedbacks", authorise, async (req, res) => {
    try {
        if (req.username == "admin") {
            const ud = await pool.query("SELECT * FROM Feedback ORDER BY CreatedAt DESC;");
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
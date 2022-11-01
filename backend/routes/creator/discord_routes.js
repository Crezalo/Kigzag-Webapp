const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////          Creator Discord TABLE        ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Discord   ///////////////////////////////////////////
// add Discord
router.post("/", authorise, async (req, res) => {
    try {
        var {
            serverid,
            invitelink
        } = req.body;
        const new_discord = await pool.query(
            "INSERT INTO Creator_Discord (Creator, ServerId, InviteLink) VALUES ($1,$2,$3) RETURNING*;",
            [
                req.username,
                serverid,
                invitelink
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_discord.rows
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
// Get Colab Data for given creator 
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Discord WHERE Creator = $1;", [creator]);

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
router.put("/", authorise, async (req, res) => {
    try {
        const {
            serverid,
            invitelink
        } = req.body;
        const new_discord = await pool.query(
            "UPDATE Creator_Discord SET ServerId = $2, InviteLink = $3 WHERE Creator = $1 RETURNING*;",
            [
                req.username,
                serverid,
                invitelink
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_discord.rows
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
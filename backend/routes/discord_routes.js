// Packages
const crypto = require('crypto');
const {
    Signale
} = require('signale');
const Web3Token = require('web3-token');

// Variables
const router = require("express").Router();
var WAValidator = require("wallet-address-validator");
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const isTimestamp = require('validate.io-timestamp');
const logger = new Signale({
    scope: 'Pool'
});

// Functions to read and write Link Pool Database

// Functions
// Create a link ID for a user
async function createLink(discordID, serverID) {
    const linkID = crypto.randomBytes(5).toString('hex');
    linkID = linkID + "?serverid=" + serverID + "&userid=" + discordID + "&start=" + (Date.now() / 1000).toString();
    const newLink = await pool.query("INSERT INTO User_Discord_Link_Pool (User_Discord_Id, LinkId, Processed) VALUES ($1,$2,$3) RETURNING*;", [discordID, linkID, false]);
    // setTimeout(function() {
    //     if (isValidLink(linkID)) removeLink(linkID);
    // }, 900000);
    logger.info(`Created new link ID: ${linkID} for user ID: ${discordID}`);
    return {
        linkID,
        newLink
    };
}

// Checks if link ID exists
async function isValidLink(linkID) {
    const ud = await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]);
    if (ud.rows[0].linkID)
        return true;
    return false;
}

// Remove link
async function removeLink(linkID) {
    const ud = await pool.query("DELETE FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]);
}

// Get Discord ID from link ID
async function getDetailsFromLinkId(linkID) {
    return (await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID])).rows[0];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          User Discord Sub TABLE            /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add new uaser - sub plan for a given discord server
router.post("/", authorise, async (req, res) => {
    try {
        const {
            useraddress,
            serverid,
            user_discord_id,
            expiry_date,
            type,
            chainid
        } = req.body;
        var valid = WAValidator.validate(useraddress, "ETH");
        if (valid) {
            const new_User = await pool.query(
                "INSERT INTO User_Discord_Sub (UserAddress, ServerId, User_Discord_Id, Expiry_Date, Type, ChainId) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
                [
                    useraddress.toLowerCase(),
                    serverid,
                    user_discord_id,
                    expiry_date,
                    type,
                    chainid
                ]
            );
            res.json(new_User.rows[0]);
        } else {
            res.json("Address INVALID");
        }
    } catch (err) {
        res.json(err);
    }
});

// add new uaser - sub plan for a given discord server
// mostly used for updating type and expiry
router.put("/:useraddress", authorise, async (req, res) => {
    try {
        const {
            useraddress
        } = req.params;
        const {
            serverid,
            user_discord_id,
            expiry_date,
            type,
            chainid
        } = req.body;
        var new_User;
        if (serverid != "")
            new_User = await pool.query(
                "UPDATE User_Discord_Sub SET serverid=$1 WHERE UserAddress=$2 RETURNING*;",
                [serverid, useraddress.toLowerCase()]
            );
        if (user_discord_id != null)
            new_User = await pool.query(
                "UPDATE User_Discord_Sub SET user_discord_id=$1 WHERE UserAddress=$2 RETURNING*;",
                [user_discord_id, useraddress.toLowerCase()]
            );
        if (expiry_date != "")
            new_User = await pool.query(
                "UPDATE User_Discord_Sub SET expiry_date=$1 WHERE UserAddress=$2 RETURNING*;",
                [expiry_date, useraddress.toLowerCase()]
            );
        if (type != "")
            new_User = await pool.query(
                "UPDATE User_Discord_Sub SET type=$1 WHERE UserAddress=$2 RETURNING*;",
                [type, useraddress.toLowerCase()]
            );
        if (chainid != "")
            new_User = await pool.query(
                "UPDATE User_Discord_Sub SET chainid=$1 WHERE UserAddress=$2 RETURNING*;",
                [chainid, useraddress.toLowerCase()]
            );

        res.json(new_User.rows[0]);
    } catch (err) {
        res.json(err);
    }
});

// get all discord subscription plan for given user
router.get("/:useraddress", async (req, res) => {
    try {
        const {
            useraddress
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Discord_Sub WHERE Creator=$1;", [useraddress.toLowerCase()]);
        res.json(ud.rows);
    } catch (err) {
        res.json(err);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          User Discord Link Pool TABLE            ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/link/:user_discord_id/:server_id", async (req, res) => {
    try {
        const {
            linkID,
            newLink
        } = createLink(discordID, serverID);
        if (!req.params.verifyId) return res.sendFile(path.join(__dirname, '/discord_token_gating_bot/html/invalidLink.html'));
        if (!pool.isValidLink(req.params.verifyId)) return res.sendFile(path.join(__dirname, '/discord_token_gating_bot/html/invalidLink.html'));
        res.render(path.join(__dirname, '/html/verify.html'));
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
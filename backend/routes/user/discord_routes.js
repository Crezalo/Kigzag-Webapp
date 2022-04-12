//config
require("dotenv").config();

// Packages
const crypto = require('crypto');
const {
    Signale
} = require('signale');
const Web3Token = require('web3-token');

// Variables
const router = require("express").Router();
var WAValidator = require("wallet-address-validator");
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();
const isTimestamp = require('validate.io-timestamp');
const logger = new Signale({
    scope: 'Pool'
});

// Functions to read and write Link Pool Database

// Functions
// Create a link ID for a user
async function createLink(discordID, serverID) {
    try {
        let linkID = crypto.randomBytes(5).toString('hex');
        const newLink = await pool.query("INSERT INTO User_Discord_Link_Pool (LinkId, User_Discord_Id, ServerId, StartTime) VALUES ($1,$2,$3,TO_TIMESTAMP($4)) RETURNING*;", [linkID, discordID, serverID, (Date.now() / 1000)]);
        setTimeout(function () {
            // if (isValidLink(linkID)) 
            removeLink(linkID);
            logger.info(`30 mins passed removing link ID: ${linkID} for user ID: ${discordID} for server ID: ${serverID}`);
        }, process.env.DISCORD_BOT_LINK_TIMEOUT_IN_MILLISECONDS);
        logger.info(`Created new link ID: ${linkID} for user ID: ${discordID}`);
        return {
            linkID,
            newLink
        };
    } catch (err) {
        console.log("Error calling createLink() from user_discord_routes.js", err);
    }
}

// Checks if link ID exists
async function isValidLink(linkID) {
    try {
        const ud = await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]);

        if (ud.rows[0].linkID) {
            if (Date.now() - Date.parse(ud.rows[0].starttime) > process.env.DISCORD_BOT_LINK_TIMEOUT_IN_MILLISECONDS) {
                removeLink(linkID);
                return false;
            }
            return true;
        }
        return false;
    } catch (err) {
        console.log("Error calling isValidLink() from user_discord_routes.js", err);
    }
}

// Remove link
async function removeLink(linkID) {
    try {
        const ud = await pool.query("DELETE FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]);
    } catch (err) {
        console.log("Error calling removeLink() from user_discord_routes.js", err);
    }
}

// Validate Link Pool Table
async function validateLinkPoolTable() {
    try {
        const ud = await pool.query("SELECT * FROM User_Discord_Link_Pool;");
        for (var i = 0; i < ud.rows.length; i++) {
            if (Date.now() - Date.parse(ud.rows[i].starttime) > process.env.DISCORD_BOT_LINK_TIMEOUT_IN_MILLISECONDS) {
                await removeLink(ud.rows[i].linkid);
                console.log("Following link id(s) expired: \n" + ud.rows[i].linkid);
            }
        }
    } catch (err) {
        if (err.message != "relation \"user_discord_link_pool\" does not exist") {
            console.log("Error calling validateLinkPoolTable() from user_discord_routes.js\n\n\t\t", err.message);
        }
    }
}

// Get Discord ID from link ID
// Not Being used
async function getPlanDetailsFromLinkId(linkID) {
    try {
        const linkData = (await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]));
        if (linkData.rowCount > 0) {
            linkData.rows[0]['creator'] = (await pool.query("SELECT Creator FROM Creator_Discord WHERE ServerId=$1;", [linkData.rows[0].serverid])).rows[0].creator;
            linkData.rows[0]['1month'] = (await pool.query("SELECT Discord FROM Creator_Sub_1M WHERE Creator=$1;", linkData.rows[0]['creator'])).rows[0].discord;
            linkData.rows[0]['3months'] = (await pool.query("SELECT Discord FROM Creator_Sub_3M WHERE Creator=$1;", linkData.rows[0]['creator'])).rows[0].discord;
            linkData.rows[0]['1year'] = (await pool.query("SELECT Discord FROM Creator_Sub_1Y WHERE Creator=$1;", linkData.rows[0]['creator'])).rows[0].discord;
            return linkData.rows[0];
        } else {
            return "Link Not Available";
        }
    } catch (err) {
        console.log("Error calling getPlanDetailsFromLinkId() from user_discord_routes.js", err);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          User Discord Sub TABLE            /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add user creator sub plan for a given discord server
router.post("/", authorise, async (req, res) => {
    try {
        const {
            serverid,
            user_discord_id,
            type
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : (type == 1 ? 7888838 : 31556926);
            const new_User = await pool.query(
                "INSERT INTO User_Discord_Sub (UserName, ServerId, User_Discord_Id, Expiry_Date, Type) VALUES ($1,$2,$3,$4,$5) RETURNING*;",
                [
                    req.username,
                    serverid,
                    user_discord_id,
                    (Date.now() / 1000 + duration), //// present + 1 month / 3 month / 1 year in seconds
                    type
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_User.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Type Value: 0: 1month, 1: 3month, 2: 1year",
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

// add new user - sub plan for a given discord server
// mostly used for updating type and expiry
router.put("/:serverid", authorise, async (req, res) => {
    try {
        const {
            serverid
        } = req.params;
        const {
            type
        } = req.body;
        if (type == 0 || type == 1 || type == 2) {
            const duration = type == 0 ? 2628888 : (type == 1 ? 7888838 : 31556926);
            const ud = await pool.query("SELECT Expiry_Date FROM User_Discord_Sub  WHERE UserName = $1 AND ServerId = $2 RETURNING*;",
                [
                    req.username,
                    serverid
                ]).rows[0].expiry_date;
            const new_user = await pool.query(
                "UPDATE User_Discord_Sub  SET Expiry_Date = TO_TIMESTAMP($3) , Type = $4 WHERE UserName = $1 AND ServerId = $2 RETURNING*;",
                [
                    req.username,
                    serverid,
                    (new Date(parse(ud))) / 1000 + duration, //// when user extends subscription then it gets added to the existing value
                    type
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_user.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Invalid Type Value: 0: 1month, 1: 3month, 2: 1year",
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

// get all discord subscription plan for given user
router.get("/", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Discord_Sub WHERE UserName=$1;", [req.username]);
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

// get all discord subscription plan for given user
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Discord_Sub WHERE UserName=$1 AND Creator=$2;", [req.username, creator]);
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          User Discord Link Pool TABLE            ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get all data for given link
router.get("/linkdata/:linkid", async (req, res) => {
    try {
        const {
            linkid
        } = req.params;
        const linkData = (await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkid]));
        if (linkData.rowCount > 0) {
            linkData.rows[0]['creator'] = (await pool.query("SELECT Creator FROM Creator_Discord WHERE ServerId=$1;", [linkData.rows[0].serverid])).rows[0].creator;
            linkData.rows[0]['1month'] = (await pool.query("SELECT Discord FROM Creator_Sub_1M WHERE Creator=$1;", [linkData.rows[0]['creator']])).rows[0].discord;
            linkData.rows[0]['3months'] = (await pool.query("SELECT Discord FROM Creator_Sub_3M WHERE Creator=$1;", [linkData.rows[0]['creator']])).rows[0].discord;
            linkData.rows[0]['1year'] = (await pool.query("SELECT Discord FROM Creator_Sub_1Y WHERE Creator=$1;", [linkData.rows[0]['creator']])).rows[0].discord;
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: linkData.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Link Not Available",
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

module.exports = {
    router,
    createLink,
    isValidLink,
    validateLinkPoolTable,
    getPlanDetailsFromLinkId
};
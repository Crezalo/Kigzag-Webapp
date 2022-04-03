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
        console.log("Error calling createLink() from discord_routes.js", err);
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
        console.log("Error calling isValidLink() from discord_routes.js", err);
    }
}

// Remove link
async function removeLink(linkID) {
    try {
        const ud = await pool.query("DELETE FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]);
    } catch (err) {
        console.log("Error calling removeLink() from discord_routes.js", err);
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
        if(err.message!="relation \"user_discord_link_pool\" does not exist"){
            console.log("Error calling validateLinkPoolTable() from discord_routes.js\n\n\t\t", err.message);
        }
    }
}

// Get Discord ID from link ID
// Not Being used
async function getPlanDetailsFromLinkId(linkID) {
    try {
        const linkData = (await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkID]));
        if (linkData.rowCount > 0) {
            linkData.rows[0]['creator'] = (await pool.query("SELECT creator FROM Creator_Sub_1M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].creator;
            linkData.rows[0]['1month'] = (await pool.query("SELECT discord FROM Creator_Sub_1M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['3months'] = (await pool.query("SELECT discord FROM Creator_Sub_3M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['1year'] = (await pool.query("SELECT discord FROM Creator_Sub_1Y WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['name'] = (await pool.query("SELECT name FROM Creator_token WHERE creator=$1;", [linkData.rows[0]['creator']])).rows[0].name;
            linkData.rows[0]['symbol'] = (await pool.query("SELECT symbol FROM Creator_token WHERE creator=$1;", [linkData.rows[0]['creator']])).rows[0].symbol;
            return linkData.rows[0];
        } else {
            return "Link Not Available";
        }
    } catch (err) {
        console.log("Error calling getPlanDetailsFromLinkId() from discord_routes.js", err);
    }
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

// get all data for given link
router.get("/linkdata/:linkid", async (req, res) => {
    try {
        const {
            linkid
        } = req.params;
        const linkData = (await pool.query("SELECT * FROM User_Discord_Link_Pool WHERE LinkId=$1;", [linkid]));
        if (linkData.rowCount > 0) {
            linkData.rows[0]['creator'] = (await pool.query("SELECT creator FROM Creator_Sub_1M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].creator;
            linkData.rows[0]['1month'] = (await pool.query("SELECT discord FROM Creator_Sub_1M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['3months'] = (await pool.query("SELECT discord FROM Creator_Sub_3M WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['1year'] = (await pool.query("SELECT discord FROM Creator_Sub_1Y WHERE Discord_Server_Id=$1;", [linkData.rows[0].serverid])).rows[0].discord;
            linkData.rows[0]['name'] = (await pool.query("SELECT name FROM Creator_token WHERE creator=$1;", [linkData.rows[0]['creator']])).rows[0].name;
            linkData.rows[0]['symbol'] = (await pool.query("SELECT symbol FROM Creator_token WHERE creator=$1;", [linkData.rows[0]['creator']])).rows[0].symbol;
            res.json(linkData.rows[0]);
        } else {
            res.json("Link Not Available");
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = {
    router,
    createLink,
    isValidLink,
    validateLinkPoolTable,
    getPlanDetailsFromLinkId
};
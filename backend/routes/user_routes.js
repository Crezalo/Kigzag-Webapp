const user_router = require('express').Router();
var WAValidator = require('wallet-address-validator');
const pool = require('../db_creation/db');

// add new user
user_router.post('/',async (req,res) => {
    try{
        const {useraddress, username, iscreator, twitterhandle, discord, tiktok, instagram, youtube, website} = req.body;
        var valid = WAValidator.validate(useraddress, 'ETH');
        if(valid){
            const new_User = await pool.query("INSERT INTO Users (UserAddress, UserName, IsCreator, TwitterHandle, Discord, TikTok, Instagram, Youtube, Website) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING*;", [useraddress, username, iscreator, twitterhandle, discord, tiktok, instagram, youtube, website])
            res.json(new_User.rows);
        }
        else{
            res.json('Address INVALID');
        }
    }
    catch(err){
        res.json(err);
    };
});

user_router.put('/:address',async (req,res) => {
    try{
        const {address} = req.params;
        const {username, iscreator, twitterhandle, discord, tiktok, instagram, youtube, website} = req.body;
        var new_User;
        if(username!="")
            new_User = await pool.query("UPDATE Users SET UserName=$1 WHERE UserAddress=$2", [username, address])
        if(iscreator!=null)
            new_User = await pool.query("UPDATE Users SET IsCreator=$1 WHERE UserAddress=$2", [iscreator, address])
        if(twitterhandle!="")
            new_User = await pool.query("UPDATE Users SET TwitterHandle=$1 WHERE UserAddress=$2", [twitterhandle, address])
        if(discord!="")
            new_User = await pool.query("UPDATE Users SET Discord=$1 WHERE UserAddress=$2", [discord, address])
        if(tiktok!="")
            new_User = await pool.query("UPDATE Users SET Tiktok=$1 WHERE UserAddress=$2", [tiktok, address])
        if(instagram!="")
            new_User = await pool.query("UPDATE Users SET Instagram=$1 WHERE UserAddress=$2", [instagram, address])
        if(youtube!="")
            new_User = await pool.query("UPDATE Users SET Youtube=$1 WHERE UserAddress=$2", [youtube, address])
        if(website!="")
            new_User = await pool.query("UPDATE Users SET Website=$1 WHERE UserAddress=$2", [website, address])

        res.json(new_User.rows);
    }
    catch(err){
        res.json(err);
    };
});

// get user profile data for given user id
user_router.get("/:address", async (req, res) => {
    try{
        const {address} = req.params;
        const ud = await pool.query("SELECT * FROM Users WHERE UserAddress = $1;",[address]);
        res.json(ud.rows);
    }
    catch(err){
        res.json(err);
    }
});

// get value of single column for A given user in Users
user_router.get("/cn/:column/:address", async (req, res) => {
    try{
        const address = req.params['address'];
        const column = req.params['column'];
        var Users_col;
        if(column=="username")
            Users_col = await pool.query("SELECT UserName FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="iscreator")
            Users_col = await pool.query("SELECT IsCreator FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="twitterhandle")
            Users_col = await pool.query("SELECT TwitterHandle FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="discord")
            Users_col = await pool.query("SELECT Discord FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="tiktok")
            Users_col = await pool.query("SELECT Tiktok FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="instagram")
            Users_col = await pool.query("SELECT Instagram FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="youtube")
            Users_col = await pool.query("SELECT Youtube FROM Users WHERE UserAddress = $1;",[address]);
        else if(column=="website")
            Users_col = await pool.query("SELECT Website FROM Users WHERE UserAddress = $1;",[address]);
        
        res.json(Users_col.rows);
    }
    catch(err){
        res.json(err);
    }
});

user_router.post("/token",async(req, res)=>{
    try{
        const {address} = req.body;
        var valid = WAValidator.validate(address, 'ETH');
        if(valid){
            const new_token = await pool.query("INSERT INTO Creator_token (TokenAddress) VALUES ($1) RETURNING*;", [address]);
            res.json(new_token.rows);
        }
        else{
            res.json('Address INVALID');
        }
    }
    catch(err){
        res.json(err);
    }
});

user_router.get("/token",async(req, res)=>{
    try{
        console.log("tds");
        const td = await pool.query("SELECT TokenAddress FROM Creator_token;");
        res.json(td.rows);
    }
    catch(err){
        res.json(err);
    }
});


module.exports = user_router;

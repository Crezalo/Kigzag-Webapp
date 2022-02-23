const router = require("express").Router();
var WAValidator = require("wallet-address-validator");
const pool = require("../db_creation/db");
const Web3Token = require('web3-token');
const authorise = require("../middleware/authorise")();
const isTimestamp = require('validate.io-timestamp');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          USER TABLE            /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add new user
router.post("/", authorise, async (req, res) => {
  try {
    const {
      useraddress,
      username,
      iscreator,
      twitterhandle,
      discord,
      tiktok,
      instagram,
      youtube,
      website,
    } = req.body;
    var valid = WAValidator.validate(useraddress, "ETH");
    if (valid) {
      const new_User = await pool.query(
        "INSERT INTO Users (UserAddress, UserName, IsCreator, TwitterHandle, Discord, TikTok, Instagram, Youtube, Website) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING*;",
        [
          useraddress.toLowerCase(),
          username,
          iscreator,
          twitterhandle,
          discord,
          tiktok,
          instagram,
          youtube,
          website,
        ]
      );
      res.json(new_User.rows);
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

router.put("/:address", authorise, async (req, res) => {
  try {
    const {
      address
    } = req.params;
    const {
      username,
      iscreator,
      twitterhandle,
      discord,
      tiktok,
      instagram,
      youtube,
      website,
    } = req.body;
    var new_User;
    if (username != "")
      new_User = await pool.query(
        "UPDATE Users SET UserName=$1 WHERE UserAddress=$2 RETURNING*;",
        [username, address.toLowerCase()]
      );
    if (iscreator != null)
      new_User = await pool.query(
        "UPDATE Users SET IsCreator=$1 WHERE UserAddress=$2 RETURNING*;",
        [iscreator, address.toLowerCase()]
      );
    if (twitterhandle != "")
      new_User = await pool.query(
        "UPDATE Users SET TwitterHandle=$1 WHERE UserAddress=$2 RETURNING*;",
        [twitterhandle, address.toLowerCase()]
      );
    if (discord != "")
      new_User = await pool.query(
        "UPDATE Users SET Discord=$1 WHERE UserAddress=$2 RETURNING*;",
        [discord, address.toLowerCase()]
      );
    if (tiktok != "")
      new_User = await pool.query(
        "UPDATE Users SET Tiktok=$1 WHERE UserAddress=$2 RETURNING*;",
        [tiktok, address.toLowerCase()]
      );
    if (instagram != "")
      new_User = await pool.query(
        "UPDATE Users SET Instagram=$1 WHERE UserAddress=$2 RETURNING*;",
        [instagram, address.toLowerCase()]
      );
    if (youtube != "")
      new_User = await pool.query(
        "UPDATE Users SET Youtube=$1 WHERE UserAddress=$2 RETURNING*;",
        [youtube, address.toLowerCase()]
      );
    if (website != "")
      new_User = await pool.query(
        "UPDATE Users SET Website=$1 WHERE UserAddress=$2 RETURNING*;",
        [website, address.toLowerCase()]
      );

    res.json(new_User.rows);
  } catch (err) {
    res.json(err);
  }
});

// get creators profile data
router.get("/creators/:chainid", async (req, res) => {
  try {
    const {
      chainid
    } = req.params;
    const ud = await pool.query("SELECT Users.*, User_chain.chainid FROM Users INNER JOIN User_chain ON(Users.useraddress=User_chain.useraddress) WHERE IsCreator = true AND ChainId=$1;", [chainid]);
    res.json(ud.rows);
  } catch (err) {
    res.json(err);
  }
});

// get user profile data for given user id
router.get("/:address", async (req, res) => {
  try {
    const {
      address
    } = req.params;
    const ud = await pool.query("SELECT * FROM Users WHERE UserAddress = $1;", [
      address.toLowerCase(),
    ]);
    res.json(ud.rows);
  } catch (err) {
    res.json(err);
  }
});

// get value of single column for A given user in Users
router.get("/cn/:column/:address", async (req, res) => {
  try {
    const address = req.params["address"];
    const column = req.params["column"];
    var Users_col;
    if (column == "username")
      Users_col = await pool.query(
        "SELECT UserName FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "iscreator")
      Users_col = await pool.query(
        "SELECT IsCreator FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "twitterhandle")
      Users_col = await pool.query(
        "SELECT TwitterHandle FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "discord")
      Users_col = await pool.query(
        "SELECT Discord FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "tiktok")
      Users_col = await pool.query(
        "SELECT Tiktok FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "instagram")
      Users_col = await pool.query(
        "SELECT Instagram FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "youtube")
      Users_col = await pool.query(
        "SELECT Youtube FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );
    else if (column == "website")
      Users_col = await pool.query(
        "SELECT Website FROM Users WHERE UserAddress = $1;",
        [address.toLowerCase()]
      );

    res.json(Users_col.rows);
  } catch (err) {
    res.json(err);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          User Chain TABLE           ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// add new user chain data
router.post("/user_chain", authorise, async (req, res) => {
  try {
    const {
      useraddress,
      chainid
    } = req.body;
    var valid = WAValidator.validate(useraddress, "ETH");
    if (valid) {
      const new_user_chain = await pool.query("INSERT INTO User_chain (UserAddress, ChainId) VALUES ($1,$2) RETURNING*;", [useraddress.toLowerCase(), chainid]);
      res.json(new_user_chain.rows);
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          Token TABLE            ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/token", authorise, async (req, res) => {
  try {
    const {
      address,
      chainid
    } = req.body;
    var valid = WAValidator.validate(address, "ETH");
    if (valid) {
      const new_token = await pool.query(
        "INSERT INTO Creator_token (TokenAddress, ChainId) VALUES ($1, $2) RETURNING*;",
        [address.toLowerCase(), chainid]
      );
      res.json(new_token.rows);
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

router.get("/token/:chainid", async (req, res) => {
  try {
    const chainid = req.params["chainid"];
    const td = await pool.query("SELECT TokenAddress FROM Creator_token WHERE ChainId=$1;", [chainid]);
    res.json(td.rows);
  } catch (err) {
    res.json(err);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          NFT TABLE           ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/nft", authorise, async (req, res) => {
  try {
    const {
      address,
      tokenid,
      tokenuri,
      status,
      chainid,
      creator
    } = req.body;
    var valid = WAValidator.validate(address, "ETH");
    if (valid) {
      if (status == 'UNLISTED' || status == 'LISTED' || status == 'SOLD') {
        const new_token = await pool.query(
          "INSERT INTO Creator_nft (NFTAddress, TokenId, TokenURI, Status, ChainId, Creator) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*;",
          [address.toLowerCase(), tokenid, tokenuri, status, chainid, creator.toLowerCase()]
        );
        res.json(new_token.rows);
      } else {
        res.json("Status INVALID");
      }
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

router.put("/nft/:address/:tokenid/:chainid/:status", authorise, async (req, res) => {
  try {
    const address = req.params["address"];
    const tokenid = req.params["tokenid"];
    const status = req.params["status"];
    const chainid = req.params["chainid"];
    if (status == 'UNLISTED' || status == 'LISTED' || status == 'SOLD') {
      const nftd = await pool.query("UPDATE Creator_nft SET Status = $3 WHERE NFTAddress = $1 AND TokenId = $2 AND ChainId=$4 RETURNING*;", [address.toLowerCase(), tokenid, status, chainid]);
      res.json(nftd.rows);
    } else {
      res.json("Status INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

router.get("/nft/:chainid", async (req, res) => {
  try {
    const chainid = req.params["chainid"];
    const nftd = await pool.query("SELECT * FROM Creator_nft WHERE ChainId = $1 ORDER BY TokenId;", [chainid]);
    res.json(nftd.rows);
  } catch (err) {
    res.json(err);
  }
});

router.get("/nft/address/:chainid/:address", async (req, res) => {
  try {
    const address = req.params["address"];
    const chainid = req.params["chainid"];
    const nftd = await pool.query("SELECT * FROM Creator_nft WHERE Creator = $1 AND ChainId = $2 ORDER BY TokenId;", [address.toLowerCase(), chainid]);
    res.json(nftd.rows);
  } catch (err) {
    res.json(err);
  }
});

router.get("/nft/status/:chainid/:address/:status", async (req, res) => {
  try {
    const address = req.params["address"];
    const status = req.params["status"];
    const nftd = await pool.query("SELECT * FROM Creator_nft WHERE NFTAddress = $1 AND Status = $2 ORDER BY TokenId;", [address.toLowerCase(), status]);
    res.json(nftd.rows);
  } catch (err) {
    res.json(err);
  }
});

router.get("/nft/address/:chainid/:address/:tokenid", async (req, res) => {
  try {
    const address = req.params["address"]; // nft address
    const chainid = req.params["chainid"];
    const tokenid = req.params["tokenid"];
    const nftd = await pool.query("SELECT * FROM Creator_nft WHERE NFTAddress = $1 AND ChainId = $2 AND TokenId=$3;", [address.toLowerCase(), chainid, tokenid]);
    res.json(nftd.rows);
  } catch (err) {
    res.json(err);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          DAO TABLE           ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post("/dao", authorise, async (req, res) => {
  try {
    const {
      address,
      chainid,
      creator,
      proposalid,
      author,
      isallowancesproposal,
      managers,
      allowances,
      isnative,
      proposallink,
      proposaltitle,
      proposaldescription,
      choices,
      duration,
    } = req.body;
    var valid = WAValidator.validate(address, "ETH");
    valid = WAValidator.validate(creator, "ETH") && valid;
    valid = WAValidator.validate(author, "ETH") && valid;
    if (valid) {
      const new_token = await pool.query(
        "INSERT INTO Creator_dao (ChainId, DAOAddress, Creator, ProposalId, Author, IsAllowancesProposal, Managers, Allowances, IsNative, ProposalLink, ProposalTitle, ProposalDescription, Choices, StartTime, Duration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, TO_TIMESTAMP($14), $15) RETURNING*;",
        [
          chainid,
          address.toLowerCase(),
          creator.toLowerCase(),
          proposalid,
          author.toLowerCase(),
          isallowancesproposal,
          managers.toLowerCase(),
          allowances,
          isnative,
          proposallink,
          proposaltitle,
          proposaldescription,
          choices,
          Date.now() / 1000,
          duration,
        ]
      );
      console.log("here")
      res.json(new_token.rows);
    } else {
      res.json("Address INVALID");
    }
  } catch (err) {
    res.json(err);
  }
});

router.get("/dao/:chainid/:address/", async (req, res) => {
  try {
    const chainid = req.params["chainid"];
    const address = req.params["address"];
    const td = await pool.query("SELECT * FROM Creator_dao WHERE ChainId=$1 AND DAOAddress=$2 ORDER BY ProposalId;", [chainid, address.toLowerCase()]);
    res.json(td.rows);
  } catch (err) {
    res.json(err);
  }
});

router.get("/dao/:chainid/:address/:proposalid", async (req, res) => {
  try {
    const chainid = req.params["chainid"];
    const address = req.params["address"];
    const proposalid = req.params["proposalid"];
    const td = await pool.query("SELECT * FROM Creator_dao WHERE ChainId=$1 AND DAOAddress=$2 AND ProposalId =$3 ORDER BY ProposalId;", [chainid, address.toLowerCase(), proposalid]);
    res.json(td.rows);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
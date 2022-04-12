const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const refresh_authorise = require("../middleware/refresh_authorise")();
var validator = require("email-validator");
const isTimestamp = require('validate.io-timestamp');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {
  OAuth2Client
} = require('google-auth-library');
const googleClient = new OAuth2Client(process.env.GOOGLE_LOGIN_CLIENT_ID);

async function googleVerify(providerIdToken) {
  const ticket = await googleClient.verifyIdToken({
    idToken: providerIdToken,
    audience: process.env.GOOGLE_LOGIN_CLIENT_ID
  });
  const payload = ticket.getPayload();
  return payload;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          USER TABLE            /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Register   ///////////////////////////////////////////
// add new user
router.post("/", async (req, res) => {
  try {
    var {
      emailaddress,
      signuptype,
      providerIdToken,
      password,
      username,
      fname,
      lname,
      bio,
      iscreator,
      displaypicture,
      twitterhandle,
      instagram,
      youtube,
      website
    } = req.body;
    const valid = validator.validate(emailaddress);
    // storing a hashedpassword for data security 
    const hashedpassword = (password != "" ? await bcrypt.hash(password, 10) : "");
    var signinid = "";
    if (valid) {
      if (password == "" && signuptype == 0) {
        return res.status(401).json({
          isSuccessful: false,
          errorMsg: "Password Cannot be null",
          result: []
        });
      }
      if (signuptype == 1) {
        const payload = googleVerify(providerIdToken);
        signinid = payload['sub'];

        if (!payload['email_verified']) {
          return res.status(401).json({
            isSuccessful: false,
            errorMsg: "Unverified Google Email",
            result: []
          });
        }
        if (emailaddress != "")
          emailaddress = payload['email'];
        if (fname != "")
          fname = payload['given_name'];
        if (lname != "")
          lname = payload['family_name'];
        if (display != "")
          displaypicture = payload['picture'];
      } else if (signuptype == 1) {
        const new_User = await pool.query(
          "INSERT INTO Users (EmailAddress, SignUpType, SignInID, Password, UserName, FName, LName, Bio, IsCreator, DisplayPicture, TwitterHandle, Instagram, Youtube, Website) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING*;",
          [
            emailaddress,
            signuptype,
            signinid,
            hashedpassword,
            username,
            fname,
            lname,
            bio,
            iscreator,
            displaypicture,
            twitterhandle,
            instagram,
            youtube,
            website
          ]
        );

        // generate access token for the new user
        new_User.rows[0]['x-access-token'] = jwt.sign({
          user: username
        }, process.env.JWT_ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        });
        // generate refresh token for the new user
        new_User.rows[0]['x-refresh-token'] = jwt.sign({
          user: username
        }, process.env.JWT_REFRESH_TOKEN_SECRET, {
          expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
        });
        res.json({
          isSuccessful: true,
          errorMsg: "",
          result: new_User.rows
        });
      }
      else{
        res.json({
            isSuccessful: false,
            errorMsg: "Invalid SignUpType Value. 0: UnamePass, 1: Google",
            result: []
        });
      }
    } else {
      res.status(500).json({
        isSuccessful: false,
        errorMsg: "Email Address Invalid",
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

///////////////////////////////////////////   Login   ///////////////////////////////////////////
router.post('/login/:signintype', async (req, res) => {
  try {
    if (signintype == 0) {
      const {
        username,
        password
      } = req.body;

      if (!username || !password) {
        throw new Error('Username and password are required')
      }

      const user_col = await query("SELECT * FROM Users WHERE UserName = $1;", [username]);

      if (!user_col.rows[0]) {
        return res.status(401).send({
          isSuccessful: false,
          errorMsg: "Username Incorrect",
          result: []
        });
      }

      if (user_col.rows[0].signuptype == 0 || user_col.rows[0].signuptype == 10) {

        const isMatch = await bcrypt.compare(password, user_col.rows[0].password);

        if (!isMatch) {
          return res.status(401).send({
            isSuccessful: false,
            errorMsg: "Password Incorrect",
            result: []
          })
        }

        // generate access token for the new user
        const accessToken = jwt.sign({
          user: username
        }, process.env.JWT_ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        });
        // generate refresh token for the new user
        const refreshToken = jwt.sign({
          user: username
        }, process.env.JWT_REFRESH_TOKEN_SECRET, {
          expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
        });

        res.json({
          isSuccessful: true,
          errorMsg: "",
          result: [{
            'x-access-token': accessToken,
            'x-refresh-token': refreshToken
          }]
        });

      } else {
        res.status(401).json({
          isSuccessful: false,
          errorMsg: "UnAuthorised: SignInType and SignUpType Doesn't Match",
          result: []
        });
      }
    } else if (signintype == 1) {
      const {
        providerIdToken
      } = req.body;

      const payload = googleVerify(providerIdToken);
      const signinid = payload['sub'];

      if (!payload['email_verified']) {
        return res.status(401).json({
          isSuccessful: false,
          errorMsg: "Unverified Google Email",
          result: []
        });
      }

      const emailaddress = payload['email'];

      const user_col = await query("SELECT * FROM Users WHERE EmailAddress = $1 AND SignInID = $2;", [emailaddress, signinid]);

      if (user_col.rows[0].signuptype == 1 || user_col.rows[0].signuptype == 10) {

        // generate access token for the new user
        const accessToken = jwt.sign({
          user: username
        }, process.env.JWT_ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        });

        // generate refresh token for the new user
        const refreshToken = jwt.sign({
          user: username
        }, process.env.JWT_REFRESH_TOKEN_SECRET, {
          expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
        });

        res.json({
          isSuccessful: true,
          errorMsg: "",
          result: [{
            'x-access-token': accessToken,
            'x-refresh-token': refreshToken
          }]
        });
      } else {
        res.status(401).json({
          isSuccessful: false,
          errorMsg: "UnAuthorised: SignInType and SignUpType Doesn't Match",
          result: []
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

///////////////////////////////////////////   Get Data   ///////////////////////////////////////////
// Get User Data for given emailaddress
router.get("/:username", authorise, async (req, res) => {
  try {
    const {
      username
    } = req.params;
    var ud;
    if (req.username == username) {
      ud = await pool.query("SELECT EmailAddress, SignUpType, Username, FName, LName, Bio, IsCreator, DisplayPicture, TwitterHandle, Instagram, Youtube, Website FROM Users WHERE UserName = $1;", [username]);
    } else {
      ud = await pool.query("SELECT Username, FName, LName, Bio, IsCreator, DisplayPicture, TwitterHandle, Instagram, Youtube, Website FROM Users WHERE UserName = $1;", [username]);
    }
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

// get creators profile data
router.get("/creators/:offset", authorise, async (req, res) => {
  try {
    const {
      offset
    } = req.params;
    const ud = await pool.query("SELECT Username, FName, LName, Bio, DisplayPicture FROM Users WHERE IsCreator = true LIMIT 20 OFFSET $1;", [offset]);
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

// get value of single column for A given user in Users
router.get("/cn/:column/:username", authorise, async (req, res) => {
  try {
    const username = req.params["username"];
    const column = req.params["column"];
    var Users_col;

    if (req.username != username) {
      if (column == "emailaddress" || column == "signuptype") {
        return res.status(401).json({
          isSuccessful: false,
          errorMsg: "UnAuthorised: Access Denied",
          result: []
        });
      }
    }

    if (column == "emailaddress")
      Users_col = await pool.query(
        "SELECT EmailAddress FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "signuptype")
      Users_col = await pool.query(
        "SELECT SignUpTypr FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "username")
      Users_col = await pool.query(
        "SELECT UserName FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "fname")
      Users_col = await pool.query(
        "SELECT FName FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "lname")
      Users_col = await pool.query(
        "SELECT LName FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "bio")
      Users_col = await pool.query(
        "SELECT Bio FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "iscreator")
      Users_col = await pool.query(
        "SELECT IsCreator FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "displaypicture")
      Users_col = await pool.query(
        "SELECT IsCreator FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "twitterhandle")
      Users_col = await pool.query(
        "SELECT TwitterHandle FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "instagram")
      Users_col = await pool.query(
        "SELECT Instagram FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "youtube")
      Users_col = await pool.query(
        "SELECT Youtube FROM Users WHERE UserName = $1;",
        [username]
      );
    else if (column == "website")
      Users_col = await pool.query(
        "SELECT Website FROM Users WHERE UserName = $1;",
        [username]
      );

    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: Users_col.rows
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});


///////////////////////////////////////////   Get Refresh Token   ///////////////////////////////////////////
router.get("/refresh", refresh_authorise, async (req, res) => {
  try {
    // generate access token for the new user
    const accessToken = jwt.sign({
      user: req.username
    }, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
    });
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: [{
        'x-access-token': accessToken
      }]
    });
  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

///////////////////////////////////////////   Update   ///////////////////////////////////////////
// Update data for multiple columns
router.put("/", authorise, async (req, res) => {
  try {
    var {
      emailaddress,
      username_up,
      fname,
      lname,
      bio,
      iscreator,
      displaypicture,
      twitterhandle,
      instagram,
      youtube,
      website
    } = req.body;

    var new_User;

    if (emailaddress != "" && validator.validate(emailaddress))
      new_User = await pool.query(
        "UPDATE Users SET EmailAddress=$1 WHERE UserName=$2 RETURNING*;",
        [emailaddress, req.username]
      );
    if (username_up != "")
      new_User = await pool.query(
        "UPDATE Users SET UserName=$1 WHERE UserName=$2 RETURNING*;",
        [username_up, req.username]
      );
    if (fname != "")
      new_User = await pool.query(
        "UPDATE Users SET FName=$1 WHERE UserName=$2 RETURNING*;",
        [fname, req.username]
      );
    if (lname != "")
      new_User = await pool.query(
        "UPDATE Users SET LName=$1 WHERE UserName=$2 RETURNING*;",
        [lname, req.username]
      );
    if (bio != "")
      new_User = await pool.query(
        "UPDATE Users SET Bio=$1 WHERE UserName=$2 RETURNING*;",
        [bio, req.username]
      );
    if (iscreator != null)
      new_User = await pool.query(
        "UPDATE Users SET IsCreator=$1 WHERE UserName=$2 RETURNING*;",
        [iscreator, req.username]
      );
    if (displaypicture != "")
      new_User = await pool.query(
        "UPDATE Users SET DisplayPicture=$1 WHERE UserName=$2 RETURNING*;",
        [displaypicture, req.username]
      );
    if (twitterhandle != "")
      new_User = await pool.query(
        "UPDATE Users SET TwitterHandle=$1 WHERE UserName=$2 RETURNING*;",
        [twitterhandle, req.username]
      );
    if (instagram != "")
      new_User = await pool.query(
        "UPDATE Users SET Instagram=$1 WHERE UserName=$2 RETURNING*;",
        [instagram, req.username]
      );
    if (youtube != "")
      new_User = await pool.query(
        "UPDATE Users SET Youtube=$1 WHERE UserName=$2 RETURNING*;",
        [youtube, req.username]
      );
    if (website != "")
      new_User = await pool.query(
        "UPDATE Users SET Website=$1 WHERE UserName=$2 RETURNING*;",
        [website, req.username]
      );

    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: new_User.rows
    });

  } catch (err) {
    res.status(500).json({
      isSuccessful: false,
      errorMsg: err,
      result: []
    });
  }
});

////////////////////////////////////////////////    Update Password    ///////////////////////////////////////////////
router.put("/password", authorise, async (req, res) => {
  try {
    var {
      currentpassword,
      newpassword
    } = req.body;

    var new_User;

    if (currentpassword != "") {
      const password = await pool.query("SELECT Password FROM Users WHERE Username=$1;", [req.username]);
      const isMatch = await bcrypt.compare(password, currentpassword);
      newpassword = await bcrypt.hash(password, 10);

      if (!isMatch) {
        return res.status(401).send({
          isSuccessful: false,
          errorMsg: "Current Password Incorrect",
          result: []
        })
      }
      new_User = await pool.query(
        "UPDATE Users SET Password=$1 WHERE UserName=$2 RETURNING*;",
        [newpassword, req.username]
      );

      res.json({
        isSuccessful: true,
        errorMsg: "",
        result: new_User.rows
      });
    } else {
      new_User = await pool.query(
        "UPDATE Users SET Password=$1, SignUpType=$2 WHERE UserName=$3 RETURNING*;",
        [newpassword, 10, req.username]
      );

      res.json({
        isSuccessful: true,
        errorMsg: "",
        result: new_User.rows
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

module.exports = router;
const router = require("express").Router();
const pool = require("../db_creation/db");
const authorise = require("../middleware/authorise")();
const refresh_authorise = require("../middleware/refresh_authorise")();
var validator = require("email-validator");
const {
  phone
} = require('phone');
const isTimestamp = require('validate.io-timestamp');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const fbadmin = require('firebase-admin');

const {
  OAuth2Client
} = require('google-auth-library');
const googleClient = new OAuth2Client(process.env.GOOGLE_LOGIN_CLIENT_ID);

async function googleVerify(provideridtoken) {
  const ticket = await googleClient.verifyIdToken({
    idToken: provideridtoken,
    audience: process.env.GOOGLE_LOGIN_CLIENT_ID
  });
  const payload = ticket.getPayload();
  return payload;
}

// Initialize the Firebase Admin SDK
const serviceAccount = require("./../" + process.env.FIREBASE_SERVICE_ADMIN_KEY_FILE);
fbadmin.initializeApp({
  credential: fbadmin.credential.cert(serviceAccount),
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////          USER TABLE            /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Register   ///////////////////////////////////////////
// add new user
router.post("/register", async (req, res) => {
  try {
    var {
      emailaddress,
      mobileno,
      signuptype,
      provideridtoken,
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
    // storing a hashedpassword for data security 
    const hashedpassword = (password != "" ? await bcrypt.hash(password, 10) : "");
    var signinid = "";
    if (signuptype == 0) {
      if (password == "" && signuptype == 0) {
        return res.json({
          isSuccessful: false,
          errorMsg: "Password Cannot be null",
          result: []
        });
      }
      if (signuptype == 1) {
        const payload = await googleVerify(provideridtoken);
        signinid = payload['sub'];

        if (!payload['email_verified']) {
          return res.json({
            isSuccessful: false,
            errorMsg: "Unverified Google Email",
            result: []
          });
        }
        if (emailaddress == "")
          emailaddress = payload['email'];
        if (fname == "")
          fname = payload['given_name'];
        if (lname == "")
          lname = payload['family_name'];
        if (displaypicture == "")
          displaypicture = payload['picture'];
      }

      const validEmail = validator.validate(emailaddress);

      const {
        isValid,
        phoneNumber,
        countryIso2,
        countryIso3,
        countryCode
      } = phone(mobileno, {
        country: 'IND'
      });
      if (validEmail && isValid) {
        const new_User = await pool.query(
          "INSERT INTO Users (EmailAddress, MobileNo, SignUpType, SignInID, Password, UserName, FName, LName, Bio, IsCreator, DisplayPicture, TwitterHandle, Instagram, Youtube, Website) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING*;",
          [
            emailaddress,
            phoneNumber,
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

        // Only Login with OTP route to get access and refresh tokens
        // No JWT on Register
        // // generate access token for the new user
        // new_User.rows[0]['x-access-token'] = jwt.sign({
        //   user: username
        // }, process.env.JWT_ACCESS_TOKEN_SECRET, {
        //   expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
        // });
        // // generate refresh token for the new user
        // new_User.rows[0]['x-refresh-token'] = jwt.sign({
        //   user: username
        // }, process.env.JWT_REFRESH_TOKEN_SECRET, {
        //   expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
        // });
        res.json({
          isSuccessful: true,
          errorMsg: "",
          result: new_User.rows
        });
      } else {
        res.json({
          isSuccessful: false,
          errorMsg: !validEmail && !isValid ? "Email Address & Mobile Number Invalid" : validEmail ? "Mobile Number Invalid" : "Email Address Invalid",
          result: []
        });
      }
    } else {
      res.json({
        isSuccessful: false,
        errorMsg: "Invalid SignUpType Value. 0: UnameEmailMobileNoPass",
        result: []
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

///////////////////////////////////////////   Login   ///////////////////////////////////////////
/// signintype => 0: uname, password, email-otp
///               1: uid, phonenumber
router.post('/login/:signintype', async (req, res) => {
  try {
    const {
      signintype
    } = req.params;
    if (signintype == "0") {
      const {
        username,
        password,
        otp
      } = req.body;
      if (!username || !password) {
        throw new Error('Username, password and OTP are required')
      }

      //  In case user sends email instead of username
      const valid = validator.validate(username);
      var userNameUp; // update username if email is send instead of username

      var user_col;
      if (!valid) {
        user_col = await pool.query("SELECT * FROM Users WHERE UserName = $1;", [username]);
        userNameUp = username;
      } else {
        user_col = await pool.query("SELECT * FROM Users WHERE emailaddress = $1;", [username]);
        userNameUp = user_col.rows[0].username;
      }

      if (!user_col.rows[0]) {
        return res.send({
          isSuccessful: false,
          errorMsg: "Username Incorrect",
          result: []
        });
      }

      if (user_col.rows[0].signuptype == 0 || user_col.rows[0].signuptype == 10) {

        const isMatch = await bcrypt.compare(password, user_col.rows[0].password);

        if (!isMatch) {
          return res.send({
            isSuccessful: false,
            errorMsg: "Password Incorrect, Please Go Back",
            result: []
          })
        }

        //if guest login
        if (otp == "" && username == process.env.GUEST_LOGIN_USERNAME && password == process.env.GUEST_LOGIN_PASSWORD) {
          // generate access token for the new user
          const accessToken = jwt.sign({
            user: userNameUp
          }, process.env.JWT_ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
          });
          // generate refresh token for the new user
          const refreshToken = jwt.sign({
            user: userNameUp
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
        }

        // else verify otp
        const ud = await pool.query("SELECT * FROM otp WHERE otp=$1 AND username=$2;", [otp, userNameUp]);
        if (ud.rows[0]) {
          // compare if otp older than expiry in ms
          if ((new Date() - Date.parse(ud.rows[0].createdat)) / 1000 < process.env.OTP_EXPIRY_IN_MS) {

            const vd = await pool.query("DELETE FROM otp WHERE username=$1 RETURNING*", [userNameUp]);

            // OTP Verified scenario
            // generate access token for the new user
            const accessToken = jwt.sign({
              user: userNameUp
            }, process.env.JWT_ACCESS_TOKEN_SECRET, {
              expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
            });
            // generate refresh token for the new user
            const refreshToken = jwt.sign({
              user: userNameUp
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
            const vd = await pool.query("DELETE FROM otp WHERE username=$1 RETURNING*", [userNameUp]);
            if (vd.rows[0]) {
              return res.send({
                isSuccessful: true,
                errorMsg: "",
                result: "OTP Expired"
              });
            }
          }
        } else {
          return res.send({
            isSuccessful: true,
            errorMsg: "",
            result: "Incorrect OTP"
          });
        }

      } else {
        res.json({
          isSuccessful: false,
          errorMsg: "UnAuthorised: SignInType and SignUpType Doesn't Match",
          result: []
        });
      }
    }
    // mobile number otp firebase login
    else if (signintype == "1") {
      const {
        idtoken,
        phonenumber
      } = req.body;
      fbadmin.auth().verifyIdToken(idtoken)
        .then(async (decodedIdToken) => {
          // user mobile otp verified
          const ud = await pool.query("SELECT username FROM users WHERE mobileno=$1", [phonenumber]);
          if (ud.rows[0]) {
            userNameUp = ud.rows[0].username;

            // revokeRefreshTokens to reset firebase user for future logins
            fbadmin.auth().revokeRefreshTokens(decodedIdToken.uid)
              .then(() => {
                // OTP Verified scenario
                // generate access token for the new user
                const accessToken = jwt.sign({
                  user: userNameUp
                }, process.env.JWT_ACCESS_TOKEN_SECRET, {
                  expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
                });
                // generate refresh token for the new user
                const refreshToken = jwt.sign({
                  user: userNameUp
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
              })
              .catch((error) => {
                fbadmin.auth().revokeRefreshTokens(decodedIdToken.uid)
                  .then(() => {
                    // OTP Verified scenario
                    // generate access token for the new user
                    const accessToken = jwt.sign({
                      user: userNameUp
                    }, process.env.JWT_ACCESS_TOKEN_SECRET, {
                      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
                    });
                    // generate refresh token for the new user
                    const refreshToken = jwt.sign({
                      user: userNameUp
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
                  })
                  .catch((error) => {
                    res.json({
                      isSuccessful: false,
                      errorMsg: "Server Error Please Retry!",
                      result: []
                    });
                  });
              });
          } else {
            res.json({
              isSuccessful: false,
              errorMsg: "Unregistered Mobile Number",
              result: []
            });
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          res.json({
            isSuccessful: false,
            errorMsg: "OTP Not Verified, please retry!",
            result: []
          });
        });
    }
    // google login
    else if (signintype == "2") {
      const {
        provideridtoken
      } = req.body;
      const payload = await googleVerify(provideridtoken);
      const signinid = payload['sub'];

      if (!payload['email_verified']) {
        return res.json({
          isSuccessful: false,
          errorMsg: "Unverified Google Email",
          result: []
        });
      }

      const emailaddress = payload['email'];

      const user_col = await pool.query("SELECT * FROM Users WHERE EmailAddress = $1 AND SignInID = $2;", [emailaddress, signinid]);
      if (user_col.rows[0]) {
        if (user_col.rows[0].signuptype == 1 || user_col.rows[0].signuptype == 10) {

          // generate access token for the new user
          const accessToken = jwt.sign({
            user: user_col.rows[0].username
          }, process.env.JWT_ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
          });

          // generate refresh token for the new user
          const refreshToken = jwt.sign({
            user: user_col.rows[0].username
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
          res.json({
            isSuccessful: false,
            errorMsg: "UnAuthorised: SignInType and SignUpType Doesn't Match",
            result: []
          });
        }
      } else {
        res.json({
          isSuccessful: false,
          errorMsg: "UnAuthorised Access: User data not available, Please Register!",
          result: []
        });
      }
    }
  } catch (err) {
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
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
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
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
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
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
    console.log(err);
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

// get creators profile data
router.get("/creators_search/:query", authorise, async (req, res) => {
  try {
    const {
      query
    } = req.params;
    const ud = await pool.query("SELECT Username, FName, LName, Bio, DisplayPicture FROM Users WHERE IsCreator = true AND (position($1 in LOWER(Username))>0 OR position($1 in LOWER(Fname))>0 OR position($1 in LOWER(Lname))>0) LIMIT 20 OFFSET 0;", [query.toLowerCase()]);
    res.json({
      isSuccessful: true,
      errorMsg: "",
      result: ud.rows
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
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
        return res.json({
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
        "SELECT DisplayPicture FROM Users WHERE UserName = $1;",
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
      emailaddress,
      fname,
      lname,
      bio,
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
    if (fname != "0")
      new_User = await pool.query(
        "UPDATE Users SET FName=$1 WHERE UserName=$2 RETURNING*;",
        [fname, req.username]
      );
    if (lname != "0")
      new_User = await pool.query(
        "UPDATE Users SET LName=$1 WHERE UserName=$2 RETURNING*;",
        [lname, req.username]
      );
    if (bio != "0")
      new_User = await pool.query(
        "UPDATE Users SET Bio=$1 WHERE UserName=$2 RETURNING*;",
        [bio, req.username]
      );
    if (displaypicture != "")
      new_User = await pool.query(
        "UPDATE Users SET DisplayPicture=$1 WHERE UserName=$2 RETURNING*;",
        [displaypicture, req.username]
      );
    if (twitterhandle != "0")
      new_User = await pool.query(
        "UPDATE Users SET TwitterHandle=$1 WHERE UserName=$2 RETURNING*;",
        [twitterhandle, req.username]
      );
    if (instagram != "0")
      new_User = await pool.query(
        "UPDATE Users SET Instagram=$1 WHERE UserName=$2 RETURNING*;",
        [instagram, req.username]
      );
    if (youtube != "0")
      new_User = await pool.query(
        "UPDATE Users SET Youtube=$1 WHERE UserName=$2 RETURNING*;",
        [youtube, req.username]
      );
    if (website != "0")
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
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
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
        return res.send({
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
    res.json({
      isSuccessful: false,
      errorMsg: err.message,
      result: []
    });
  }
});

module.exports = router;
const router = require("express").Router();
const pool = require("../db_creation/db");
const hbs = require('nodemailer-express-handlebars');
const authorise = require("../middleware/authorise")();
const nodemailer = require('nodemailer')
const path = require('path')
const otpGenerator = require('otp-generator');
const fs = require('fs');
require('dotenv').config();
const textbelt = require('textbelt');

var transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: process.env.Email,
        pass: process.env.Password
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          OTP Based Login            ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/:username', async (req, res) => {
    try {
        const {
            username
        } = req.params;

        const otp = otpGenerator.generate(6, {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        });

        console.log(otp);
        var delOTP = await pool.query("DELETE FROM otp WHERE username=$1 RETURNING*;", [username]);

        const ud = await pool.query("SELECT emailaddress FROM users WHERE username=$1;", [username]);

        const vd = await pool.query("INSERT INTO OTP (username, otp, createdat) VALUES ($1, $2, TO_TIMESTAMP($3));", [username, otp, Date.now() / 1000]);

        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve('./templates/'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./templates/'),
        };

        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))

        result = []
        var mailOptions = {
            from: "Crezalo <" + process.env.Email + ">", // sender address
            to: ud.rows[0].emailaddress, // list of receivers separated by comma
            subject: "🎉WELCOME TO CREZALO🎉",
            template: "otp", // the name of the template file i.e email.handlebars
            context: {
                name: username, // replace {{name}} with Adebola
                otp: otp
            }
        };

        // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                result.push(error);
                return console.log(error);
            }
            console.log("Message Info: " + info.response);
        });

        return res.send({
            isSuccessful: true,
            errorMsg: "",
            result: ["Success", ud.rows[0].emailaddress.replace(/(\w{1})(.*)(\w{1})@(.*)/, '$1******$3@$4')]
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});


router.get('/verify/:otp/:username', async (req, res) => {
    try {
        const {
            otp,
            username
        } = req.params

        const ud = await pool.query("SELECT * FROM otp WHERE otp=$1 AND username=$2;", [otp, username]);
        if (ud.rows[0]) {
            // compare if otp older than expiry in ms
            if ((new Date() - Date.parse(ud.rows[0].createdat)) / 1000 < process.env.OTP_EXPIRY_IN_MS) {

                const vd = await pool.query("DELETE FROM otp WHERE username=$1 RETURNING*", [username]);
                return res.send({
                    isSuccessful: true,
                    errorMsg: "",
                    result: "Verified"
                });
            } else {
                const vd = await pool.query("DELETE FROM otp WHERE username=$1 RETURNING*", [username]);
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
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

module.exports = router;
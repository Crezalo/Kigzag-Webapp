// Packages
const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const {
    Signale
} = require('signale');
const pool = require('./pool');
const bot = require('./bot');

require("dotenv").config();

// Variables
const logger = new Signale({
    scope: 'Express'
});
const app = express();
const port = process.env.HTTPS == 'true' ? 443 : process.env.HTTP_PORT;

// Define render engine and assets path
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/styling_js')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// GET /verify/id
app.get('/verify/:verifyId?', (req, res) => {
    try {
        if (!req.params.verifyId) return res.sendFile(path.join(__dirname, '/html/invalidLink.html'));
        if (!pool.isValidLink(req.params.verifyId)) return res.sendFile(path.join(__dirname, '/html/invalidLink.html'));
        res.render(path.join(__dirname, '/html/verify.html'));
    } catch (err) {
        console.log(err);
    }
});

// // POST /verify/id
// app.post('/verify/:verifyId?', async (req, res) => {
//     if (!req.body || !req.body['g-recaptcha-response']) return res.sendFile(path.join(__dirname, '/html/invalidLink.html'));

//     const response = await axios({
//         method: 'post',
//         url: `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptcha['secret-key']}&response=${req.body['g-recaptcha-response']}`,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     });

//     if (!response.data.success) return res.sendFile(path.join(__dirname, '/html/invalidCaptcha.html'));
//     if (!pool.isValidLink(req.params.verifyId)) return res.sendFile(path.join(__dirname, '/html/invalidLink.html'));
//     bot.addRole(pool.getDiscordId(req.params.verifyId));
//     bot.removeRole(pool.getDiscordId(req.params.verifyId));
//     pool.removeLink(req.params.verifyId);
//     res.sendFile(path.join(__dirname, '/html/valid.html'));
// });

function main() {
    if (process.env.HTTPS == 'true') {
        https.createServer({
            key: fs.readFileSync('private.pem'),
            cert: fs.readFileSync('certificate.pem')
        }, app).listen(port, () => logger.info(`Listening on port ${port}.`));
    } else {
        app.listen(port, () => logger.info(`Listening on port ${port}.`));
    }
}

module.exports = {
    run: main
};
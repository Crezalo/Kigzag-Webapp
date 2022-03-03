// Packages
const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const {
  Signale
} = require('signale');
const cors = require("cors");
const router = require("./routes/routes");
const subs_router = require("./routes/subscriptions_routes");
const dis_router = require("./routes/discord_routes");
const discord_bot = require('./discord_token_gating_bot/bot');

require("dotenv").config();
require("express-async-errors");

// Variables
const logger = new Signale({
  scope: 'Express'
});
const port = process.env.HTTPS == 'true' ? 443 : process.env.HTTP_PORT;

const app = express();

// Define render engine and assets path
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './discord_token_gating_bot/styling_js')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// define routes
app.use("/", router); // core frontend routes
app.use("/subs", subs_router); // subscription data routes
app.use("/discord", dis_router.router); // discord token gating data routes

// run discord bot
discord_bot.run();
dis_router.validateLinkPoolTable();

app.listen(5000, (err) => {
  console.log("server is listening on port 5000");
});
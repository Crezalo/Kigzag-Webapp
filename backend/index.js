// Packages
const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const app = express();
const NodeMediaServer = require('node-media-server');
const {
  Signale
} = require('signale');
const cors = require("cors");
const router = require("./routes/routes");
const subs_router = require("./routes/subscriptions_routes");
const dis_router = require("./routes/discord_routes");
const live_router = require("./routes/livestream_routes");
const discord_bot = require('./discord_token_gating_bot/bot');
const server = require('http').createServer(app);
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

require("dotenv").config();
require("express-async-errors");

// Variables
const logger = new Signale({
  scope: 'Express'
});
const port = process.env.HTTPS == 'true' ? 443 : process.env.HTTP_PORT;
let socketList = {};

// Define render engine and assets path
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './discord_token_gating_bot/styling_js')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// define routes

// // Ping Route for test
// app.get('/ping', (req, res) => {
//   res
//     .json({
//       success: true,
//     })
//     .status(200);
// });

app.use("/", router); // core frontend routes
app.use("/subs", subs_router); // subscription data routes
app.use("/discord", dis_router.router); // discord token gating data routes
app.use("/livestream", live_router); // discord token gating data routes

// run discord bot
discord_bot.run();
dis_router.validateLinkPoolTable();

// Video Chat Socket
io.on('connection', (socket) => {
  require('./socketFunctions')(socket, io, socketList)
});

const config = {
  logType: 1,
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
};

const nms = new NodeMediaServer(config);
nms.run();
console.log("Live Streaming Node Media Server is listening on port 8000");

server.listen(5000, (err) => {
  console.log("Server is listening on port 5000");
});
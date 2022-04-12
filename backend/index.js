// Packages
const express = require('express');
const expressListRoutes = require('express-list-routes');
const path = require('path');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const app = express();
const {
  Signale
} = require('signale');
const cors = require("cors");

///////// Import Routes ////////

// general table for oth creator and user
const user_router = require("./routes/user_routes");

// creator dominated table routes
const colab_router = require("./routes/creator/colab_routes");
const dis_router = require("./routes/creator/discord_routes");
const fininfo_router = require("./routes/creator/fininfo_routes");
const live_router = require("./routes/creator/livestream_routes");
const shoutout_router = require("./routes/creator/shoutout_routes");
const subs_router = require("./routes/creator/subscriptions_routes");

// user dominated table routes
const user_dis_router = require("./routes/user/discord_routes");
const user_vod_router = require("./routes/user/vod_routes");
const user_video_series_router = require("./routes/user/video_series_routes");
const user_livestream_router = require("./routes/user/livestream_routes");
const user_video_call_router = require("./routes/user/video_call_routes");
const user_community_combo_router = require("./routes/user/community_combo_routes");
const user_shoutout_router = require("./routes/user/shoutout_routes");
const user_colab_router = require("./routes/user/colab_routes");

const discord_bot = require('./discord_token_gating_bot/bot');
const nodeMediaServer = require('./nodeMediaServer'); // for Live Streaming
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

//////// Connect routes  /////////

// general
app.use("/", user_router); // core frontend routes for user

// creator info + sub data
app.use("/colab", colab_router);
app.use("/discord", dis_router);
app.use("/fininfo", fininfo_router);
app.use("/livestream", live_router.router);
app.use("/shoutout", shoutout_router);
app.use("/subscription", subs_router);

// user sub data
app.use("/user_colab", user_colab_router);
app.use("/user_community_combo", user_community_combo_router);
app.use("/user_discord", user_dis_router.router);
app.use("/user_livestream", user_livestream_router);
app.use("/user_shoutout", user_shoutout_router);
app.use("/user_video_call", user_video_call_router);
app.use("/user_video_series", user_video_series_router);
app.use("/user_vod", user_vod_router);

// run discord bot
discord_bot.run();
user_dis_router.validateLinkPoolTable();

// Video Chat Socket
io.on('connection', (socket) => {
  require('./socketFunctions')(socket, io, socketList)
});

// Live Stream via NodeMediaServer
nodeMediaServer.run();
console.log("Live Streaming Node Media Server is listening on port 8000");

server.listen(5000, (err) => {
  console.log("Server is listening on port 5000");
});

// Lists all routes for port 5000
// expressListRoutes(app, {
//   prefix: '/'
// });
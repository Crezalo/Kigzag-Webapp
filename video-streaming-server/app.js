const express = require('express');
const expressListRoutes = require('express-list-routes');
const fs = require('fs');
const thumbsupply = require('thumbsupply');
const cors = require('cors');
require("express-async-errors");
const video_router = require("./routes/video_routes");
const series_router = require("./routes/series_routes");

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use("/", video_router);
app.use("/series", series_router);

app.listen(4000, function () {
  console.log('Video Streaming Server is listening on port 4000!')
});

// Lists all routes for port 4000
// expressListRoutes(app, {
//   prefix: '/'
// });
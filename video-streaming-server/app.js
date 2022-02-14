const express = require('express');
const fs = require('fs');
const thumbsupply = require('thumbsupply');
const cors  = require('cors');
require("express-async-errors");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(4000, function () {
  console.log('Video Streaming Server is listening on port 4000!')
});
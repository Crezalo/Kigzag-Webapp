const express = require("express");

// create express web server instance
const app = express();

// tell express to serve up production assets from the out directory
app.use(express.static("out"));

// tell express to listen for incoming connections on the specified PORT
app.listen(3000, (err) => {
  if (!err) {
    // log the LOCALHOST and LOCALIP addresses where the app is running
    console.log(
      "Application is running at http://localhost:3000/");
  } else {
    console.err(`\nUnable to start server: ${err}`);
  }
});
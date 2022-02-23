const express = require("express");
const cors = require("cors");
require("express-async-errors");
const router = require("./routes/routes");
const dis_router = require("./routes/discord_bot_routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router); // for frontend interactions
app.use("/discordBot", dis_router); // for internal use by discord bot

app.listen(5000, (err) => {
  console.log("server is listening on port 5000");
});

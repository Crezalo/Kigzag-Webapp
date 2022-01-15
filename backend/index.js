const express = require("express");
const app = express();
require("express-async-errors");

const user_route = require("./routes/user_routes");

app.use(express.json());
app.use("/", user_route);

app.listen(3000, (err) => {
  console.log("server is listening on port 3000");
});

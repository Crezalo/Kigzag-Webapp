const express = require("express");
const cors = require("cors");
require("express-async-errors");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, (err) => {
  console.log("server is listening on port 5000");
});

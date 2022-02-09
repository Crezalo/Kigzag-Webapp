const express = require("express");
const cors = require("cors");
require("express-async-errors");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

// to resolve CORS policy that
// doesn't allow localhost:3000
// to call localhost:5000
// app.use(() => (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(5000, (err) => {
  console.log("server is listening on port 5000");
});

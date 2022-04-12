const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kigzag@123",
  database: "kigzag_2",
  port: 5432,
});

module.exports = pool;

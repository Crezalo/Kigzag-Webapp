const Pool = require("pg").Pool;

const pool = new Pool({
  host: 'localhost',
  user: "postgres",
  password: "kigzag@123",
  database: "kigzag_2",
  port: 5432,
});

const createTablesInPostgresDB = require("./db_table_creation");

createTablesInPostgresDB(pool);

module.exports = pool;
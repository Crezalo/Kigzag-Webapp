const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kaisraictt@123",
  database: "xeldorado_webapp",
  port: 5432,
});

const createTablesInPostgresDB = require("./db_table_creation");

createTablesInPostgresDB(pool);

module.exports = pool;

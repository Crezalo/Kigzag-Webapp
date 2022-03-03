const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kigzag@123",
  database: "kigzag",
  port: 5432,
});

const createTablesInPostgresDB = require("./db_table_creation");
const createTablesInPostgresDB_subs = require("./db_table_creation_subs");
const createTablesInPostgresDB_subs_discord = require("./db_table_creation_subs_discord");
const createTablesInPostgresDB_subs_video_on_demand = require("./db_table_creation_subs_video_on_demand");
const createTablesInPostgresDB_subs_live_streaming = require("./db_table_creation_subs_live_streaming");
const createTablesInPostgresDB_subs_video_call = require("./db_table_creation_subs_video_call");

createTablesInPostgresDB(pool);
createTablesInPostgresDB_subs(pool);
createTablesInPostgresDB_subs_discord(pool);
createTablesInPostgresDB_subs_video_on_demand(pool);
createTablesInPostgresDB_subs_live_streaming(pool);
createTablesInPostgresDB_subs_video_call(pool);
createTablesInPostgresDB(pool);

module.exports = pool;

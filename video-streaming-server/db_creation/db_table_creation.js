module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1. Video Data from a creator
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_video (VideoId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Title VARCHAR(255) NOT NULL, Description Text NOT NULL, Duration INTEGER NOT NULL, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("VS PG ERROR 1", err));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Video Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_video') THEN \
          ALTER TABLE Creator_video \
              ADD CONSTRAINT fk_creator_video \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
  .catch(err => console.log("fk ERROR 1", err));
};
module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1. User_TipJar info table
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_TipJar (TipId VARCHAR(255) PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Amount REAL NOT NULL, Message Text, TippedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_TipJar Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_TipJar Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_tipjar_creator') THEN \
          ALTER TABLE User_TipJar \
              ADD CONSTRAINT fk_user_tipjar_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR User_TipJar Table\n\n\t\t", err.message));

  // User_TipJar Table UserName is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_tipjar_username') THEN \
          ALTER TABLE User_TipJar \
              ADD CONSTRAINT fk_user_tipjar_username \
              FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 1 User_TipJar Table\n\n\t\t", err.message));
};
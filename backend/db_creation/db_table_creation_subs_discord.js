module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //9. User Discord Subscriptions Data
  //type = 0: 1month, 1: 3month, 2: 1year
  //chainid is to keep reference about tokens from which chain were burnt
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Discord_Sub (Id BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL, ServerId VARCHAR(255) NOT NULL, User_Discord_Id VARCHAR(255) NOT NULL, Expiry_Date TIMESTAMP NOT NULL, Type INTEGER NOT NULL, ChainId INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 9", err));

  //9.1 Discord Link Pool
  //for internal/bot use only no api endpoints exposed
  //cron job will operate on this table every 1 min and remove processed or failed rows
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Discord_Link_Pool (LinkId BIGSERIAL PRIMARY KEY, User_Discord_Id VARCHAR(255) NOT NULL, ServerId VARCHAR(255) NOT NULL, StartTime TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 9.1", err));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Discord_Sub Table UserAddress is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_discord_sub_user') THEN \
              ALTER TABLE User_Discord_Sub \
                  ADD CONSTRAINT fk_user_discord_sub_user \
                  FOREIGN KEY (UserAddress) REFERENCES Users(UserAddress); \
          END IF; \
      END; \
      $$;")
    .catch(err => console.log("fk ERROR 8", err));
};
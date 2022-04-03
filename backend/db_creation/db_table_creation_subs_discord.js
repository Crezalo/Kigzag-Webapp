module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //9. User Discord Subscriptions Data
  //type = 0: 1month, 1: 3month, 2: 1year
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Discord_Sub (Id BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL, ServerId VARCHAR(255) NOT NULL, User_Discord_Id VARCHAR(255) NOT NULL, Expiry_Date TIMESTAMP NOT NULL, Type INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Discord_Sub Table\n\n\t\t", err.message));

  //9.1 Discord Link Pool
  //for internal/bot use only no api endpoints exposed
  //cron job will operate on this table every 1 min and remove processed or failed rows
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Discord_Link_Pool (LinkId VARCHAR(255) PRIMARY KEY, User_Discord_Id VARCHAR(255) NOT NULL, ServerId VARCHAR(255) NOT NULL, StartTime TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Discord_Link_Pool Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Discord_Sub Table User is User from Users
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_discord_sub_user') THEN \
              ALTER TABLE User_Discord_Sub \
                  ADD CONSTRAINT fk_user_discord_sub_user \
                  FOREIGN KEY (UserAddress) REFERENCES Users(EmailAddress); \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 1 User_Discord_Sub Table\n\n\t\t", err.message));

  // User_Discord_Sub Table ServerId is ServerId from Creator_Discord
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_discord_sub_serverid') THEN \
              ALTER TABLE User_Discord_Sub \
                  ADD CONSTRAINT fk_discord_sub_serverid \
                  FOREIGN KEY (ServerId) REFERENCES Creator_Discord(ServerId); \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 2 User_Discord_Sub Table\n\n\t\t", err.message));
};
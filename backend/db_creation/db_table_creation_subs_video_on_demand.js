module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //10. User VOD Subscriptions Data
  //type = 0: 1month, 1: 3month, 2: 1year
  //chainid is to keep reference about tokens from which chain were burnt
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Video_On_Demand_Sub (Id BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Expiry_Date TIMESTAMP NOT NULL, Type INTEGER NOT NULL, ChainId INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 10", err));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Video_On_Demand_Sub Table Creator is User
  await pool.query("DO $$ \
        BEGIN \
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_vod_sub_creator') THEN \
                ALTER TABLE User_Video_On_Demand_Sub \
                    ADD CONSTRAINT fk_user_vod_sub_creator \
                    FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
            END IF; \
        END; \
        $$;")
    .catch(err => console.log("fk ERROR 9", err));

  // User_Video_On_Demand_Sub Table UserAddress is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_vod_sub_user') THEN \
              ALTER TABLE User_Video_On_Demand_Sub \
                  ADD CONSTRAINT fk_user_vod_sub_user \
                  FOREIGN KEY (UserAddress) REFERENCES Users(UserAddress); \
          END IF; \
      END; \
      $$;")
    .catch(err => console.log("fk ERROR 10", err));
};
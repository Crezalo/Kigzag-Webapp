module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //10. User CC Subscriptions Data
  //type = 0: 1month, 1: 3month, 2: 1year
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Community_Combo_Sub (Id BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, ServerId VARCHAR(255) NOT NULL, User_Discord_Id VARCHAR(255) NOT NULL, Expiry_Date TIMESTAMP NOT NULL, Type INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Community_Combo_Sub Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Community_Combo_Sub Table Creator is User
  await pool.query("DO $$ \
        BEGIN \
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cc_sub_creator') THEN \
                ALTER TABLE User_Community_Combo_Sub \
                    ADD CONSTRAINT fk_user_cc_sub_creator \
                    FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
            END IF; \
        END; \
        $$;")
    .catch(err => console.error("fk ERROR 1 User_Community_Combo_Sub Table\n\n\t\t", err.message));

  // User_Community_Combo_Sub Table User is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cc_sub_user') THEN \
              ALTER TABLE User_Community_Combo_Sub \
                  ADD CONSTRAINT fk_user_cc_sub_user \
                  FOREIGN KEY (UserAddress) REFERENCES Users(EmailAddress); \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 2 User_Community_Combo_Sub Table\n\n\t\t", err.message));

    // User_Community_Combo_Sub Table ServerId is ServerId from Creator_Discord
    await pool.query("DO $$ \
        BEGIN \
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_cc_sub_serverid') THEN \
                ALTER TABLE User_Community_Combo_Sub \
                    ADD CONSTRAINT fk_cc_sub_serverid \
                    FOREIGN KEY (ServerId) REFERENCES Creator_Discord(ServerId); \
            END IF; \
        END; \
        $$;")
      .catch(err => console.error("fk ERROR User_Community_Combo_Sub Table\n\n\t\t", err.message));
};
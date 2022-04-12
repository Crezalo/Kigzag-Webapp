module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //10. User VC Subscriptions Data
  //type = 0: 1month, 1: 3month, 2: 1year
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Video_Call_Sub (Id BIGSERIAL PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Expiry_Date TIMESTAMP NOT NULL, Type INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Video_Call_Sub Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Video_Call_Sub Table Creator is User
  await pool.query("DO $$ \
        BEGIN \
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_vc_sub_creator') THEN \
                ALTER TABLE User_Video_Call_Sub \
                    ADD CONSTRAINT fk_user_vc_sub_creator \
                    FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
            END IF; \
        END; \
        $$;")
    .catch(err => console.error("fk ERROR 1 User_Video_Call_Sub Table\n\n\t\t", err.message));

  // User_Video_Call_Sub Table User is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_vc_sub_user') THEN \
              ALTER TABLE User_Video_Call_Sub \
                  ADD CONSTRAINT fk_user_vc_sub_user \
                  FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 2 User_Video_Call_Sub Table\n\n\t\t", err.message));
};
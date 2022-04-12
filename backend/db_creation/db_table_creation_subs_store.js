module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1. User_Shoutout_Req Data
  //Platform: 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn
  //Status: 0: Pending, 1: Accepted & Waiting, 2: Completed, 3: Rejected
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Shoutout_Req (Id BIGSERIAL PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, UserMessage TEXT NOT NULL, CreatorResponse TEXT NOT NULL, Status INTEGER NOT NULL, LastUpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Shoutout_Req Table\n\n\t\t", err.message));

  //2. User_Colab_Req Data
  //Platform: 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn
  //Status: 0: Pending, 1: Accepted & Waiting, 2: Completed, 3: Rejected
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Colab_Req (Id BIGSERIAL PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, UserMessage TEXT NOT NULL, CreatorResponse TEXT NOT NULL, Status INTEGER NOT NULL, LastUpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Colab_Req Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Shoutout_Req Table Creator is User
  await pool.query("DO $$ \
          BEGIN \
              IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_shoutout_creator') THEN \
                  ALTER TABLE User_Shoutout_Req \
                      ADD CONSTRAINT fk_user_shoutout_creator \
                      FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
              END IF; \
          END; \
          $$;")
    .catch(err => console.error("fk ERROR 1 User_Shoutout_Req Table\n\n\t\t", err.message));

  // User_Shoutout_Req Table User is User
  await pool.query("DO $$ \
        BEGIN \
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_shoutout_user') THEN \
                ALTER TABLE User_Shoutout_Req \
                    ADD CONSTRAINT fk_user_shoutout_user \
                    FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
            END IF; \
        END; \
        $$;")
    .catch(err => console.error("fk ERROR 2 User_Shoutout_Req Table\n\n\t\t", err.message));

  // User_Colab_Req Table Creator is User
  await pool.query("DO $$ \
            BEGIN \
                IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_colab_creator') THEN \
                    ALTER TABLE User_Colab_Req \
                        ADD CONSTRAINT fk_user_colab_creator \
                        FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
                END IF; \
            END; \
            $$;")
    .catch(err => console.error("fk ERROR 1 User_Colab_Req Table\n\n\t\t", err.message));

  // User_Colab_Req Table User is User
  await pool.query("DO $$ \
          BEGIN \
              IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_colab_user') THEN \
                  ALTER TABLE User_Colab_Req \
                      ADD CONSTRAINT fk_user_colab_user \
                      FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
              END IF; \
          END; \
          $$;")
    .catch(err => console.error("fk ERROR 2 User_Colab_Req Table\n\n\t\t", err.message));
};
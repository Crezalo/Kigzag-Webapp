const createTablesInPostgresDB_subs = require("./db_table_creation_subs");
const createTablesInPostgresDB_subs_discord = require("./db_table_creation_subs_discord");
const createTablesInPostgresDB_subs_video_on_demand = require("./db_table_creation_subs_video_on_demand");
const createTablesInPostgresDB_subs_live_streaming = require("./db_table_creation_subs_live_streaming");
const createTablesInPostgresDB_subs_community_combo = require("./db_table_creation_subs_community_combo");
const createTablesInPostgresDB_subs_video_call = require("./db_table_creation_subs_video_call");
const createTablesInPostgresDB_subs_store = require("./db_table_creation_subs_store");

module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1.  User table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Users (UserId BIGSERIAL PRIMARY KEY, EmailAddress VARCHAR(255) NOT NULL UNIQUE, UserName VARCHAR(50) UNIQUE, IsCreator BOOLEAN NOT NULL, DisplayPicture VARCHAR(100) UNIQUE, TwitterHandle VARCHAR(50) UNIQUE, Instagram VARCHAR(50) UNIQUE, Youtube VARCHAR(50) UNIQUE, Website VARCHAR(50) UNIQUE);"
    )
    .catch((err) => console.log("PG ERROR Users Table\n\n\t\t", err.message));

  //2.  Creator Fin Info table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Fin_Info (Creator VARCHAR(255) PRIMARY KEY, AadharCard VARCHAR(100) UNIQUE NOT NULL, PanCard VARCHAR(100) UNIQUE NOT NULL, UPI_Id VARCHAR(50), Bank_Name VARCHAR(100), IFSC_Code VARCHAR(100), MICR_Code VARCHAR(100), Acc_Number VARCHAR(50));"
    )
    .catch((err) => console.log("PG ERROR Fin_Info Table\n\n\t\t", err.message));

  //3. Creator LiveStream table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_LiveStream (Creator VARCHAR(255) PRIMARY KEY, StreamKey VARCHAR(255) NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  //4. Creator Shoutout table creation
  //Platform: 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Shoutout (Id BIGSERIAL PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, Count_Per_Week INTEGER NOT NULL, Week_Till_Date_Exhausted INTEGER NOT NULL, Price INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Shoutout Table\n\n\t\t", err.message));

  //5. Creator Colab table creation
  //Platform: 0: Instagram,1: Youtube,2: Twitter,3: Facebook,4: LinkedIn
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Colab (Id BIGSERIAL PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, Count_Per_Week INTEGER NOT NULL, Week_Till_Date_Exhausted INTEGER NOT NULL, Price INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  //6. Creator Discord table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Discord (Creator VARCHAR(255) PRIMARY KEY, ServerId VARCHAR(255) UNIQUE NOT NULL, InviteLink VARCHAR(255) NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Discord Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Creator Fin Info Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_fin_info_creator') THEN \
          ALTER TABLE Fin_Info \
              ADD CONSTRAINT fk_fin_info_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Fin_Info Table\n\n\t\t", err.message));


  // Livestream Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_livestream_creator') THEN \
          ALTER TABLE Creator_LiveStream \
              ADD CONSTRAINT fk_livestream_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  // Creator_Shoutout Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_shoutout_creator') THEN \
          ALTER TABLE Creator_Shoutout \
              ADD CONSTRAINT fk_shoutout_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Shoutout Table\n\n\t\t", err.message));

  // Creator_Colab Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_colab_creator') THEN \
          ALTER TABLE Creator_Colab \
              ADD CONSTRAINT fk_colab_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Colab Table\n\n\t\t", err.message));

  // Creator_Discord Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_discord_creator') THEN \
          ALTER TABLE Creator_Discord \
              ADD CONSTRAINT fk_discord_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Discord Table\n\n\t\t", err.message));

  // Other Table creation
  // Users is an essential table and all other tables can be created once User table is ready
  createTablesInPostgresDB_subs(pool);
  createTablesInPostgresDB_subs_discord(pool);
  createTablesInPostgresDB_subs_video_on_demand(pool);
  createTablesInPostgresDB_subs_live_streaming(pool);
  createTablesInPostgresDB_subs_community_combo(pool);
  createTablesInPostgresDB_subs_video_call(pool);
  createTablesInPostgresDB_subs_store(pool);
};
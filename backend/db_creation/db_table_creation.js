module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1.  User table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Users (UserId BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL UNIQUE, UserName VARCHAR(50) UNIQUE, IsCreator BOOLEAN NOT NULL, TwitterHandle VARCHAR(50) UNIQUE, Discord VARCHAR(50) UNIQUE, Tiktok VARCHAR(50) UNIQUE, Instagram VARCHAR(50) UNIQUE, Youtube VARCHAR(50) UNIQUE, Website VARCHAR(50) UNIQUE);"
    )
    .catch((err) => console.log("PG ERROR 1", err));

  //2. Token Address table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_token (TokenId BIGSERIAL PRIMARY KEY, TokenAddress VARCHAR(255) NOT NULL UNIQUE, ChainId INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 2", err));

  //3. NFT Address table creation
  // STATUS: UNLISTED, LISTED, SOLD
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_nft (Id BIGSERIAL PRIMARY KEY, ChainId INTEGER NOT NULL, NFTAddress VARCHAR(255) NOT NULL, TokenId INTEGER NOT NULL,  TokenURI VARCHAR(255)  NOT NULL, STATUS VARCHAR(50) NOT NULL, Creator VARCHAR(255) NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 3", err));

  //4. NFT Address table creation
  // Choices: for general proposal => Choice 1\tChoice 2\tChoice 3 ... 
  // for allowances proposal => No\tYes
  // STATUS => ONGOING or CLOSED
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_dao (Id BIGSERIAL PRIMARY KEY, ChainId INTEGER NOT NULL, DAOAddress VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, ProposalId INTEGER NOT NULL,  Author VARCHAR(255) NOT NULL, IsAllowancesProposal BOOLEAN  NOT NULL, Managers VARCHAR(255) NOT NULL, Allowances VARCHAR(255), IsNative BOOLEAN NOT NULL, ProposalLink VARCHAR(255) NOT NULL, ProposalTitle VARCHAR(255) NOT NULL, ProposalDescription VARCHAR(255) NOT NULL, Choices VARCHAR(255) NOT NULL, StartTime TIMESTAMP NOT NULL, DURATION INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 3", err));

  //5. User to chain mapping
  // Used to show only revelant creators for given chainid
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_chain (Id BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL, ChainId INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR 4", err));

  //6. Creator Subscriptions Fee 1 Month prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 5", err));

  //7. Creator Subscriptions Fee 3 Month prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_3M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 6", err));

  //8. Creator Subscriptions Fee 1 Year prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1Y (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 7", err));
  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // NFT Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_nft_creator') THEN \
          ALTER TABLE Creator_nft \
              ADD CONSTRAINT fk_nft_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 1", err));

  // DAO Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_dao_creator') THEN \
          ALTER TABLE Creator_dao \
              ADD CONSTRAINT fk_dao_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 2", err));

  // DAO Table Author is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_dao_author') THEN \
          ALTER TABLE Creator_dao \
              ADD CONSTRAINT fk_dao_author \
              FOREIGN KEY (Author) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 3", err));

  // User Chain Table UserAddress
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_chain') THEN \
          ALTER TABLE User_chain \
              ADD CONSTRAINT fk_user_chain \
              FOREIGN KEY (UserAddress) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 4", err));

  // Creator_Sub_1M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_1m_creator') THEN \
          ALTER TABLE Creator_Sub_1M \
              ADD CONSTRAINT fk_creator_sub_1m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 5", err));

  // Creator_Sub_3M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_3m_creator') THEN \
          ALTER TABLE Creator_Sub_3M \
              ADD CONSTRAINT fk_creator_sub_3m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 6", err));

  // Creator_Sub_1Y Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_1y_creator') THEN \
          ALTER TABLE Creator_Sub_1Y \
              ADD CONSTRAINT fk_creator_sub_1y_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.log("fk ERROR 7", err));
};
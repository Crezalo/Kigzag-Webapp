module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //6. Creator Subscriptions Fee 1 Month prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 6", err));

  //7. Creator Subscriptions Fee 3 Month prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_3M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 7", err));

  //8. Creator Subscriptions Fee 1 Year prices
  // Discord Server Id is a number but stored as string in
  // prices are in creator token
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1Y (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL);"
    )
    .catch((err) => console.log("PG ERROR 8", err));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

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
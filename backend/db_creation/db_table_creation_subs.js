module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //6. Creator Subscriptions Fee 1 Month prices
  // Discord Server Id is a number but stored as string in
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, SeriesId VARCHAR(255), Series REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_1M Table\n\n\t\t", err.message));

  //7. Creator Subscriptions Fee 3 Month prices
  // Discord Server Id is a number but stored as string in
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_3M (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, SeriesId VARCHAR(255), Series REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_3M Table\n\n\t\t", err.message));

  //8. Creator Subscriptions Fee 1 Year prices
  // Discord Server Id is a number but stored as string in
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1Y (Creator VARCHAR(255) PRIMARY KEY, Discord_Server_Id VARCHAR(255), Discord REAL, Video_On_Demand REAL, SeriesId VARCHAR(255), Series REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_1Y Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Creator_Sub_1M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_1m_creator') THEN \
          ALTER TABLE Creator_Sub_1M \
              ADD CONSTRAINT fk_creator_sub_1m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Sub_1M Table\n\n\t\t", err.message));

  // Creator_Sub_3M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_3m_creator') THEN \
          ALTER TABLE Creator_Sub_3M \
              ADD CONSTRAINT fk_creator_sub_3m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Sub_3M Table\n\n\t\t", err.message));

  // Creator_Sub_1Y Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_1y_creator') THEN \
          ALTER TABLE Creator_Sub_1Y \
              ADD CONSTRAINT fk_creator_sub_1y_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Sub_1Y Table\n\n\t\t", err.message));
};
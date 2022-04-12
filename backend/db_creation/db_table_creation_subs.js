module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //6. Creator Subscriptions Fee 1 Month prices
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1M (Creator VARCHAR(255) PRIMARY KEY, Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_1M Table\n\n\t\t", err.message));

  //7. Creator Subscriptions Fee 3 Month prices
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_3M (Creator VARCHAR(255) PRIMARY KEY, Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_3M Table\n\n\t\t", err.message));

  //8. Creator Subscriptions Fee 1 Year prices
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Sub_1Y (Creator VARCHAR(255) PRIMARY KEY, Discord REAL, Video_On_Demand REAL, Live_Streaming REAL, Video_Call REAL, Community_Combo REAL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Sub_1Y Table\n\n\t\t", err.message));

  //8. Creator Subscriptions Fee for Video Series
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Series_Sub (SeriesId VARCHAR(255) PRIMARY KEY, OneMonth REAL NOT NULL, ThreeMonths REAL NOT NULL, OneYear REAL NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Series_Sub Table\n\n\t\t", err.message));
  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Creator_Sub_1M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_1m_creator') THEN \
          ALTER TABLE Creator_Sub_1M \
              ADD CONSTRAINT fk_creator_sub_1m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 1 Creator_Sub_1M Table\n\n\t\t", err.message));

  // Creator_Sub_3M Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_sub_3m_creator') THEN \
          ALTER TABLE Creator_Sub_3M \
              ADD CONSTRAINT fk_creator_sub_3m_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
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
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Sub_1Y Table\n\n\t\t", err.message));

  // Creator_Series_Sub Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_series_sub_seriesid') THEN \
          ALTER TABLE Creator_Series_Sub \
              ADD CONSTRAINT fk_creator_series_sub_seriesid \
              FOREIGN KEY (SeriesId) REFERENCES Creator_Series(SeriesId) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Series_Sub Table\n\n\t\t", err.message));
};
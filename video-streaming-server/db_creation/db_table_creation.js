module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1. Video Data from a creator
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_video (VideoId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, SeriesId VARCHAR(255) UNIQUE, Title VARCHAR(255) NOT NULL, Description Text NOT NULL, Duration INTEGER NOT NULL, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("VS PG ERROR Creator_video Table", err));
  
  //2. Video Series Data from a creator
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_series (SeriesId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, VideoIds TEXT[] UNIQUE NOT NULL);"
    )
    .catch((err) => console.log("VS PG ERROR Creator_series Table", err));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Video Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_video_creator') THEN \
          ALTER TABLE Creator_video \
              ADD CONSTRAINT fk_video_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
  .catch(err => console.error("fk ERROR Creator_video Table", err));

  // Video Series Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_series_creator') THEN \
          ALTER TABLE Creator_series \
              ADD CONSTRAINT fk_series_creator \
              FOREIGN KEY (Creator) REFERENCES Users(EmailAddress); \
      END IF; \
  END; \
  $$;")
  .catch(err => console.error("fk ERROR Creator_series Table", err));

  // Video Table SeriedId
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_video_seriedid') THEN \
          ALTER TABLE Creator_video \
              ADD CONSTRAINT fk_video_seriedid \
              FOREIGN KEY (SeriesId) REFERENCES Creator_series(SeriesId); \
      END IF; \
  END; \
  $$;")
  .catch(err => console.error("fk ERROR Creator_video Table", err));
};
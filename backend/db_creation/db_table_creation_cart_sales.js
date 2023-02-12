module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  // 1. User_Cart Data
  // CartId = Username_Creator_Feature_ProductId/SeriesId  
  // In case feature=0, productid/seriesid will be null, this ensures items in cart are unique 
  // Feature: 0: Video_On_Demand, 1: Course, 2: Merch
  // If Feature=0 , then ignore SeriesId and ProductId other use accordingly
  // Quantity will act like months for VOD and Course so 1, 3, 12 
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Cart (CartId VARCHAR(255) PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Feature INTEGER NOT NULL, SeriesId VARCHAR(255) UNIQUE, ProductId VARCHAR(255) UNIQUE, Quantity NUMERIC DEFAULT 1 NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Cart Table\n\n\t\t", err.message));

  //2. Sales Data
  // Feature: 0: Video_On_Demand, 1: Course, 2: Merch, 3: Tip
  // If Feature=0 , then ignore SeriesId and ProductId other use accordingly 
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Sales (SaleId BIGSERIAL PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Creator VARCHAR(255) NOT NULL, Feature INTEGER NOT NULL, SeriesId VARCHAR(255), ProductId VARCHAR(255), Quantity NUMERIC DEFAULT 1 NOT NULL, Amount INTEGER NOT NULL, DateTime TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Sales Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // User_Cart Table Creator is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cart_creator') THEN \
              ALTER TABLE User_Cart \
                  ADD CONSTRAINT fk_user_cart_creator \
                  FOREIGN KEY (Creator) REFERENCES Users(UserName) \
          ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 1 User_Cart Table\n\n\t\t", err.message));

  // User_Cart Table UserName is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cart_user') THEN \
              ALTER TABLE User_Cart \
                  ADD CONSTRAINT fk_user_cart_user \
                  FOREIGN KEY (UserName) REFERENCES Users(UserName) \
            ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 2 User_Cart Table\n\n\t\t", err.message));

  // User_Cart Table SeriesId is SeriesId
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cart_seriesid') THEN \
              ALTER TABLE User_Cart \
                  ADD CONSTRAINT fk_user_cart_seriesid \
                  FOREIGN KEY (SeriesId) REFERENCES Creator_Series(SeriesId) \
              ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 3 User_Cart Table\n\n\t\t", err.message));

  // User_Cart Table ProductId is ProductId from Creator_Merchandise
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_cart_productid') THEN \
              ALTER TABLE User_Cart \
                  ADD CONSTRAINT fk_user_cart_productid \
                  FOREIGN KEY (ProductId) REFERENCES Creator_Merchandise(ProductId) \
                  ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 4 User_Cart Table\n\n\t\t", err.message));

  // Sales Table Creator is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_sales_creator') THEN \
              ALTER TABLE Sales \
                  ADD CONSTRAINT fk_sales_creator \
                  FOREIGN KEY (Creator) REFERENCES Users(UserName) \
          ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 1 Sales Table\n\n\t\t", err.message));

  // Sales Table User is User
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_sales_user') THEN \
              ALTER TABLE Sales \
                  ADD CONSTRAINT fk_sales_user \
                  FOREIGN KEY (UserName) REFERENCES Users(UserName) \
            ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 2 Sales Table\n\n\t\t", err.message));

  // Sales Table SeriesId is SeriesId
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_sales_seriesid') THEN \
              ALTER TABLE Sales \
                  ADD CONSTRAINT fk_sales_seriesid \
                  FOREIGN KEY (SeriesId) REFERENCES Creator_Series(SeriesId) \
              ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 3 Sales Table\n\n\t\t", err.message));

  // Sales Table ProductId is ProductId from Creator_Merchandise
  await pool.query("DO $$ \
      BEGIN \
          IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_sales_productid') THEN \
              ALTER TABLE Sales \
                  ADD CONSTRAINT fk_sales_productid \
                  FOREIGN KEY (ProductId) REFERENCES Creator_Merchandise(ProductId) \
                  ON DELETE CASCADE; \
          END IF; \
      END; \
      $$;")
    .catch(err => console.error("fk ERROR 4 Sales Table\n\n\t\t", err.message));
}
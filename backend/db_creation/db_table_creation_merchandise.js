module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //6. Creator Merchandise Info table
  // if 2 variants then Variant=2 and those variant will be added to same table with productid = productid_variantNumber
  //Warranty period in months
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Merchandise (ProductId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Title VARCHAR(255) NOT NULL, Description TEXT NOT NULL, Inventory NUMERIC NOT NULL, Return_Refund_Policy TEXT NOT NULL, Country_of_Origin VARCHAR(255) NOT NULL, Price REAL NOT NULL, DiscountPercentage REAL NOT NULL, Variants NUMERIC DEFAULT 0 NOT NULL, VariantName VARCHAR(255), WarrantyPeriod NUMERIC NOT NULL, ShippingCharges REAL NOT NULL, FreeShippingAbove REAL DEFAULT 399 NOT NULL, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Merchandise Table\n\n\t\t", err.message));

  //8. User address table
  // Address type: "home", "work", "home2", "work2" .....
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_address (AddressId VARCHAR(255) PRIMARY KEY, UserName VARCHAR(255) NOT NULL, Type VARCHAR(255) NOT NULL, AddressLine1 TEXT NOT NULL, AddressLine2 TEXT NOT NULL, City VARCHAR(255) NOT NULL, PostalCode NUMERIC NOT NULL, Country VARCHAR(255) NOT NULL, MobileNo NUMERIC NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_address Table\n\n\t\t", err.message));

  //7. User bought merchandise info table
  //Delivery Status=> 0: packaging, 1: shippedFromCreatorEnd, 2: receivedByCustomer
  //Return Status=> 0:returnInitiated, 1: returnedFromUser, 2: recievedFromCreatorEnd
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Merchandise (OrderId VARCHAR(255) PRIMARY KEY, ProductId VARCHAR(255) NOT NULL, UserName VARCHAR(255) NOT NULL, AddressId VARCHAR(255) NOT NULL, Quantity NUMERIC DEFAULT 1 NOT NULL, BuyingPrice REAL NOT NULL, DeliveryStatusLink VARCHAR(255), DeliveryStatus NUMERIC DEFAULT 0 NOT NULL, IsReturnInitiated BOOLEAN DEFAULT FALSE, ReturnStatus NUMERIC DEFAULT 0 NOT NULL, BoughtAt TIMESTAMP NOT NULL, DeliveredAt TIMESTAMP, ReturnedInitiatedAt TIMESTAMP, ReturnedReceivedAt TIMESTAMP, IsRefundComplete BOOLEAN DEFAULT FALSE);"
    )
    .catch((err) => console.log("PG ERROR User_Merchandise Table\n\n\t\t", err.message));

  //9. User Merchandise Reviews table
  // ReviewId -> ProductId_OrderId_Username to ensure each user only gives one review for a given product for a given Order
  // Ratings -> 1,2,3,4,5
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS User_Merchandise_Reviews (ReviewId VARCHAR(255) PRIMARY KEY, ProductId VARCHAR(255) NOT NULL, UserName VARCHAR(255) NOT NULL, Ratings NUMERIC NOT NULL, CommentTitle VARCHAR(255), CommentDescription TEXT, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR User_Merchandise_Reviews Table\n\n\t\t", err.message));
  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Creator_Merchandise Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_creator_merchandise_creator') THEN \
          ALTER TABLE Creator_Merchandise \
              ADD CONSTRAINT fk_creator_merchandise_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Merchandise Table\n\n\t\t", err.message));

  // User_Merchandise Table UserName is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_merchandise_username') THEN \
          ALTER TABLE User_Merchandise \
              ADD CONSTRAINT fk_user_merchandise_username \
              FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 1 User_Merchandise Table\n\n\t\t", err.message));

  // User_Merchandise Table ProductId is ProductId from Creator_Merchandise
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_merchandise_productid') THEN \
          ALTER TABLE User_Merchandise \
              ADD CONSTRAINT fk_user_merchandise_productid \
              FOREIGN KEY (ProductId) REFERENCES Creator_Merchandise(ProductId) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 2 User_Merchandise Table\n\n\t\t", err.message));

  // User_Merchandise Table AddressId is AddressId from User_Address
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_merchandise_addressid') THEN \
          ALTER TABLE User_Merchandise \
              ADD CONSTRAINT fk_user_merchandise_addressid \
              FOREIGN KEY (AddressId) REFERENCES User_Address(AddressId) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 3 User_Merchandise Table\n\n\t\t", err.message));

  // User_Address Table UserName is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_address_username') THEN \
          ALTER TABLE User_Address \
              ADD CONSTRAINT fk_user_address_username \
              FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR User_Address Table\n\n\t\t", err.message));

  // User_Merchandise_Reviews Table UserName is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_merchandise_reviews_username') THEN \
          ALTER TABLE User_Merchandise_Reviews \
              ADD CONSTRAINT fk_user_merchandise_reviews_username \
              FOREIGN KEY (UserName) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 1 User_Merchandise_Reviews Table\n\n\t\t", err.message));

  // User_Merchandise_Reviews Table ProductId is ProductId from Creator_Merchandise
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_user_merchandise_reviews_productid') THEN \
          ALTER TABLE User_Merchandise_Reviews \
              ADD CONSTRAINT fk_user_merchandise_reviews_productid \
              FOREIGN KEY (ProductId) REFERENCES Creator_Merchandise(ProductId) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR 2 User_Merchandise_Reviews Table\n\n\t\t", err.message));
};
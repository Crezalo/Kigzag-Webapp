module.exports = async function createTablesInPostgresDB(pool){
    ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

    //1.  User table creation 
    await pool
        .query(
            "CREATE TABLE IF NOT EXISTS Users (UserId BIGSERIAL PRIMARY KEY, UserAddress VARCHAR(255) NOT NULL UNIQUE, UserName VARCHAR(50) UNIQUE, IsCreator BOOLEAN NOT NULL, TwitterHandle VARCHAR(50) UNIQUE, Discord VARCHAR(50) UNIQUE, Tiktok VARCHAR(50) UNIQUE, Instagram VARCHAR(50) UNIQUE, Youtube VARCHAR(50) UNIQUE, Website VARCHAR(50) UNIQUE);"
        )
        .catch(err => console.log("PG ERROR 2", err));    

    //2. Token Address table creation
    await pool
        .query(
            "CREATE TABLE IF NOT EXISTS Creator_token (TokenId BIGSERIAL PRIMARY KEY, TokenAddress VARCHAR(255) NOT NULL UNIQUE);"
        )
        .catch(err=> console.log("PG ERROR 3", err));
};

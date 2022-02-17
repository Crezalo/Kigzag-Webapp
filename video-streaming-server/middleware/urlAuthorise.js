const Web3Token = require('web3-token');
var WAValidator = require("wallet-address-validator");
const pool = require("../../video-streaming-server/db_creation/db");

module.exports = (optional = false) => async (urlAuthToken) => {
    try {
        console.log("url auth middleware");
        // getting a token from url
        const token = urlAuthToken

        const {
            address,
            body
        } = await Web3Token.verify(token);
        console.log("address");
        console.log(address);

        const {
            rows: [user]
        } = await pool.query("SELECT * FROM Users WHERE UserAddress=$1", [address])

        if (!user) {
            return ["User not found",,];
        }
        return ["SUCCESS", address, body];
    } catch (e) {
        if (!optional) {
            return ["Please Authenticate",,];
        }
    }
    next()
}
const Web3Token = require('web3-token');
var WAValidator = require("wallet-address-validator");
const pool = require("../../video-streaming-server/db_creation/db");

module.exports = (optional = false) => async (req, res, next) => {
    try {
        // getting a token from authorization header
        const token = req.headers['authorization']

        const {
            address,
            body
        } = await Web3Token.verify(token);

        const {
            rows: [user]
        } = await pool.query("SELECT * FROM Users WHERE UserAddress=$1", [address])

        if (!user) {
            res.status(401).send({
                error: 'User not Found'
            })
            throw new Error("User not found");
        }
        req.authAddress = address.toLowerCase()
        req.authBody = body
    } catch (e) {
        if (!optional) {
            return res.send({
                error: 'Please authenticate'
            })
        }
    }
    next()
}
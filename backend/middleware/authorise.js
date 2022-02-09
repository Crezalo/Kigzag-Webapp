const Web3Token = require('web3-token');
var WAValidator = require("wallet-address-validator");
const pool = require("../db_creation/db");

module.exports = (optional = false) => async (req, res, next) => {
    try {
        console.log("middleware");
        // getting a token from authorization header
        console.log(req.headers);
        const token = req.headers['authorization']
        console.log(token);

        const {
            address,
            body
        } = await Web3Token.verify(token);

        const { rows: [user]} = await pool.query("SELECT * FROM Users WHERE UserAddress=$1",[address])

        if (!user) {
            res.status(401).send({ error: 'User not Found' })
            throw new Error("User not found");
        }
        req.useraddress = address
        req.userbody = body
    } catch (e) {
        if (!optional) {
            return res.status(401).send({ error: 'Please authenticate' })
        }
    }
  next()
}
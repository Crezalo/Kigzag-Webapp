const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          User Cart TABLE            ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add User Cart Product   ///////////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        var {
            creator,
            feature,
            seriesid,
            productid,
            quantity
        } = req.body;

        var cartid = req.username + "_" + creator + "_" + feature + (feature === 1 ? "_" + seriesid : feature === 2 ? "_" + productid : "");

        new_merch = await pool.query(
            "SELECT * FROM User_Cart WHERE username = $1 AND cartid=$2;", [
                req.username, cartid
            ]);

        if (new_merch.rows.length >= 1) {
            if (feature != 2 && new_merch.rows[0].quantity != quantity) {
                new_merch = await pool.query(
                    "UPDATE User_Cart SET Quantity = $2 WHERE CartId = $1 AND UserName = $3 RETURNING*;",
                    [
                        cartid,
                        quantity,
                        req.username
                    ]
                );
                res.json({
                    isSuccessful: true,
                    errorMsg: "",
                    result: new_merch.rows
                });
            }
        } else {
            const new_colab = await pool.query(
                "INSERT INTO User_Cart (CartId, UserName, Creator, Feature, SeriesId, ProductId, Quantity) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING*;",
                [
                    cartid,
                    req.username,
                    creator,
                    feature,
                    seriesid == "" ? null : seriesid,
                    productid == "" ? null : productid,
                    quantity
                ]
            );
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: new_colab.rows
            });
        }
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_merch.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Items for User   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/allitems", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Cart WHERE username = $1;", [
            req.username
        ]);

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: ud.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Items for User   ///////////////////////////////////////////
// Get All Orders for given creator 
router.get("/singleitem/:cartid", authorise, async (req, res) => {
    try {
        const {
            cartid
        } = req.params;
        new_merch = await pool.query(
            "SELECT * FROM User_Cart WHERE username = $1 AND cartid=$2;", [
                req.username, cartid
            ]);
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_merch.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get Order Summary for All Items for User   ///////////////////////////////////////////
// Get Order Summary for All Items for given creator 
router.get("/ordersummary", authorise, async (req, res) => {
    try {
        new_merch = await pool.query(
            "SELECT * FROM User_Cart WHERE username = $1;", [
                req.username
            ]);

        var items = 0,
            delivery = 0,
            freeabove = 0;
        for (let i = 0; i < new_merch.rows.length; i++) {
            if (new_merch.rows[i].feature === 0) {
                if (new_merch.rows[i].quantity === "1") {
                    new0 = await pool.query("SELECT * FROM creator_sub_1m WHERE creator=$1;", [new_merch.rows[i].creator]);
                    items += new0.rows[0]["video_on_demand"]
                }
                if (new_merch.rows[i].quantity === "3") {
                    new0 = await pool.query("SELECT * FROM creator_sub_3m WHERE creator=$1;", [new_merch.rows[i].creator]);
                    items += new0.rows[0]["video_on_demand"]
                }

                if (new_merch.rows[i].quantity === "12") {
                    new0 = await pool.query("SELECT * FROM creator_sub_1y WHERE creator=$1;", [new_merch.rows[i].creator]);
                    items += new0.rows[0]["video_on_demand"]
                }
            }

            if (new_merch.rows[i].feature === 1) {
                new0 = await pool.query("SELECT * FROM creator_series_sub WHERE seriesid=$1;", [new_merch.rows[i].seriesid]);
                if (new_merch.rows[i].quantity === "1")
                    items += new0.rows[0]["onemonth"]
                if (new_merch.rows[i].quantity === "3")
                    items += new0.rows[0]["threemonths"]
                if (new_merch.rows[i].quantity === "12")
                    items += new0.rows[0]["oneyear"]
            }

            if (new_merch.rows[i].feature === 2) {
                new0 = await pool.query("SELECT * FROM creator_merchandise WHERE productid=$1;", [new_merch.rows[i].productid]);
                items += new0.rows[0]["price"] * new_merch.rows[i].quantity;
                if (delivery < new0.rows[0]["shippingcharges"]) delivery = new0.rows[0]["shipping charges"];
                if (freeabove < new0.rows[0]["shippingcharges"]) freeabove = new0.rows[0]["freeshippingabove"];
            }
        }

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: [items, freeabove < items ? 0 : delivery]
        });
    } catch (err) {
        console.log(err.message);
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});



///////////////////////////////////////////   Update   ///////////////////////////////////////////
router.put("/:cartid", authorise, async (req, res) => {
    try {
        const {
            cartid
        } = req.params;
        const {
            quantity
        } = req.body;
        new_merch = await pool.query(
            "UPDATE User_Cart SET Quantity = $2 WHERE CartId = $1 AND UserName = $3 RETURNING*;",
            [
                cartid,
                quantity,
                req.username
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_merch.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

router.delete("/:cartid", authorise, async (req, res) => {
    try {
        const {
            cartid
        } = req.params;

        new_merch = await pool.query(
            "DELETE FROM User_Cart WHERE CartId = $1 AND UserName = $2 RETURNING*;",
            [
                cartid,
                req.username
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_merch.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

module.exports = router;
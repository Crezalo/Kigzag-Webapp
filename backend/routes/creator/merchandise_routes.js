const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          Creator Merchandise TABLE            ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add New Creator Merchandise   ///////////////////////////////////////////
// add Colab
router.post("/", authorise, async (req, res) => {
    try {
        var {
            productid,
            title,
            description,
            inventory,
            return_refund_policy,
            country_of_origin,
            price,
            discountpercentage,
            warrantyperiod,
            shippingcharges,
            freeshippingabove
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO Creator_Merchandise (ProductId, Creator, Title, Description, Inventory, Return_Refund_Policy, Country_of_Origin, Price, DiscountPercentage, WarrantyPeriod, ShippingCharges, CreatedAt, UpdatedAt, FreeShippingAbove) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,TO_TIMESTAMP($12),TO_TIMESTAMP($13), $14) RETURNING*;",
            [
                productid,
                req.username,
                title,
                description,
                inventory,
                return_refund_policy,
                country_of_origin,
                price,
                discountpercentage,
                warrantyperiod,
                shippingcharges,
                Date.now() / 1000,
                Date.now() / 1000,
                freeshippingabove
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
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

///////////////////////////////////////////   Add New Creator Merchandise Variant ///////////////////////////////////////////
// add Colab
router.post("/variant", authorise, async (req, res) => {
    try {
        var {
            productid,
            title,
            description,
            inventory,
            return_refund_policy,
            country_of_origin,
            price,
            discountpercentage,
            warrantyperiod,
            shippingcharges,
            variantname,
            freeshippingabove
        } = req.body;

        var {
            mainPid,
            variantNum
        } = productid.split('_');

        up_merch = await pool.query(
            "UPDATE Creator_Merchandise SET Variants = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
            [
                mainPid,
                req.username,
                variantNum
            ]
        );

        const new_colab = await pool.query(
            "INSERT INTO Creator_Merchandise (ProductId, Creator, Title, Description, Inventory, Return_Refund_Policy, Country_of_Origin, Price, DiscountPercentage, WarrantyPeriod, ShippingCharges, CreatedAt, UpdatedAt, VariantName, FreeShippingAbove) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,TO_TIMESTAMP($12),TO_TIMESTAMP($13), $14, $15) RETURNING*;",
            [
                productid,
                req.username,
                title,
                description,
                inventory,
                return_refund_policy,
                country_of_origin,
                price,
                discountpercentage,
                warrantyperiod,
                shippingcharges,
                Date.now() / 1000,
                Date.now() / 1000,
                variantname,
                freeshippingabove
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
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

///////////////////////////////////////////   Get All Data for Creator   ///////////////////////////////////////////
// Get All Products for given creator 
router.get("/:creator", authorise, async (req, res) => {
    try {
        const {
            creator
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Merchandise WHERE Creator = $1;", [creator]);

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

///////////////////////////////////////////   Get Data for ProductId   /////////////////////////////////////////// 
router.get("/product/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const ud = await pool.query("SELECT * FROM Creator_Merchandise WHERE ProductId = $1;", [productid]);
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

///////////////////////////////////////////   Update   ///////////////////////////////////////////
router.put("/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const {
            title,
            description,
            inventory,
            return_refund_policy,
            country_of_origin,
            price,
            discountpercentage,
            warrantyperiod,
            shippingcharges,
            variantname,
            freeshippingabove
        } = req.body;

        var new_merch;
        if (title != "") {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET Title = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    title
                ]
            );
        }
        if (description != "") {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET Description = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    description
                ]
            );
        }
        if (inventory != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET Inventory = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    inventory
                ]
            );
        }
        if (return_refund_policy != "") {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET Return_Refund_Policy = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    return_refund_policy
                ]
            );
        }
        if (country_of_origin != "") {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET country_of_origin = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    country_of_origin
                ]
            );
        }
        if (price != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET price = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    price
                ]
            );
        }
        if (discountpercentage != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET discountpercentage = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    discountpercentage
                ]
            );
        }
        if (warrantyperiod != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET warrantyperiod = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    warrantyperiod
                ]
            );
        }
        if (shippingcharges != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET shippingcharges = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    shippingcharges
                ]
            );
        }
        if (variantname != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET variantname = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    variantname
                ]
            );
        }
        if (freeshippingabove != 0) {
            new_merch = await pool.query(
                "UPDATE Creator_Merchandise SET freeshippingabove = $3 WHERE ProductId = $1 AND Creator = $2 RETURNING*;",
                [
                    productid,
                    req.username,
                    freeshippingabove
                ]
            );
        }
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_merch.rows[0]
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
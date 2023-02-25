const router = require("express").Router();
const pool = require("../../db_creation/db");
const authorise = require("../../middleware/authorise")();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          User Merchandise TABLE            ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add User Order   ///////////////////////////////////////////
router.post("/", authorise, async (req, res) => {
    try {
        var {
            productid,
            quantity,
            buyingprice,
            addressid
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO User_Merchandise (OrderId, ProductId, UserName, AddressId, BuyingPrice, BoughtAt, Quantity) VALUES ($1,$2,$3,$4,$5,TO_TIMESTAMP($6),$7) RETURNING*;",
            [
                Math.random().toString(36).slice(2),
                productid,
                req.username,
                addressid,
                buyingprice,
                Date.now() / 1000,
                quantity
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Orders for User   ///////////////////////////////////////////
// Get All Orders for given user 
router.get("/allmyorders", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Merchandise WHERE UserName = $1;", [
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


///////////////////////////////////////////   Get All Order Stats for Creator   ///////////////////////////////////////////
// Get All Order Stats for given Creator 
router.get("/alluserdata/forcreator/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;

        var ud;
        if (productid === "all")
            ud = await pool.query("SELECT User_Merchandise.productid, User_Merchandise.buyingprice, User_Merchandise.quantity, User_Merchandise.boughtat FROM User_Merchandise INNER JOIN Creator_Merchandise ON User_Merchandise.productid = Creator_Merchandise.productid AND Creator=$1;", [req.username]);
        else
            ud = await pool.query("SELECT User_Merchandise.productid, User_Merchandise.buyingprice, User_Merchandise.quantity, User_Merchandise.boughtat FROM User_Merchandise INNER JOIN Creator_Merchandise ON User_Merchandise.productid = Creator_Merchandise.productid AND Creator=$1 AND User_Merchandise.ProductId=$2", [req.username, productid]);
        var ent_data = ud.rows;
        var data = []
        for (let i = 0; i < ent_data.length; i++) {
            var temp = data.findIndex(x => x.date == ent_data[i].boughtat.toString().split(" ").slice(1, 4).join(" "));
            if (!(temp > -1)) {
                data.push({
                    date: ent_data[i].boughtat.toString().split(" ").slice(1, 4).join(" "),
                    total: parseInt(ent_data[i].buyingprice) * parseInt(ent_data[i].quantity)
                });
            } else {
                data[temp].total += parseInt(ent_data[i].buyingprice) * parseInt(ent_data[i].quantity);
            }
        }

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: data
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Orders for ProductId   /////////////////////////////////////////// 
router.get("/productid/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const creator = (await pool.query("SELECT Creator FROM Creator_Merchandise WHERE ProductId = $1;", [productid])).rows[0].creator;
        if (req.username == creator) {
            const ud = await pool.query("SELECT * FROM User_Merchandise WHERE ProductId = $1;", [productid]);
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: ud.rows
            });
        } else {
            res.json({
                isSuccessful: false,
                errorMsg: "Unauthorized Access: User not creator of given productid",
                result: []
            });
        }

    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Update   ///////////////////////////////////////////
router.put("orderupdate/:orderid/:productid", authorise, async (req, res) => {
    try {
        const {
            orderid,
            productid
        } = req.params;
        const {
            deliverystatuslink,
            deliverystatus,
            isreturninitiated,
            returnstatus,
            deliveredat,
            returnedinitiatedat,
            returnedreceivedat,
            isrefundcomplete
        } = req.body;
        let new_merch;
        if (deliverystatuslink != "" || deliverystatus == 1 || returnstatus == 2 || returnedreceivedat != "") {
            const creator = (await pool.query("SELECT Creator FROM Creator_Merchandise WHERE ProductId = $1;", [productid])).rows[0].creator;
            if (req.username == creator) {

                if (deliverystatuslink != "") {
                    new_merch = await pool.query(
                        "UPDATE User_Merchandise SET deliverystatuslink = $2 WHERE OrderId = $1 RETURNING*;",
                        [
                            orderid,
                            deliverystatuslink
                        ]
                    );
                }

                if (deliverystatus == 1) {
                    new_merch = await pool.query(
                        "UPDATE User_Merchandise SET deliverystatus = $2 WHERE OrderId = $1 RETURNING*;",
                        [
                            orderid,
                            deliverystatus
                        ]
                    );
                }

                if (returnstatus == 2) {
                    new_merch = await pool.query(
                        "UPDATE User_Merchandise SET returnstatus = $2 WHERE OrderId = $1 RETURNING*;",
                        [
                            orderid,
                            returnstatus
                        ]
                    );
                }

                if (returnedreceivedat != "") {
                    new_merch = await pool.query(
                        "UPDATE User_Merchandise SET returnedreceivedat = TO_TIMESTAMP($2) WHERE OrderId = $1 RETURNING*;",
                        [
                            orderid,
                            Date.now() / 1000
                        ]
                    );
                }

            } else {
                res.json({
                    isSuccessful: false,
                    errorMsg: "Unauthorized Access: User not creator of given productid",
                    result: []
                });
            }
        }

        if (isreturninitiated) {
            new_merch = await pool.query(
                "UPDATE User_Merchandise SET isreturninitiated = $3 WHERE OrderId = $1 AND Username = $2 RETURNING*;",
                [
                    orderid,
                    req.username,
                    isreturninitiated
                ]
            );
        }

        if (deliveredat != "") {
            new_merch = await pool.query(
                "UPDATE User_Merchandise SET deliveredat = TO_TIMESTAMP($3) WHERE OrderId = $1 AND Username = $2 RETURNING*;",
                [
                    orderid,
                    req.username,
                    Date.now() / 1000
                ]
            );
        }

        if (returnedinitiatedat != "") {
            new_merch = await pool.query(
                "UPDATE User_Merchandise SET returnedinitiatedat = TO_TIMESTAMP($3) WHERE OrderId = $1 AND Username = $2 RETURNING*;",
                [
                    orderid,
                    req.username,
                    Date.now() / 1000
                ]
            );
        }

        if (isrefundcomplete) {
            new_merch = await pool.query(
                "UPDATE User_Merchandise SET isrefundcomplete = $3 WHERE OrderId = $1 AND Username = $2 RETURNING*;",
                [
                    orderid,
                    req.username,
                    isrefundcomplete
                ]
            );
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          User Address TABLE            ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add User Address   ///////////////////////////////////////////
router.post("/useraddress", authorise, async (req, res) => {
    try {
        var {
            type,
            addressline1,
            addressline2,
            city,
            postalcode,
            country,
            mobileno
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO User_Address (AddressId, Username, Type, AddressLine1, AddressLine2, City, PostalCode, Country, MobileNo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING*;",
            [
                Math.random().toString(36).slice(2),
                req.username,
                type,
                addressline1,
                addressline2,
                city,
                postalcode,
                country,
                mobileno
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All User Address   ///////////////////////////////////////////
router.get("/useraddress", authorise, async (req, res) => {
    try {
        const ud = await pool.query("SELECT * FROM User_Address WHERE UserName = $1;", [
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

///////////////////////////////////////////   Update Mobile No (POC)   ///////////////////////////////////////////
router.put("/useraddress/:addressid", authorise, async (req, res) => {
    try {
        const {
            addressid
        } = req.params;
        const {
            mobileno
        } = req.body;
        const address = await pool.query(
            "UPDATE User_Address SET mobileno = $3 WHERE addressid = $1 AND Username = $2 RETURNING*;",
            [
                addressid,
                req.username,
                mobileno
            ]
        );
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: address.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////          User Merchandise Reviews TABLE            ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////   Add User Address   ///////////////////////////////////////////
//ReviewId -> ProductId_OrderId_Username
router.post("/reviews", authorise, async (req, res) => {
    try {
        var {
            productid,
            orderid,
            ratings,
            commenttitle,
            commentdescription
        } = req.body;

        const new_colab = await pool.query(
            "INSERT INTO User_Merchandise_Reviews (ReviewId, ProductId, Username, Ratings, Commenttitle, CommentDescription, CreatedAt, UpdatedAt) VALUES ($1,$2,$3,$4,$5,$6,TO_TIMESTAMP($7),TO_TIMESTAMP($8)) RETURNING*;",
            [
                productid + "_" + orderid + "_" + req.username,
                productid,
                req.username,
                ratings,
                commenttitle,
                commentdescription,
                Date.now() / 1000,
                Date.now() / 1000,
            ]
        );

        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: new_colab.rows
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Get All Reviews for Product   ///////////////////////////////////////////
router.get("/reviews/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Merchandise_Reviews WHERE ProductId = $1;", [
            productid
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

///////////////////////////////////////////   Get Average Ratings for Product   ///////////////////////////////////////////
router.get("/reviews/ratings/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Merchandise_Reviews WHERE ProductId = $1;", [
            productid
        ]);
        var ratings
        ud.rows.length > 0 ? ratings = ud.rows.reduce((total, next) => total + next.ratings, 0) / ud.rows.length : ratings = 0;
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: Math.ceil(ratings)
        });
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Check user is valid reviewer for Product   ///////////////////////////////////////////
// 0: not valid, 3: valid and no review, 2: already reviewed
router.get("/reviews/check/:productid", authorise, async (req, res) => {
    try {
        const {
            productid
        } = req.params;
        const ud = await pool.query("SELECT * FROM User_Merchandise WHERE ProductId = $1 AND Username=$2;",
            [
                productid,
                req.username
            ]);

        if (ud.rows.length > 0) {
            const vd = await pool.query("SELECT * FROM User_Merchandise_Reviews WHERE ReviewId=$1;", [
                productid + "_" + ud.rows[0].orderid + "_" + req.username
            ]);
            if (vd.rows.length > 0) {
                res.json({
                    isSuccessful: true,
                    errorMsg: "",
                    result: [2, vd.rows[0].reviewid, ud.rows[0].orderid]
                });

            } else {
                res.json({
                    isSuccessful: true,
                    errorMsg: "",
                    result: [1, "", ud.rows[0].orderid]
                });

            }
        } else {
            res.json({
                isSuccessful: true,
                errorMsg: "",
                result: [0, "", ud.rows[0].orderid]
            });
        }
    } catch (err) {
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

///////////////////////////////////////////   Update Review   ///////////////////////////////////////////
router.put("/reviews/:reviewid", authorise, async (req, res) => {
    try {
        const {
            reviewid
        } = req.params;
        const {
            commenttitle,
            commentdescription,
            ratings
        } = req.body;

        let review;
        if (commenttitle != "") {
            review = await pool.query(
                "UPDATE User_Merchandise_Reviews SET commenttitle = $3 WHERE reviewid = $1 AND Username = $2 RETURNING*;",
                [
                    reviewid,
                    req.username,
                    commenttitle
                ]
            );
        }
        if (commentdescription != "") {
            review = await pool.query(
                "UPDATE User_Merchandise_Reviews SET commentdescription = $3 WHERE reviewid = $1 AND Username = $2 RETURNING*;",
                [
                    reviewid,
                    req.username,
                    commentdescription
                ]
            );
        }
        if (ratings != 0) {
            review = await pool.query(
                "UPDATE User_Merchandise_Reviews SET ratings = $3 WHERE reviewid = $1 AND Username = $2 RETURNING*;",
                [
                    reviewid,
                    req.username,
                    ratings
                ]
            );
        }
        res.json({
            isSuccessful: true,
            errorMsg: "",
            result: review.rows
        });
    } catch (err) {
        console.log(err);
        res.json({
            isSuccessful: false,
            errorMsg: err.message,
            result: []
        });
    }
});

module.exports = router;
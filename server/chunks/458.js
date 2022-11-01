"use strict";
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 3458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ShoutoutColabPageTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./public/coming_soon.png
var coming_soon = __webpack_require__(774);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./services/api-services/user/colab_api.ts
var colab_api = __webpack_require__(162);
// EXTERNAL MODULE: ./services/api-services/user/shoutout_api.ts
var shoutout_api = __webpack_require__(2461);
// EXTERNAL MODULE: external "react-jdenticon"
var external_react_jdenticon_ = __webpack_require__(7717);
var external_react_jdenticon_default = /*#__PURE__*/__webpack_require__.n(external_react_jdenticon_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./public/twitter.png
var twitter = __webpack_require__(4855);
// EXTERNAL MODULE: ./public/instagram.png
var instagram = __webpack_require__(405);
// EXTERNAL MODULE: ./public/youtube.png
var youtube = __webpack_require__(3457);
// EXTERNAL MODULE: ./services/api-services/user_api.ts
var user_api = __webpack_require__(8196);
;// CONCATENATED MODULE: ./components/RequestCard.tsx










const useStylesModal = (0,core_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "scroll"
        },
        paper: {
            // width: "50%",
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5%",
            boxShadow: theme.shadows[5],
            color: "black",
            // backgroundColor: "#3b82f6",
            margin: "5px",
            padding: theme.spacing(2, 4, 3)
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "70px 20px 10px 0px"
        },
        edit: {
            margin: "10px",
            "&:hover": {
                color: "rgb(76, 175, 80)"
            }
        },
        error: {
            color: "red",
            fontSize: "16px",
            backgroundColor: "white",
            borderRadius: "5px"
        },
        textfield: {
            minWidth: "100%",
            "& .MuiFormLabel-root": {
                fontSize: "18px"
            }
        }
    }));
const toolTipTheme = (0,core_.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const RequestCard = ({ request  })=>{
    const classesModal = useStylesModal();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const usermessage = request.usermessage.split("###--###");
    const creatorresponse = request.creatorresponse.split("###--###");
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const timeDiff = Date.now() - Date.parse(request.lastupdatedat);
    const platformLogo = [
        instagram/* default */.Z,
        youtube/* default */.Z,
        twitter/* default */.Z
    ];
    const [displayPicture, setDisplayPicture] = (0,external_react_.useState)("");
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (request.creator != "") {
                    const result = await (0,user_api/* getSpecificUserData */.A)(request.creator, "displaypicture");
                    setDisplayPicture(result[0]?.displaypicture);
                }
            }
            getData();
        }, [
            request.creator
        ]);
    };
    GetUser();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: request.creator ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "purchaseCard",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "reqImage",
                        children: [
                            displayPicture != "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: displayPicture,
                                alt: "",
                                width: 50,
                                height: 50,
                                className: "creatorDP"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_jdenticon_default()), {
                                size: 50,
                                value: request.creator
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "hovergreen viewMore pointer",
                                style: {
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: "5px 0 0 15px",
                                    margin: "5px 40px 5px 20px"
                                },
                                onClick: ()=>router_default().push({
                                        pathname: "/creatorprofile",
                                        query: {
                                            address: request.creator
                                        }
                                    }),
                                children: request.creator
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    margin: "5px 0 5px 40px"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: request.status == 0 ? "Pending" : request.status == 1 ? "AcceptedAndWaiting" : request.status == 2 ? "Completed" : "Rejected",
                                        style: {
                                            fontSize: "15px",
                                            marginRight: "15px",
                                            textAlign: "center",
                                            borderRadius: "35%",
                                            padding: "5px"
                                        },
                                        children: [
                                            request.status == 0 ? "Pending" : request.status == 1 ? "Approved" : request.status == 2 ? "Completed" : "Rejected",
                                            " "
                                        ]
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%",
                            float: "left",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            fontSize: 16,
                            justifyContent: "center",
                            textAlign: "center",
                            marginTop: "5px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                style: {
                                    fontSize: "13px",
                                    color: "white",
                                    margin: "10px 0 15px 0"
                                },
                                children: [
                                    "Updated",
                                    " ",
                                    timeDiff > 86400000 ? new Date(Date.parse(request.lastupdatedat)).getDate() + " " + month[new Date(Date.parse(request.lastupdatedat)).getMonth()] + " " + new Date(Date.parse(request.lastupdatedat)).getFullYear() : timeDiff > 3600000 ? Math.round(timeDiff / 3600000) + "h ago" : timeDiff > 60000 ? Math.round(timeDiff / 60000) + "m ago" : timeDiff > 1000 ? Math.round(timeDiff / 1000) + "s ago" : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classesModal.paper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            margin: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    color: "#3B82F6",
                                                    fontWeight: "bold"
                                                },
                                                children: "Message To Creator"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                value: usermessage[0],
                                                className: classesModal.textfield,
                                                placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                type: "text",
                                                multiline: true,
                                                rows: 5,
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                onChange: (e)=>{
                                                // setShoutoutMsg(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    usermessage.map((mes, index)=>{
                                        return index != 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    style: {
                                                        color: "#3B82F6",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        "Link ",
                                                        index
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                    value: mes,
                                                    className: classesModal.textfield,
                                                    placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                    type: "url",
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    variant: "outlined",
                                                    onChange: (e)=>{
                                                    // setShoutoutMsg(e.target.value);
                                                    }
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            margin: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    color: "#3B82F6",
                                                    fontWeight: "bold"
                                                },
                                                children: "Creator Response"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                value: creatorresponse[0],
                                                className: classesModal.textfield,
                                                placeholder: "No Response From Creator Yet..",
                                                type: "text",
                                                multiline: true,
                                                rows: 5,
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                onChange: (e)=>{
                                                // setShoutoutMsg(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    creatorresponse.map((mes, index)=>{
                                        return index != 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    style: {
                                                        color: "#3B82F6",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        "Link ",
                                                        index
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                    value: mes,
                                                    className: classesModal.textfield,
                                                    placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                    type: "url",
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    variant: "outlined",
                                                    onChange: (e)=>{
                                                    // setShoutoutMsg(e.target.value);
                                                    }
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            fontSize: "15px",
                            width: "100%",
                            color: "black"
                        },
                        children: "Nothing To See Here"
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });
};
/* harmony default export */ const components_RequestCard = (RequestCard);

// EXTERNAL MODULE: external "@mui/material/ToggleButton"
var ToggleButton_ = __webpack_require__(6781);
var ToggleButton_default = /*#__PURE__*/__webpack_require__.n(ToggleButton_);
// EXTERNAL MODULE: external "@mui/material/ToggleButtonGroup"
var ToggleButtonGroup_ = __webpack_require__(5951);
var ToggleButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ToggleButtonGroup_);
;// CONCATENATED MODULE: ./components/ShoutoutColabPageTabs.tsx










const useStyles = (0,core_.makeStyles)((theme)=>({
        paper: {
            // padding: theme.spacing(1),
            textAlign: "center",
            backgroundColor: theme.palette.background.paper,
            justifyContent: "center",
            borderRadius: "5px"
        }
    }));
const GridItem = ({ request  })=>{
    return(// From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
        item: true,
        xs: 12,
        sm: 12,
        md: 12,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_RequestCard, {
            request: request
        })
    }));
};
const ShoutoutColabPageTabs = ({ category , type , platform , creator  })=>{
    const classes = useStyles();
    const [status, setStatus] = external_react_default().useState(0);
    var pendingCount = 0;
    var approvedCount = 0;
    var completedCount = 0;
    var rejectedCount = 0;
    const handleStatus = (event, newAlignment)=>{
        setStatus(newAlignment);
    };
    const [reqData, setReqData] = (0,external_react_.useState)([
        {
            creator: "",
            platform: 0,
            usermessage: "",
            creatorresponse: "",
            status: 0,
            lastupdatedat: ""
        }
    ]);
    const GetDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                let result = [];
                if (type == "user") {
                    if (category == "shoutout") result = await (0,shoutout_api/* getUserShoutoutData */.rE)();
                    else if (category == "collab") result = await (0,colab_api/* getUserColabData */.sL)();
                    // else if (category == "Merch") result = await getUserVideoCallData();
                    // else if (category == "PERQ") result = await getUserDiscordData();
                    setReqData(result);
                } else if (type == "creator") {
                    if (category == "shoutout") result = await (0,shoutout_api/* getSpecificCreatorUserShoutoutData */.Mn)(creator);
                    else if (category == "collab") result = await (0,colab_api/* getSpecificCreatorUserColabData */.kJ)(creator);
                    setReqData(result);
                }
                console.log("result");
                console.log(result);
            }
            getData();
        }, []);
    };
    GetDetails();
    for(var i = 0; i < reqData.length; i++){
        if (reqData[i].status == 0 && reqData[i].platform.toString() == platform) pendingCount = pendingCount + 1;
        else if (reqData[i].status == 1 && reqData[i].platform.toString() == platform) approvedCount = approvedCount + 1;
        else if (reqData[i].status == 2 && reqData[i].platform.toString() == platform) completedCount = completedCount + 1;
        else if (reqData[i].status == 3 && reqData[i].platform.toString() == platform) rejectedCount = rejectedCount + 1;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center"
        },
        children: category == "perq" || category == "merch" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "blueTextBlackBackground",
            style: {
                justifyContent: "center",
                textAlign: "center"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: coming_soon/* default */.Z,
                alt: "",
                width: 500,
                height: 500
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                marginLeft: "10%",
                marginRight: "10%"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButtonGroup_default()), {
                        value: status,
                        exclusive: true,
                        onChange: handleStatus,
                        className: classes.paper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButton_default()), {
                                value: 0,
                                children: [
                                    "Pending (",
                                    pendingCount,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButton_default()), {
                                value: 1,
                                children: [
                                    "Approved (",
                                    approvedCount,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButton_default()), {
                                value: 2,
                                children: [
                                    "Completed (",
                                    completedCount,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButton_default()), {
                                value: 3,
                                children: [
                                    "Rejected (",
                                    rejectedCount,
                                    ")"
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    container: true,
                    spacing: 2,
                    children: reqData.map((sub, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: sub.platform == parseInt(platform) && sub.status == status ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem, {
                                    request: sub
                                }, index)
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        }))
                })
            ]
        })
    });
};
/* harmony default export */ const components_ShoutoutColabPageTabs = (ShoutoutColabPageTabs);


/***/ })

};
;
"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 7084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jdenticon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7717);
/* harmony import */ var react_jdenticon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jdenticon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BasicModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2653);
/* harmony import */ var _components_ConnectToWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6785);
/* harmony import */ var _components_CreateProposalModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8503);
/* harmony import */ var _components_ProfileTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(111);
/* harmony import */ var _constants_chains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1295);
/* harmony import */ var _constants_misc__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7645);
/* harmony import */ var _hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9047);
/* harmony import */ var _hooks_LoyaltyTokenContract_useCreatorFactoryContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(798);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5847);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9344);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4855);
/* harmony import */ var _public_discord_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8681);
/* harmony import */ var _public_tiktok_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5670);
/* harmony import */ var _public_instagram_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(405);
/* harmony import */ var _public_youtube_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3457);
/* harmony import */ var _public_website_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(463);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_7__, _hooks_LoyaltyTokenContract_useCreatorFactoryContract__WEBPACK_IMPORTED_MODULE_10__, _hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_7__, _hooks_LoyaltyTokenContract_useCreatorFactoryContract__WEBPACK_IMPORTED_MODULE_10__, _hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
























function Home() {
    const { chainId , account , library  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
    /////////////////////// getting user data
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)({
        useraddress: "",
        username: "",
        iscreator: false,
        twitterhandle: "",
        discord: "",
        tiktok: "",
        instagram: "",
        youtube: "",
        website: ""
    });
    const GetUser = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
            async function getData() {
                const res = await (0,_services_api_service__WEBPACK_IMPORTED_MODULE_14__/* .getUserData */ .is)(account, library, account);
                setUser(res);
            }
            getData();
        }, [
            account,
            chainId
        ]);
    };
    GetUser();
    const creatorToken = (0,_hooks_LoyaltyTokenContract_useCreatorFactoryContract__WEBPACK_IMPORTED_MODULE_10__/* .useCreatorFactoryCreatorToken */ .lD)(_constants_chains__WEBPACK_IMPORTED_MODULE_8__/* .LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST */ .v7[chainId], account).data ?? "";
    const nativeToken = _constants_chains__WEBPACK_IMPORTED_MODULE_8__/* .NATIVE_TOKEN_SUPPORTED_ADDRESS */ .cK[chainId] ?? "";
    const usdc = _constants_chains__WEBPACK_IMPORTED_MODULE_8__/* .USDC_SUPPORTED_ADDRESS */ .sV[chainId];
    const dai = _constants_chains__WEBPACK_IMPORTED_MODULE_8__/* .DAI_SUPPORTED_ADDRESS */ .DU[chainId];
    const creatorTokenName = (0,_hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__/* .useTokenName */ .fu)(creatorToken).data;
    const creatorTokenSymbol = (0,_hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__/* .useTokenSymbol */ .tS)(creatorToken).data;
    const creatorTokenTotalSupply = (0,_util__WEBPACK_IMPORTED_MODULE_11__/* .parseBalance */ .am)((0,_hooks_ERC20_useTokenContract__WEBPACK_IMPORTED_MODULE_9__/* .useTokenTotalSupply */ .y9)(creatorToken).data ?? 0);
    // const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;
    const { nativefee , usdfee  } = (0,_hooks_LoyaltyTokenContract_useCreatorFactoryContract__WEBPACK_IMPORTED_MODULE_10__/* .useCreatorFactoryCreatorSaleFee */ .pp)(_constants_chains__WEBPACK_IMPORTED_MODULE_8__/* .LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST */ .v7[chainId], account).data ?? {
        nativefee: 0,
        usdfee: 0
    };
    const nativeCreatorPrice = (0,_util__WEBPACK_IMPORTED_MODULE_11__/* .parseBalance */ .am)(nativefee ?? 0);
    const usdCreatorPrice = (0,_util__WEBPACK_IMPORTED_MODULE_11__/* .parseBalance */ .am)(usdfee ?? 0);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_22___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Kigzag: Dashboard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: creatorToken ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "blueTextBlackBackground",
                    style: {
                        fontSize: 25
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "creatorImageDiv",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_jdenticon__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        size: 150,
                                        value: account.toLowerCase()
                                    })
                                }),
                                creatorToken === _constants_misc__WEBPACK_IMPORTED_MODULE_23__/* .ZERO_ADDRESS */ .r_ ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "becomeCreatorButton",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        modalButtonText: "Become a Creator",
                                        modalBody: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CreateProposalModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        })
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "description",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                minWidth: "25vw",
                                                width: "30vw",
                                                justifyContent: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        fontSize: "18px",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        creatorTokenName,
                                                        " (",
                                                        creatorTokenSymbol,
                                                        ")"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "row"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "18px",
                                                                        marginTop: "20px",
                                                                        marginBottom: "5px"
                                                                    },
                                                                    children: "Native"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    style: {
                                                                        color: "white"
                                                                    },
                                                                    children: [
                                                                        nativeCreatorPrice,
                                                                        " ",
                                                                        (0,_util__WEBPACK_IMPORTED_MODULE_11__/* .currencyName */ .K7)(chainId)
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                marginLeft: "20px",
                                                                marginBottom: "5px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "18px",
                                                                        marginTop: "20px",
                                                                        marginBottom: "5px"
                                                                    },
                                                                    children: "US Dollar"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    style: {
                                                                        color: "white"
                                                                    },
                                                                    children: [
                                                                        usdCreatorPrice,
                                                                        " USD"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                marginLeft: "20px",
                                                                marginBottom: "5px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "18px",
                                                                        marginTop: "20px",
                                                                        marginBottom: "5px"
                                                                    },
                                                                    children: "Total Supply"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        color: "white"
                                                                    },
                                                                    children: creatorTokenTotalSupply
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        marginTop: "15px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].twitterhandle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://twitter.com/" + user[0].twitterhandle,
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 20
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].discord ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://discord.com/invite/" + user[0].discord,
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_discord_png__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 25
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].tiktok ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://www.tiktok.com/@" + user[0].tiktok,
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_tiktok_png__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 25
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].instagram ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://instagram.com/" + user[0].instagram,
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_instagram_png__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 25
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].youtube ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "https://www.youtube.com/c/" + user[0].youtube.toString().toLowerCase().replace(" ", ""),
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_youtube_png__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 20
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginRight: "10px"
                                                            },
                                                            children: user[0] && user[0].website ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: user[0].website,
                                                                style: {
                                                                    marginTop: "5px",
                                                                    marginLeft: "5px"
                                                                },
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    src: _public_website_png__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
                                                                    alt: "",
                                                                    width: 25,
                                                                    height: 20
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_15___default().push({
                                                    pathname: "/videoplayer",
                                                    query: {
                                                        videoid: "1pNn6Gs51xRQ6z7X"
                                                    }
                                                })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onCreatorProfile: false,
                            creator: ""
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: typeof account !== "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ConnectToWallet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
                            style: {
                                display: "flex",
                                margin: "auto",
                                height: "80vh"
                            }
                        })
                    })
                })
            })
        ]
    }));
};

});

/***/ })

};
;
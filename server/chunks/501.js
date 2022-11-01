"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 3501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jdenticon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7717);
/* harmony import */ var react_jdenticon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jdenticon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1704);
/* harmony import */ var _components_ProfileTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4656);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api_services_user_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8196);
/* harmony import */ var _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4855);
/* harmony import */ var _public_instagram_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(405);
/* harmony import */ var _public_youtube_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3457);
/* harmony import */ var _public_website_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(463);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_3__]);
_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const buttonStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    width: "auto",
    marginTop: "20px"
};
const useStylesModal = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "black",
            backgroundColor: "blue",
            padding: theme.spacing(2, 4, 3),
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "80vh",
            margin: "20px"
        }
    }));
function Home() {
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const checkConnected = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            async function getData() {
                if (false) {}
            }
            getData();
        }, []);
    };
    checkConnected();
    const updateUsername = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            setUsername(_services_auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getUsername */ .Z.getUsername());
        }, [
            isConnected
        ]);
    };
    updateUsername();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        emailaddress: "",
        signuptype: 1,
        username: "",
        fname: "",
        lname: "",
        bio: "",
        iscreator: false,
        displaypicture: "",
        twitterhandle: "",
        instagram: "",
        youtube: "",
        website: ""
    });
    const GetUser = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            async function getData() {
                if (username != "") {
                    const result = await (0,_services_api_services_user_api__WEBPACK_IMPORTED_MODULE_6__/* .getUserData */ .is)(username);
                    setUser(result[0]);
                }
            }
            getData();
        }, [
            username
        ]);
    };
    GetUser();
    const classesModal = useStylesModal();
    const [open_becomeCreator, setOpen_becomeCreator] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const handleOpen_becomeCreator = ()=>setOpen_becomeCreator(true);
    const handleClose_becomeCreator = ()=>setOpen_becomeCreator(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
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
                children: isConnected && username && user.fname ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                    children: user.displaypicture != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: user.displaypicture,
                                            alt: "",
                                            width: 125,
                                            height: 125,
                                            className: "creatorDP"
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_jdenticon__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        size: 100,
                                        value: username
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "description",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            minWidth: "25vw",
                                            width: "30vw",
                                            justifyContent: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "16.5px",
                                                    color: "white",
                                                    margin: "5px 0 5px 0",
                                                    fontWeight: "bold"
                                                },
                                                children: user.fname + " " + user.lname
                                            }),
                                            user.bio != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "16px",
                                                    color: "white"
                                                },
                                                children: user.bio
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                            !user.iscreator ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "w-full bg-blue-500 text-white px-2 py-2 rounded buyButton",
                                                style: buttonStyle,
                                                onClick: async ()=>{
                                                    handleOpen_becomeCreator();
                                                },
                                                children: "Become A Creator"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                                        children: user && user.twitterhandle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://twitter.com/" + user.twitterhandle,
                                                            style: {
                                                                marginTop: "5px",
                                                                marginLeft: "5px"
                                                            },
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                src: _public_twitter_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                                alt: "",
                                                                width: 25,
                                                                height: 20
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginRight: "10px"
                                                        },
                                                        children: user && user.instagram ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://instagram.com/" + user.instagram,
                                                            style: {
                                                                marginTop: "5px",
                                                                marginLeft: "5px"
                                                            },
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                src: _public_instagram_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                                alt: "",
                                                                width: 25,
                                                                height: 25
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginRight: "10px"
                                                        },
                                                        children: user && user.youtube ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: user.youtube.toString().toLowerCase().replace(" ", ""),
                                                            style: {
                                                                marginTop: "5px",
                                                                marginLeft: "5px"
                                                            },
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                src: _public_youtube_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                                alt: "",
                                                                width: 25,
                                                                height: 20
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            marginRight: "10px"
                                                        },
                                                        children: user && user.website ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: user.website,
                                                            style: {
                                                                marginTop: "5px",
                                                                marginLeft: "5px"
                                                            },
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                src: _public_website_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                                alt: "",
                                                                width: 25,
                                                                height: 20
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onCreatorProfile: false,
                            creator: "",
                            isCreator: user.iscreator
                        })
                    ]
                }) : // <ConnectToAccount />
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
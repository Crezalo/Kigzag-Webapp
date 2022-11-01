(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/kigzaglogo.9efb8831.png","height":195,"width":431,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEUdQHoFCxUBAwYTKlAqXrILGC4hSYoQI0ImVKAJEyMybtAZN2cWMFtlubTwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJklEQVQImQXBhwEAMAzDINlZXf/fW8CWY1usvo9FkNnNyaCKUY0+CbcAixXkiXMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "blueTextBlackBackground",
        style: {
            display: "flex",
            justifyContent: "left",
            paddingLeft: "50px",
            paddingBottom: 13,
            fontSize: "12px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            children: [
                "\xa9 2022",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://kigzag.com",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "kigzag.com"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_kigzaglogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6354);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1704);
/* harmony import */ var _ConnectToAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1254);
/* harmony import */ var _SettingMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3957);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SettingMenu__WEBPACK_IMPORTED_MODULE_7__]);
_SettingMenu__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Header = ()=>{
    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const checkConnected = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            async function getData() {
                if (false) {}
            }
            getData();
        }, []);
    };
    checkConnected();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isConnected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            style: {
                padding: "1px",
                display: "flex",
                justifyContent: "space-around"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        style: {
                            marginTop: "2px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_kigzaglogo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                            alt: "Kigzag Logo",
                            width: 90,
                            height: 35
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/creators",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "mr-6 py-1",
                        style: {
                            fontSize: 18,
                            color: "#3b82f6",
                            marginTop: "5px"
                        },
                        children: "Creators"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConnectToAccount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Sell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7026);
/* harmony import */ var _mui_icons_material_Sell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Sell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_CurrencyRupee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3924);
/* harmony import */ var _mui_icons_material_CurrencyRupee__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CurrencyRupee__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1704);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const SettingMenu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "outline text-blue-500 outline-offset-0 py-1 font-bold rounded",
        style: {
            fontSize: 18,
            textAlign: "center",
            zIndex: 1,
            outlineWidth: "thin",
            marginTop: "2px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                        className: "inline-flex justify-center w-full px-4 py-1 text-sm font-bold text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    paddingTop: "2px",
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                },
                                children: _services_auth_services__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getUsername */ .Z.getUsername()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-500",
                                "aria-hidden": "true"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                        className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 16
                                        },
                                        onClick: ()=>{
                                            next_router__WEBPACK_IMPORTED_MODULE_9___default().push({
                                                pathname: "/editprofile"
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "w-5 h-5 ml-2 -mr-1 text-gray-300",
                                                "aria-hidden": "true",
                                                style: {
                                                    marginRight: "5px"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Profile"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 16
                                        },
                                        onClick: ()=>{
                                            next_router__WEBPACK_IMPORTED_MODULE_9___default().push({
                                                pathname: "/updateprices"
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Sell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                className: "w-5 h-5 ml-2 -mr-1 text-gray-300",
                                                "aria-hidden": "true",
                                                style: {
                                                    marginRight: "5px"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Prices"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 16
                                        },
                                        onClick: ()=>{
                                            next_router__WEBPACK_IMPORTED_MODULE_9___default().push({
                                                pathname: "/revenue"
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CurrencyRupee__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: "w-5 h-5 ml-2 -mr-1 text-gray-300",
                                                "aria-hidden": "true",
                                                style: {
                                                    marginRight: "5px"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Revenue"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 16
                                        },
                                        onClick: ()=>{
                                            _services_auth_services__WEBPACK_IMPORTED_MODULE_8__/* ["default"].logout */ .Z.logout();
                                            window.location.reload();
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                className: "w-5 h-5 ml-2 -mr-1 text-gray-300",
                                                "aria-hidden": "true",
                                                style: {
                                                    marginRight: "5px"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Logout"
                                            })
                                        ]
                                    })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3505);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4260);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4563);
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1107);
/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import { createTheme } from "@material-ui/core/styles";





// styles

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faCheckSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faCoffee);
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.createTheme)({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "#2b2b2b"
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#6b6b6b",
                        minHeight: 24,
                        border: "3px solid #2b2b2b"
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595"
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595"
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595"
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b"
                    }
                }
            }
        }
    }
});
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        document.body.style.backgroundColor = "black";
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pageMinHeight",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6820:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ 4359:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3924:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CurrencyRupee");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 1939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 7026:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Sell");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 9564:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 67:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,760,704,254], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/kigzaglogo.9efb8831.png","height":195,"width":431,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUBBAgqXK8iS48NHDYGDRkSJ0obPHMULFQmU53SfOB/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVQImRXJsREAMAgDsbcNJPtPzKFWACQUlt/IjfU9UgOV6wUFDQBGWCylNgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 3004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(761);
/* harmony import */ var _hooks_useENSName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2644);
/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6518);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5847);
/* harmony import */ var _ETHBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7327);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ETHBalance__WEBPACK_IMPORTED_MODULE_8__]);
_ETHBalance__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const Account = ({ triedToEagerConnect  })=>{
    const { active , error: error1 , activate , chainId , account , library , setError , deactivate ,  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const { isMetaMaskInstalled , isWeb3Available , startOnboarding , stopOnboarding ,  } = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    // manage connecting state for injected connector
    const { 0: connecting , 1: setConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (active || error1) {
            setConnecting(false);
            stopOnboarding();
        }
    }, [
        active,
        error1,
        stopOnboarding
    ]);
    const ENSName = (0,_hooks_useENSName__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(account);
    const isConnected = typeof account === "string" && !!library;
    if (error1) {
        if (error1.name == "UnsupportedChainIdError") {
            next_router__WEBPACK_IMPORTED_MODULE_9___default().reload();
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "w-full bg-red-500 text-white px-2 py-1 rounded",
                    style: {
                        fontSize: 18,
                        textAlign: "center"
                    },
                    onClick: ()=>{
                        next_router__WEBPACK_IMPORTED_MODULE_9___default().reload();
                    },
                    children: "Wrong Network"
                })
            }));
        }
        console.log(error1.name);
        return null;
    }
    if (!triedToEagerConnect) {
        return null;
    }
    if (typeof account !== "string") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: isWeb3Available ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: connecting,
                onClick: ()=>{
                    setConnecting(true);
                    activate(_connectors__WEBPACK_IMPORTED_MODULE_4__/* .injected */ .L, undefined, true).catch((error)=>{
                        // ignore the error if it's a user rejected request
                        if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.UserRejectedRequestError) {
                            setConnecting(false);
                        } else {
                            setError(error);
                        }
                    });
                },
                children: isMetaMaskInstalled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "w-full bg-blue-500 text-white px-2 py-1 rounded",
                    style: {
                        fontSize: 18,
                        textAlign: "center"
                    },
                    children: "Connect to MetaMask"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "w-full bg-blue-500 text-white px-2 py-1 rounded",
                    style: {
                        fontSize: 18,
                        textAlign: "center"
                    },
                    children: "Connect to Wallet"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "w-full bg-blue-500 text-white px-2 py-1 rounded",
                style: {
                    fontSize: 18,
                    textAlign: "center"
                },
                onClick: startOnboarding,
                children: "Install Metamask"
            })
        }));
    }
    _services_auth_services__WEBPACK_IMPORTED_MODULE_10__/* ["default"].login */ .Z.login();
    // console.log("Authorization Header: " + authHeader(account, library).Authorization);
    // console.log("#############################################");
    // console.log("LOCAL STORAGE AUTH CALL" + AuthService.getCurrentUser(account));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: (0,_util__WEBPACK_IMPORTED_MODULE_7__/* .formatBlockExplorerLink */ .D4)("Account", [
                    chainId,
                    account,
                    ""
                ]),
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "outline text-blue-500 outline-offset-0 px-2 py-1 rounded",
                    style: {
                        fontSize: 18,
                        textAlign: "center",
                        marginTop: "2px",
                        outlineWidth: "thin"
                    },
                    children: isConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ETHBalance__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "w-full bg-blue-500 text-white px-2 py-1 rounded",
                style: {
                    fontSize: 18,
                    textAlign: "center"
                },
                onClick: ()=>{
                    deactivate();
                },
                children: ENSName || `${(0,_util__WEBPACK_IMPORTED_MODULE_7__/* .shortenHex */ .pm)(account, 4)}`
            })
        ]
    }));
};
{
/* <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" /> */ }/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);

});

/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ChainName)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: ./hooks/useENSName.ts
var useENSName = __webpack_require__(2644);
// EXTERNAL MODULE: ./hooks/useMetaMaskOnboarding.ts
var useMetaMaskOnboarding = __webpack_require__(6518);
// EXTERNAL MODULE: ./util.ts
var util = __webpack_require__(5847);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
// EXTERNAL MODULE: ./constants/chains.ts
var chains = __webpack_require__(1295);
// EXTERNAL MODULE: ./constants/chaininfo.ts
var chaininfo = __webpack_require__(2369);
;// CONCATENATED MODULE: ./components/ChainName.tsx










const ChainName = ({ triedToEagerConnect  })=>{
    const { active: active1 , error , chainId , account , library  } = (0,core_.useWeb3React)();
    const { stopOnboarding  } = (0,useMetaMaskOnboarding/* default */.Z)();
    // manage connecting state for injected connector
    const { 0: connecting , 1: setConnecting  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (active1 || error) {
            setConnecting(false);
            stopOnboarding();
        }
    }, [
        active1,
        error,
        stopOnboarding
    ]);
    const ENSName = (0,useENSName/* default */.Z)(account);
    const isConnected = typeof account === "string" && !!library;
    if (error) {
        if (error.name == "UnsupportedChainIdError") {
            return null;
        }
        console.log(error.name);
        return null;
    }
    if (!triedToEagerConnect) {
        return null;
    }
    if (typeof account !== "string") {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "outline text-blue-500 outline-offset-0 py-1 font-bold rounded",
        style: {
            fontSize: 18,
            textAlign: "center",
            zIndex: 1,
            outlineWidth: "thin",
            marginTop: "1px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Menu, {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Button, {
                        className: "inline-flex justify-center w-full px-4 py-1 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                        children: [
                            (0,util/* networkName */.KX)(chainId),
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ChevronDownIcon, {
                                className: "w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100",
                                "aria-hidden": "true"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                    as: external_react_.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Items, {
                        className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.AVALANCE_MAINNET */.HL.AVALANCE_MAINNET
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.AVALANCE_MAINNET */.HL.AVALANCE_MAINNET].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.AVALANCHE_FUJI */.HL.AVALANCHE_FUJI
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.AVALANCHE_FUJI */.HL.AVALANCHE_FUJI].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.BSC */.HL.BSC
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.BSC */.HL.BSC].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.BSC_TESTNET */.HL.BSC_TESTNET
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.BSC_TESTNET */.HL.BSC_TESTNET].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.FANTOM_OPERA */.HL.FANTOM_OPERA
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.FANTOM_OPERA */.HL.FANTOM_OPERA].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.FANTOM_TESTNET */.HL.FANTOM_TESTNET
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.FANTOM_TESTNET */.HL.FANTOM_TESTNET].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.MOONRIVER */.HL.MOONRIVER
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.MOONRIVER */.HL.MOONRIVER].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.MOONBASE_ALPHA */.HL.MOONBASE_ALPHA
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.MOONBASE_ALPHA */.HL.MOONBASE_ALPHA].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.POLYGON_MAINNET */.HL.POLYGON_MAINNET
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.POLYGON_MAINNET */.HL.POLYGON_MAINNET].label
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: `${active ? "bg-blue-500 text-white" : "text-blue-500"} group flex rounded-md items-center w-full px-2 py-2 text-sm`,
                                        style: {
                                            fontSize: 18
                                        },
                                        onClick: ()=>{
                                            (0,util/* switchToNetwork */.f$)({
                                                library: library,
                                                chainId: chains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI
                                            });
                                        },
                                        children: chaininfo/* CHAIN_INFO */.T[chains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI].label
                                    })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ChainName = (ChainName);


/***/ }),

/***/ 7327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useETHBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2115);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useETHBalance__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_useETHBalance__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const ETHBalance = ()=>{
    const { account , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const { data  } = (0,_hooks_useETHBalance__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(account);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [
            (0,_util__WEBPACK_IMPORTED_MODULE_3__/* .parseBalance */ .am)(data ?? 0),
            (0,_util__WEBPACK_IMPORTED_MODULE_3__/* .currencyName */ .K7)(chainId)
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ETHBalance);

});

/***/ }),

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
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
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4216);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3004);
/* harmony import */ var _ChainName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var _public_kigzaglogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6354);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Account__WEBPACK_IMPORTED_MODULE_4__]);
_Account__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Header = ()=>{
    const triedToEagerConnect = (0,_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        style: {
            padding: "1px",
            display: "flex",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    style: {
                        marginTop: "2px",
                        marginLeft: "5px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        src: _public_kigzaglogo_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                        alt: "Picture of the author",
                        width: 90,
                        height: 30
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/creators",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "mr-6 py-1",
                    style: {
                        fontSize: 18,
                        color: "#3B82F6"
                    },
                    children: "Creators"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChainName__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                triedToEagerConnect: triedToEagerConnect
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Account__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                triedToEagerConnect: triedToEagerConnect
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

});

/***/ }),

/***/ 6549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ getLibrary)
});

;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./getLibrary.ts

function getLibrary(provider) {
    return new providers_namespaceObject.Web3Provider(provider);
};


/***/ }),

/***/ 2644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useENSName)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useENSName(address) {
    const { library , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    const { 0: ENSName , 1: setENSName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (library && typeof address === "string") {
            let stale = false;
            library.lookupAddress(address).then((name)=>{
                if (!stale && typeof name === "string") {
                    setENSName(name);
                }
            }).catch(()=>{
            });
            return ()=>{
                stale = true;
                setENSName("");
            };
        }
    }, [
        library,
        address,
        chainId
    ]);
    return ENSName;
};


/***/ }),

/***/ 2115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useETHBalance)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__]);
_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function getETHBalance(library) {
    return async (_, address)=>{
        const balance = await library.getBalance(address);
        return balance;
    };
}
function useETHBalance(address, suspense = false) {
    const { library , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    const shouldFetch = typeof address === "string" && !!library;
    const result = swr__WEBPACK_IMPORTED_MODULE_1___default()(shouldFetch ? [
        "ETHBalance",
        address,
        chainId
    ] : null, getETHBalance(library), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result.mutate);
    return result;
};

});

/***/ }),

/***/ 4216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useEagerConnect)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(761);



function useEagerConnect() {
    const { activate , active  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    const { 0: tried , 1: setTried  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected.isAuthorized */ .L.isAuthorized().then((isAuthorized)=>{
            if (isAuthorized) {
                activate(_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L, undefined, true).catch(()=>{
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, [
        activate
    ]);
    // if the connection worked, wait until we get confirmation of that to flip the flag
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!tried && active) {
            setTried(true);
        }
    }, [
        tried,
        active
    ]);
    return tried;
};


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8969);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2980);
/* harmony import */ var _getLibrary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6549);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3195);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__]);
_components_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







// import { createTheme } from "@material-ui/core/styles";





// styles

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCheckSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCoffee);
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.createTheme)({
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
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        document.body.style.backgroundColor = "black";
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.Web3ReactProvider, {
        getLibrary: _getLibrary__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CssBaseline, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pageMinHeight",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};

});

/***/ }),

/***/ 5757:
/***/ ((module) => {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 9935:
/***/ ((module) => {

module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 3138:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 3195:
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 3427:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 9652:
/***/ ((module) => {

module.exports = require("@metamask/onboarding");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 6590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 2574:
/***/ ((module) => {

module.exports = require("base-64");

/***/ }),

/***/ 7567:
/***/ ((module) => {

module.exports = require("ethereumjs-util");

/***/ }),

/***/ 3231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 99:
/***/ ((module) => {

module.exports = require("parse-headers");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 9198:
/***/ ((module) => {

module.exports = require("to-hex");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,505,335], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();
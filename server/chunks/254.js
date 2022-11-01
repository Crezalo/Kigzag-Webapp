"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 1254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6820);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4359);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1704);








const useStylesModal = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            border: "#3B82F6",
            boxShadow: "0 1px 1px 3px #3B82F6",
            padding: theme.spacing(4, 4, 4, 4),
            transition: "0.3s",
            width: "300px",
            backgroundColor: "black",
            borderRadius: "5%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
                boxShadow: "0 10px 18px 8px #3B82F6"
            }
        },
        text: {
            color: "white",
            fontSize: "18px",
            textAlign: "center"
        },
        error: {
            color: "red",
            fontSize: "18px",
            textAlign: "center",
            marginBottom: "10px"
        },
        link: {
            color: "#3B82F6",
            fontSize: "18px",
            textAlign: "center",
            cursor: "pointer"
        },
        textCont: {
            diplay: "flex",
            flexDirection: "row",
            marginTop: "10px"
        },
        input: {
            width: "100%",
            height: "35px",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            marginBottom: "15px",
            textAlign: "center"
        },
        button: {
            width: "100%",
            height: "35px",
            outline: "none",
            border: "none",
            borderRadius: "5px",
            marginBottom: "15px",
            textAlign: "center",
            color: "#3B82F6",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "white",
            "&:hover": {
                backgroundColor: "#3B82F6",
                color: "white"
            }
        }
    }));
const ConnectToAccount = ()=>{
    const classesModal = useStylesModal();
    const [haveAccount, setHaveAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showRegGoogle, setShowRegGoogle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const checkConnected = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            async function getData() {
                if (false) {}
            }
            getData();
        }, []);
    };
    checkConnected();
    const login = async (resp)=>{
        const result = await _services_auth_services__WEBPACK_IMPORTED_MODULE_7__/* ["default"].login */ .Z.login("", "", resp.tokenId, 1);
        setIsConnected(result);
        if (result) window.location.reload();
    };
    const register = async (resp)=>{
        const result = await _services_auth_services__WEBPACK_IMPORTED_MODULE_7__/* ["default"].register */ .Z.register("", 1, resp.tokenId, "", username, "", "", "", false, "", "", "", "", "");
        if (typeof result === "string") {
            if (result.includes("users_emailaddress_key")) {
                setErrorMsg("This google account is already a user");
            } else if (result.includes("users_username_key")) {
                setErrorMsg("This username is already a user");
            } else {
                setErrorMsg(result);
            }
        } else if (result) {
            setIsConnected(result);
            window.location.reload();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        className: classesModal.modal,
        open: !isConnected,
        closeAfterTransition: true,
        BackdropComponent: (_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default()),
        BackdropProps: {
            timeout: 500
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default()), {
            in: !isConnected,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classesModal.paper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: classesModal.error,
                        children: errorMsg
                    }),
                    haveAccount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLogin, {
                                    clientId: process.env.NEXT_STATIC_GOOGLE_LOGIN_CLIENT_ID,
                                    buttonText: "Login with Google",
                                    onSuccess: login,
                                    // onFailure={}
                                    cookiePolicy: "single_host_origin"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classesModal.textCont,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classesModal.text,
                                        children: "Create a new accountt?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classesModal.link,
                                        onClick: ()=>{
                                            setHaveAccount(false);
                                            setShowRegGoogle(false);
                                        },
                                        children: "Register"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            showRegGoogle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLogin, {
                                    clientId: process.env.NEXT_STATIC_GOOGLE_LOGIN_CLIENT_ID,
                                    buttonText: "Signup with Google",
                                    onSuccess: register,
                                    // onFailure={}
                                    cookiePolicy: "single_host_origin"
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: classesModal.input,
                                        type: "text",
                                        ref: inputRef,
                                        placeholder: "Enter Username"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: classesModal.button,
                                        onClick: ()=>{
                                            if (inputRef.current.value != "") {
                                                console.log(inputRef.current.value);
                                                setUsername(inputRef.current.value);
                                                setShowRegGoogle(true);
                                                setErrorMsg("");
                                            } else {
                                                setErrorMsg("Please enter username");
                                            }
                                        },
                                        children: "Register"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classesModal.textCont,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classesModal.text,
                                        children: "Already have an account?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classesModal.link,
                                        onClick: ()=>{
                                            setHaveAccount(true);
                                        },
                                        children: "Login"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectToAccount);


/***/ })

};
;
"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/coming_soon.acba7764.png","height":3928,"width":3953,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAcHBwEBAQ7OztPT09mZmYREREtLS16enqXTMCHAAAACXBIWXMAAJnKAACZygHjkaQiAAAALElEQVQImWNggAMmKMHEwszIyMwCYrCysnKAGGzM7OzMbCB5RkZGRrBCNAAADqcAYITRmVEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/instagram.2bef5ba5.png","height":1850,"width":1850,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHPCXOaFa2uDZqLIrbGAIHQB3J9LsFsRszhP1TobD34ugCZGKutCppdTNTxlBTmUkmzBpfgPVOcF6nymg7thCX1rABYUdfDAITbGF/NAHZ2NcRpQc1kRc/EzZZWAAAAHnRSTlMAhE8QWnhXXQleXAx2oE91UX6DWlhRoKZQYENWkIxwy9oCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImQXBgwHAQAAAsXubtfZfswl4qZ/qwZfs3Hd4ToMZ8q3YS1g5nKOH2W+hNVtjCvJC2lsMpihIawxW8QNgMQKYllQULgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/twitter.67a0edbf.png","height":851,"width":1034,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAALVBMVEUdm/Acm/AcmvAcm/Adm/AcmvAcmvAdm/Acm/Adm/Acmu8dm/Adm/Adm/Acm/AruKjLAAAADnRSTlMCF/FY+bDeu3DQNo89l7MCS9kAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAxSURBVAiZBcGFAcAwDMAwB0oD/39uJT5g5yjWiEgd/Obpttiq7QPHbhdQqTOgjvMNuC2aAXMwfKEbAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 3457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/youtube.da867d95.png","height":1686,"width":2400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEXNIB/NIB/MHx7PLi3mlJP00dHMGxrttrb+nIKYAAAABnRSTlP9uKz+/v6PwKXMAAAACXBIWXMAAA4sAAAOLAH5m+4QAAAAJ0lEQVQImTXKwQ0AIAjAwFMU9t/YKPHXtDVJDIi8iF3RVKsFL/35AAiOAE7rUpnNAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ij": () => (/* binding */ getUserColabAllCreatorData),
/* harmony export */   "kJ": () => (/* binding */ getSpecificCreatorUserColabData),
/* harmony export */   "sL": () => (/* binding */ getUserColabData)
/* harmony export */ });
/* unused harmony exports MAIN_API_URL, addUserColabData, updateUserColabData, updateUserColabCreatorData */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6095);


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Colab Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addUserColabData(creator, platform, usermessage) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                platform: platform,
                usermessage: usermessage
            };
            const response = await axios.post(MAIN_API_URL + "user_colab", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserColabData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_colab/allcreators", {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserColabData(creator) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_colab/" + creator, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserColabAllCreatorData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_colab/creator", {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserColabData(platform, creator, usermessage) {
    try {
        if (authHeader().Authorization) {
            const data = {
                usermessage: usermessage
            };
            const response = await axios.put(MAIN_API_URL + "user_colab/" + creator + "/" + platform.toString(), data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserColabCreatorData(platform, username, status, creatorresponse) {
    try {
        if (authHeader().Authorization) {
            const data = {
                status: status,
                creatorresponse: creatorresponse
            };
            const response = await axios.put(MAIN_API_URL + "user_colab/" + username + "/" + platform.toString(), data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mn": () => (/* binding */ getSpecificCreatorUserShoutoutData),
/* harmony export */   "Nn": () => (/* binding */ getUserShoutoutAllCreatorData),
/* harmony export */   "rE": () => (/* binding */ getUserShoutoutData)
/* harmony export */ });
/* unused harmony exports MAIN_API_URL, addUserShoutoutData, updateUserShoutoutData, updateUserShoutoutCreatorData */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6095);


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Shoutout Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addUserShoutoutData(creator, platform, usermessage) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                platform: platform,
                usermessage: usermessage
            };
            const response = await axios.post(MAIN_API_URL + "user_shoutout", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserShoutoutData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_shoutout/allcreators", {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserShoutoutData(creator) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_shoutout/" + creator, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserShoutoutAllCreatorData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "user_shoutout/creator", {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserShoutoutData(platform, creator, usermessage) {
    try {
        if (authHeader().Authorization) {
            const data = {
                usermessage: usermessage
            };
            const response = await axios.put(MAIN_API_URL + "user_shoutout/" + creator + "/" + platform.toString(), data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserShoutoutCreatorData(platform, username, status, creatorresponse) {
    try {
        if (authHeader().Authorization) {
            const data = {
                status: status,
                creatorresponse: creatorresponse
            };
            const response = await axios.put(MAIN_API_URL + "user_shoutout/" + username + "/" + platform.toString(), data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}


/***/ })

};
;
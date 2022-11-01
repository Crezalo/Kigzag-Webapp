"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 5550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ro": () => (/* binding */ getCreatorAllVideoDetails),
/* harmony export */   "kS": () => (/* binding */ getVideoDetails),
/* harmony export */   "mt": () => (/* binding */ VIDEO_API_URL),
/* harmony export */   "sv": () => (/* binding */ getVideoSignedUrl),
/* harmony export */   "v9": () => (/* binding */ getVideoThumbnail)
/* harmony export */ });
/* unused harmony exports updateVideoDetail, getVideoCaptions */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6095);


// Video Streaming Server Url
const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Video Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function updateVideoDetail(videoid, title, description) {
    try {
        if (authHeader().Authorization) {
            const data = {
                title: title,
                description: description
            };
            const response = await axios.put(VIDEO_API_URL + videoid, data, {
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
async function getVideoSignedUrl(videoid) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "video/" + videoid, {
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
async function getVideoDetails(videoid) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "details/" + videoid, {
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
async function getCreatorAllVideoDetails(creator) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "details/creator/" + creator, {
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
async function getVideoThumbnail(videoid) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "thumbnail/" + videoid, {
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
async function getVideoCaptions(videoid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(VIDEO_API_URL + "captions/" + videoid, {
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
"use strict";
exports.id = 704;
exports.ids = [704];
exports.modules = {

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getSpecificUserData),
/* harmony export */   "Al": () => (/* binding */ updateUserData),
/* harmony export */   "W_": () => (/* binding */ getTopCreators),
/* harmony export */   "ZI": () => (/* binding */ addNewUser),
/* harmony export */   "gK": () => (/* binding */ getSearchResultForCreators),
/* harmony export */   "is": () => (/* binding */ getUserData),
/* harmony export */   "jb": () => (/* binding */ refreshAccessToken),
/* harmony export */   "n$": () => (/* binding */ userLogin)
/* harmony export */ });
/* unused harmony exports MAIN_API_URL, updateUserPassword */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6095);
/* harmony import */ var _auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1704);



// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
/////////////////////////////////////////////////////////////////////////
/////////////////////          User Table            ////////////////////
/////////////////////////////////////////////////////////////////////////
async function addNewUser(emailaddress, signuptype, provideridtoken, password, username, fname, lname, bio, iscreator, displaypicture, twitterhandle, instagram, youtube, website) {
    try {
        const data = {
            emailaddress: emailaddress,
            signuptype: signuptype,
            provideridtoken: provideridtoken,
            password: password,
            username: username,
            fname: fname,
            lname: lname,
            bio: bio,
            iscreator: iscreator,
            displaypicture: displaypicture,
            twitterhandle: twitterhandle,
            instagram: instagram,
            youtube: youtube,
            website: website
        };
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(MAIN_API_URL + "register", data);
        console.log("register");
        console.log(response);
        if (response.data.isSuccessful) {
            _auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setCurrentUserAccessToken */ .Z.setCurrentUserAccessToken(response.data.result[0]["x-access-token"]);
            _auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setCurrentUserRefreshToken */ .Z.setCurrentUserRefreshToken(response.data.result[0]["x-refresh-token"]);
            return true;
        } else {
            return response.data.errorMsg;
        }
    } catch (err) {
        console.log(err);
    }
}
async function userLogin(provideridtoken, username, password, signintype) {
    try {
        var data;
        if (signintype == 0) {
            data = {
                username: username,
                password: password
            };
        } else if (signintype == 1) {
            data = {
                provideridtoken: provideridtoken
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(MAIN_API_URL + "login/" + signintype.toString(), data);
            if (response.data.isSuccessful) {
                _auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setCurrentUserAccessToken */ .Z.setCurrentUserAccessToken(response.data.result[0]["x-access-token"]);
                _auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setCurrentUserRefreshToken */ .Z.setCurrentUserRefreshToken(response.data.result[0]["x-refresh-token"]);
                return true;
            } else {
                return response.data.errorMsg;
            }
        }
    } catch (err) {
        console.log(err);
    }
}
async function refreshAccessToken() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authRefreshHeader */ .S)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "refresh", {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authRefreshHeader */ .S)()
            });
            if (response.data.isSuccessful) {
                console.log(response.data);
                _auth_services__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setCurrentUserAccessToken */ .Z.setCurrentUserAccessToken(response.data.result[0]["x-access-token"]);
                return true;
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
async function getUserData(username) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + username, {
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
async function getSpecificUserData(username, column) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "cn/" + column + "/" + username, {
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
async function getTopCreators(offset) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "creators/" + offset.toString(), {
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
async function getSearchResultForCreators(query) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "creators_search/" + query, {
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
async function updateUserData(emailaddress, username_up, fname, lname, bio, iscreator, displaypicture, twitterhandle, instagram, youtube, website) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const data = {
                emailaddress: emailaddress,
                username_up: username_up,
                fname: fname,
                lname: lname,
                bio: bio,
                iscreator: iscreator,
                displaypicture: displaypicture,
                twitterhandle: twitterhandle,
                instagram: instagram,
                youtube: youtube,
                website: website
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(MAIN_API_URL, data, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                // username cannot be updated because of foreign key constraint
                // if (username_up != "") {
                //   AuthService.setCurrentUserAccessToken(
                //     response.data.result[0]["x-access-token"]
                //   );
                //   AuthService.setCurrentUserRefreshToken(
                //     response.data.result[0]["x-refresh-token"]
                //   );
                // }
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
async function updateUserPassword(currentpassword, newpassword) {
    try {
        if (authHeader().Authorization) {
            const data = {
                currentpassword: currentpassword,
                newpassword: newpassword
            };
            const response = await axios.put(MAIN_API_URL + "password", data, {
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

/***/ 6095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ authRefreshHeader),
/* harmony export */   "z": () => (/* binding */ authHeader)
/* harmony export */ });
/* harmony import */ var _auth_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1704);

function authHeader() {
    if (_auth_services__WEBPACK_IMPORTED_MODULE_0__/* ["default"].validateCurrentUserRefreshToken */ .Z.validateCurrentUserRefreshToken() && _auth_services__WEBPACK_IMPORTED_MODULE_0__/* ["default"].validateCurrentUserAccessToken */ .Z.validateCurrentUserAccessToken()) {
        const jwtToken = _auth_services__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCurrentUserAccessToken */ .Z.getCurrentUserAccessToken();
        return {
            Authorization: jwtToken,
            "Content-Type": "application/json"
        };
    } else {
        return {
            Authorization: false
        };
    }
}
function authRefreshHeader() {
    if (_auth_services__WEBPACK_IMPORTED_MODULE_0__/* ["default"].validateCurrentUserRefreshToken */ .Z.validateCurrentUserRefreshToken()) {
        const jwtToken = _auth_services__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCurrentUserRefreshToken */ .Z.getCurrentUserRefreshToken();
        return {
            Authorization: jwtToken,
            "Content-Type": "application/json"
        };
    } else {
        return {
            Authorization: false
        };
    }
}


/***/ }),

/***/ 1704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_services_user_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8196);


class AuthService {
    async register(emailaddress, signuptype, provideridtoken, password, username, fname, lname, bio, iscreator, displaypicture, twitterhandle, instagram, youtube, website) {
        const response = await (0,_api_services_user_api__WEBPACK_IMPORTED_MODULE_1__/* .addNewUser */ .ZI)(emailaddress, signuptype, provideridtoken, password, username, fname, lname, bio, iscreator, displaypicture, twitterhandle, instagram, youtube, website);
        if (response == true && this.validateCurrentUserRefreshToken() && this.validateCurrentUserAccessToken()) {
            return true;
        }
        return response;
    }
    async login(username, password, provideridtoken, signintype) {
        if (this.validateCurrentUserRefreshToken() && this.validateCurrentUserAccessToken()) {
            return true;
        } else {
            if (provideridtoken == "") return false;
            console.log(provideridtoken);
            const response = await (0,_api_services_user_api__WEBPACK_IMPORTED_MODULE_1__/* .userLogin */ .n$)(provideridtoken, username, password, signintype);
            if (response == true && this.validateCurrentUserRefreshToken() && this.validateCurrentUserAccessToken()) {
                return true;
            }
            return response;
        }
    }
    async refresh() {
        if (this.validateCurrentUserRefreshToken() && this.validateCurrentUserAccessToken()) {
            return true;
        } else {
            const response = await (0,_api_services_user_api__WEBPACK_IMPORTED_MODULE_1__/* .refreshAccessToken */ .jb)();
            if (response == true && this.validateCurrentUserRefreshToken() && this.validateCurrentUserAccessToken()) {
                return true;
            }
            return response;
        }
    }
    logout() {
        localStorage.removeItem("user_access_token");
        localStorage.removeItem("user_refresh_token");
    }
    setCurrentUserAccessToken(token) {
        localStorage.setItem("user_access_token", JSON.stringify(token));
    }
    setCurrentUserRefreshToken(token) {
        localStorage.setItem("user_refresh_token", JSON.stringify(token));
    }
    getCurrentUserAccessToken() {
        return JSON.parse(localStorage.getItem("user_access_token"));
    }
    getCurrentUserRefreshToken() {
        return JSON.parse(localStorage.getItem("user_refresh_token"));
    }
    validateCurrentUserAccessToken() {
        const jwtToken = this.getCurrentUserAccessToken();
        if (jwtToken) {
            const { user , exp  } = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwtToken);
            if (exp <= Date.now() / 1000) {
                console.log("Access Token expired");
                // If Access Token Expired then call AuthService.refresh() to refresh access token
                // return (await this.refresh()) == true ? true : false;
                // hitting call stack max size
                return false;
            }
            if (user) {
                return true;
            }
            console.log("User not available");
            return false;
        }
        console.log("Access Token not available");
        return false;
    }
    validateCurrentUserRefreshToken() {
        const jwtToken = this.getCurrentUserRefreshToken();
        if (jwtToken) {
            const { user , exp  } = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwtToken);
            if (exp <= Date.now() / 1000) {
                console.log("Refresh Token expired");
                return false;
            }
            if (user) {
                return true;
            }
            console.log("User not available");
            return false;
        }
        console.log("Refresh Token not available");
        return false;
    }
    getUsername() {
        const jwtToken = this.getCurrentUserAccessToken();
        if (jwtToken) {
            const { user  } = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwtToken);
            if (user) {
                return user;
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthService());


/***/ })

};
;
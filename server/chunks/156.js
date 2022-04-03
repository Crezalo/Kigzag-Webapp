"use strict";
exports.id = 156;
exports.ids = [156];
exports.modules = {

/***/ 6785:
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
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6820);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4359);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6518);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(761);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_9__);










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
        }
    })
);
const ConnectToWallet = ()=>{
    const classesModal = useStylesModal();
    const { active , error: error1 , activate , chainId , account , library , setError , deactivate ,  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();
    const { isMetaMaskInstalled , isWeb3Available , startOnboarding , stopOnboarding ,  } = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    // manage connecting state for injected connector
    const { 0: connecting , 1: setConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (active || error1) {
            setConnecting(false);
            stopOnboarding();
        }
    }, [
        active,
        error1,
        stopOnboarding
    ]);
    const isConnected = typeof account === "string" && !!library;
    const onResponse = (resp)=>{
        console.log("resp");
        console.log(resp);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        className: classesModal.modal,
        open: true,
        closeAfterTransition: true,
        BackdropComponent: (_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default()),
        BackdropProps: {
            timeout: 500
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default()), {
            in: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classesModal.paper,
                children: isWeb3Available ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: connecting,
                    onClick: ()=>{
                        setConnecting(true);
                        activate(_connectors__WEBPACK_IMPORTED_MODULE_8__/* .injected */ .L, undefined, true).catch((error)=>{
                            // ignore the error if it's a user rejected request
                            if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_9__.UserRejectedRequestError) {
                                setConnecting(false);
                            } else {
                                setError(error);
                            }
                        });
                    },
                    children: isMetaMaskInstalled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "w-full bg-blue-500 text-white px-2 py-2 rounded",
                        style: {
                            fontSize: 18,
                            textAlign: "center"
                        },
                        children: "Connect to MetaMask"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "w-full bg-blue-500 text-white px-2 py-2 rounded",
                        style: {
                            fontSize: 18,
                            textAlign: "center"
                        },
                        children: "Connect to Wallet"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "w-full bg-blue-500 text-white px-2 py-2 rounded",
                    style: {
                        fontSize: 18,
                        textAlign: "center"
                    },
                    onClick: startOnboarding,
                    children: "Install Metamask"
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectToWallet);


/***/ }),

/***/ 9344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mt": () => (/* binding */ VIDEO_API_URL),
/* harmony export */   "SD": () => (/* binding */ getCreators),
/* harmony export */   "is": () => (/* binding */ getUserData),
/* harmony export */   "JY": () => (/* binding */ getTokens),
/* harmony export */   "lz": () => (/* binding */ getAllNFTs),
/* harmony export */   "fi": () => (/* binding */ getNFTsOfCreator),
/* harmony export */   "tX": () => (/* binding */ getNFTForGivenTokenId),
/* harmony export */   "vi": () => (/* binding */ getDAOAllProposals),
/* harmony export */   "sv": () => (/* binding */ getVideoSignedUrl),
/* harmony export */   "kS": () => (/* binding */ getVideoDetails),
/* harmony export */   "Ro": () => (/* binding */ getCreatorAllVideoDetails),
/* harmony export */   "v9": () => (/* binding */ getVideoThumbnail),
/* harmony export */   "CQ": () => (/* binding */ getVideoStreamKey),
/* harmony export */   "p1": () => (/* binding */ getIsVideoStreamAvailable),
/* harmony export */   "GG": () => (/* binding */ getDiscordPlanDetails)
/* harmony export */ });
/* unused harmony exports MAIN_API_URL, S3_BUCKET_THUMBNAIL_URL, addNewUser, addUserNewChain, updateUserData, getUserColumnData, addNewToken, addNewNFT, updateNFTData, getNFTFromStatus, addDAOProposal, getDAOProposal, updateVideoDetail, getVideoCaptions, getVideoStreamKeyForce, buyDiscordPlan */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3359);


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
// Video Streaming Server Url
const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;
// Thumbnail S3 Bucket Storage
const S3_BUCKET_THUMBNAIL_URL = process.env.NEXT_STATIC_S3_BUCKET_THUMBNAIL_URL;
/////////////////////////////////////////////////////////////////////////
/////////////////////          User Table            ////////////////////
/////////////////////////////////////////////////////////////////////////
async function addNewUser(account, library, useraddress, username, iscreator, twitterhandle, discord, tiktok, instagram, youtube, website) {
    const data = {
        useraddress: useraddress,
        username: username,
        iscreator: iscreator,
        twitterhandle: twitterhandle,
        discord: discord,
        tiktok: tiktok,
        instagram: instagram,
        youtube: youtube,
        website: website
    };
    const response = await axios.post(MAIN_API_URL, data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
        return true;
    }
    return false;
}
async function addUserNewChain(account, chainId, library, useraddress) {
    const data = {
        useraddress: useraddress,
        chainid: chainId
    };
    const response = await axios.post(MAIN_API_URL + "user_chain", data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
        return true;
    }
    return false;
}
async function updateUserData(account, library, useraddress, username, iscreator, twitterhandle, discord, tiktok, instagram, youtube, website) {
    const data = {
        useraddress: useraddress,
        username: username,
        iscreator: iscreator,
        twitterhandle: twitterhandle,
        discord: discord,
        tiktok: tiktok,
        instagram: instagram,
        youtube: youtube,
        website: website
    };
    const response = await axios.put(MAIN_API_URL + useraddress, data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["useraddress"] == useraddress.toLowerCase()) {
        return true;
    }
    return false;
}
async function getCreators(account, chainId, library) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "creators/" + chainId, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getUserData(account, library, address) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + address, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getUserColumnData(account, library, address, column) {
    const response = await axios.get(MAIN_API_URL + "cn/" + column + "/" + address, {
        headers: await authHeader(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     Token Table            ///////////////////////////
/////////////////////////////////////////////////////////////////////////
async function addNewToken(account, library, address, chainId) {
    const data = {
        address: address,
        chainId: chainId
    };
    const response = await axios.post(MAIN_API_URL + "token", data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["tokenaddress"] == address.toLowerCase()) {
        return true;
    }
    return false;
}
async function getTokens(account, library, chainId) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "token/" + chainId.toString(), {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     NFT Table            /////////////////////////////
/////////////////////////////////////////////////////////////////////////
async function addNewNFT(account, library, address, tokenid, tokenuri, status, chainid) {
    const data = {
        address: address,
        tokenid: tokenid,
        tokenuri: tokenuri,
        status: status,
        chainid: chainid
    };
    const response = await axios.post(MAIN_API_URL + "nft", data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["nftaddress"] == address.toLowerCase()) {
        return true;
    }
    return false;
}
async function updateNFTData(account, library, address, tokenid, status, chainid) {
    const response = await axios.put(MAIN_API_URL + "nft/" + address + "/" + tokenid.toString() + "/" + chainid.toString() + "/" + status, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["nftaddress"] == address.toLowerCase()) {
        return true;
    }
    return false;
}
async function getAllNFTs(account, library, chainId) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "nft/" + chainId.toString(), {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getNFTsOfCreator(account, library, address, chainId) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "nft/address/" + chainId.toString() + "/" + address, {
            headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
        });
        const data = await response.data;
        return data;
    } catch (e) {
        console.error(e);
    }
}
async function getNFTFromStatus(account, library, address, chainId, status) {
    const response = await axios.get(MAIN_API_URL + "nft/status/" + chainId.toString() + "/" + address + "/" + status, {
        headers: await authHeader(account, library)
    });
    const data = await response.data;
    return data;
}
async function getNFTForGivenTokenId(account, library, address, chainId, tokenid) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "nft/address/" + chainId.toString() + "/" + address + "/" + tokenid, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     DAO Table            /////////////////////////////
/////////////////////////////////////////////////////////////////////////
async function addDAOProposal(account, library, address, chainId, creator, proposalid, author, isallowancesproposal, managers, allowances, isnative, proposallink, proposaltitle, proposaldescription, choices, duration) {
    const data = {
        address: address,
        chainId: chainId,
        creator: creator,
        proposalid: proposalid,
        author: author,
        isallowancesproposal: isallowancesproposal,
        managers: managers,
        allowances: allowances,
        isnative: isnative,
        proposallink: proposallink,
        proposaltitle: proposaltitle,
        proposaldescription: proposaldescription,
        choices: choices,
        duration: duration
    };
    const response = await axios.post(MAIN_API_URL + "dao", data, {
        headers: await authHeader(account, library)
    });
    if (response.data[0]["daoaddress"] == address.toLowerCase()) {
        return true;
    }
    return false;
}
async function getDAOAllProposals(account, library, chainId, address) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "dao/" + chainId.toString() + "/" + address, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getDAOProposal(account, library, chainId, address, proposalid) {
    const response = await axios.get(MAIN_API_URL + "dao/" + chainId.toString() + "/" + address + "/" + proposalid, {
        headers: await authHeader(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     Video Table            ///////////////////////////
/////////////////////////////////////////////////////////////////////////
async function updateVideoDetail(account, library, videoid, creator, title, description) {
    const data = {
        videoid: videoid,
        creator: creator,
        title: title,
        description: description
    };
    const response = await axios.put(VIDEO_API_URL + videoid, data, {
        headers: await authHeader(account, library)
    });
    if (creator != "") {
        if (response.data[0]["creator"] == creator.toLowerCase()) {
            return true;
        }
    } else if (title != "") {
        if (response.data[0]["title"] == title) {
            return true;
        }
    } else if (description != "") {
        if (response.data[0]["description"] == description) {
            return true;
        }
    }
    return false;
}
async function getVideoSignedUrl(account, library, videoid) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "video/" + videoid, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    console.log(data);
    return data;
}
async function getVideoDetails(account, library, videoid) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "details/" + videoid, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    console.log(VIDEO_API_URL + "details/" + videoid);
    const data = await response.data;
    return data;
}
async function getCreatorAllVideoDetails(account, library, creator) {
    console.log("creator");
    console.log(VIDEO_API_URL + "details/creator/" + creator);
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "details/creator/" + creator, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    console.log("data");
    console.log(data);
    return data;
}
async function getVideoThumbnail(account, library, videoid) {
    console.log(VIDEO_API_URL + "thumbnail/" + videoid);
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(VIDEO_API_URL + "thumbnail/" + videoid, {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getVideoCaptions(account, library, videoid) {
    const response = await axios.get(VIDEO_API_URL + "captions/" + videoid, {
        headers: await authHeader(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     Live Stream Data             /////////////////////
/////////////////////////////////////////////////////////////////////////
async function getVideoStreamKey(account, creator, library) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "livestream/streamkey/" + creator.toLowerCase(), {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function getVideoStreamKeyForce(account, creator, library) {
    const response = await axios.get(MAIN_API_URL + "livestream/streamkey_force/" + creator.toLowerCase(), {
        headers: await authHeader(account, library)
    });
    const data = await response.data;
    return data;
}
async function getIsVideoStreamAvailable(account, creator, library) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "livestream/" + creator.toLowerCase(), {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
/////////////////////////////////////////////////////////////////////////
//////////////////     Discord Plans            /////////////////////////
/////////////////////////////////////////////////////////////////////////
async function getDiscordPlanDetails(account, library, linkid) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "discord/linkdata/" + linkid.toLowerCase(), {
        headers: await (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(account, library)
    });
    const data = await response.data;
    return data;
}
async function buyDiscordPlan(account, library, videoid, creator, title, description) {
    const data = {
        videoid: videoid,
        creator: creator,
        title: title,
        description: description
    };
    const response = await axios.put(VIDEO_API_URL + videoid, data, {
        headers: await authHeader(account, library)
    });
    if (creator != "") {
        if (response.data[0]["creator"] == creator.toLowerCase()) {
            return true;
        }
    } else if (title != "") {
        if (response.data[0]["title"] == title) {
            return true;
        }
    } else if (description != "") {
        if (response.data[0]["description"] == description) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ authHeader)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9155);
/* harmony import */ var _auth_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5145);


async function authHeader(account, library) {
    const user = _auth_services__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCurrentUser */ .Z.getCurrentUser(account);
    if (user) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        const { address , body , expired  } = _lib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].verify */ .ZP.verify(user, {
            // verify that received token is signed only for our domain
            domain: 'app.kigzag.com'
        });
        // console.log("address: "+ address+ " domain: "+ body.domain+ " statement: "+ body.statement+ " expires_in: "+ body.expires_in);
        if (address && body && !expired) {
            console.log(address + "\n" + body);
            return {
                "Authorization": user,
                "Content-Type": "application/json"
            }; // for Node.js Express back-end
        } else {
            // generating a token with 1 day of expiration time by default
            const token1 = await _lib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sign */ .ZP.sign(async (msg)=>await library.getSigner().signMessage(msg)
            , {
                domain: 'app.kigzag.com',
                statement: 'Token Epired, Re-Sign. I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy',
                nonce: 11111111,
                expires_in: '1 day'
            }).then((token)=>{
                if (token) {
                    localStorage.setItem("user_" + account, JSON.stringify(token));
                }
                return token;
            });
            const { address , body , expired  } = _lib__WEBPACK_IMPORTED_MODULE_0__/* ["default"].verify */ .ZP.verify(token1, {
                // verify that received token is signed only for our domain
                domain: 'app.kigzag.com'
            });
            // console.log("address: "+ address+ " domain: "+ body.domain+ " statement: "+ body.statement+ " expires_in: "+ body.expires_in);
            if (address && body && !expired) {
                console.log(address + "\n" + body);
                return {
                    "Authorization": token1,
                    "Content-Type": "application/json"
                }; // for Node.js Express back-end
            }
        }
    } else {
        return {
        };
    }
};


/***/ })

};
;
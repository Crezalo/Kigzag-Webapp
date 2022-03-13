"use strict";
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ injected)
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);

const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
    supportedChainIds: [
        137,
        80001,
        43114,
        43113,
        56,
        97,
        250,
        4002,
        1285,
        1287
    ]
}); // Polygon, Avalance, BSC, Fantom, Moonriver


/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CHAIN_INFO)
/* harmony export */ });
/* unused harmony export NetworkType */
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1295);
// import ms from 'ms.macro'

const polygonLogo = "../assets/polygonLogo.png";
const bscLogo = "../assets/binanceLogo.png";
const avalancheLogo = "../assets/avalancheLogo.png";
const fantomLogo = "../assets/fantomLogo.png";
const moonriverLogo = "../assets/moonriverLogo.png";
var NetworkType1;

(function(NetworkType) {
    NetworkType[NetworkType["L1"] = 0] = "L1";
    NetworkType[NetworkType["L2"] = 1] = "L2";
})(NetworkType1 || (NetworkType1 = {
}));
const CHAIN_INFO = {
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.AVALANCE_MAINNET */ .HL.AVALANCE_MAINNET]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://bridge.avax.network/",
        docs: "https://docs.avax.network/",
        explorer: "https://snowtrace.io/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Avalanche Mainnet",
        logoUrl: avalancheLogo,
        addNetworkInfo: {
            rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
            nativeCurrency: {
                name: "Avalanche Mainnet",
                symbol: "AVAX",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.AVALANCHE_FUJI */ .HL.AVALANCHE_FUJI]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://bridge.avax.network/",
        docs: "https://docs.avax.network/",
        explorer: "https://testnet.snowtrace.io/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Avalanche FUJI",
        logoUrl: avalancheLogo,
        addNetworkInfo: {
            rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
            nativeCurrency: {
                name: "Avalanche FUJI",
                symbol: "AVAX",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.BSC */ .HL.BSC]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://www.binance.org/en/bridge",
        docs: "https://docs.binance.org/",
        explorer: "https://bscscan.com/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "BSC",
        logoUrl: bscLogo,
        addNetworkInfo: {
            rpcUrl: "https://bsc-dataseed.binance.org/",
            nativeCurrency: {
                name: "BSC",
                symbol: "BNB",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.BSC_TESTNET */ .HL.BSC_TESTNET]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://www.binance.org/en/bridge",
        docs: "https://docs.binance.org/",
        explorer: "https://testnet.bscscan.com",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "BSC Testnet",
        logoUrl: bscLogo,
        addNetworkInfo: {
            rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            nativeCurrency: {
                name: "BSC Testnet",
                symbol: "BNB",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.FANTOM_OPERA */ .HL.FANTOM_OPERA]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://fantom.foundation/",
        docs: "https://docs.fantom.foundation/",
        explorer: "https://ftmscan.com/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Fantom Opera",
        logoUrl: fantomLogo,
        addNetworkInfo: {
            rpcUrl: "https://rpc.ftm.tools/",
            nativeCurrency: {
                name: "Fantom Opera",
                symbol: "FTM",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.FANTOM_TESTNET */ .HL.FANTOM_TESTNET]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://fantom.foundation/",
        docs: "https://docs.fantom.foundation/",
        explorer: "https://testnet.ftmscan.com/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Fantom Testnet",
        logoUrl: fantomLogo,
        addNetworkInfo: {
            rpcUrl: "https://rpc.testnet.fantom.network/",
            nativeCurrency: {
                name: "Fantom Testnet",
                symbol: "FTM",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.MOONRIVER */ .HL.MOONRIVER]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://passport.meter.io/transfer#/",
        docs: "https://docs.moonbeam.network/",
        explorer: "https://moonriver.moonscan.io/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Moonriver",
        logoUrl: moonriverLogo,
        addNetworkInfo: {
            rpcUrl: "https://rpc.moonriver.moonbeam.network",
            nativeCurrency: {
                name: "Moonriver",
                symbol: "MOVR",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.MOONBASE_ALPHA */ .HL.MOONBASE_ALPHA]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://passport.meter.io/transfer#/",
        docs: "https://docs.moonbeam.network/",
        explorer: "https://moonbase.moonscan.io/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Moonbase Alpha",
        logoUrl: moonriverLogo,
        addNetworkInfo: {
            rpcUrl: "https://rpc.api.moonbase.moonbeam.network",
            nativeCurrency: {
                name: "Moonbase Alpha",
                symbol: "MOVR",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.POLYGON_MAINNET */ .HL.POLYGON_MAINNET]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://wallet.polygon.technology/bridge",
        docs: "https://polygon.io/",
        explorer: "https://polygonscan.com/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Polygon Mainnet",
        logoUrl: polygonLogo,
        addNetworkInfo: {
            rpcUrl: "https://polygon-rpc.com/",
            nativeCurrency: {
                name: "Polygon Mainnet",
                symbol: "MATIC",
                decimals: 18
            }
        }
    },
    [_chains__WEBPACK_IMPORTED_MODULE_0__/* .SupportedChainId.POLYGON_MUMBAI */ .HL.POLYGON_MUMBAI]: {
        networkType: NetworkType1.L1,
        blockWaitMsBeforeWarning: 600000,
        bridge: "https://wallet.polygon.technology/bridge",
        docs: "https://polygon.io/",
        explorer: "https://mumbai.polygonscan.com/",
        // infoLink: 'https://info.uniswap.org/#/polygon/',
        label: "Polygon Mumbai",
        logoUrl: polygonLogo,
        addNetworkInfo: {
            nativeCurrency: {
                name: "Polygon Mumbai",
                symbol: "MATIC",
                decimals: 18
            },
            rpcUrl: "https://rpc-endpoints.superfluid.dev/mumbai"
        }
    }
};


/***/ }),

/***/ 1295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HL": () => (/* binding */ SupportedChainId1),
/* harmony export */   "My": () => (/* binding */ BLOCK_EXPLORER),
/* harmony export */   "Hw": () => (/* binding */ CURRENCY_LIST),
/* harmony export */   "rd": () => (/* binding */ NETWORK_NAME_LIST),
/* harmony export */   "v7": () => (/* binding */ LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST),
/* harmony export */   "cK": () => (/* binding */ NATIVE_TOKEN_SUPPORTED_ADDRESS),
/* harmony export */   "sV": () => (/* binding */ USDC_SUPPORTED_ADDRESS),
/* harmony export */   "DU": () => (/* binding */ DAI_SUPPORTED_ADDRESS)
/* harmony export */ });
/* unused harmony exports ALL_SUPPORTED_CHAIN_IDS, L1_CHAIN_IDS, L2_CHAIN_IDS, KIGZAG_TOKEN_ADDRESS_LIST */
var SupportedChainId1;

(function(SupportedChainId) {
    SupportedChainId[SupportedChainId["POLYGON_MAINNET"] = 137] = "POLYGON_MAINNET";
    SupportedChainId[SupportedChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
    SupportedChainId[SupportedChainId["AVALANCE_MAINNET"] = 43114] = "AVALANCE_MAINNET";
    SupportedChainId[SupportedChainId["AVALANCHE_FUJI"] = 43113] = "AVALANCHE_FUJI";
    SupportedChainId[SupportedChainId["BSC"] = 56] = "BSC";
    SupportedChainId[SupportedChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
    SupportedChainId[SupportedChainId["FANTOM_OPERA"] = 250] = "FANTOM_OPERA";
    SupportedChainId[SupportedChainId["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
    SupportedChainId[SupportedChainId["MOONRIVER"] = 1285] = "MOONRIVER";
    SupportedChainId[SupportedChainId["MOONBASE_ALPHA"] = 1287] = "MOONBASE_ALPHA";
})(SupportedChainId1 || (SupportedChainId1 = {
}));
const BLOCK_EXPLORER = {
    137: "polygonscan.com",
    80001: "mumbai.polygonscan.com",
    43114: "snowtrace.io",
    43113: "testnet.snowtrace.io",
    56: "bscscan.com",
    97: "testnet.bscscan.com",
    250: "ftmscan.com",
    4002: "testnet.ftmscan.com",
    1285: "moonriver.moonscan.io",
    1287: "moonbase.moonscan.io"
};
const CURRENCY_LIST = {
    137: "MATIC",
    80001: "MATIC",
    43114: "AVAX",
    43113: "AVAX",
    56: "BNB",
    97: "BNB",
    250: "FTM",
    4002: "FTM",
    1285: "MOVR",
    1287: "MOVR"
};
const NETWORK_NAME_LIST = {
    137: "Polygon Mainnet",
    80001: " Polygon Mumbai",
    43114: "Avalance Mainnet",
    43113: "Avalance FUJI",
    56: "BSC",
    97: "BSC - Testnet",
    250: "Fantom Opera",
    4002: "Fantom Testnet",
    1285: "Moonriver",
    1287: "Moonbase Alpha"
};
/**
 * Array of all the supported chain IDs
 */ const ALL_SUPPORTED_CHAIN_IDS = Object.values(SupportedChainId1).filter((id)=>typeof id === "number"
);
/**
 * All the chain IDs that are running the Ethereum protocol.
 */ const L1_CHAIN_IDS = [
    SupportedChainId1.AVALANCE_MAINNET,
    SupportedChainId1.AVALANCHE_FUJI,
    SupportedChainId1.BSC,
    SupportedChainId1.BSC_TESTNET,
    SupportedChainId1.FANTOM_OPERA,
    SupportedChainId1.FANTOM_TESTNET,
    SupportedChainId1.MOONRIVER,
    SupportedChainId1.MOONBASE_ALPHA,
    SupportedChainId1.POLYGON_MAINNET,
    SupportedChainId1.POLYGON_MUMBAI, 
];
/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */ const L2_CHAIN_IDS = (/* unused pure expression or super */ null && ([]));
// Creator Factory Address for Loyalty Tokens across different chains
const LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST = {
    80001: "0x61e3Ded4d59c219A2b05eaC1699E5b4b6C636EBD",
    43113: "0x0fB91CD72ac2b8AFD95b4b4D779536F57daa41F8",
    97: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861",
    4002: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861",
    1287: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861"
};
const KIGZAG_TOKEN_ADDRESS_LIST = {
    80001: "0xeF69C329feaCA9E262C8D1A99C11A64CfB725fbB",
    43113: "0x6Eb1DFCc5ea8Fd3aC8d7DA2916429C6c2ddD1c7D",
    97: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF",
    4002: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF",
    1287: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF"
};
const NATIVE_TOKEN_SUPPORTED_ADDRESS = {
    80001: [
        "0xEb94821A0157662018a6c7F3d446A545032724A3"
    ],
    43113: [
        "0xda3F18aB34fE60DE440eEd7263ED13cF933Ca8Cc"
    ],
    97: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    4002: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    1287: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ]
};
const USDC_SUPPORTED_ADDRESS = {
    80001: [
        "0x2142800b4b5a624C0f6eF2E698dB547d55bD247d"
    ],
    43113: [
        "0xEFdC2E27fdB8072bF8E7A096f1A8dB6CC451509E"
    ],
    97: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    4002: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    1287: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ]
};
const DAI_SUPPORTED_ADDRESS = {
    80001: [
        "0x260e8975BCC4EFfe391ADedAD0D96F696879F2e8"
    ],
    43113: [
        "0x5e21Ee6cD77BAC58A9dC3F6887A512Bd57004040"
    ],
    97: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    4002: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ],
    1287: [
        "0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"
    ]
};


/***/ }),

/***/ 6518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMetaMaskOnboarding)
/* harmony export */ });
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useMetaMaskOnboarding() {
    const onboarding = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: isMetaMaskInstalled , 1: isMetaMaskInstalledSet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) {
            return;
        }
        async function checkForMetaMask() {
            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default()({
                timeout: 1000,
                mustBeMetaMask: true
            });
            if (provider) {
                isMetaMaskInstalledSet(true);
            } else {
                isMetaMaskInstalledSet(false);
            }
        }
        checkForMetaMask();
    }, []);
    async function startOnboarding() {
        var ref;
        const MetaMaskOnboarding = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9652, 23)).then((m)=>m.default
        );
        onboarding.current = new MetaMaskOnboarding();
        (ref = onboarding.current) === null || ref === void 0 ? void 0 : ref.startOnboarding();
    }
    function stopOnboarding() {
        if (onboarding === null || onboarding === void 0 ? void 0 : onboarding.current) {
            onboarding.current.stopOnboarding();
        }
    }
    const isWeb3Available =  false && (0);
    return {
        startOnboarding,
        stopOnboarding,
        isMetaMaskInstalled,
        isWeb3Available
    };
};


/***/ }),

/***/ 9155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ lib)
});

// UNUSED EXPORTS: sign, verify

// EXTERNAL MODULE: external "base-64"
var external_base_64_ = __webpack_require__(2574);
var external_base_64_default = /*#__PURE__*/__webpack_require__.n(external_base_64_);
// EXTERNAL MODULE: external "ms"
var external_ms_ = __webpack_require__(3231);
var external_ms_default = /*#__PURE__*/__webpack_require__.n(external_ms_);
;// CONCATENATED MODULE: ./lib/timespan.js

const timeSpan = (val)=>{
    const err_str = '"expires_in" argument should be a number of milliseconds or a string representing a timespan eg: "1d", "20h", 60';
    if (typeof val === 'string') {
        const milliseconds = external_ms_default()(val);
        if (typeof milliseconds === 'undefined') {
            throw new Error(err_str);
        }
        return new Date(Date.now() + milliseconds).toUTCString();
    } else if (typeof val === 'number') {
        return new Date(Date.now() + val).toUTCString();
    } else {
        throw new Error(err_str);
    }
};

;// CONCATENATED MODULE: ./lib/sign/sign.js


function isDomain(val) {
    const domain_regex = /^(?!(https:\/\/|http:\/\/|www\.|mailto:|smtp:|ftp:\/\/|ftps:\/\/))(((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9-]{0,86}[a-zA-Z0-9]))\.(([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9-]{0,73}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25})))|((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9-]{0,162}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25}))))$/g;
    return domain_regex.test(val);
}
function isURL(str) {
    var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    var url = new RegExp(urlRegex, 'i');
    return str.length < 2083 && url.test(str);
}
/**
 * 
 * @param {function} signer - The signer function, must return Promise<string>
 * @param {string|any} params - Params list or just a string representing a lifetime of token (for quick shortcut)
 */ const sign = async (signer, params = '1d')=>{
    if (typeof params === 'string') {
        params = {
            expire_in: params
        };
    }
    validateParams(params);
    processParams(params);
    const msg = buildMessage(params);
    const signature = await signer(msg);
    if (typeof signature !== 'string') {
        throw new Error('"signer" argument should be a function that returns a signature string (Promise<string>)');
    }
    const token = external_base_64_default().encode(JSON.stringify({
        signature,
        body: msg
    }));
    return token;
};
const isValidString = (val)=>{
    return typeof val === 'string' && !!val.length;
};
const validateParams = (params)=>{
    for(const key in params){
        if (typeof params[key] === 'string' && /\n/.test(params[key])) {
            throw new Error(`"${key}" option cannot have LF (\\n)`);
        }
    }
    if (params.domain && (!isValidString(params.domain) || !isDomain(params.domain))) {
        throw new Error('Invalid domain format (must be example.com)');
    }
    if (params.uri !== undefined && (!isValidString(params.uri) || !isURL(params.uri))) {
        throw new Error('Invalid uri format (must be https://example.com/login)');
    }
    if (params.chain_id !== undefined && (typeof params.chain_id !== 'number' || isNaN(params.chain_id))) {
        throw new Error('chain_id must be an int');
    }
    if (params.expiration_time && !(params.expiration_time instanceof Date)) {
        throw new Error('expiration_time must be an instance of Date');
    }
    if (params.not_before && !(params.expiration_time instanceof Date)) {
        throw new Error('expiration_time must be an instance of Date');
    }
};
const processParams = (params)=>{
    var ref;
    params.web3_token_version = '2';
    params.issued_at = new Date().toISOString();
    if (params.expiration_time) {
        params.expiration_time = params.expiration_time.toISOString();
    }
    if (params.expires_in && !params.expiration_time) {
        params.expiration_time = new Date(timeSpan(params.expires_in)).toISOString();
    }
    if (!params.expires_in && !params.expiration_time) {
        params.expiration_time = new Date(timeSpan('1d')).toISOString();
    }
    if (params.not_before) {
        params.not_before = params.not_before.toISOString();
    }
    if (params.chain_id) {
        params.chain_id = parseInt(Number(params.chain_id));
    }
    if (!params.uri && "undefined" !== 'undefined' && (0)) {}
    if (!params.nonce) {
        params.nonce = parseInt(Math.random() * 99999999);
    }
};
const buildMessage = (params)=>{
    const message = [];
    if (params.domain) {
        message.push(`${params.domain} wants you to sign in with your Ethereum account.`);
        message.push('');
    }
    if (params.statement) {
        message.push(params.statement);
        message.push('');
    }
    const param_labels = {
        'URI': params.uri,
        'Web3 Token Version': params.web3_token_version,
        'Chain ID': params.chain_id,
        'Nonce': params.nonce,
        'Issued At': params.issued_at,
        'Expiration Time': params.expiration_time,
        'Not Before': params.not_before,
        'Request ID': params.request_id
    };
    for(const label in param_labels){
        if (param_labels[label] !== undefined) {
            message.push(`${label}: ${param_labels[label]}`);
        }
    }
    return message.join('\n');
};

// EXTERNAL MODULE: external "parse-headers"
var external_parse_headers_ = __webpack_require__(99);
var external_parse_headers_default = /*#__PURE__*/__webpack_require__.n(external_parse_headers_);
// EXTERNAL MODULE: external "ethereumjs-util"
var external_ethereumjs_util_ = __webpack_require__(7567);
// EXTERNAL MODULE: external "to-hex"
var external_to_hex_ = __webpack_require__(9198);
var external_to_hex_default = /*#__PURE__*/__webpack_require__.n(external_to_hex_);
;// CONCATENATED MODULE: ./lib/verify/decrypter.js



const getVersion = (body)=>{
    const [str] = body.match(/Web3[\s-]+Token[\s-]+Version: \d/);
    return Number(str.replace(' ', '').split(':')[1]);
};
const decrypt = (token)=>{
    if (!token || !token.length) {
        throw new Error('Token required.');
    }
    var base64_decoded = external_base_64_default().decode(token);
    if (!base64_decoded || !base64_decoded.length) {
        throw new Error('Token malformed (must be base64 encoded)');
    }
    try {
        var { body , signature  } = JSON.parse(base64_decoded);
    } catch (error) {
        throw new Error('Token malformed (unparsable JSON)');
    }
    if (!body || !body.length) {
        throw new Error('Token malformed (empty message)');
    }
    if (!signature || !signature.length) {
        throw new Error('Token malformed (empty signature)');
    }
    const msgBuffer = external_ethereumjs_util_.toBuffer('0x' + external_to_hex_default()(body));
    const msgHash = external_ethereumjs_util_.hashPersonalMessage(msgBuffer);
    const signatureBuffer = external_ethereumjs_util_.toBuffer(signature);
    const signatureParams = external_ethereumjs_util_.fromRpcSig(signatureBuffer);
    const publicKey = external_ethereumjs_util_.ecrecover(msgHash, signatureParams.v, signatureParams.r, signatureParams.s);
    const addressBuffer = external_ethereumjs_util_.publicToAddress(publicKey);
    const address = external_ethereumjs_util_.bufferToHex(addressBuffer).toLowerCase();
    const version = getVersion(body);
    return {
        version,
        address,
        body,
        signature
    };
};

;// CONCATENATED MODULE: ./lib/verify/verify.js


const getDomain = (sections)=>{
    if (/ wants you to sign in with your Ethereum account\.$/.test(sections[0][0])) {
        return sections[0][0].replace(" wants you to sign in with your Ethereum account.", '').trim();
    }
};
const splitSections = (lines)=>{
    const sections = [
        []
    ];
    let section_number = 0;
    for(const i in lines){
        const line = lines[i];
        sections[section_number].push(line);
        if (line === '') {
            section_number++;
            sections.push([]);
        }
    }
    return sections;
};
const getStatement = (sections)=>{
    if (sections.length === 2) {
        const has_domain = !!getDomain(sections);
        if (!has_domain) {
            return sections[0][0];
        }
    } else if (sections.length === 3) {
        return sections[1][0];
    }
};
const parseBody = (lines)=>{
    const sections = splitSections(lines);
    const parsed_body = external_parse_headers_default()(sections[sections.length - 1].join('\n'));
    for(const key in parsed_body){
        const new_key = key.replace(/ /g, '-');
        parsed_body[new_key] = parsed_body[key];
        if (new_key !== key) {
            delete parsed_body[key];
        }
    }
    const domain = getDomain(sections);
    const statement = getStatement(sections);
    if (domain) {
        parsed_body.domain = domain;
    }
    if (statement) {
        parsed_body.statement = statement;
    }
    return parsed_body;
};
const verify = (token, params = {
})=>{
    const { version , address , body  } = decrypt(token);
    if (version === 1) {
        throw new Error('Tokens version 1 are not supported by the current version of module');
    }
    const lines = body.split('\n');
    const parsed_body = parseBody(lines);
    const expired = false;
    if (new Date(parsed_body['expiration-time']) < new Date()) {
        // throw new Error('Token expired')
        expired = true;
    }
    if (parsed_body['not-before'] && new Date(parsed_body['not-before']) > new Date()) {
        throw new Error('It\'s not yet time to use the token');
    }
    if (params.domain && params.domain !== parsed_body.domain) {
        throw new Error('Inappropriate token domain');
    }
    return {
        address,
        body: parsed_body,
        expired
    };
};

;// CONCATENATED MODULE: ./lib.js


const Web3Token = {
    sign: sign,
    verify: verify
};
/* harmony default export */ const lib = (Web3Token);



/***/ }),

/***/ 5145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9155);


class AuthService {
    async login() {
        const { account , library ,  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
        const user = this.getCurrentUser(account);
        let statement = "I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy";
        if (user) {
            const { address , body , expired  } = await _lib__WEBPACK_IMPORTED_MODULE_1__/* ["default"].verify */ .ZP.verify(user, {
                // verify that received token is signed only for our domain
                domain: 'app.kigzag.com'
            });
            console.log("expired: " + expired);
            if (address && body && !expired) {
                return user;
            }
            if (expired) {
                statement = "Token Epired, Re-Sign. I accept the Privacy Policy & Terms of Service: https://app.kigzag.com/terms&privacy";
            }
        }
        // generating a token with 1 day of expiration time by default
        const token1 = await _lib__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sign */ .ZP.sign(async (msg)=>await library.getSigner().signMessage(msg)
        , {
            domain: 'app.kigzag.com',
            statement: statement,
            nonce: 11111111,
            expires_in: '1 day'
        }).then((token)=>{
            if (token) {
                localStorage.setItem("user_" + account, JSON.stringify(token));
            }
            return token;
        });
        return token1;
    }
    logout() {
        const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
        localStorage.removeItem("user_" + account);
    }
    getCurrentUser(account) {
        return JSON.parse(localStorage.getItem("user_" + account));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthService());


/***/ }),

/***/ 5847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pm": () => (/* binding */ shortenHex),
/* harmony export */   "D4": () => (/* binding */ formatBlockExplorerLink),
/* harmony export */   "K7": () => (/* binding */ currencyName),
/* harmony export */   "KX": () => (/* binding */ networkName),
/* harmony export */   "f$": () => (/* binding */ switchToNetwork),
/* harmony export */   "am": () => (/* binding */ parseBalance),
/* harmony export */   "s1": () => (/* binding */ RetryableError)
/* harmony export */ });
/* unused harmony exports chainIdSupported, creatorFactoryLT, exchangeTokenLT, nativeTokenLT, usdcLT, daiLT, parsePercent, retry, RETRY_OPTIONS_BY_CHAIN_ID, DEFAULT_RETRY_OPTIONS */
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9935);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_chaininfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2369);
/* harmony import */ var _constants_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1295);





function shortenHex(hex, length = 4) {
    return `${hex.substring(0, length + 2)}…${hex.substring(hex.length - length)}`;
}
// const ETHERSCAN_PREFIXES = {
//   1: "",
//   3: "ropsten.",
//   4: "rinkeby.",
//   5: "goerli.",
//   42: "kovan.",
// };
function formatBlockExplorerLink(type, data) {
    switch(type){
        case "Account":
            {
                const [chainId, address] = data;
                // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
                return `https://${_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .BLOCK_EXPLORER */ .My[chainId]}/address/${address}`;
            }
        case "Transaction":
            {
                const [chainId, hash] = data;
                // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
                return `https://${_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .BLOCK_EXPLORER */ .My[chainId]}/tx/${hash}`;
            }
        case "Owner":
            {
                const [chainId, contract, owner] = data;
                // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
                return `https://${_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .BLOCK_EXPLORER */ .My[chainId]}/token/${contract}?a=${owner}`;
            }
    }
}
function currencyName(chainId) {
    return _constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .CURRENCY_LIST */ .Hw[chainId];
}
function chainIdSupported(chainId) {
    return CURRENCY_LIST[chainId] != undefined;
}
function networkName(chainId) {
    return _constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .NETWORK_NAME_LIST */ .rd[chainId];
}
function creatorFactoryLT(chainId) {
    return LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId];
}
function exchangeTokenLT(chainId) {
    return KIGZAG_TOKEN_ADDRESS_LIST[chainId];
}
function nativeTokenLT(chainId) {
    return NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId];
}
function usdcLT(chainId) {
    return USDC_SUPPORTED_ADDRESS[chainId];
}
function daiLT(chainId) {
    return DAI_SUPPORTED_ADDRESS[chainId];
}
// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
async function switchToNetwork({ library , chainId  }) {
    var ref;
    if (!(library === null || library === void 0 ? void 0 : (ref = library.provider) === null || ref === void 0 ? void 0 : ref.request)) {
        return;
    }
    const formattedChainId = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexStripZeros)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(chainId).toHexString());
    try {
        await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: formattedChainId
                }
            ]
        });
    } catch (error) {
        // 4902 is the error code for attempting to switch to an unrecognized chainId
        if (error.code === 4902) {
            const info = _constants_chaininfo__WEBPACK_IMPORTED_MODULE_3__/* .CHAIN_INFO */ .T[chainId];
            await library.provider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: formattedChainId,
                        chainName: info.label,
                        rpcUrls: [
                            info.addNetworkInfo.rpcUrl
                        ],
                        nativeCurrency: info.addNetworkInfo.nativeCurrency,
                        blockExplorerUrls: [
                            info.explorer
                        ]
                    }, 
                ]
            });
            // metamask (only known implementer) automatically switches after a network is added
            // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
            // metamask's behavior when switching to the current network is just to return null (a no-op)
            try {
                await library.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: formattedChainId
                        }
                    ]
                });
            } catch (error) {
                console.debug("Added network but could not switch chains", error);
            }
        } else {
            throw error;
        }
    }
}
const parsePercent = (value, decimals = 2, decimalsToDisplay = 2)=>parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay)
;
const parseBalance = (value, decimals = 18, decimalsToDisplay = 3)=>parseFloat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_0__.formatUnits)(value, decimals)).toFixed(decimalsToDisplay)
;
function wait(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}
function waitRandom(min, max) {
    return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */ class CancelledError extends Error {
    constructor(){
        super("Cancelled");
        this.isCancelledError = true;
    }
}
/**
 * Throw this error if the function should retry
 */ class RetryableError extends Error {
    constructor(...args){
        super(...args);
        this.isRetryableError = true;
    }
}
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */ function retry(fn, { n , minWait , maxWait  }) {
    let completed = false;
    let rejectCancelled;
    const promise = new Promise(async (resolve, reject)=>{
        rejectCancelled = reject;
        while(true){
            let result;
            try {
                result = await fn();
                if (!completed) {
                    resolve(result);
                    completed = true;
                }
                break;
            } catch (error) {
                if (completed) {
                    break;
                }
                if (n <= 0 || !error.isRetryableError) {
                    reject(error);
                    completed = true;
                    break;
                }
                n--;
            }
            await waitRandom(minWait, maxWait);
        }
    });
    return {
        promise,
        cancel: ()=>{
            if (completed) return;
            completed = true;
            rejectCancelled(new CancelledError());
        }
    };
}
const RETRY_OPTIONS_BY_CHAIN_ID = {
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.AVALANCE_MAINNET */ .HL.AVALANCE_MAINNET]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.AVALANCHE_FUJI */ .HL.AVALANCHE_FUJI]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.BSC */ .HL.BSC]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.BSC_TESTNET */ .HL.BSC_TESTNET]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.FANTOM_OPERA */ .HL.FANTOM_OPERA]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.FANTOM_TESTNET */ .HL.FANTOM_TESTNET]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.MOONRIVER */ .HL.MOONRIVER]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.MOONBASE_ALPHA */ .HL.MOONBASE_ALPHA]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.POLYGON_MAINNET */ .HL.POLYGON_MAINNET]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    },
    [_constants_chains__WEBPACK_IMPORTED_MODULE_4__/* .SupportedChainId.POLYGON_MUMBAI */ .HL.POLYGON_MUMBAI]: {
        n: 10,
        minWait: 250,
        maxWait: 1000
    }
};
const DEFAULT_RETRY_OPTIONS = {
    n: 1,
    minWait: 0,
    maxWait: 0
};


/***/ })

};
;
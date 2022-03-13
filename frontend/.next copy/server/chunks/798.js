"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lD": () => (/* binding */ useCreatorFactoryCreatorToken),
/* harmony export */   "mN": () => (/* binding */ useCreatorFactoryCreatorVault),
/* harmony export */   "$d": () => (/* binding */ useCreatorFactoryCreatorDAO),
/* harmony export */   "pp": () => (/* binding */ useCreatorFactoryCreatorSaleFee)
/* harmony export */ });
/* unused harmony exports useCreatorFactoryContract, useCreatorFactoryCreatorExtraFee, useCreatorFactoryAllCreators, useCreatorFactoryExchangeAdmin, useCreatorFactorFee, useCreatorFactorDiscount, useCreatorFactorNoOFTokensForDiscount, useCreatorFactorFeeTo, useCreatorFactorFeeToSetter, useCreatorFactorExchangeToken, useCreatorFactorNetworkWrappedToken, useCreatorFactorUSDC, useCreatorFactorDAI, useCreatorFactorGetCreatorAdmins, useCreatorFactorGetIsCreatorAdmin */
/* harmony import */ var _contracts_KigzagCreatorFactory_LT_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8795);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5307);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__]);
_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function useCreatorFactoryContract(creatorFactoryAddress) {
    return (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(creatorFactoryAddress, _contracts_KigzagCreatorFactory_LT_json__WEBPACK_IMPORTED_MODULE_0__);
}
function useCreatorFactoryCreatorToken(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "CreatorFactoryCreatorToken",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryCreatorToken(contract, creator), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorFactoryCreatorVault(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "CreatorFactoryCreatorVault",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryCreatorVault(contract, creator), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorFactoryCreatorDAO(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "CreatorFactoryCreatorDAO",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryCreatorDAO(contract, creator), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorFactoryCreatorSaleFee(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "CreatorFactoryCreatorSaleFee",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryCreatorSaleFee(contract, creator), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorFactoryCreatorExtraFee(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryCreatorExtraFee",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryCreatorExtraFee(contract, creator), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactoryAllCreators(creatorFactoryAddress, index, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryAllCreators",
        index,
        creatorFactoryAddress
    ] : null, getCreatorFactoryAllCreators(contract, index), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactoryExchangeAdmin(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryExchangeAdmin",
        creatorFactoryAddress
    ] : null, getCreatorFactoryExchangeAdmin(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorFee(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryFee",
        creatorFactoryAddress
    ] : null, getCreatorFactoryFee(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorDiscount(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryDiscount",
        creatorFactoryAddress
    ] : null, getCreatorFactoryDiscount(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorNoOFTokensForDiscount(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryNoOFTokensForDiscount",
        creatorFactoryAddress
    ] : null, getCreatorFactoryNoOFTokensForDiscount(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorFeeTo(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryFeeTo",
        creatorFactoryAddress
    ] : null, getCreatorFactoryFeeTo(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorFeeToSetter(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryFeeToSetter",
        creatorFactoryAddress
    ] : null, getCreatorFactoryFeeToSetter(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorExchangeToken(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryExchangeToken",
        creatorFactoryAddress
    ] : null, getCreatorFactoryExchangeToken(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorNetworkWrappedToken(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryNetworkWrappedToken",
        creatorFactoryAddress
    ] : null, getCreatorFactoryNetworkWrappedToken(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorUSDC(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryUSDC",
        creatorFactoryAddress
    ] : null, getCreatorFactoryUSDC(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorDAI(creatorFactoryAddress, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryDAI",
        creatorFactoryAddress
    ] : null, getCreatorFactoryDAI(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorGetCreatorAdmins(creatorFactoryAddress, creator, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryGetCreatorAdmins",
        creator,
        creatorFactoryAddress
    ] : null, getCreatorFactoryGetCreatorAdmins(contract, creator), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorFactorGetIsCreatorAdmin(creatorFactoryAddress, creator, admin, suspense = false) {
    const contract = useCreatorFactoryContract(creatorFactoryAddress);
    const shouldFetch = typeof creator === "string" && typeof admin === "string" && typeof creatorFactoryAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorFactoryGetIsCreatorAdmin",
        creator,
        admin,
        creatorFactoryAddress, 
    ] : null, getCreatorFactoryGetIsCreatorAdmin(contract, creator, admin), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
////////////////////////////////////////////////////
///////////// Read functions ///////////////////////
////////////////////////////////////////////////////
function getCreatorFactoryCreatorToken(contract, creator) {
    return async (_)=>{
        const token = await contract.creatorToken(creator);
        return token;
    };
}
function getCreatorFactoryCreatorVault(contract, creator) {
    return async (_)=>{
        const vault = await contract.creatorVault(creator);
        return vault;
    };
}
function getCreatorFactoryCreatorDAO(contract, creator) {
    return async (_)=>{
        const dao = await contract.creatorDAO(creator);
        return dao;
    };
}
function getCreatorFactoryCreatorSaleFee(contract, creator) {
    return async (_)=>{
        const tokenPrice = await contract.getCreatorSaleFee(creator);
        const nativefee = tokenPrice[0];
        const usdfee = tokenPrice[1];
        return {
            nativefee,
            usdfee
        };
    };
}
function getCreatorFactoryCreatorExtraFee(contract, creator) {
    return async (_)=>{
        const additionalFeeDeduct = await contract.getCreatorExtraFee(creator);
        const nativeAdditionalFeeDeduct = additionalFeeDeduct[0];
        const usdfeeAdditionalFeeDeduct = additionalFeeDeduct[1];
        return {
            nativeAdditionalFeeDeduct,
            usdfeeAdditionalFeeDeduct
        };
    };
}
function getCreatorFactoryAllCreators(contract, index) {
    return async (_)=>{
        const creator = await contract.allCreators(index);
        return creator;
    };
}
function getCreatorFactoryExchangeAdmin(contract) {
    return async (_)=>{
        const exchangeAdmin = await contract.exchangeAdmin();
        return exchangeAdmin;
    };
}
function getCreatorFactoryFee(contract) {
    return async (_)=>{
        const fee = await contract.fee();
        return fee;
    };
}
function getCreatorFactoryDiscount(contract) {
    return async (_)=>{
        const discount = await contract.discount();
        return discount;
    };
}
function getCreatorFactoryNoOFTokensForDiscount(contract) {
    return async (_)=>{
        const noOFTokensForDiscount = await contract.noOFTokensForDiscount();
        return noOFTokensForDiscount;
    };
}
function getCreatorFactoryFeeTo(contract) {
    return async (_)=>{
        const feeTo = await contract.feeTo();
        return feeTo;
    };
}
function getCreatorFactoryFeeToSetter(contract) {
    return async (_)=>{
        const feeToSetter = await contract.feeToSetter();
        return feeToSetter;
    };
}
function getCreatorFactoryExchangeToken(contract) {
    return async (_)=>{
        const exchangeToken = await contract.exchangeToken();
        return exchangeToken;
    };
}
function getCreatorFactoryNetworkWrappedToken(contract) {
    return async (_)=>{
        const networkWrappedToken = await contract.networkWrappedToken();
        return networkWrappedToken;
    };
}
function getCreatorFactoryUSDC(contract) {
    return async (_)=>{
        const usdc = await contract.usdc();
        return usdc;
    };
}
function getCreatorFactoryDAI(contract) {
    return async (_)=>{
        const dai = await contract.dai();
        return dai;
    };
}
function getCreatorFactoryGetCreatorAdmins(contract, creator) {
    return async (_)=>{
        const getCreatorAdmins = await contract.getCreatorAdmins(creator);
        return getCreatorAdmins;
    };
}
function getCreatorFactoryGetIsCreatorAdmin(contract, creator, admin) {
    return async (_)=>{
        const isCreatorAdmin = await contract.isCreatorAdmin(creator, admin);
        return isCreatorAdmin;
    };
}

});

/***/ }),

/***/ 5307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useContract)
/* harmony export */ });
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2792);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function useContract(address, ABI) {
    const { library , account , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!address || !ABI || !library || !chainId) {
            return null;
        }
        try {
            return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__.Contract(address, ABI, library.getSigner(account));
        } catch (error) {
            console.error("Failed To Get Contract", error);
            return null;
        }
    }, [
        address,
        ABI,
        library,
        account
    ]);
};


/***/ }),

/***/ 8795:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"},{"internalType":"address","name":"_feeToSetter","type":"address"},{"internalType":"address","name":"_exchangeToken","type":"address"},{"internalType":"address","name":"_networkWrappedToken","type":"address"},{"internalType":"address","name":"_usdc","type":"address"},{"internalType":"address","name":"_dai","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"address","name":"by","type":"address"}],"name":"CreatorAdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_creator","type":"address"},{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"address","name":"by","type":"address"}],"name":"CreatorAdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"cdao","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreatorDAOCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"cdaoOld","type":"address"},{"indexed":false,"internalType":"address","name":"cdaoNew","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreatorDAOUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreatorTokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vault","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreatorVaultCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"cVaultOld","type":"address"},{"indexed":false,"internalType":"address","name":"cVaultNew","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"}],"name":"CreatorVaultUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allCreators","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creatorDAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creatorToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"creatorVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dai","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchangeAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchangeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"}],"name":"getCreatorAdmins","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"}],"name":"getCreatorExtraFee","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"}],"name":"getCreatorSaleFee","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"isCreatorAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"networkWrappedToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"address","name":"_dao","type":"address"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_creatorSaleFeeNative","type":"uint256"},{"internalType":"uint256","name":"_creatorSaleFeeUSD","type":"uint256"}],"name":"newCreator","outputs":[{"internalType":"address","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"noOFTokensForDiscount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"removeCreatorAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"address[]","name":"admins","type":"address[]"}],"name":"setCreatorAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discount","type":"uint256"}],"name":"setDiscount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_exchangeToken","type":"address"}],"name":"setExchangeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_noOFTokensForDiscount","type":"uint256"}],"name":"setNoOFTokensForDiscount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_creatorExtraFeeNative","type":"uint256"}],"name":"updateCreatorExtraFeeNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_creatorExtraFeeUSD","type":"uint256"}],"name":"updateCreatorExtraFeeUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_creatorSaleFeeNative","type":"uint256"}],"name":"updateCreatorSaleFeeNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_creatorSaleFeeUSD","type":"uint256"}],"name":"updateCreatorSaleFeeUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;
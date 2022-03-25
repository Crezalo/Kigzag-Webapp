"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 9047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fu": () => (/* binding */ useTokenName),
/* harmony export */   "tS": () => (/* binding */ useTokenSymbol),
/* harmony export */   "y9": () => (/* binding */ useTokenTotalSupply),
/* harmony export */   "mM": () => (/* binding */ useTokenBalance)
/* harmony export */ });
/* unused harmony exports useTokenContract, useTokenAllowance */
/* harmony import */ var _contracts_ERC20_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5307);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__]);
_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function useTokenContract(tokenAddress) {
    return (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(tokenAddress, _contracts_ERC20_json__WEBPACK_IMPORTED_MODULE_0__);
}
function useTokenName(tokenAddress, suspense = false) {
    const contract = useTokenContract(tokenAddress);
    const shouldFetch = typeof tokenAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "TokenName",
        tokenAddress
    ] : null, getTokenName(contract), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useTokenSymbol(tokenAddress, suspense = false) {
    const contract = useTokenContract(tokenAddress);
    const shouldFetch = typeof tokenAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "TokenSymbol",
        tokenAddress
    ] : null, getTokenSymbol(contract), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useTokenTotalSupply(tokenAddress, suspense = false) {
    const contract = useTokenContract(tokenAddress);
    const shouldFetch = typeof tokenAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "TokenTotalSupply",
        tokenAddress
    ] : null, getTokenTotalSupply(contract), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useTokenBalance(address, tokenAddress, suspense = false) {
    const contract = useTokenContract(tokenAddress);
    const shouldFetch = typeof address === "string" && typeof tokenAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "TokenBalance",
        address,
        tokenAddress
    ] : null, getTokenBalanceOf(contract, address), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useTokenAllowance(owner, spender, tokenAddress, suspense = false) {
    const contract = useTokenContract(tokenAddress);
    const shouldFetch = typeof owner === "string" && typeof spender === "string" && typeof tokenAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "TokenAllowance",
        owner,
        spender,
        tokenAddress
    ] : null, getTokenAllowance(contract, owner, spender), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
////////////////////////////////////////////////////
///////////// Read functions ///////////////////////
////////////////////////////////////////////////////
function getTokenName(contract) {
    return async (_)=>{
        const name = await contract.name();
        return name;
    };
}
function getTokenSymbol(contract) {
    return async (_)=>{
        const symbol = await contract.symbol();
        return symbol;
    };
}
function getTokenTotalSupply(contract) {
    return async (_)=>{
        const totalSupply = await contract.totalSupply();
        return totalSupply;
    };
}
function getTokenBalanceOf(contract, address) {
    return async (_)=>{
        const balance = await contract.balanceOf(address);
        return balance;
    };
}
function getTokenAllowance(contract, owner, spender) {
    return async (_)=>{
        const allowance = await contract.allowance(owner, spender);
        return allowance;
    };
}

});

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ })

};
;
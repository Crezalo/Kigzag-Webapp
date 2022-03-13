"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r_": () => (/* binding */ ZERO_ADDRESS)
/* harmony export */ });
/* unused harmony exports NetworkContextName, DEFAULT_DEADLINE_FROM_NOW, L2_DEADLINE_FROM_NOW, DEFAULT_TXN_DISMISS_MS, L2_TXN_DISMISS_MS */
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const NetworkContextName = "NETWORK";
// export const IS_IN_IFRAME = window.parent !== window
// 30 minutes, denominated in seconds
const DEFAULT_DEADLINE_FROM_NOW = (/* unused pure expression or super */ null && (60 * 30));
const L2_DEADLINE_FROM_NOW = (/* unused pure expression or super */ null && (60 * 5));
// transaction popup dismisal amounts
const DEFAULT_TXN_DISMISS_MS = 25000;
const L2_TXN_DISMISS_MS = 5000;


/***/ }),

/***/ 3467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nT": () => (/* binding */ useCreatorNFTName),
/* harmony export */   "LF": () => (/* binding */ useCreatorNFTSymbol),
/* harmony export */   "Ww": () => (/* binding */ useCreatorNFTOwnerOf),
/* harmony export */   "mj": () => (/* binding */ useCreatorNFTTokenURI)
/* harmony export */ });
/* unused harmony exports useCreatorNFTContract, useCreatorNFTCreator, useCreatorNFTBalanceOf, useCreatorNFTGetApproved, useCreatorNFTIsApprovedForAll */
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_CreatorNFT_LT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8041);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5307);
/* harmony import */ var _useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__]);
_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function useCreatorNFTContract(creatorNFTAddress) {
    return (0,_useContract__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(creatorNFTAddress, _contracts_CreatorNFT_LT_json__WEBPACK_IMPORTED_MODULE_1__);
}
function useCreatorNFTCreator(creatorNFTAddress, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorNFTCreator",
        creatorNFTAddress
    ] : null, getCreatorNFTCreator(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorNFTName(creatorNFTAddress, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_0___default()(shouldFetch ? [
        "CreatorNFTName",
        creatorNFTAddress
    ] : null, getCreatorNFTName(contract), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorNFTSymbol(creatorNFTAddress, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_0___default()(shouldFetch ? [
        "CreatorNFTSymbol",
        creatorNFTAddress
    ] : null, getCreatorNFTSymbol(contract), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorNFTBalanceOf(creatorNFTAddress, address, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof address === "string" && typeof creatorNFTAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorNFTBalanceOf",
        address,
        creatorNFTAddress
    ] : null, getCreatorNFTBalanceOf(contract, address), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorNFTGetApproved(creatorNFTAddress, tokenId, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorNFTGetApproved",
        tokenId,
        creatorNFTAddress
    ] : null, getCreatorNFTGetApproved(contract, tokenId), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorNFTIsApprovedForAll(creatorNFTAddress, owner, operator, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof owner === "string" && typeof operator === "string" && typeof creatorNFTAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorNFTIsApprovedForAll",
        owner,
        operator,
        creatorNFTAddress
    ] : null, getCreatorNFTIsApprovedForAll(contract, owner, operator), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorNFTOwnerOf(creatorNFTAddress, tokenId, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_0___default()(shouldFetch ? [
        "CreatorNFTOwnerOf",
        tokenId,
        creatorNFTAddress
    ] : null, getCreatorNFTOwnerOf(contract, tokenId), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorNFTTokenURI(creatorNFTAddress, tokenId, suspense = false) {
    const contract = useCreatorNFTContract(creatorNFTAddress);
    const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_0___default()(shouldFetch ? [
        "CreatorNFTTokenURI",
        tokenId,
        creatorNFTAddress
    ] : null, getCreatorNFTTokenURI(contract, tokenId), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(result.mutate);
    return result;
}
////////////////////////////////////////////////////
///////////// Read functions ///////////////////////
////////////////////////////////////////////////////
function getCreatorNFTCreator(contract) {
    return async (_)=>{
        const creator = await contract.creator();
        return creator;
    };
}
function getCreatorNFTName(contract) {
    return async (_)=>{
        const name = await contract.name();
        return name;
    };
}
function getCreatorNFTSymbol(contract) {
    return async (_)=>{
        const symbol = await contract.symbol();
        return symbol;
    };
}
function getCreatorNFTBalanceOf(contract, address) {
    return async (_)=>{
        const balanceOf = await contract.balanceOf(address);
        return balanceOf;
    };
}
function getCreatorNFTGetApproved(contract, tokenId) {
    return async (_)=>{
        const getApproved = await contract.getApproved(tokenId);
        return getApproved;
    };
}
function getCreatorNFTIsApprovedForAll(contract, owner, operator) {
    return async (_)=>{
        const isApprovedForAll = await contract.isApprovedForAll(owner, operator);
        return isApprovedForAll;
    };
}
function getCreatorNFTOwnerOf(contract, tokenId) {
    return async (_)=>{
        const ownerOf = await contract.ownerOf(tokenId);
        return ownerOf;
    };
}
function getCreatorNFTTokenURI(contract, tokenId) {
    return async (_)=>{
        const tokenURI = await contract.tokenURI(tokenId);
        return tokenURI;
    };
}

});

/***/ }),

/***/ 2361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tn": () => (/* binding */ useCreatorVaultIdTonftPrice)
/* harmony export */ });
/* unused harmony exports useCreatorVaultContract, useCreatorVaultCreator, useCreatorVaultToken, useCreatorVaultIdToTokenId, useCreatorVaultIdTonftContract, useCreatorVaultAllNFTs, useCreatorVaultAllOnSaleNFTs, useCreatorVaultAllSoldNFTs, useCreatorVaultNftContract */
/* harmony import */ var _contracts_CreatorVault_LT_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8579);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5307);
/* harmony import */ var _useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6335);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__]);
_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function useCreatorVaultContract(creatorVaultAddress) {
    return (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(creatorVaultAddress, _contracts_CreatorVault_LT_json__WEBPACK_IMPORTED_MODULE_0__);
}
function useCreatorVaultCreator(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultCreator",
        creatorVaultAddress
    ] : null, getCreatorVaultCreator(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultToken(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultToken",
        creatorVaultAddress
    ] : null, getCreatorVaultToken(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultIdToTokenId(creatorVaultAddress, vaultId, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultIdToTokenId",
        vaultId,
        creatorVaultAddress
    ] : null, getCreatorVaultIdToTokenId(contract, vaultId), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultIdTonftContract(creatorVaultAddress, vaultId, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultIdTonftContract",
        vaultId,
        creatorVaultAddress
    ] : null, getCreatorVaultIdTonftContract(contract, vaultId), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultIdTonftPrice(creatorVaultAddress, vaultId, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = swr__WEBPACK_IMPORTED_MODULE_3___default()(shouldFetch ? [
        "CreatorVaultIdTonftPrice",
        vaultId,
        creatorVaultAddress
    ] : null, getCreatorVaultIdTonftPrice(contract, vaultId), {
        suspense
    });
    (0,_useKeepSWRDataLiveAsBlocksArrive__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result.mutate);
    return result;
}
function useCreatorVaultAllNFTs(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultAllNFTs",
        creatorVaultAddress
    ] : null, getCreatorVaultAllNFTs(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultAllOnSaleNFTs(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultAllOnSaleNFTs",
        creatorVaultAddress
    ] : null, getCreatorVaultAllOnSaleNFTs(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultAllSoldNFTs(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultAllSoldNFTs",
        creatorVaultAddress
    ] : null, getCreatorVaultAllSoldNFTs(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
function useCreatorVaultNftContract(creatorVaultAddress, suspense = false) {
    const contract = useCreatorVaultContract(creatorVaultAddress);
    const shouldFetch = typeof creatorVaultAddress === "string" && !!contract;
    const result = useSWR(shouldFetch ? [
        "CreatorVaultNftContract",
        creatorVaultAddress
    ] : null, getCreatorVaultNftContract(contract), {
        suspense
    });
    useKeepSWRDataLiveAsBlocksArrive(result.mutate);
    return result;
}
////////////////////////////////////////////////////
///////////// Read functions ///////////////////////
////////////////////////////////////////////////////
function getCreatorVaultCreator(contract) {
    return async (_)=>{
        const creator = await contract.creator();
        return creator;
    };
}
function getCreatorVaultToken(contract) {
    return async (_)=>{
        const token = await contract.token();
        return token;
    };
}
function getCreatorVaultIdTonftContract(contract, vaultId) {
    return async (_)=>{
        const vaultIdTonftContract = await contract.vaultIdTonftContract(vaultId);
        return vaultIdTonftContract;
    };
}
function getCreatorVaultIdToTokenId(contract, vaultId) {
    return async (_)=>{
        const tokenId = await contract.vaultIdToTokenId(vaultId);
        return tokenId;
    };
}
function getCreatorVaultIdTonftPrice(contract, vaultId) {
    return async (_)=>{
        const vaultIdTonftPrice = await contract.vaultIdTonftPrice(vaultId);
        return vaultIdTonftPrice;
    };
}
function getCreatorVaultAllNFTs(contract) {
    return async (_)=>{
        const allNFTs = await contract.allNFTs();
        return allNFTs;
    };
}
function getCreatorVaultAllOnSaleNFTs(contract) {
    return async (_)=>{
        const allOnSaleNFTs = await contract.allOnSaleNFTs();
        return allOnSaleNFTs;
    };
}
function getCreatorVaultAllSoldNFTs(contract) {
    return async (_)=>{
        const allSoldNFTs = await contract.allSoldNFTs();
        return allSoldNFTs;
    };
}
function getCreatorVaultNftContract(contract) {
    return async (_)=>{
        const nftContract = await contract.nftContract();
        return nftContract;
    };
}

});

/***/ }),

/***/ 8041:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"tokenURI","type":"string[]"},{"internalType":"address","name":"_vault","type":"address"}],"name":"createBatchToken","outputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"address","name":"_vault","type":"address"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 8579:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NFTListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NFTListingUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"NFTSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultid","type":"uint256"}],"name":"NFTadded","type":"event"},{"inputs":[],"name":"allNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allOnSaleNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allSoldNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_vaultIds","type":"uint256[]"}],"name":"buyNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_token","type":"address"}],"name":"initialise","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"vaultIds","type":"uint256[]"},{"internalType":"uint256[]","name":"priceInCreatorTokenss","type":"uint256[]"}],"name":"listNFTsForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_tokenURI","type":"string[]"}],"name":"mintNFTUsingVaultContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"vaultIds","type":"uint256[]"},{"internalType":"uint256[]","name":"priceInCreatorTokenss","type":"uint256[]"}],"name":"updateNFTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultIdToTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultIdTonftContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vaultIdTonftPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');

/***/ })

};
;
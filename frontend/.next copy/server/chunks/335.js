"use strict";
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useBlockNumber)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__]);
jotai__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function getBlockNumber(library) {
    return async ()=>{
        return library.getBlockNumber();
    };
}
function useBlockNumber() {
    const { library  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    const shouldFetch = !!library;
    return swr__WEBPACK_IMPORTED_MODULE_2___default()(shouldFetch ? [
        "BlockNumber"
    ] : null, getBlockNumber(library), {
        refreshInterval: 10 * 1000
    });
};
const blockAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(undefined); // export function useFastForwardBlockNumber(): (block: number) => void {
 //   return useUpdateAtom(blockAtom);
 // }

});

/***/ }),

/***/ 6335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useKeepSWRDataLiveAsBlocksArrive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useBlockNumber__WEBPACK_IMPORTED_MODULE_1__]);
_useBlockNumber__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function useKeepSWRDataLiveAsBlocksArrive(mutate) {
    // because we don't care about the referential identity of mutate, just bind it to a ref
    const mutateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(mutate);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        mutateRef.current = mutate;
    });
    // then, whenever a new block arrives, trigger a mutation
    const { data  } = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        mutateRef.current();
    }, [
        data
    ]);
};

});

/***/ })

};
;
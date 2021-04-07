(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_jwt_service_js"],{

/***/ "./resources/js/Pages/core/services/jwt.service.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/core/services/jwt.service.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "saveToken": () => (/* binding */ saveToken),
/* harmony export */   "destroyToken": () => (/* binding */ destroyToken),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ID_TOKEN_KEY = "id_token";
var getToken = function getToken() {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};
var saveToken = function saveToken(token) {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};
var destroyToken = function destroyToken() {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getToken: getToken,
  saveToken: saveToken,
  destroyToken: destroyToken
});

/***/ })

}]);
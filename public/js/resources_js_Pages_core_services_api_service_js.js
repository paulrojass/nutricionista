(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_api_service_js"],{

/***/ "./resources/js/Pages/core/services/api.service.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/core/services/api.service.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/jwt.service */ "./resources/js/Pages/core/services/jwt.service.js");




/**
 * Service to call HTTP request via Axios
 */

var ApiService = {
  init: function init() {
    vue__WEBPACK_IMPORTED_MODULE_3__.default.use((vue_axios__WEBPACK_IMPORTED_MODULE_1___default()), (axios__WEBPACK_IMPORTED_MODULE_0___default()));
    vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.defaults.baseURL = "http://localhost";
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader: function setHeader() {
    vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.defaults.headers.common.Authorization = "Token ".concat(_core_services_jwt_service__WEBPACK_IMPORTED_MODULE_2__.default.getToken());
  },
  query: function query(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.get(resource, params)["catch"](function (error) {
      // console.log(error);
      throw new Error("[KT] ApiService ".concat(error));
    });
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get: function get(resource) {
    var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.get("".concat(resource, "/").concat(slug))["catch"](function (error) {
      // console.log(error);
      throw new Error("[KT] ApiService ".concat(error));
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post: function post(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.post("".concat(resource), params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update: function update(resource, slug, params) {
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.put("".concat(resource, "/").concat(slug), params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put: function put(resource, params) {
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.put("".concat(resource), params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  "delete": function _delete(resource) {
    return vue__WEBPACK_IMPORTED_MODULE_3__.default.axios.delete(resource)["catch"](function (error) {
      // console.log(error);
      throw new Error("[RWV] ApiService ".concat(error));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiService);

/***/ }),

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

/***/ }),

/***/ "./node_modules/vue-axios/dist/vue-axios.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-axios/dist/vue-axios.min.js ***!
  \******************************************************/
/***/ ((module, exports) => {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?0:_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}();

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_store_auth_module_js"],{

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

/***/ "./resources/js/Pages/core/services/store/auth.module.js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/auth.module.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERIFY_AUTH": () => (/* binding */ VERIFY_AUTH),
/* harmony export */   "LOGIN": () => (/* binding */ LOGIN),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "REGISTER": () => (/* binding */ REGISTER),
/* harmony export */   "UPDATE_PASSWORD": () => (/* binding */ UPDATE_PASSWORD),
/* harmony export */   "PURGE_AUTH": () => (/* binding */ PURGE_AUTH),
/* harmony export */   "SET_AUTH": () => (/* binding */ SET_AUTH),
/* harmony export */   "SET_PASSWORD": () => (/* binding */ SET_PASSWORD),
/* harmony export */   "SET_ERROR": () => (/* binding */ SET_ERROR),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ "./resources/js/Pages/core/services/api.service.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jwt.service */ "./resources/js/Pages/core/services/jwt.service.js");
var _actions, _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // action types

var VERIFY_AUTH = "verifyAuth";
var LOGIN = "login";
var LOGOUT = "logout";
var REGISTER = "register";
var UPDATE_PASSWORD = "updateUser"; // mutation types

var PURGE_AUTH = "logOut";
var SET_AUTH = "setUser";
var SET_PASSWORD = "setPassword";
var SET_ERROR = "setError";
var state = {
  errors: null,
  user: {},
  isAuthenticated: !!_jwt_service__WEBPACK_IMPORTED_MODULE_1__.default.getToken()
};
var getters = {
  currentUser: function currentUser(state) {
    return state.user;
  },
  isAuthenticated: function isAuthenticated(state) {
    return state.isAuthenticated;
  }
};
var actions = (_actions = {}, _defineProperty(_actions, LOGIN, function (context, credentials) {
  return new Promise(function (resolve) {
    _api_service__WEBPACK_IMPORTED_MODULE_0__.default.post("login", credentials).then(function (_ref) {
      var data = _ref.data;
      // console.log("Here what post returns", data);
      context.commit(SET_AUTH, data);
      resolve(data);
    })["catch"](function (_ref2) {
      var response = _ref2.response;
      context.commit(SET_ERROR, response.data.errors);
    });
  });
}), _defineProperty(_actions, LOGOUT, function (context) {
  context.commit(PURGE_AUTH);
}), _defineProperty(_actions, REGISTER, function (context, credentials) {
  return new Promise(function (resolve) {
    _api_service__WEBPACK_IMPORTED_MODULE_0__.default.post("login", credentials).then(function (_ref3) {
      var data = _ref3.data;
      context.commit(SET_AUTH, data);
      resolve(data);
    })["catch"](function (_ref4) {
      var response = _ref4.response;
      context.commit(SET_ERROR, response.data.errors);
    });
  });
}), _defineProperty(_actions, VERIFY_AUTH, function (context) {
  if (_jwt_service__WEBPACK_IMPORTED_MODULE_1__.default.getToken()) {
    _api_service__WEBPACK_IMPORTED_MODULE_0__.default.setHeader();
    _api_service__WEBPACK_IMPORTED_MODULE_0__.default.get("verify").then(function (_ref5) {
      var data = _ref5.data;
      context.commit(SET_AUTH, data);
    })["catch"](function (_ref6) {
      var response = _ref6.response;
      context.commit(SET_ERROR, response.data.errors);
    });
  } else {
    context.commit(PURGE_AUTH);
  }
}), _defineProperty(_actions, UPDATE_PASSWORD, function (context, payload) {
  var password = payload;
  return _api_service__WEBPACK_IMPORTED_MODULE_0__.default.put("password", password).then(function (_ref7) {
    var data = _ref7.data;
    context.commit(SET_PASSWORD, data);
    return data;
  });
}), _actions);
var mutations = (_mutations = {}, _defineProperty(_mutations, SET_ERROR, function (state, error) {
  state.errors = error;
}), _defineProperty(_mutations, SET_AUTH, function (state, user) {
  state.isAuthenticated = true;
  state.user = user;
  state.errors = {};
  _jwt_service__WEBPACK_IMPORTED_MODULE_1__.default.saveToken(state.user.token);
}), _defineProperty(_mutations, SET_PASSWORD, function (state, password) {
  state.user.password = password;
}), _defineProperty(_mutations, PURGE_AUTH, function (state) {
  state.isAuthenticated = false;
  state.user = {};
  state.errors = {};
  _jwt_service__WEBPACK_IMPORTED_MODULE_1__.default.destroyToken();
}), _mutations);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
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
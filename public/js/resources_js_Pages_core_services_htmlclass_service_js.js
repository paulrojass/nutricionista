(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_htmlclass_service_js"],{

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

/***/ "./resources/js/Pages/core/services/htmlclass.service.js":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/core/services/htmlclass.service.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/store/htmlclass.module */ "./resources/js/Pages/core/services/store/htmlclass.module.js");
/* harmony import */ var _core_services_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/store */ "./resources/js/Pages/core/services/store/index.js");




var HtmlClass = {
  config: null,
  init: function init(config) {
    if (typeof config !== "undefined") {
      this.config = config;
    } // init base layout


    this.initLayout(); // init header and subheader menu

    this.initHeader();
    this.initSubheader(); // init aside

    this.initAside(); // init sidebar

    this.initSidebar(); // init footer

    this.initFooter();
  },

  /**
   * Init Layout
   */
  initLayout: function initLayout() {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().has(this.config, "self.body.class")) {
      var _selfBodyClass = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "self.body.class").toString();

      if (_selfBodyClass) {
        var bodyClasses = _selfBodyClass.split(" ");

        bodyClasses.forEach(function (cssClass) {
          _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, cssClass);
        });
      }
    }

    var bgImage = object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "self.body.background-image");

    if (typeof bgImage !== "undefined") {
      document.body.style.backgroundImage = "url(".concat(bgImage, ")");
    } // Properly close mobile header menu


    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "header-menu-wrapper-on");
  },

  /**
   * Init Header
   */
  initHeader: function initHeader() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.self.fixed.desktop")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header",
        className: "header-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-static");
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.self.fixed.mobile")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "header-mobile-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header_mobile",
        className: "header-mobile-fixed"
      });
    }

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.display")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "header_menu",
        className: "header-menu-layout-".concat(object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.layout"))
      }); // Menu

      if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "header.menu.self.root-arrow")) {
        _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
          position: "header_menu",
          className: "header-menu-root-arrow"
        });
      }
    }
  },

  /**
   * Init Subheader
   */
  initSubheader: function initSubheader() {
    // Fixed content head
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "subheader.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "subheader-fixed");
      object_path__WEBPACK_IMPORTED_MODULE_0___default().set(this.config, "subheader.style", "solid");
    } else {
      object_path__WEBPACK_IMPORTED_MODULE_0___default().set(this.config, "subheader.fixed", false);
    } // if (objectPath.get(this.config, "subheader.display")) {
    //   store.dispatch(ADD_BODY_CLASSNAME, "subheader-enabled");
    // }
    // if (objectPath.has(this.config, "subheader.style")) {
    //   store.dispatch(
    //     ADD_BODY_CLASSNAME,
    //     `subheader-${objectPath.get(this.config, "subheader.style")}`
    //   );
    // }

  },

  /**
   * Init Aside
   */
  initAside: function initAside() {
    // Reset aside class in body
    // store.dispatch(REMOVE_BODY_CLASSNAME, "aside-enabled");
    // store.dispatch(REMOVE_BODY_CLASSNAME, "aside-fixed");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "aside-static");
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.REMOVE_BODY_CLASSNAME, "aside-minimize");

    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.display") !== true) {
      return;
    } // Add aside class enabled in body
    // store.dispatch(ADD_BODY_CLASSNAME, "aside-enabled");
    // Fixed Aside


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.fixed")) {
      // store.dispatch(ADD_BODY_CLASSNAME, "aside-fixed");
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "aside",
        className: "aside-fixed"
      });
    } else {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "aside-static");
    } // // Aside Secondary
    // if (objectPath.get(this.config, "aside.secondary.display")) {
    //   store.dispatch(ADD_BODY_CLASSNAME, "aside-secondary-enabled");
    // } else {
    //   store.dispatch(ADD_BODY_CLASSNAME, "aside-secondary-disabled");
    // }
    // Default fixed


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.self.minimize.default")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "aside-minimize");
    } // Dropdown Submenu


    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "aside.menu.dropdown")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_CLASSNAME, {
        position: "aside_menu",
        className: "aside-menu-dropdown"
      });
    }
  },

  /**
   * Init Sidebar
   */
  initSidebar: function initSidebar() {
    _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "sidebar-enabled");
  },

  /**
   * Init Footer
   */
  initFooter: function initFooter() {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(this.config, "footer.fixed")) {
      _core_services_store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_core_services_store_htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.ADD_BODY_CLASSNAME, "footer-fixed");
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HtmlClass);

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

/***/ "./resources/js/Pages/core/services/store/breadcrumbs.module.js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/breadcrumbs.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPEND_BREADCRUM": () => (/* binding */ APPEND_BREADCRUM),
/* harmony export */   "SET_BREADCRUMB": () => (/* binding */ SET_BREADCRUMB),
/* harmony export */   "ADD_BREADCRUMB": () => (/* binding */ ADD_BREADCRUMB),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _actions, _mutations;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// action types
var APPEND_BREADCRUM = "appendBreadcrumb"; // mutation types

var SET_BREADCRUMB = "setBreadcrumb";
var ADD_BREADCRUMB = "addBreadcrumb";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: {
    breadcrumbs: []
  },
  getters: {
    /**
     * Get list of breadcrumbs for current page
     * @param state
     * @returns {*}
     */
    breadcrumbs: function breadcrumbs(state) {
      return state.breadcrumbs;
    },

    /**
     * Get the page title
     * @param state
     * @returns {*}
     */
    pageTitle: function pageTitle(state) {
      var last = state.breadcrumbs[state.breadcrumbs.length - 1];

      if (last && last.title) {
        return last.title;
      }
    }
  },
  actions: (_actions = {}, _defineProperty(_actions, SET_BREADCRUMB, function (state, payload) {
    state.commit(SET_BREADCRUMB, payload);
  }), _defineProperty(_actions, ADD_BREADCRUMB, function (state, payload) {
    if (_typeof(payload) === "object") {
      payload.forEach(function (item) {
        return state.commit(APPEND_BREADCRUM, item);
      });
    } else {
      state.commit(APPEND_BREADCRUM, payload);
    }
  }), _actions),
  mutations: (_mutations = {}, _defineProperty(_mutations, APPEND_BREADCRUM, function (state, payload) {
    state.breadcrumbs = [].concat(_toConsumableArray(state.breadcrumbs), [payload]);
  }), _defineProperty(_mutations, SET_BREADCRUMB, function (state, payload) {
    state.breadcrumbs = payload;
  }), _mutations)
});

/***/ }),

/***/ "./resources/js/Pages/core/services/store/config.module.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/config.module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_LAYOUT_CONFIG": () => (/* binding */ SET_LAYOUT_CONFIG),
/* harmony export */   "RESET_LAYOUT_CONFIG": () => (/* binding */ RESET_LAYOUT_CONFIG),
/* harmony export */   "OVERRIDE_LAYOUT_CONFIG": () => (/* binding */ OVERRIDE_LAYOUT_CONFIG),
/* harmony export */   "OVERRIDE_PAGE_LAYOUT_CONFIG": () => (/* binding */ OVERRIDE_PAGE_LAYOUT_CONFIG),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/layout.config.json */ "./resources/js/Pages/core/config/layout.config.json");
var _actions, _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // action types

var SET_LAYOUT_CONFIG = "setLayoutConfig";
var RESET_LAYOUT_CONFIG = "resetLayoutConfig";
var OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig";
var OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig"; // mutation types

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: {
    config: _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__,
    initial: _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__
  },
  getters: {
    /**
     * Get config from layout config
     * @param state
     * @returns {function(path, defaultValue): *}
     */
    layoutConfig: function layoutConfig(state) {
      return function (path, defaultValue) {
        return object_path__WEBPACK_IMPORTED_MODULE_0___default().get(state.config, path, defaultValue);
      };
    }
  },
  actions: (_actions = {}, _defineProperty(_actions, SET_LAYOUT_CONFIG, function (state, payload) {
    state.commit(SET_LAYOUT_CONFIG, payload);
  }), _defineProperty(_actions, RESET_LAYOUT_CONFIG, function (state) {
    state.commit(RESET_LAYOUT_CONFIG);
  }), _defineProperty(_actions, OVERRIDE_LAYOUT_CONFIG, function (state) {
    state.commit(OVERRIDE_LAYOUT_CONFIG);
  }), _defineProperty(_actions, OVERRIDE_PAGE_LAYOUT_CONFIG, function (state, payload) {
    state.commit(OVERRIDE_PAGE_LAYOUT_CONFIG, payload);
  }), _actions),
  mutations: (_mutations = {}, _defineProperty(_mutations, SET_LAYOUT_CONFIG, function (state, payload) {
    state.config = payload;
  }), _defineProperty(_mutations, RESET_LAYOUT_CONFIG, function (state) {
    state.config = Object.assign({}, state.initial);
  }), _defineProperty(_mutations, OVERRIDE_LAYOUT_CONFIG, function (state) {
    state.config = state.initial = Object.assign({}, state.initial, JSON.parse(localStorage.getItem("config")));
  }), _defineProperty(_mutations, OVERRIDE_PAGE_LAYOUT_CONFIG, function (state, payload) {
    state.config = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(state.config, payload);
  }), _mutations)
});

/***/ }),

/***/ "./resources/js/Pages/core/services/store/htmlclass.module.js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/htmlclass.module.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_BODY_CLASSNAME": () => (/* binding */ ADD_BODY_CLASSNAME),
/* harmony export */   "REMOVE_BODY_CLASSNAME": () => (/* binding */ REMOVE_BODY_CLASSNAME),
/* harmony export */   "ADD_CLASSNAME": () => (/* binding */ ADD_CLASSNAME),
/* harmony export */   "SET_CLASSNAME_BY_POSITION": () => (/* binding */ SET_CLASSNAME_BY_POSITION),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _actions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// action types
var ADD_BODY_CLASSNAME = "addBodyClassName";
var REMOVE_BODY_CLASSNAME = "removeBodyClassName";
var ADD_CLASSNAME = "addClassName"; // mutation types

var SET_CLASSNAME_BY_POSITION = "setClassNameByPosition";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: {
    classes: {}
  },
  getters: {
    getClasses: function getClasses(state) {
      return function (position) {
        if (typeof position !== "undefined") {
          return state.classes[position];
        }

        return state.classes;
      };
    }
  },
  actions: (_actions = {}, _defineProperty(_actions, ADD_BODY_CLASSNAME, function (context, className) {
    document.body.classList.add(className);
  }), _defineProperty(_actions, REMOVE_BODY_CLASSNAME, function (context, className) {
    document.body.classList.remove(className);
  }), _defineProperty(_actions, ADD_CLASSNAME, function (context, payload) {
    context.commit(SET_CLASSNAME_BY_POSITION, payload);
  }), _actions),
  mutations: _defineProperty({}, SET_CLASSNAME_BY_POSITION, function (state, payload) {
    var position = payload.position,
        className = payload.className;

    if (!state.classes[position]) {
      state.classes[position] = [];
    }

    state.classes[position].push(className);
  })
});

/***/ }),

/***/ "./resources/js/Pages/core/services/store/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/core/services/store/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ "./resources/js/Pages/core/services/store/auth.module.js");
/* harmony import */ var _htmlclass_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlclass.module */ "./resources/js/Pages/core/services/store/htmlclass.module.js");
/* harmony import */ var _config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.module */ "./resources/js/Pages/core/services/store/config.module.js");
/* harmony import */ var _breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbs.module */ "./resources/js/Pages/core/services/store/breadcrumbs.module.js");
/* harmony import */ var _profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.module */ "./resources/js/Pages/core/services/store/profile.module.js");







vue__WEBPACK_IMPORTED_MODULE_5__.default.use(vuex__WEBPACK_IMPORTED_MODULE_6__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_6__.default.Store({
  modules: {
    auth: _auth_module__WEBPACK_IMPORTED_MODULE_0__.default,
    htmlClass: _htmlclass_module__WEBPACK_IMPORTED_MODULE_1__.default,
    config: _config_module__WEBPACK_IMPORTED_MODULE_2__.default,
    breadcrumbs: _breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.default,
    profile: _profile_module__WEBPACK_IMPORTED_MODULE_4__.default
  }
}));

/***/ }),

/***/ "./resources/js/Pages/core/services/store/profile.module.js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/profile.module.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UPDATE_PERSONAL_INFO": () => (/* binding */ UPDATE_PERSONAL_INFO),
/* harmony export */   "UPDATE_ACCOUNT_INFO": () => (/* binding */ UPDATE_ACCOUNT_INFO),
/* harmony export */   "SET_PERSONAL_INFO": () => (/* binding */ SET_PERSONAL_INFO),
/* harmony export */   "SET_ACCOUNT_INFO": () => (/* binding */ SET_ACCOUNT_INFO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _actions, _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// action types
var UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
var UPDATE_ACCOUNT_INFO = "updateUserAccountInfo"; // mutation types

var SET_PERSONAL_INFO = "setPersonalInfo";
var SET_ACCOUNT_INFO = "setAccountInfo";
var state = {
  user_personal_info: {
    photo: "media/users/300_21.jpg",
    name: "James",
    surname: "Jones",
    company_name: "Fifestudios",
    job: "Application Developer",
    email: "matt@fifestudios.com",
    phone: "44(76)34254578",
    company_site: "fifestudios"
  },
  user_account_info: {
    username: "nick84",
    email: "nick.watson@loop.com",
    language: "English",
    time_zone: "(GMT-11:00) Midway Island",
    communication: {
      email: true,
      sms: true,
      phone: false
    },
    verification: true
  }
};
var getters = {
  currentUserPersonalInfo: function currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },
  currentUserAccountInfo: function currentUserAccountInfo(state) {
    return state.user_account_info;
  },
  currentUserPhoto: function currentUserPhoto(state) {
    return state.user_personal_info.photo;
  }
};
var actions = (_actions = {}, _defineProperty(_actions, UPDATE_PERSONAL_INFO, function (context, payload) {
  context.commit(SET_PERSONAL_INFO, payload);
}), _defineProperty(_actions, UPDATE_ACCOUNT_INFO, function (context, payload) {
  context.commit(SET_ACCOUNT_INFO, payload);
}), _actions);
var mutations = (_mutations = {}, _defineProperty(_mutations, SET_PERSONAL_INFO, function (state, user_personal_info) {
  state.user_personal_info = user_personal_info;
}), _defineProperty(_mutations, SET_ACCOUNT_INFO, function (state, user_account_info) {
  state.user_account_info = user_account_info;
}), _mutations);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (options.includeInheritedProps && (currentPath === '__proto__' ||
        (currentPath === 'constructor' && typeof currentValue === 'function'))) {
        throw new Error('For security reasons, object\'s magic properties cannot be set')
      }
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
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

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "createLogger": () => (/* binding */ createLogger),
/* harmony export */   "createNamespacedHelpers": () => (/* binding */ createNamespacedHelpers),
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "mapActions": () => (/* binding */ mapActions),
/* harmony export */   "mapGetters": () => (/* binding */ mapGetters),
/* harmony export */   "mapMutations": () => (/* binding */ mapMutations),
/* harmony export */   "mapState": () => (/* binding */ mapState)
/* harmony export */ });
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof __webpack_require__.g !== 'undefined'
    ? __webpack_require__.g
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);



/***/ }),

/***/ "./resources/js/Pages/core/config/layout.config.json":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/core/config/layout.config.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"demo":"demo6","self":{"layout":"default","body":{},"logo":"/media/logos/logo-letter-9.png"},"loader":{"type":"spinner-logo","logo":"/media/logos/logo-letter-1.png","message":"Please wait..."},"breakpoints":{"sm":576,"md":768,"lg":992,"xl":1200,"xxl":1200},"colors":{"theme":{"base":{"white":"#ffffff","primary":"#8950FC","secondary":"#E5EAEE","success":"#1BC5BD","info":"#8950FC","warning":"#FFA800","danger":"#F64E60","light":"#F3F6F9","dark":"#212121"},"light":{"white":"#ffffff","primary":"#E1E9FF","secondary":"#ECF0F3","success":"#C9F7F5","info":"#EEE5FF","warning":"#FFF4DE","danger":"#fC929C","light":"#F3F6F9","dark":"#D6D6E0"},"inverse":{"white":"#ffffff","primary":"#ffffff","secondary":"#212121","success":"#ffffff","info":"#ffffff","warning":"#ffffff","danger":"#ffffff","light":"#464E5F","dark":"#ffffff"}},"gray":{"gray-100":"#F3F6F9","gray-200":"#ECF0F3","gray-300":"#E5EAEE","gray-400":"#D6D6E0","gray-500":"#B5B5C3","gray-600":"#80808F","gray-700":"#464E5F","gray-800":"#1B283F","gray-900":"#212121"}},"font-family":"Poppins","header":{"self":{"width":"fluid","fixed":{"desktop":true,"mobile":true}}},"subheader":{"display":true,"displayDesc":false,"displayDaterangepicker":true,"layout":"subheader-v6","fixed":false,"width":"fixed","clear":false,"style":"transparent"},"content":{"width":"fixed"},"aside":{"self":{"display":true,"fixed":true,"minimize":{"toggle":true,"default":false}},"secondary":{"display":true},"menu":{"dropdown":false,"scroll":false,"submenu":{"accordion":true}}},"footer":{"width":"fixed","fixed":false},"extras":{"search":{"display":false,"layout":"offcanvas","offcanvas":{"direction":"left"}},"notifications":{"display":false,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"quick-actions":{"display":true,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"cart":{"display":false,"layout":"dropdown","offcanvas":{"direction":"right"}},"chat":{"display":false},"user":{"display":true,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"languages":{"display":false},"quick-panel":{"display":true,"offcanvas":{"direction":"left"}},"toolbar":{"display":true},"scrolltop":{"display":true}}}');

/***/ })

}]);
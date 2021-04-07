(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_store_breadcrumbs_module_js"],{

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

/***/ })

}]);
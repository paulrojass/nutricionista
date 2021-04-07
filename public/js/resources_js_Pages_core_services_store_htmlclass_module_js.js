(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_store_htmlclass_module_js"],{

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

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_store_profile_module_js"],{

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

/***/ })

}]);
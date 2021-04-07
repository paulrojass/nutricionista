(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_nlId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/nlId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/nlId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e) {
  if (e.length < 8) {
    return {
      meta: {},
      valid: false
    };
  }

  var t = e;

  if (t.length === 8) {
    t = "0".concat(t);
  }

  if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  t = t.replace(/\./g, "");

  if (parseInt(t, 10) === 0) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = 0;
  var l = t.length;

  for (var _e = 0; _e < l - 1; _e++) {
    a += (9 - _e) * parseInt(t.charAt(_e), 10);
  }

  a = a % 11;

  if (a === 10) {
    a = 0;
  }

  return {
    meta: {},
    valid: "".concat(a) === t.charAt(l - 1)
  };
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_brId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/brId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/brId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.replace(/\D/g, "");

  if (!/^\d{11}$/.test(e) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var a = 0;
  var r;

  for (r = 0; r < 9; r++) {
    a += (10 - r) * parseInt(e.charAt(r), 10);
  }

  a = 11 - a % 11;

  if (a === 10 || a === 11) {
    a = 0;
  }

  if ("".concat(a) !== e.charAt(9)) {
    return {
      meta: {},
      valid: false
    };
  }

  var f = 0;

  for (r = 0; r < 10; r++) {
    f += (11 - r) * parseInt(e.charAt(r), 10);
  }

  f = 11 - f % 11;

  if (f === 10 || f === 11) {
    f = 0;
  }

  return {
    meta: {},
    valid: "".concat(f) === e.charAt(10)
  };
}

/***/ })

}]);
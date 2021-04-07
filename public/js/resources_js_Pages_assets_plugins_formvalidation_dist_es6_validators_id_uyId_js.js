(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_uyId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/uyId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/uyId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^\d{8}$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  var e = [2, 9, 8, 7, 6, 3, 4];
  var a = 0;

  for (var r = 0; r < 7; r++) {
    a += parseInt(t.charAt(r), 10) * e[r];
  }

  a = a % 10;

  if (a > 0) {
    a = 10 - a;
  }

  return {
    meta: {},
    valid: "".concat(a) === t.charAt(7)
  };
}

/***/ })

}]);
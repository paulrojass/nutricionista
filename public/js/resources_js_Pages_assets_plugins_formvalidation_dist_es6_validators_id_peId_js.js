(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_id_peId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/peId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/id/peId.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  if (!/^\d{8}[0-9A-Z]*$/.test(t)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (t.length === 8) {
    return {
      meta: {},
      valid: true
    };
  }

  var e = [3, 2, 7, 6, 5, 4, 3, 2];
  var r = 0;

  for (var _a = 0; _a < 8; _a++) {
    r += e[_a] * parseInt(t.charAt(_a), 10);
  }

  var a = r % 11;
  var n = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][a];
  var c = "KJIHGFEDCBA".charAt(a);
  return {
    meta: {},
    valid: t.charAt(8) === "".concat(n) || t.charAt(8) === c
  };
}

/***/ })

}]);
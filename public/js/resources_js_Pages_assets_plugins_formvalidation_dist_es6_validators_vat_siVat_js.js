(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_siVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/siVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/siVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.match(/^(SI)?([1-9][0-9]{7})$/);

  if (!e) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e[1] ? t.substr(2) : t;
  var a = [8, 7, 6, 5, 4, 3, 2];
  var s = 0;

  for (var _t = 0; _t < 7; _t++) {
    s += parseInt(r.charAt(_t), 10) * a[_t];
  }

  s = 11 - s % 11;

  if (s === 10) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === r.substr(7, 1)
  };
}

/***/ })

}]);
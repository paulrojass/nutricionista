(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_roVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/roVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/roVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^RO[1-9][0-9]{1,9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[1-9][0-9]{1,9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var s = e.length;
  var r = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - s);
  var l = 0;

  for (var _t = 0; _t < s - 1; _t++) {
    l += parseInt(e.charAt(_t), 10) * r[_t];
  }

  l = 10 * l % 11 % 10;
  return {
    meta: {},
    valid: "".concat(l) === e.substr(s - 1, 1)
  };
}

/***/ })

}]);
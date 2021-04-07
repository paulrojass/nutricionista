(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_eeVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/eeVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/eeVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^EE[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 0;
  var a = [3, 7, 1, 3, 7, 1, 3, 7, 1];

  for (var _t = 0; _t < 9; _t++) {
    r += parseInt(e.charAt(_t), 10) * a[_t];
  }

  return {
    meta: {},
    valid: r % 10 === 0
  };
}

/***/ })

}]);
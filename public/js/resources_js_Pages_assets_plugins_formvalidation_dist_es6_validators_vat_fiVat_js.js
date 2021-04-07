(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_fiVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/fiVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/fiVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^FI[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = [7, 9, 10, 5, 8, 4, 2, 1];
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t), 10) * r[_t];
  }

  return {
    meta: {},
    valid: a % 11 === 0
  };
}

/***/ })

}]);
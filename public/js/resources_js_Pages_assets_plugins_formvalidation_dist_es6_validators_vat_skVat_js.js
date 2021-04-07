(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_skVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/skVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/skVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: parseInt(e, 10) % 11 === 0
  };
}

/***/ })

}]);
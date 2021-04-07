(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_luVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/luVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/luVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^LU[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: "".concat(parseInt(e.substr(0, 6), 10) % 89) === e.substr(6, 2)
  };
}

/***/ })

}]);
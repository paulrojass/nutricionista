(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_rsVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/rsVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/rsVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^RS[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = 10;
  var a = 0;

  for (var _t = 0; _t < 8; _t++) {
    a = (parseInt(e.charAt(_t), 10) + r) % 10;

    if (a === 0) {
      a = 10;
    }

    r = 2 * a % 11;
  }

  return {
    meta: {},
    valid: (r + parseInt(e.substr(8, 1), 10)) % 10 === 1
  };
}

/***/ })

}]);
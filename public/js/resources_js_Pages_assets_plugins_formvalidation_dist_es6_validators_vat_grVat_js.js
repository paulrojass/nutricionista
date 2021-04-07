(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_grVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/grVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/grVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^(GR|EL)[0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  if (e.length === 8) {
    e = "0".concat(e);
  }

  var r = [256, 128, 64, 32, 16, 8, 4, 2];
  var s = 0;

  for (var _t = 0; _t < 8; _t++) {
    s += parseInt(e.charAt(_t), 10) * r[_t];
  }

  s = s % 11 % 10;
  return {
    meta: {},
    valid: "".concat(s) === e.substr(8, 1)
  };
}

/***/ })

}]);
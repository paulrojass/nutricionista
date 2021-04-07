(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_atVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/atVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/atVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^ATU[0-9]{8}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^U[0-9]{8}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  e = e.substr(1);
  var r = [1, 2, 1, 2, 1, 2, 1];
  var s = 0;
  var a = 0;

  for (var _t = 0; _t < 7; _t++) {
    a = parseInt(e.charAt(_t), 10) * r[_t];

    if (a > 9) {
      a = Math.floor(a / 10) + a % 10;
    }

    s += a;
  }

  s = 10 - (s + 4) % 10;

  if (s === 10) {
    s = 0;
  }

  return {
    meta: {},
    valid: "".concat(s) === e.substr(7, 1)
  };
}

/***/ })

}]);
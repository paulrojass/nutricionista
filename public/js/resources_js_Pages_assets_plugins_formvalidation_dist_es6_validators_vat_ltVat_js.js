(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_ltVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ltVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/ltVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = e.length;
  var a = 0;
  var l;

  for (l = 0; l < r - 1; l++) {
    a += parseInt(e.charAt(l), 10) * (1 + l % 9);
  }

  var f = a % 11;

  if (f === 10) {
    a = 0;

    for (l = 0; l < r - 1; l++) {
      a += parseInt(e.charAt(l), 10) * (1 + (l + 2) % 9);
    }
  }

  f = f % 11 % 10;
  return {
    meta: {},
    valid: "".concat(f) === e.charAt(r - 1)
  };
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_veVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/veVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/veVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t;

  if (/^VE[VEJPG][0-9]{9}$/.test(e)) {
    e = e.substr(2);
  }

  if (!/^[VEJPG][0-9]{9}$/.test(e)) {
    return {
      meta: {},
      valid: false
    };
  }

  var r = {
    E: 8,
    G: 20,
    J: 12,
    P: 16,
    V: 4
  };
  var s = [3, 2, 7, 6, 5, 4, 3, 2];
  var a = r[e.charAt(0)];

  for (var _t = 0; _t < 8; _t++) {
    a += parseInt(e.charAt(_t + 1), 10) * s[_t];
  }

  a = 11 - a % 11;

  if (a === 11 || a === 10) {
    a = 0;
  }

  return {
    meta: {},
    valid: "".concat(a) === e.substr(9, 1)
  };
}

/***/ })

}]);
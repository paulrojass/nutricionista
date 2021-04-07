(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_vat_deVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var n = 5;

  for (var r = 0; r < e; r++) {
    n = ((n || 10) * 2 % 11 + parseInt(t.charAt(r), 10)) % 10;
  }

  return n === 1;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/deVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/vat/deVat.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/mod11And10.js");

function e(e) {
  var r = e;

  if (/^DE[0-9]{9}$/.test(r)) {
    r = r.substr(2);
  }

  if (!/^[0-9]{9}$/.test(r)) {
    return {
      meta: {},
      valid: false
    };
  }

  return {
    meta: {},
    valid: (0,_algorithms_mod11And10__WEBPACK_IMPORTED_MODULE_0__.default)(r)
  };
}

/***/ })

}]);
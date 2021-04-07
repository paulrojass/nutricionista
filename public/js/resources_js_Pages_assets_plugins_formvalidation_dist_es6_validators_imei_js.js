(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_imei_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  var n = 0;
  var r = 0;

  while (e--) {
    r += l[n][parseInt(t.charAt(e), 10)];
    n = 1 - n;
  }

  return r % 10 === 0 && r > 0;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/imei.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/imei.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js");

function t() {
  return {
    validate: function validate(t) {
      if (t.value === "") {
        return {
          valid: true
        };
      }

      switch (true) {
        case /^\d{15}$/.test(t.value):
        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(t.value):
        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(t.value):
          var a = t.value.replace(/[^0-9]/g, "");
          return {
            valid: (0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(a)
          };

        case /^\d{14}$/.test(t.value):
        case /^\d{16}$/.test(t.value):
        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(t.value):
        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(t.value):
          return {
            valid: true
          };

        default:
          return {
            valid: false
          };
      }
    }
  };
}

/***/ })

}]);
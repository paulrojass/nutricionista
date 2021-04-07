(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_lessThan_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
function r(r, e) {
  var t = Array.isArray(e) ? e : [e];
  var a = r;
  t.forEach(function (r) {
    a = a.replace("%s", r);
  });
  return a;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/lessThan.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/lessThan.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function s() {
  return {
    validate: function validate(s) {
      if (s.value === "") {
        return {
          valid: true
        };
      }

      var a = Object.assign({}, {
        inclusive: true,
        message: ""
      }, s.options);
      var l = parseFloat("".concat(a.max).replace(",", "."));
      return a.inclusive ? {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? a.message || s.l10n.lessThan["default"] : a.message, "".concat(l)),
        valid: parseFloat(s.value) <= l
      } : {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? a.message || s.l10n.lessThan.notInclusive : a.message, "".concat(l)),
        valid: parseFloat(s.value) < l
      };
    }
  };
}

/***/ })

}]);
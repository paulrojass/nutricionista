(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_between_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/between.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/between.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function s() {
  var s = function s(e) {
    return parseFloat("".concat(e).replace(",", "."));
  };

  return {
    validate: function validate(a) {
      var t = a.value;

      if (t === "") {
        return {
          valid: true
        };
      }

      var n = Object.assign({}, {
        inclusive: true,
        message: ""
      }, a.options);
      var l = s(n.min);
      var o = s(n.max);
      return n.inclusive ? {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(a.l10n ? n.message || a.l10n.between["default"] : n.message, ["".concat(l), "".concat(o)]),
        valid: parseFloat(t) >= l && parseFloat(t) <= o
      } : {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(a.l10n ? n.message || a.l10n.between.notInclusive : n.message, ["".concat(l), "".concat(o)]),
        valid: parseFloat(t) > l && parseFloat(t) < o
      };
    }
  };
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_siren_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function luhn(value) {
    var length = value.length;
    var prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    var mul = 0;
    var sum = 0;

    while (length--) {
      sum += prodArr[mul][parseInt(value.charAt(length), 10)];
      mul = 1 - mul;
    }

    return sum % 10 === 0 && sum > 0;
  }

  exports.default = luhn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siren.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siren.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siren() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^\d{9}$/.test(input.value) && luhn_1["default"](input.value)
        };
      }
    };
  }

  exports.default = siren;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
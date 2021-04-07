(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_lessThan_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function format(message, parameters) {
    var params = Array.isArray(parameters) ? parameters : [parameters];
    var output = message;
    params.forEach(function (p) {
      output = output.replace('%s', p);
    });
    return output;
  }

  exports.default = format;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function lessThan() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var maxValue = parseFloat(("" + opts.max).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan["default"] : opts.message, "" + maxValue),
          valid: parseFloat(input.value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "" + maxValue),
          valid: parseFloat(input.value) < maxValue
        };
      }
    };
  }

  exports.default = lessThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
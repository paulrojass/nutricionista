(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_between_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function between() {
    var formatValue = function formatValue(value) {
      return parseFloat(("" + value).replace(',', '.'));
    };

    return {
      validate: function validate(input) {
        var value = input.value;

        if (value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var minValue = formatValue(opts.min);
        var maxValue = formatValue(opts.max);
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between["default"] : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) > minValue && parseFloat(value) < maxValue
        };
      }
    };
  }

  exports.default = between;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
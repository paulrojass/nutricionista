(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_greaterThan_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function greaterThan() {
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
        var minValue = parseFloat(("" + opts.min).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan["default"] : opts.message, "" + minValue),
          valid: parseFloat(input.value) >= minValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "" + minValue),
          valid: parseFloat(input.value) > minValue
        };
      }
    };
  }

  exports.default = greaterThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
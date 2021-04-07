(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_regexp_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function regexp() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var reg = input.options.regexp;

        if (reg instanceof RegExp) {
          return {
            valid: reg.test(input.value)
          };
        } else {
          var pattern = reg.toString();
          var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
          return {
            valid: exp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = regexp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
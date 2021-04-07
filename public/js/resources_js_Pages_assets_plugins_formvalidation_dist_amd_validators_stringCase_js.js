(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_stringCase_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringCase() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          "case": 'lower'
        }, input.options);
        var caseOpt = (opts["case"] || 'lower').toLowerCase();
        return {
          message: opts.message || (input.l10n ? 'upper' === caseOpt ? input.l10n.stringCase.upper : input.l10n.stringCase["default"] : opts.message),
          valid: 'upper' === caseOpt ? input.value === input.value.toUpperCase() : input.value === input.value.toLowerCase()
        };
      }
    };
  }

  exports.default = stringCase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
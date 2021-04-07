(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_imo_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imo.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imo.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function imo() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^IMO \d{7}$/i.test(input.value)) {
          return {
            valid: false
          };
        }

        var digits = input.value.replace(/^.*(\d{7})$/, '$1');
        var sum = 0;

        for (var i = 6; i >= 1; i--) {
          sum += parseInt(digits.slice(6 - i, -i), 10) * (i + 1);
        }

        return {
          valid: sum % 10 === parseInt(digits.charAt(6), 10)
        };
      }
    };
  }

  exports.default = imo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_rtn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/rtn.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/rtn.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function rtn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^\d{9}$/.test(input.value)) {
          return {
            valid: false
          };
        }

        var sum = 0;

        for (var i = 0; i < input.value.length; i += 3) {
          sum += parseInt(input.value.charAt(i), 10) * 3 + parseInt(input.value.charAt(i + 1), 10) * 7 + parseInt(input.value.charAt(i + 2), 10);
        }

        return {
          valid: sum !== 0 && sum % 10 === 0
        };
      }
    };
  }

  exports.default = rtn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
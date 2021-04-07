(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_issn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/issn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/issn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function issn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^\d{4}\-\d{3}[\dX]$/.test(input.value)) {
          return {
            valid: false
          };
        }

        var chars = input.value.replace(/[^0-9X]/gi, '').split('');
        var length = chars.length;
        var sum = 0;

        if (chars[7] === 'X') {
          chars[7] = '10';
        }

        for (var i = 0; i < length; i++) {
          sum += parseInt(chars[i], 10) * (8 - i);
        }

        return {
          valid: sum % 11 === 0
        };
      }
    };
  }

  exports.default = issn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
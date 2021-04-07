(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_siret_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siret.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siret.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siret() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var length = input.value.length;
        var sum = 0;
        var tmp;

        for (var i = 0; i < length; i++) {
          tmp = parseInt(input.value.charAt(i), 10);

          if (i % 2 === 0) {
            tmp = tmp * 2;

            if (tmp > 9) {
              tmp -= 9;
            }
          }

          sum += tmp;
        }

        return {
          valid: sum % 10 === 0
        };
      }
    };
  }

  exports.default = siret;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
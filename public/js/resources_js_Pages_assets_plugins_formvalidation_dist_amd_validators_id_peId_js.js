(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_peId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/peId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/peId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function peId(value) {
    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (value.length === 8) {
      return {
        meta: {},
        valid: true
      };
    }

    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += weight[i] * parseInt(value.charAt(i), 10);
    }

    var cd = sum % 11;
    var checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    var checkChar = "KJIHGFEDCBA".charAt(cd);
    return {
      meta: {},
      valid: value.charAt(8) === "" + checkDigit || value.charAt(8) === checkChar
    };
  }

  exports.default = peId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
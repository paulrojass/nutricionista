(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_uyId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/uyId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/uyId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function uyId(value) {
    if (!/^\d{8}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [2, 9, 8, 7, 6, 3, 4];
    var sum = 0;

    for (var i = 0; i < 7; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 10;

    if (sum > 0) {
      sum = 10 - sum;
    }

    return {
      meta: {},
      valid: "" + sum === value.charAt(7)
    };
  }

  exports.default = uyId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
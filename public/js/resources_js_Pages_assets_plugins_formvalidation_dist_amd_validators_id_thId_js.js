(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_thId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/thId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/thId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function thId(value) {
    if (value.length !== 13) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;

    for (var i = 0; i < 12; i++) {
      sum += parseInt(value.charAt(i), 10) * (13 - i);
    }

    return {
      meta: {},
      valid: (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10)
    };
  }

  exports.default = thId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
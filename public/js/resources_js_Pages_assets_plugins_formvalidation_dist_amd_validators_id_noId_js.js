(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_noId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/noId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/noId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function noId(value) {
    if (!/^\d{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var firstCd = function firstCd(v) {
      var weight = [3, 7, 6, 1, 8, 9, 4, 5, 2];
      var sum = 0;

      for (var i = 0; i < 9; i++) {
        sum += weight[i] * parseInt(v.charAt(i), 10);
      }

      return 11 - sum % 11;
    };

    var secondCd = function secondCd(v) {
      var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
      var sum = 0;

      for (var i = 0; i < 10; i++) {
        sum += weight[i] * parseInt(v.charAt(i), 10);
      }

      return 11 - sum % 11;
    };

    return {
      meta: {},
      valid: "" + firstCd(value) === value.substr(-2, 1) && "" + secondCd(value) === value.substr(-1)
    };
  }

  exports.default = noId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
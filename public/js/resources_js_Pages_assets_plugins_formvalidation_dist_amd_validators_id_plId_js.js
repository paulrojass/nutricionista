(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_plId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/plId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/plId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function plId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var length = value.length;
    var weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

    for (var i = 0; i < length - 1; i++) {
      sum += weight[i] * parseInt(value.charAt(i), 10);
    }

    sum = sum % 10;

    if (sum === 0) {
      sum = 10;
    }

    sum = 10 - sum;
    return {
      meta: {},
      valid: "" + sum === value.charAt(length - 1)
    };
  }

  exports.default = plId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
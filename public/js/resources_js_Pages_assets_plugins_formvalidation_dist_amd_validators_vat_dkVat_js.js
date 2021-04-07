(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_dkVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/dkVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/dkVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function dkVat(value) {
    var v = value;

    if (/^DK[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var weight = [2, 7, 6, 5, 4, 3, 2, 1];

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 11 === 0
    };
  }

  exports.default = dkVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
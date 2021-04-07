(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_siVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/siVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/siVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siVat(value) {
    var res = value.match(/^(SI)?([1-9][0-9]{7})$/);

    if (!res) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = res[1] ? value.substr(2) : value;
    var weight = [8, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 7; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(7, 1)
    };
  }

  exports.default = siVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
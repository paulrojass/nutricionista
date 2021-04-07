(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_chVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/chVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/chVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function chVat(value) {
    var v = value;

    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.substr(1);
    var weight = [5, 4, 3, 2, 7, 6, 5, 4];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 10) {
      return {
        meta: {},
        valid: false
      };
    }

    if (sum === 11) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(8, 1)
    };
  }

  exports.default = chVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
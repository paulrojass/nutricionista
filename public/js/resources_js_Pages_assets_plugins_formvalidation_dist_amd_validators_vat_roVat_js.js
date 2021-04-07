(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_roVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/roVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/roVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function roVat(value) {
    var v = value;

    if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[1-9][0-9]{1,9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
    var sum = 0;

    for (var i = 0; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 10 * sum % 11 % 10;
    return {
      meta: {},
      valid: "" + sum === v.substr(length - 1, 1)
    };
  }

  exports.default = roVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
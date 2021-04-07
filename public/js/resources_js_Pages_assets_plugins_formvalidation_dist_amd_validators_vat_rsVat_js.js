(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_rsVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/rsVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/rsVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function rsVat(value) {
    var v = value;

    if (/^RS[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 10;
    var temp = 0;

    for (var i = 0; i < 8; i++) {
      temp = (parseInt(v.charAt(i), 10) + sum) % 10;

      if (temp === 0) {
        temp = 10;
      }

      sum = 2 * temp % 11;
    }

    return {
      meta: {},
      valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1
    };
  }

  exports.default = rsVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
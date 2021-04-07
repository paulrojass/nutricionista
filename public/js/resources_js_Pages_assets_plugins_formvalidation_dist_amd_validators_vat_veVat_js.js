(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_veVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/veVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/veVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function veVat(value) {
    var v = value;

    if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[VEJPG][0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var types = {
      E: 8,
      G: 20,
      J: 12,
      P: 16,
      V: 4
    };
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = types[v.charAt(0)];

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i + 1), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 11 || sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(9, 1)
    };
  }

  exports.default = veVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
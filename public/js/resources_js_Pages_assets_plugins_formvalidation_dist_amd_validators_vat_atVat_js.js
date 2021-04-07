(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_atVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/atVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/atVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function atVat(value) {
    var v = value;

    if (/^ATU[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^U[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.substr(1);
    var weight = [1, 2, 1, 2, 1, 2, 1];
    var sum = 0;
    var temp = 0;

    for (var i = 0; i < 7; i++) {
      temp = parseInt(v.charAt(i), 10) * weight[i];

      if (temp > 9) {
        temp = Math.floor(temp / 10) + temp % 10;
      }

      sum += temp;
    }

    sum = 10 - (sum + 4) % 10;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(7, 1)
    };
  }

  exports.default = atVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
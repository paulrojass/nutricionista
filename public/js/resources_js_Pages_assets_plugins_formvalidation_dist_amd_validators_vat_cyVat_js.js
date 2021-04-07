(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_cyVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/cyVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/cyVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function cyVat(value) {
    var v = value;

    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (v.substr(0, 2) === '12') {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var translation = {
      0: 1,
      1: 0,
      2: 5,
      3: 7,
      4: 9,
      5: 13,
      6: 15,
      7: 17,
      8: 19,
      9: 21
    };

    for (var i = 0; i < 8; i++) {
      var temp = parseInt(v.charAt(i), 10);

      if (i % 2 === 0) {
        temp = translation["" + temp];
      }

      sum += temp;
    }

    return {
      meta: {},
      valid: "" + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26] === v.substr(8, 1)
    };
  }

  exports.default = cyVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
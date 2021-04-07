(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_frVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function luhn(value) {
    var length = value.length;
    var prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    var mul = 0;
    var sum = 0;

    while (length--) {
      sum += prodArr[mul][parseInt(value.charAt(length), 10)];
      mul = 1 - mul;
    }

    return sum % 10 === 0 && sum > 0;
  }

  exports.default = luhn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/frVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/frVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function frVat(value) {
    var v = value;

    if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (!luhn_1["default"](v.substr(2))) {
      return {
        meta: {},
        valid: false
      };
    }

    if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
      return {
        meta: {},
        valid: v.substr(0, 2) === "" + parseInt(v.substr(2) + '12', 10) % 97
      };
    } else {
      var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      var check = void 0;

      if (/^[0-9]$/.test(v.charAt(0))) {
        check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
      } else {
        check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
      }

      return {
        meta: {},
        valid: (parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11 === check % 11
      };
    }
  }

  exports.default = frVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
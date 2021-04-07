(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_meid_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/meid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/meid.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function meid() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = input.value;

        switch (true) {
          case /^[0-9A-F]{15}$/i.test(v):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(v):
          case /^\d{19}$/.test(v):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(v):
            var cd = v.charAt(v.length - 1).toUpperCase();
            v = v.replace(/[- ]/g, '');

            if (v.match(/^\d*$/i)) {
              return {
                valid: luhn_1["default"](v)
              };
            }

            v = v.slice(0, -1);
            var checkDigit = '';
            var i = void 0;

            for (i = 1; i <= 13; i += 2) {
              checkDigit += (parseInt(v.charAt(i), 16) * 2).toString(16);
            }

            var sum = 0;

            for (i = 0; i < checkDigit.length; i++) {
              sum += parseInt(checkDigit.charAt(i), 16);
            }

            return {
              valid: sum % 10 === 0 ? cd === '0' : cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16).toUpperCase()
            };

          case /^[0-9A-F]{14}$/i.test(v):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(v):
          case /^\d{18}$/.test(v):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(v):
            return {
              valid: true
            };

          default:
            return {
              valid: false
            };
        }
      }
    };
  }

  exports.default = meid;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
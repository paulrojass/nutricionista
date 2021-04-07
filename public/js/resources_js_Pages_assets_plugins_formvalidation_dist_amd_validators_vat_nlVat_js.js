(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_nlVat_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function transform(input) {
    return input.split('').map(function (c) {
      var code = c.charCodeAt(0);
      return code >= 65 && code <= 90 ? code - 55 : c;
    }).join('').split('').map(function (c) {
      return parseInt(c, 10);
    });
  }

  function mod97And10(input) {
    var digits = transform(input);
    var temp = 0;
    var length = digits.length;

    for (var i = 0; i < length - 1; ++i) {
      temp = (temp + digits[i]) * 10 % 97;
    }

    temp += digits[length - 1];
    return temp % 97 === 1;
  }

  exports.default = mod97And10;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function nlId(value) {
    if (value.length < 8) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value;

    if (v.length === 8) {
      v = "0" + v;
    }

    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.replace(/\./g, '');

    if (parseInt(v, 10) === 0) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var length = v.length;

    for (var i = 0; i < length - 1; i++) {
      sum += (9 - i) * parseInt(v.charAt(i), 10);
    }

    sum = sum % 11;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.charAt(length - 1)
    };
  }

  exports.default = nlId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/nlVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/nlVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/mod97And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js"), __webpack_require__(/*! ../id/nlId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod97And10_1, nlId_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function nlVat(value) {
    var v = value;

    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var id = v.substr(0, 9);
    return {
      meta: {},
      valid: nlId_1["default"](id).valid || mod97And10_1["default"]("NL" + v)
    };
  }

  exports.default = nlVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
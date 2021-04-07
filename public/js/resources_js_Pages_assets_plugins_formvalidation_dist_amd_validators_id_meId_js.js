(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_meId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function jmbg(value, countryCode) {
    if (!/^\d{13}$/.test(value)) {
      return false;
    }

    var day = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var rr = parseInt(value.substr(7, 2), 10);
    var k = parseInt(value.substr(12, 1), 10);

    if (day > 31 || month > 12) {
      return false;
    }

    var sum = 0;

    for (var i = 0; i < 6; i++) {
      sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }

    sum = 11 - sum % 11;

    if (sum === 10 || sum === 11) {
      sum = 0;
    }

    if (sum !== k) {
      return false;
    }

    switch (countryCode.toUpperCase()) {
      case 'BA':
        return 10 <= rr && rr <= 19;

      case 'MK':
        return 41 <= rr && rr <= 49;

      case 'ME':
        return 20 <= rr && rr <= 29;

      case 'RS':
        return 70 <= rr && rr <= 99;

      case 'SI':
        return 50 <= rr && rr <= 59;

      default:
        return true;
    }
  }

  exports.default = jmbg;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/meId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/meId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function meId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'ME')
    };
  }

  exports.default = meId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_twId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/twId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/twId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function twId(value) {
    var v = value.toUpperCase();

    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    var letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    var letterValue = Math.floor(letterIndex / 10) + letterIndex % 10 * (length - 1);
    var sum = 0;

    for (var i = 1; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    }

    return {
      meta: {},
      valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0
    };
  }

  exports.default = twId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
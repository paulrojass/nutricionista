(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_algorithms_mod97And10_js"],{

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

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_clId_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/clId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/clId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function clId(value) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/\-/g, '');

    while (v.length < 9) {
      v = "0" + v;
    }

    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;
    var cd = "" + sum;

    if (sum === 11) {
      cd = '0';
    } else if (sum === 10) {
      cd = 'K';
    }

    return {
      meta: {},
      valid: cd === v.charAt(8).toUpperCase()
    };
  }

  exports.default = clId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
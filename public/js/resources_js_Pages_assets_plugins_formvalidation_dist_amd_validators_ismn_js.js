(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_ismn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ismn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ismn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ismn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: null,
            valid: true
          };
        }

        var tpe;

        switch (true) {
          case /^M\d{9}$/.test(input.value):
          case /^M-\d{4}-\d{4}-\d{1}$/.test(input.value):
          case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
            tpe = 'ISMN10';
            break;

          case /^9790\d{9}$/.test(input.value):
          case /^979-0-\d{4}-\d{4}-\d{1}$/.test(input.value):
          case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
            tpe = 'ISMN13';
            break;

          default:
            return {
              meta: null,
              valid: false
            };
        }

        var v = input.value;

        if ('ISMN10' === tpe) {
          v = "9790" + v.substr(1);
        }

        v = v.replace(/[^0-9]/gi, '');
        var sum = 0;
        var length = v.length;
        var weight = [1, 3];

        for (var i = 0; i < length - 1; i++) {
          sum += parseInt(v.charAt(i), 10) * weight[i % 2];
        }

        sum = (10 - sum % 10) % 10;
        return {
          meta: {
            type: tpe
          },
          valid: "" + sum === v.charAt(length - 1)
        };
      }
    };
  }

  exports.default = ismn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_stringLength_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function format(message, parameters) {
    var params = Array.isArray(parameters) ? parameters : [parameters];
    var output = message;
    params.forEach(function (p) {
      output = output.replace('%s', p);
    });
    return output;
  }

  exports.default = format;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringLength() {
    var utf8Length = function utf8Length(str) {
      var s = str.length;

      for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);

        if (code > 0x7f && code <= 0x7ff) {
          s++;
        } else if (code > 0x7ff && code <= 0xffff) {
          s += 2;
        }

        if (code >= 0xDC00 && code <= 0xDFFF) {
          i--;
        }
      }

      return "" + s;
    };

    return {
      validate: function validate(input) {
        var opts = Object.assign({}, {
          message: '',
          trim: false,
          utf8Bytes: false
        }, input.options);
        var v = opts.trim === true || "" + opts.trim === 'true' ? input.value.trim() : input.value;

        if (v === '') {
          return {
            valid: true
          };
        }

        var min = opts.min ? "" + opts.min : '';
        var max = opts.max ? "" + opts.max : '';
        var length = opts.utf8Bytes ? utf8Length(v) : v.length;
        var isValid = true;
        var msg = input.l10n ? opts.message || input.l10n.stringLength["default"] : opts.message;

        if (min && length < parseInt(min, 10) || max && length > parseInt(max, 10)) {
          isValid = false;
        }

        switch (true) {
          case !!min && !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [min, max]);
            break;

          case !!min:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "" + (parseInt(min, 10) - 1));
            break;

          case !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "" + (parseInt(max, 10) + 1));
            break;

          default:
            break;
        }

        return {
          message: msg,
          valid: isValid
        };
      }
    };
  }

  exports.default = stringLength;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
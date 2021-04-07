(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_callback_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function call(functionName, args) {
    if ('function' === typeof functionName) {
      return functionName.apply(this, args);
    } else if ('string' === typeof functionName) {
      var name_1 = functionName;

      if ('()' === name_1.substring(name_1.length - 2)) {
        name_1 = name_1.substring(0, name_1.length - 2);
      }

      var ns = name_1.split('.');
      var func = ns.pop();
      var context_1 = window;

      for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
        var t = ns_1[_i];
        context_1 = context_1[t];
      }

      return typeof context_1[func] === 'undefined' ? null : context_1[func].apply(this, args);
    }
  }

  exports.default = call;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function callback() {
    return {
      validate: function validate(input) {
        var response = call_1["default"](input.options.callback, [input]);
        return 'boolean' === typeof response ? {
          valid: response
        } : response;
      }
    };
  }

  exports.default = callback;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
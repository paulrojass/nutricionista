(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_core_emitter_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/emitter.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/emitter.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function emitter() {
    return {
      fns: {},
      clear: function clear() {
        this.fns = {};
      },
      emit: function emit(event) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        (this.fns[event] || []).map(function (handler) {
          return handler.apply(handler, args);
        });
      },
      off: function off(event, func) {
        if (this.fns[event]) {
          var index = this.fns[event].indexOf(func);

          if (index >= 0) {
            this.fns[event].splice(index, 1);
          }
        }
      },
      on: function on(event, func) {
        (this.fns[event] = this.fns[event] || []).push(func);
      }
    };
  }

  exports.default = emitter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
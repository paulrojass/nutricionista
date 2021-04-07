(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_core_filter_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/filter.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/filter.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function filter() {
    return {
      filters: {},
      add: function add(name, func) {
        (this.filters[name] = this.filters[name] || []).push(func);
      },
      clear: function clear() {
        this.filters = {};
      },
      execute: function execute(name, defaultValue, args) {
        if (!this.filters[name] || !this.filters[name].length) {
          return defaultValue;
        }

        var result = defaultValue;
        var filters = this.filters[name];
        var count = filters.length;

        for (var i = 0; i < count; i++) {
          result = filters[i].apply(result, args);
        }

        return result;
      },
      remove: function remove(name, func) {
        if (this.filters[name]) {
          this.filters[name] = this.filters[name].filter(function (f) {
            return f !== func;
          });
        }
      }
    };
  }

  exports.default = filter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
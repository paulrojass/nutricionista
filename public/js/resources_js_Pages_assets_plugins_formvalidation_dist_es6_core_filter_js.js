(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_core_filter_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/filter.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/filter.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t() {
  return {
    filters: {},
    add: function add(t, e) {
      (this.filters[t] = this.filters[t] || []).push(e);
    },
    clear: function clear() {
      this.filters = {};
    },
    execute: function execute(t, e, i) {
      if (!this.filters[t] || !this.filters[t].length) {
        return e;
      }

      var s = e;
      var r = this.filters[t];
      var l = r.length;

      for (var _t = 0; _t < l; _t++) {
        s = r[_t].apply(s, i);
      }

      return s;
    },
    remove: function remove(t, e) {
      if (this.filters[t]) {
        this.filters[t] = this.filters[t].filter(function (t) {
          return t !== e;
        });
      }
    }
  };
}

/***/ })

}]);
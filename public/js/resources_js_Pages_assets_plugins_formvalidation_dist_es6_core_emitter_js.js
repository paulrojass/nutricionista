(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_core_emitter_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/emitter.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/emitter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
function s() {
  return {
    fns: {},
    clear: function clear() {
      this.fns = {};
    },
    emit: function emit(s) {
      for (var _len = arguments.length, f = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        f[_key - 1] = arguments[_key];
      }

      (this.fns[s] || []).map(function (s) {
        return s.apply(s, f);
      });
    },
    off: function off(s, f) {
      if (this.fns[s]) {
        var n = this.fns[s].indexOf(f);

        if (n >= 0) {
          this.fns[s].splice(n, 1);
        }
      }
    },
    on: function on(s, f) {
      (this.fns[s] = this.fns[s] || []).push(f);
    }
  };
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_regexp_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/regexp.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/regexp.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e() {
  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var t = e.options.regexp;

      if (t instanceof RegExp) {
        return {
          valid: t.test(e.value)
        };
      } else {
        var n = t.toString();
        var o = e.options.flags ? new RegExp(n, e.options.flags) : new RegExp(n);
        return {
          valid: o.test(e.value)
        };
      }
    }
  };
}

/***/ })

}]);
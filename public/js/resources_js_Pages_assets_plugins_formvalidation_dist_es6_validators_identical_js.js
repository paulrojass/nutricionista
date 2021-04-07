(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_identical_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/identical.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/identical.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
function o() {
  return {
    validate: function validate(o) {
      var t = "function" === typeof o.options.compare ? o.options.compare.call(this) : o.options.compare;
      return {
        valid: t === "" || o.value === t
      };
    }
  };
}

/***/ })

}]);
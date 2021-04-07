(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_mac_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/mac.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/mac.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
function a() {
  return {
    validate: function validate(a) {
      return {
        valid: a.value === "" || /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(a.value) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(a.value)
      };
    }
  };
}

/***/ })

}]);
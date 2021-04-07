(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_imo_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/imo.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/imo.js ***!
  \*************************************************************************************/
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

      if (!/^IMO \d{7}$/i.test(e.value)) {
        return {
          valid: false
        };
      }

      var t = e.value.replace(/^.*(\d{7})$/, "$1");
      var r = 0;

      for (var _e = 6; _e >= 1; _e--) {
        r += parseInt(t.slice(6 - _e, -_e), 10) * (_e + 1);
      }

      return {
        valid: r % 10 === parseInt(t.charAt(6), 10)
      };
    }
  };
}

/***/ })

}]);
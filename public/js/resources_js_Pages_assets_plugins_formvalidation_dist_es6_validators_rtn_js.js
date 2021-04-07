(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_rtn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/rtn.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/rtn.js ***!
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

      if (!/^\d{9}$/.test(e.value)) {
        return {
          valid: false
        };
      }

      var t = 0;

      for (var a = 0; a < e.value.length; a += 3) {
        t += parseInt(e.value.charAt(a), 10) * 3 + parseInt(e.value.charAt(a + 1), 10) * 7 + parseInt(e.value.charAt(a + 2), 10);
      }

      return {
        valid: t !== 0 && t % 10 === 0
      };
    }
  };
}

/***/ })

}]);
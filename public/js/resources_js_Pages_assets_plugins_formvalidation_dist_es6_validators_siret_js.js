(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_siret_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/siret.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/siret.js ***!
  \***************************************************************************************/
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

      var t = e.value.length;
      var l = 0;
      var r;

      for (var a = 0; a < t; a++) {
        r = parseInt(e.value.charAt(a), 10);

        if (a % 2 === 0) {
          r = r * 2;

          if (r > 9) {
            r -= 9;
          }
        }

        l += r;
      }

      return {
        valid: l % 10 === 0
      };
    }
  };
}

/***/ })

}]);
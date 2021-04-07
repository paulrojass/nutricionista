(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_ean_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ean.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ean.js ***!
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

      if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(e.value)) {
        return {
          valid: false
        };
      }

      var t = e.value.length;
      var a = 0;
      var l = t === 8 ? [3, 1] : [1, 3];

      for (var r = 0; r < t - 1; r++) {
        a += parseInt(e.value.charAt(r), 10) * l[r % 2];
      }

      a = (10 - a % 10) % 10;
      return {
        valid: "".concat(a) === e.value.charAt(t - 1)
      };
    }
  };
}

/***/ })

}]);
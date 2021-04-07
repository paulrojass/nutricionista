(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_issn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/issn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/issn.js ***!
  \**************************************************************************************/
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

      if (!/^\d{4}\-\d{3}[\dX]$/.test(e.value)) {
        return {
          valid: false
        };
      }

      var t = e.value.replace(/[^0-9X]/gi, "").split("");
      var l = t.length;
      var r = 0;

      if (t[7] === "X") {
        t[7] = "10";
      }

      for (var _e = 0; _e < l; _e++) {
        r += parseInt(t[_e], 10) * (8 - _e);
      }

      return {
        valid: r % 11 === 0
      };
    }
  };
}

/***/ })

}]);
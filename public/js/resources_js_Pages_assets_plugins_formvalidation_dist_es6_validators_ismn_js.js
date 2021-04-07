(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_ismn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ismn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ismn.js ***!
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
          meta: null,
          valid: true
        };
      }

      var t;

      switch (true) {
        case /^M\d{9}$/.test(e.value):
        case /^M-\d{4}-\d{4}-\d{1}$/.test(e.value):
        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
          t = "ISMN10";
          break;

        case /^9790\d{9}$/.test(e.value):
        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):
        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
          t = "ISMN13";
          break;

        default:
          return {
            meta: null,
            valid: false
          };
      }

      var a = e.value;

      if ("ISMN10" === t) {
        a = "9790".concat(a.substr(1));
      }

      a = a.replace(/[^0-9]/gi, "");
      var s = 0;
      var l = a.length;
      var d = [1, 3];

      for (var _e = 0; _e < l - 1; _e++) {
        s += parseInt(a.charAt(_e), 10) * d[_e % 2];
      }

      s = (10 - s % 10) % 10;
      return {
        meta: {
          type: t
        },
        valid: "".concat(s) === a.charAt(l - 1)
      };
    }
  };
}

/***/ })

}]);
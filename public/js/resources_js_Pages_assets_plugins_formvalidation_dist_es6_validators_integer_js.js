(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_integer_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/integer.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/integer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
function a() {
  return {
    validate: function validate(a) {
      if (a.value === "") {
        return {
          valid: true
        };
      }

      var e = Object.assign({}, {
        decimalSeparator: ".",
        thousandsSeparator: ""
      }, a.options);
      var t = e.decimalSeparator === "." ? "\\." : e.decimalSeparator;
      var r = e.thousandsSeparator === "." ? "\\." : e.thousandsSeparator;
      var o = new RegExp("^-?[0-9]{1,3}(".concat(r, "[0-9]{3})*(").concat(t, "[0-9]+)?$"));
      var n = new RegExp(r, "g");
      var s = "".concat(a.value);

      if (!o.test(s)) {
        return {
          valid: false
        };
      }

      if (r) {
        s = s.replace(n, "");
      }

      if (t) {
        s = s.replace(t, ".");
      }

      var i = parseFloat(s);
      return {
        valid: !isNaN(i) && isFinite(i) && Math.floor(i) === i
      };
    }
  };
}

/***/ })

}]);
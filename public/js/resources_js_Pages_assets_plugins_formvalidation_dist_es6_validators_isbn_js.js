(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_isbn_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/isbn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/isbn.js ***!
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
          meta: {
            type: null
          },
          valid: true
        };
      }

      var t;

      switch (true) {
        case /^\d{9}[\dX]$/.test(e.value):
        case e.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
        case e.value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
          t = "ISBN10";
          break;

        case /^(978|979)\d{9}[\dX]$/.test(e.value):
        case e.value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
        case e.value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
          t = "ISBN13";
          break;

        default:
          return {
            meta: {
              type: null
            },
            valid: false
          };
      }

      var a = e.value.replace(/[^0-9X]/gi, "").split("");
      var l = a.length;
      var s = 0;
      var d;
      var u;

      switch (t) {
        case "ISBN10":
          s = 0;

          for (d = 0; d < l - 1; d++) {
            s += parseInt(a[d], 10) * (10 - d);
          }

          u = 11 - s % 11;

          if (u === 11) {
            u = 0;
          } else if (u === 10) {
            u = "X";
          }

          return {
            meta: {
              type: t
            },
            valid: "".concat(u) === a[l - 1]
          };

        case "ISBN13":
          s = 0;

          for (d = 0; d < l - 1; d++) {
            s += d % 2 === 0 ? parseInt(a[d], 10) : parseInt(a[d], 10) * 3;
          }

          u = 10 - s % 10;

          if (u === 10) {
            u = "0";
          }

          return {
            meta: {
              type: t
            },
            valid: "".concat(u) === a[l - 1]
          };
      }
    }
  };
}

/***/ })

}]);
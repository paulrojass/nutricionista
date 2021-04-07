(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_meid_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t(t) {
  var e = t.length;
  var l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
  var n = 0;
  var r = 0;

  while (e--) {
    r += l[n][parseInt(t.charAt(e), 10)];
    n = 1 - n;
  }

  return r % 10 === 0 && r > 0;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/meid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/meid.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/algorithms/luhn.js");

function e() {
  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var r = e.value;

      switch (true) {
        case /^[0-9A-F]{15}$/i.test(r):
        case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(r):
        case /^\d{19}$/.test(r):
        case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(r):
          var _e = r.charAt(r.length - 1).toUpperCase();

          r = r.replace(/[- ]/g, "");

          if (r.match(/^\d*$/i)) {
            return {
              valid: (0,_algorithms_luhn__WEBPACK_IMPORTED_MODULE_0__.default)(r)
            };
          }

          r = r.slice(0, -1);
          var a = "";
          var s;

          for (s = 1; s <= 13; s += 2) {
            a += (parseInt(r.charAt(s), 16) * 2).toString(16);
          }

          var l = 0;

          for (s = 0; s < a.length; s++) {
            l += parseInt(a.charAt(s), 16);
          }

          return {
            valid: l % 10 === 0 ? _e === "0" : _e === ((Math.floor((l + 10) / 10) * 10 - l) * 2).toString(16).toUpperCase()
          };

        case /^[0-9A-F]{14}$/i.test(r):
        case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(r):
        case /^\d{18}$/.test(r):
        case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(r):
          return {
            valid: true
          };

        default:
          return {
            valid: false
          };
      }
    }
  };
}

/***/ })

}]);
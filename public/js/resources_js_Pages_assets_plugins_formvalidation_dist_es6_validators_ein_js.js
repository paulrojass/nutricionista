(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_ein_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ein.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/ein.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e() {
  var e = {
    ANDOVER: ["10", "12"],
    ATLANTA: ["60", "67"],
    AUSTIN: ["50", "53"],
    BROOKHAVEN: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
    CINCINNATI: ["30", "32", "35", "36", "37", "38", "61"],
    FRESNO: ["15", "24"],
    INTERNET: ["20", "26", "27", "45", "46", "47"],
    KANSAS_CITY: ["40", "44"],
    MEMPHIS: ["94", "95"],
    OGDEN: ["80", "90"],
    PHILADELPHIA: ["33", "39", "41", "42", "43", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
    SMALL_BUSINESS_ADMINISTRATION: ["31"]
  };
  return {
    validate: function validate(t) {
      if (t.value === "") {
        return {
          meta: null,
          valid: true
        };
      }

      if (!/^[0-9]{2}-?[0-9]{7}$/.test(t.value)) {
        return {
          meta: null,
          valid: false
        };
      }

      var a = "".concat(t.value.substr(0, 2));

      for (var _t in e) {
        if (e[_t].indexOf(a) !== -1) {
          return {
            meta: {
              campus: _t
            },
            valid: true
          };
        }
      }

      return {
        meta: null,
        valid: false
      };
    }
  };
}

/***/ })

}]);
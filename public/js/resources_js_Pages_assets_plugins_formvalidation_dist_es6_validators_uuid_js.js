(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_uuid_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
function r(r, e) {
  var t = Array.isArray(e) ? e : [e];
  var a = r;
  t.forEach(function (r) {
    a = a.replace("%s", r);
  });
  return a;
}

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/uuid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/uuid.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function s() {
  return {
    validate: function validate(s) {
      if (s.value === "") {
        return {
          valid: true
        };
      }

      var A = Object.assign({}, {
        message: ""
      }, s.options);
      var i = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };
      var n = A.version ? "".concat(A.version) : "all";
      return {
        message: A.version ? (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? A.message || s.l10n.uuid.version : A.message, A.version) : s.l10n ? s.l10n.uuid["default"] : A.message,
        valid: null === i[n] ? true : i[n].test(s.value)
      };
    }
  };
}

/***/ })

}]);
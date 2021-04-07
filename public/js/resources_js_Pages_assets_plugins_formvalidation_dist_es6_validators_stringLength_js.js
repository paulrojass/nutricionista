(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_stringLength_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/stringLength.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/stringLength.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function t() {
  var t = function t(e) {
    var t = e.length;

    for (var s = e.length - 1; s >= 0; s--) {
      var n = e.charCodeAt(s);

      if (n > 127 && n <= 2047) {
        t++;
      } else if (n > 2047 && n <= 65535) {
        t += 2;
      }

      if (n >= 56320 && n <= 57343) {
        s--;
      }
    }

    return "".concat(t);
  };

  return {
    validate: function validate(s) {
      var n = Object.assign({}, {
        message: "",
        trim: false,
        utf8Bytes: false
      }, s.options);
      var a = n.trim === true || "".concat(n.trim) === "true" ? s.value.trim() : s.value;

      if (a === "") {
        return {
          valid: true
        };
      }

      var r = n.min ? "".concat(n.min) : "";
      var l = n.max ? "".concat(n.max) : "";
      var i = n.utf8Bytes ? t(a) : a.length;
      var g = true;
      var m = s.l10n ? n.message || s.l10n.stringLength["default"] : n.message;

      if (r && i < parseInt(r, 10) || l && i > parseInt(l, 10)) {
        g = false;
      }

      switch (true) {
        case !!r && !!l:
          m = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? n.message || s.l10n.stringLength.between : n.message, [r, l]);
          break;

        case !!r:
          m = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? n.message || s.l10n.stringLength.more : n.message, "".concat(parseInt(r, 10) - 1));
          break;

        case !!l:
          m = (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(s.l10n ? n.message || s.l10n.stringLength.less : n.message, "".concat(parseInt(l, 10) + 1));
          break;

        default:
          break;
      }

      return {
        message: m,
        valid: g
      };
    }
  };
}

/***/ })

}]);
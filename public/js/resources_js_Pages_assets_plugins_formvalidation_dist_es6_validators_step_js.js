(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_step_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/step.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/step.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/format.js");

function e() {
  var e = function e(t, _e) {
    var s = Math.pow(10, _e);
    var a = t * s;
    var n;

    switch (true) {
      case a === 0:
        n = 0;
        break;

      case a > 0:
        n = 1;
        break;

      case a < 0:
        n = -1;
        break;
    }

    var r = a % 1 === .5 * n;
    return r ? (Math.floor(a) + (n > 0 ? 1 : 0)) / s : Math.round(a) / s;
  };

  var s = function s(t, _s) {
    if (_s === 0) {
      return 1;
    }

    var a = "".concat(t).split(".");
    var n = "".concat(_s).split(".");
    var r = (a.length === 1 ? 0 : a[1].length) + (n.length === 1 ? 0 : n[1].length);
    return e(t - _s * Math.floor(t / _s), r);
  };

  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var a = parseFloat(e.value);

      if (isNaN(a) || !isFinite(a)) {
        return {
          valid: false
        };
      }

      var n = Object.assign({}, {
        baseValue: 0,
        message: "",
        step: 1
      }, e.options);
      var r = s(a - n.baseValue, n.step);
      return {
        message: (0,_utils_format__WEBPACK_IMPORTED_MODULE_0__.default)(e.l10n ? n.message || e.l10n.step["default"] : n.message, "".concat(n.step)),
        valid: r === 0 || r === n.step
      };
    }
  };
}

/***/ })

}]);
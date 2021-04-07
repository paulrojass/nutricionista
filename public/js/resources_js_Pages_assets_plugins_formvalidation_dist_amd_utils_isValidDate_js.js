(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_utils_isValidDate_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isValidDate(year, month, day, notInFuture) {
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return false;
    }

    if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
      return false;
    }

    var numDays = [31, year % 400 === 0 || year % 100 !== 0 && year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day <= 0 || day > numDays[month - 1]) {
      return false;
    }

    if (notInFuture === true) {
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getMonth();
      var currentDay = currentDate.getDate();
      return year < currentYear || year === currentYear && month - 1 < currentMonth || year === currentYear && month - 1 === currentMonth && day < currentDay;
    }

    return true;
  }

  exports.default = isValidDate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
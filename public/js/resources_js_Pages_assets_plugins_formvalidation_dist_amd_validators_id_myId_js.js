(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_myId_js"],{

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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/myId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/myId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function myId(value) {
    if (!/^\d{12}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var year = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);

    if (!isValidDate_1["default"](year + 1900, month, day) && !isValidDate_1["default"](year + 2000, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    var placeOfBirth = value.substr(6, 2);
    var notAvailablePlaces = ["17", "18", "19", "20", "69", "70", "73", "80", "81", "94", "95", "96", "97"];
    return {
      meta: {},
      valid: notAvailablePlaces.indexOf(placeOfBirth) === -1
    };
  }

  exports.default = myId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
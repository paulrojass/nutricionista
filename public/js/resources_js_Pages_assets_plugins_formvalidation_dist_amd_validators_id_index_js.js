(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_id_index_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function luhn(value) {
    var length = value.length;
    var prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    var mul = 0;
    var sum = 0;

    while (length--) {
      sum += prodArr[mul][parseInt(value.charAt(length), 10)];
      mul = 1 - mul;
    }

    return sum % 10 === 0 && sum > 0;
  }

  exports.default = luhn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mod11And10(value) {
    var length = value.length;
    var check = 5;

    for (var i = 0; i < length; i++) {
      check = ((check || 10) * 2 % 11 + parseInt(value.charAt(i), 10)) % 10;
    }

    return check === 1;
  }

  exports.default = mod11And10;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function verhoeff(value) {
    var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
    var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
    var invertedArray = value.reverse();
    var c = 0;

    for (var i = 0; i < invertedArray.length; i++) {
      c = d[c][p[i % 8][invertedArray[i]]];
    }

    return c === 0;
  }

  exports.default = verhoeff;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function format(message, parameters) {
    var params = Array.isArray(parameters) ? parameters : [parameters];
    var output = message;
    params.forEach(function (p) {
      output = output.replace('%s', p);
    });
    return output;
  }

  exports.default = format;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/arId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/arId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function arId(value) {
    var v = value.replace(/\./g, '');
    return {
      meta: {},
      valid: /^\d{7,8}$/.test(v)
    };
  }

  exports.default = arId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/baId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/baId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function baId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'BA')
    };
  }

  exports.default = baId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/bgId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/bgId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function bgId(value) {
    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/\s/g, '');
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);

    if (month > 40) {
      year += 100;
      month -= 40;
    } else if (month > 20) {
      year -= 100;
      month -= 20;
    }

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    for (var i = 0; i < 9; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = sum % 11 % 10;
    return {
      meta: {},
      valid: "" + sum === v.substr(9, 1)
    };
  }

  exports.default = bgId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/brId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/brId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function brId(value) {
    var v = value.replace(/\D/g, '');

    if (!/^\d{11}$/.test(v) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var d1 = 0;
    var i;

    for (i = 0; i < 9; i++) {
      d1 += (10 - i) * parseInt(v.charAt(i), 10);
    }

    d1 = 11 - d1 % 11;

    if (d1 === 10 || d1 === 11) {
      d1 = 0;
    }

    if ("" + d1 !== v.charAt(9)) {
      return {
        meta: {},
        valid: false
      };
    }

    var d2 = 0;

    for (i = 0; i < 10; i++) {
      d2 += (11 - i) * parseInt(v.charAt(i), 10);
    }

    d2 = 11 - d2 % 11;

    if (d2 === 10 || d2 === 11) {
      d2 = 0;
    }

    return {
      meta: {},
      valid: "" + d2 === v.charAt(10)
    };
  }

  exports.default = brId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/chId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/chId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function chId(value) {
    if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/\D/g, '').substr(3);
    var length = v.length;
    var weight = length === 8 ? [3, 1] : [1, 3];
    var sum = 0;

    for (var i = 0; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i % 2];
    }

    sum = 10 - sum % 10;
    return {
      meta: {},
      valid: "" + sum === v.charAt(length - 1)
    };
  }

  exports.default = chId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/clId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/clId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function clId(value) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/\-/g, '');

    while (v.length < 9) {
      v = "0" + v;
    }

    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;
    var cd = "" + sum;

    if (sum === 11) {
      cd = '0';
    } else if (sum === 10) {
      cd = 'K';
    }

    return {
      meta: {},
      valid: cd === v.charAt(8).toUpperCase()
    };
  }

  exports.default = clId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/cnId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/cnId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function cnId(value) {
    var v = value.trim();

    if (!/^\d{15}$/.test(v) && !/^\d{17}[\dXx]{1}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var adminDivisionCodes = {
      11: {
        0: [0],
        1: [[0, 9], [11, 17]],
        2: [0, 28, 29]
      },
      12: {
        0: [0],
        1: [[0, 16]],
        2: [0, 21, 23, 25]
      },
      13: {
        0: [0],
        1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
        2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
        3: [[0, 4], [21, 24]],
        4: [[0, 4], 6, 21, [23, 35], 81],
        5: [[0, 3], [21, 35], 81, 82],
        6: [[0, 4], [21, 38], [81, 84]],
        7: [[0, 3], 5, 6, [21, 33]],
        8: [[0, 4], [21, 28]],
        9: [[0, 3], [21, 30], [81, 84]],
        10: [[0, 3], [22, 26], 28, 81, 82],
        11: [[0, 2], [21, 28], 81, 82]
      },
      14: {
        0: [0],
        1: [0, 1, [5, 10], [21, 23], 81],
        2: [[0, 3], 11, 12, [21, 27]],
        3: [[0, 3], 11, 21, 22],
        4: [[0, 2], 11, 21, [23, 31], 81],
        5: [[0, 2], 21, 22, 24, 25, 81],
        6: [[0, 3], [21, 24]],
        7: [[0, 2], [21, 29], 81],
        8: [[0, 2], [21, 30], 81, 82],
        9: [[0, 2], [21, 32], 81],
        10: [[0, 2], [21, 34], 81, 82],
        11: [[0, 2], [21, 30], 81, 82],
        23: [[0, 3], 22, 23, [25, 30], 32, 33]
      },
      15: {
        0: [0],
        1: [[0, 5], [21, 25]],
        2: [[0, 7], [21, 23]],
        3: [[0, 4]],
        4: [[0, 4], [21, 26], [28, 30]],
        5: [[0, 2], [21, 26], 81],
        6: [[0, 2], [21, 27]],
        7: [[0, 3], [21, 27], [81, 85]],
        8: [[0, 2], [21, 26]],
        9: [[0, 2], [21, 29], 81],
        22: [[0, 2], [21, 24]],
        25: [[0, 2], [22, 31]],
        26: [[0, 2], [24, 27], [29, 32], 34],
        28: [0, 1, [22, 27]],
        29: [0, [21, 23]]
      },
      21: {
        0: [0],
        1: [[0, 6], [11, 14], [22, 24], 81],
        2: [[0, 4], [11, 13], 24, [81, 83]],
        3: [[0, 4], 11, 21, 23, 81],
        4: [[0, 4], 11, [21, 23]],
        5: [[0, 5], 21, 22],
        6: [[0, 4], 24, 81, 82],
        7: [[0, 3], 11, 26, 27, 81, 82],
        8: [[0, 4], 11, 81, 82],
        9: [[0, 5], 11, 21, 22],
        10: [[0, 5], 11, 21, 81],
        11: [[0, 3], 21, 22],
        12: [[0, 2], 4, 21, 23, 24, 81, 82],
        13: [[0, 3], 21, 22, 24, 81, 82],
        14: [[0, 4], 21, 22, 81]
      },
      22: {
        0: [0],
        1: [[0, 6], 12, 22, [81, 83]],
        2: [[0, 4], 11, 21, [81, 84]],
        3: [[0, 3], 22, 23, 81, 82],
        4: [[0, 3], 21, 22],
        5: [[0, 3], 21, 23, 24, 81, 82],
        6: [[0, 2], 4, 5, [21, 23], 25, 81],
        7: [[0, 2], [21, 24], 81],
        8: [[0, 2], 21, 22, 81, 82],
        24: [[0, 6], 24, 26]
      },
      23: {
        0: [0],
        1: [[0, 12], 21, [23, 29], [81, 84]],
        2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
        3: [[0, 7], 21, 81, 82],
        4: [[0, 7], 21, 22],
        5: [[0, 3], 5, 6, [21, 24]],
        6: [[0, 6], [21, 24]],
        7: [[0, 16], 22, 81],
        8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
        9: [[0, 4], 21],
        10: [[0, 5], 24, 25, 81, [83, 85]],
        11: [[0, 2], 21, 23, 24, 81, 82],
        12: [[0, 2], [21, 26], [81, 83]],
        27: [[0, 4], [21, 23]]
      },
      31: {
        0: [0],
        1: [0, 1, [3, 10], [12, 20]],
        2: [0, 30]
      },
      32: {
        0: [0],
        1: [[0, 7], 11, [13, 18], 24, 25],
        2: [[0, 6], 11, 81, 82],
        3: [[0, 5], 11, 12, [21, 24], 81, 82],
        4: [[0, 2], 4, 5, 11, 12, 81, 82],
        5: [[0, 9], [81, 85]],
        6: [[0, 2], 11, 12, 21, 23, [81, 84]],
        7: [0, 1, 3, 5, 6, [21, 24]],
        8: [[0, 4], 11, 26, [29, 31]],
        9: [[0, 3], [21, 25], 28, 81, 82],
        10: [[0, 3], 11, 12, 23, 81, 84, 88],
        11: [[0, 2], 11, 12, [81, 83]],
        12: [[0, 4], [81, 84]],
        13: [[0, 2], 11, [21, 24]]
      },
      33: {
        0: [0],
        1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
        2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
        3: [[0, 4], 22, 24, [26, 29], 81, 82],
        4: [[0, 2], 11, 21, 24, [81, 83]],
        5: [[0, 3], [21, 23]],
        6: [[0, 2], 21, 24, [81, 83]],
        7: [[0, 3], 23, 26, 27, [81, 84]],
        8: [[0, 3], 22, 24, 25, 81],
        9: [[0, 3], 21, 22],
        10: [[0, 4], [21, 24], 81, 82],
        11: [[0, 2], [21, 27], 81]
      },
      34: {
        0: [0],
        1: [[0, 4], 11, [21, 24], 81],
        2: [[0, 4], 7, 8, [21, 23], 25],
        3: [[0, 4], 11, [21, 23]],
        4: [[0, 6], 21],
        5: [[0, 4], 6, [21, 23]],
        6: [[0, 4], 21],
        7: [[0, 3], 11, 21],
        8: [[0, 3], 11, [22, 28], 81],
        10: [[0, 4], [21, 24]],
        11: [[0, 3], 22, [24, 26], 81, 82],
        12: [[0, 4], 21, 22, 25, 26, 82],
        13: [[0, 2], [21, 24]],
        14: [[0, 2], [21, 24]],
        15: [[0, 3], [21, 25]],
        16: [[0, 2], [21, 23]],
        17: [[0, 2], [21, 23]],
        18: [[0, 2], [21, 25], 81]
      },
      35: {
        0: [0],
        1: [[0, 5], 11, [21, 25], 28, 81, 82],
        2: [[0, 6], [11, 13]],
        3: [[0, 5], 22],
        4: [[0, 3], 21, [23, 30], 81],
        5: [[0, 5], 21, [24, 27], [81, 83]],
        6: [[0, 3], [22, 29], 81],
        7: [[0, 2], [21, 25], [81, 84]],
        8: [[0, 2], [21, 25], 81],
        9: [[0, 2], [21, 26], 81, 82]
      },
      36: {
        0: [0],
        1: [[0, 5], 11, [21, 24]],
        2: [[0, 3], 22, 81],
        3: [[0, 2], 13, [21, 23]],
        4: [[0, 3], 21, [23, 30], 81, 82],
        5: [[0, 2], 21],
        6: [[0, 2], 22, 81],
        7: [[0, 2], [21, 35], 81, 82],
        8: [[0, 3], [21, 30], 81],
        9: [[0, 2], [21, 26], [81, 83]],
        10: [[0, 2], [21, 30]],
        11: [[0, 2], [21, 30], 81]
      },
      37: {
        0: [0],
        1: [[0, 5], 12, 13, [24, 26], 81],
        2: [[0, 3], 5, [11, 14], [81, 85]],
        3: [[0, 6], [21, 23]],
        4: [[0, 6], 81],
        5: [[0, 3], [21, 23]],
        6: [[0, 2], [11, 13], 34, [81, 87]],
        7: [[0, 5], 24, 25, [81, 86]],
        8: [[0, 2], 11, [26, 32], [81, 83]],
        9: [[0, 3], 11, 21, 23, 82, 83],
        10: [[0, 2], [81, 83]],
        11: [[0, 3], 21, 22],
        12: [[0, 3]],
        13: [[0, 2], 11, 12, [21, 29]],
        14: [[0, 2], [21, 28], 81, 82],
        15: [[0, 2], [21, 26], 81],
        16: [[0, 2], [21, 26]],
        17: [[0, 2], [21, 28]]
      },
      41: {
        0: [0],
        1: [[0, 6], 8, 22, [81, 85]],
        2: [[0, 5], 11, [21, 25]],
        3: [[0, 7], 11, [22, 29], 81],
        4: [[0, 4], 11, [21, 23], 25, 81, 82],
        5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
        6: [[0, 3], 11, 21, 22],
        7: [[0, 4], 11, 21, [24, 28], 81, 82],
        8: [[0, 4], 11, [21, 23], 25, [81, 83]],
        9: [[0, 2], 22, 23, [26, 28]],
        10: [[0, 2], [23, 25], 81, 82],
        11: [[0, 4], [21, 23]],
        12: [[0, 2], 21, 22, 24, 81, 82],
        13: [[0, 3], [21, 30], 81],
        14: [[0, 3], [21, 26], 81],
        15: [[0, 3], [21, 28]],
        16: [[0, 2], [21, 28], 81],
        17: [[0, 2], [21, 29]],
        90: [0, 1]
      },
      42: {
        0: [0],
        1: [[0, 7], [11, 17]],
        2: [[0, 5], 22, 81],
        3: [[0, 3], [21, 25], 81],
        5: [[0, 6], [25, 29], [81, 83]],
        6: [[0, 2], 6, 7, [24, 26], [82, 84]],
        7: [[0, 4]],
        8: [[0, 2], 4, 21, 22, 81],
        9: [[0, 2], [21, 23], 81, 82, 84],
        10: [[0, 3], [22, 24], 81, 83, 87],
        11: [[0, 2], [21, 27], 81, 82],
        12: [[0, 2], [21, 24], 81],
        13: [[0, 3], 21, 81],
        28: [[0, 2], 22, 23, [25, 28]],
        90: [0, [4, 6], 21]
      },
      43: {
        0: [0],
        1: [[0, 5], 11, 12, 21, 22, 24, 81],
        2: [[0, 4], 11, 21, [23, 25], 81],
        3: [[0, 2], 4, 21, 81, 82],
        4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
        5: [[0, 3], 11, [21, 25], [27, 29], 81],
        6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
        7: [[0, 3], [21, 26], 81],
        8: [[0, 2], 11, 21, 22],
        9: [[0, 3], [21, 23], 81],
        10: [[0, 3], [21, 28], 81],
        11: [[0, 3], [21, 29]],
        12: [[0, 2], [21, 30], 81],
        13: [[0, 2], 21, 22, 81, 82],
        31: [0, 1, [22, 27], 30]
      },
      44: {
        0: [0],
        1: [[0, 7], [11, 16], 83, 84],
        2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
        3: [0, 1, [3, 8]],
        4: [[0, 4]],
        5: [0, 1, [6, 15], 23, 82, 83],
        6: [0, 1, [4, 8]],
        7: [0, 1, [3, 5], 81, [83, 85]],
        8: [[0, 4], 11, 23, 25, [81, 83]],
        9: [[0, 3], 23, [81, 83]],
        12: [[0, 3], [23, 26], 83, 84],
        13: [[0, 3], [22, 24], 81],
        14: [[0, 2], [21, 24], 26, 27, 81],
        15: [[0, 2], 21, 23, 81],
        16: [[0, 2], [21, 25]],
        17: [[0, 2], 21, 23, 81],
        18: [[0, 3], 21, 23, [25, 27], 81, 82],
        19: [0],
        20: [0],
        51: [[0, 3], 21, 22],
        52: [[0, 3], 21, 22, 24, 81],
        53: [[0, 2], [21, 23], 81]
      },
      45: {
        0: [0],
        1: [[0, 9], [21, 27]],
        2: [[0, 5], [21, 26]],
        3: [[0, 5], 11, 12, [21, 32]],
        4: [0, 1, [3, 6], 11, [21, 23], 81],
        5: [[0, 3], 12, 21],
        6: [[0, 3], 21, 81],
        7: [[0, 3], 21, 22],
        8: [[0, 4], 21, 81],
        9: [[0, 3], [21, 24], 81],
        10: [[0, 2], [21, 31]],
        11: [[0, 2], [21, 23]],
        12: [[0, 2], [21, 29], 81],
        13: [[0, 2], [21, 24], 81],
        14: [[0, 2], [21, 25], 81]
      },
      46: {
        0: [0],
        1: [0, 1, [5, 8]],
        2: [0, 1],
        3: [0, [21, 23]],
        90: [[0, 3], [5, 7], [21, 39]]
      },
      50: {
        0: [0],
        1: [[0, 19]],
        2: [0, [22, 38], [40, 43]],
        3: [0, [81, 84]]
      },
      51: {
        0: [0],
        1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
        3: [[0, 4], 11, 21, 22],
        4: [[0, 3], 11, 21, 22],
        5: [[0, 4], 21, 22, 24, 25],
        6: [0, 1, 3, 23, 26, [81, 83]],
        7: [0, 1, 3, 4, [22, 27], 81],
        8: [[0, 2], 11, 12, [21, 24]],
        9: [[0, 4], [21, 23]],
        10: [[0, 2], 11, 24, 25, 28],
        11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
        13: [[0, 4], [21, 25], 81],
        14: [[0, 2], [21, 25]],
        15: [[0, 3], [21, 29]],
        16: [[0, 3], [21, 23], 81],
        17: [[0, 3], [21, 25], 81],
        18: [[0, 3], [21, 27]],
        19: [[0, 3], [21, 23]],
        20: [[0, 2], 21, 22, 81],
        32: [0, [21, 33]],
        33: [0, [21, 38]],
        34: [0, 1, [22, 37]]
      },
      52: {
        0: [0],
        1: [[0, 3], [11, 15], [21, 23], 81],
        2: [0, 1, 3, 21, 22],
        3: [[0, 3], [21, 30], 81, 82],
        4: [[0, 2], [21, 25]],
        5: [[0, 2], [21, 27]],
        6: [[0, 3], [21, 28]],
        22: [0, 1, [22, 30]],
        23: [0, 1, [22, 28]],
        24: [0, 1, [22, 28]],
        26: [0, 1, [22, 36]],
        27: [[0, 2], 22, 23, [25, 32]]
      },
      53: {
        0: [0],
        1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
        3: [[0, 2], [21, 26], 28, 81],
        4: [[0, 2], [21, 28]],
        5: [[0, 2], [21, 24]],
        6: [[0, 2], [21, 30]],
        7: [[0, 2], [21, 24]],
        8: [[0, 2], [21, 29]],
        9: [[0, 2], [21, 27]],
        23: [0, 1, [22, 29], 31],
        25: [[0, 4], [22, 32]],
        26: [0, 1, [21, 28]],
        27: [0, 1, [22, 30]],
        28: [0, 1, 22, 23],
        29: [0, 1, [22, 32]],
        31: [0, 2, 3, [22, 24]],
        34: [0, [21, 23]],
        33: [0, 21, [23, 25]],
        35: [0, [21, 28]]
      },
      54: {
        0: [0],
        1: [[0, 2], [21, 27]],
        21: [0, [21, 29], 32, 33],
        22: [0, [21, 29], [31, 33]],
        23: [0, 1, [22, 38]],
        24: [0, [21, 31]],
        25: [0, [21, 27]],
        26: [0, [21, 27]]
      },
      61: {
        0: [0],
        1: [[0, 4], [11, 16], 22, [24, 26]],
        2: [[0, 4], 22],
        3: [[0, 4], [21, 24], [26, 31]],
        4: [[0, 4], [22, 31], 81],
        5: [[0, 2], [21, 28], 81, 82],
        6: [[0, 2], [21, 32]],
        7: [[0, 2], [21, 30]],
        8: [[0, 2], [21, 31]],
        9: [[0, 2], [21, 29]],
        10: [[0, 2], [21, 26]]
      },
      62: {
        0: [0],
        1: [[0, 5], 11, [21, 23]],
        2: [0, 1],
        3: [[0, 2], 21],
        4: [[0, 3], [21, 23]],
        5: [[0, 3], [21, 25]],
        6: [[0, 2], [21, 23]],
        7: [[0, 2], [21, 25]],
        8: [[0, 2], [21, 26]],
        9: [[0, 2], [21, 24], 81, 82],
        10: [[0, 2], [21, 27]],
        11: [[0, 2], [21, 26]],
        12: [[0, 2], [21, 28]],
        24: [0, 21, [24, 29]],
        26: [0, 21, [23, 30]],
        29: [0, 1, [21, 27]],
        30: [0, 1, [21, 27]]
      },
      63: {
        0: [0],
        1: [[0, 5], [21, 23]],
        2: [0, 2, [21, 25]],
        21: [0, [21, 23], [26, 28]],
        22: [0, [21, 24]],
        23: [0, [21, 24]],
        25: [0, [21, 25]],
        26: [0, [21, 26]],
        27: [0, 1, [21, 26]],
        28: [[0, 2], [21, 23]]
      },
      64: {
        0: [0],
        1: [0, 1, [4, 6], 21, 22, 81],
        2: [[0, 3], 5, [21, 23]],
        3: [[0, 3], [21, 24], 81],
        4: [[0, 2], [21, 25]],
        5: [[0, 2], 21, 22]
      },
      65: {
        0: [0],
        1: [[0, 9], 21],
        2: [[0, 5]],
        21: [0, 1, 22, 23],
        22: [0, 1, 22, 23],
        23: [[0, 3], [23, 25], 27, 28],
        28: [0, 1, [22, 29]],
        29: [0, 1, [22, 29]],
        30: [0, 1, [22, 24]],
        31: [0, 1, [21, 31]],
        32: [0, 1, [21, 27]],
        40: [0, 2, 3, [21, 28]],
        42: [[0, 2], 21, [23, 26]],
        43: [0, 1, [21, 26]],
        90: [[0, 4]],
        27: [[0, 2], 22, 23]
      },
      71: {
        0: [0]
      },
      81: {
        0: [0]
      },
      82: {
        0: [0]
      }
    };
    var provincial = parseInt(v.substr(0, 2), 10);
    var prefectural = parseInt(v.substr(2, 2), 10);
    var county = parseInt(v.substr(4, 2), 10);

    if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
      return {
        meta: {},
        valid: false
      };
    }

    var inRange = false;
    var rangeDef = adminDivisionCodes[provincial][prefectural];
    var i;

    for (i = 0; i < rangeDef.length; i++) {
      if (Array.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1] || !Array.isArray(rangeDef[i]) && county === rangeDef[i]) {
        inRange = true;
        break;
      }
    }

    if (!inRange) {
      return {
        meta: {},
        valid: false
      };
    }

    var dob;

    if (v.length === 18) {
      dob = v.substr(6, 8);
    } else {
      dob = "19" + v.substr(6, 6);
    }

    var year = parseInt(dob.substr(0, 4), 10);
    var month = parseInt(dob.substr(4, 2), 10);
    var day = parseInt(dob.substr(6, 2), 10);

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (v.length === 18) {
      var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var sum = 0;

      for (i = 0; i < 17; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
      }

      sum = (12 - sum % 11) % 11;
      var checksum = v.charAt(17).toUpperCase() !== 'X' ? parseInt(v.charAt(17), 10) : 10;
      return {
        meta: {},
        valid: checksum === sum
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  exports.default = cnId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/coId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/coId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function coId(value) {
    var v = value.replace(/\./g, '').replace('-', '');

    if (!/^\d{8,16}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var weight = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    var sum = 0;

    for (var i = length - 2; i >= 0; i--) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = sum % 11;

    if (sum >= 2) {
      sum = 11 - sum;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(length - 1)
    };
  }

  exports.default = coId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/czId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/czId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function czId(value) {
    if (!/^\d{9,10}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var year = 1900 + parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10) % 50 % 20;
    var day = parseInt(value.substr(4, 2), 10);

    if (value.length === 9) {
      if (year >= 1980) {
        year -= 100;
      }

      if (year > 1953) {
        return {
          meta: {},
          valid: false
        };
      }
    } else if (year < 1954) {
      year += 100;
    }

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (value.length === 10) {
      var check = parseInt(value.substr(0, 9), 10) % 11;

      if (year < 1985) {
        check = check % 10;
      }

      return {
        meta: {},
        valid: "" + check === value.substr(9, 1)
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  exports.default = czId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/dkId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/dkId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function dkId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/-/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);

    switch (true) {
      case '5678'.indexOf(v.charAt(6)) !== -1 && year >= 58:
        year += 1800;
        break;

      case '0123'.indexOf(v.charAt(6)) !== -1:
      case '49'.indexOf(v.charAt(6)) !== -1 && year >= 37:
        year += 1900;
        break;

      default:
        year += 2000;
        break;
    }

    return {
      meta: {},
      valid: isValidDate_1["default"](year, month, day)
    };
  }

  exports.default = dkId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/esId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/esId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function esId(value) {
    var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);

    if (!isDNI && !isNIE && !isCIF) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/-/g, '');
    var check;
    var tpe;
    var isValid = true;

    if (isDNI || isNIE) {
      tpe = 'DNI';
      var index = 'XYZ'.indexOf(v.charAt(0));

      if (index !== -1) {
        v = index + v.substr(1) + '';
        tpe = 'NIE';
      }

      check = parseInt(v.substr(0, 8), 10);
      check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
      return {
        meta: {
          type: tpe
        },
        valid: check === v.substr(8, 1)
      };
    } else {
      check = v.substr(1, 7);
      tpe = 'CIF';
      var letter = v[0];
      var control = v.substr(-1);
      var sum = 0;

      for (var i = 0; i < check.length; i++) {
        if (i % 2 !== 0) {
          sum += parseInt(check[i], 10);
        } else {
          var tmp = '' + parseInt(check[i], 10) * 2;
          sum += parseInt(tmp[0], 10);

          if (tmp.length === 2) {
            sum += parseInt(tmp[1], 10);
          }
        }
      }

      var lastDigit = sum - Math.floor(sum / 10) * 10;

      if (lastDigit !== 0) {
        lastDigit = 10 - lastDigit;
      }

      if ('KQS'.indexOf(letter) !== -1) {
        isValid = control === 'JABCDEFGHI'[lastDigit];
      } else if ('ABEH'.indexOf(letter) !== -1) {
        isValid = control === '' + lastDigit;
      } else {
        isValid = control === '' + lastDigit || control === 'JABCDEFGHI'[lastDigit];
      }

      return {
        meta: {
          type: tpe
        },
        valid: isValid
      };
    }
  }

  exports.default = esId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/fiId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/fiId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function fiId(value) {
    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var day = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var year = parseInt(value.substr(4, 2), 10);
    var centuries = {
      '+': 1800,
      '-': 1900,
      'A': 2000
    };
    year = centuries[value.charAt(6)] + year;

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    var individual = parseInt(value.substr(7, 3), 10);

    if (individual < 2) {
      return {
        meta: {},
        valid: false
      };
    }

    var n = parseInt(value.substr(0, 6) + value.substr(7, 3) + '', 10);
    return {
      meta: {},
      valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10)
    };
  }

  exports.default = fiId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/frId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/frId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function frId(value) {
    var v = value.toUpperCase();

    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var cog = v.substr(5, 2);

    switch (true) {
      case /^\d{2}$/.test(cog):
        v = value;
        break;

      case cog === '2A':
        v = value.substr(0, 5) + "19" + value.substr(7);
        break;

      case cog === '2B':
        v = value.substr(0, 5) + "18" + value.substr(7);
        break;

      default:
        return {
          meta: {},
          valid: false
        };
    }

    var mod = 97 - parseInt(v.substr(0, 13), 10) % 97;
    var prefixWithZero = mod < 10 ? "0" + mod : "" + mod;
    return {
      meta: {},
      valid: prefixWithZero === v.substr(13)
    };
  }

  exports.default = frId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hkId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hkId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function hkId(value) {
    var v = value.toUpperCase();

    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var firstChar = v.charAt(0);
    var secondChar = v.charAt(1);
    var sum = 0;
    var digitParts = v;

    if (/^[A-Z]$/.test(secondChar)) {
      sum += 9 * (10 + alphabet.indexOf(firstChar));
      sum += 8 * (10 + alphabet.indexOf(secondChar));
      digitParts = v.substr(2);
    } else {
      sum += 9 * 36;
      sum += 8 * (10 + alphabet.indexOf(firstChar));
      digitParts = v.substr(1);
    }

    var length = digitParts.length;

    for (var i = 0; i < length - 1; i++) {
      sum += (7 - i) * parseInt(digitParts.charAt(i), 10);
    }

    var remaining = sum % 11;
    var checkDigit = remaining === 0 ? '0' : 11 - remaining === 10 ? 'A' : "" + (11 - remaining);
    return {
      meta: {},
      valid: checkDigit === digitParts.charAt(length - 1)
    };
  }

  exports.default = hkId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hrId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hrId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod11And10_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function hrId(value) {
    return {
      meta: {},
      valid: /^[0-9]{11}$/.test(value) && mod11And10_1["default"](value)
    };
  }

  exports.default = hrId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/idId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/idId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/verhoeff */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, verhoeff_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function idId(value) {
    if (!/^[2-9]\d{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var converted = value.split("").map(function (item) {
      return parseInt(item, 10);
    });
    return {
      meta: {},
      valid: verhoeff_1["default"](converted)
    };
  }

  exports.default = idId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ieId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ieId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ieId(value) {
    if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var getCheckDigit = function getCheckDigit(v) {
      var input = v;

      while (input.length < 7) {
        input = "0" + input;
      }

      var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
      var sum = 0;

      for (var i = 0; i < 7; i++) {
        sum += parseInt(input.charAt(i), 10) * (8 - i);
      }

      sum += 9 * alphabet.indexOf(input.substr(7));
      return alphabet[sum % 23];
    };

    var isValid = value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8)) ? value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '') : value.charAt(7) === getCheckDigit(value.substr(0, 7));
    return {
      meta: {},
      valid: isValid
    };
  }

  exports.default = ieId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ilId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ilId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ilId(value) {
    if (!/^\d{1,9}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: luhn_1["default"](value)
    };
  }

  exports.default = ilId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/index.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/index.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js"), __webpack_require__(/*! ./arId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/arId.js"), __webpack_require__(/*! ./baId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/baId.js"), __webpack_require__(/*! ./bgId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/bgId.js"), __webpack_require__(/*! ./brId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/brId.js"), __webpack_require__(/*! ./chId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/chId.js"), __webpack_require__(/*! ./clId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/clId.js"), __webpack_require__(/*! ./cnId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/cnId.js"), __webpack_require__(/*! ./coId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/coId.js"), __webpack_require__(/*! ./czId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/czId.js"), __webpack_require__(/*! ./dkId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/dkId.js"), __webpack_require__(/*! ./esId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/esId.js"), __webpack_require__(/*! ./fiId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/fiId.js"), __webpack_require__(/*! ./frId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/frId.js"), __webpack_require__(/*! ./hkId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hkId.js"), __webpack_require__(/*! ./hrId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/hrId.js"), __webpack_require__(/*! ./idId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/idId.js"), __webpack_require__(/*! ./ieId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ieId.js"), __webpack_require__(/*! ./ilId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ilId.js"), __webpack_require__(/*! ./isId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/isId.js"), __webpack_require__(/*! ./krId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/krId.js"), __webpack_require__(/*! ./ltId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ltId.js"), __webpack_require__(/*! ./lvId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/lvId.js"), __webpack_require__(/*! ./meId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/meId.js"), __webpack_require__(/*! ./mkId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mkId.js"), __webpack_require__(/*! ./mxId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mxId.js"), __webpack_require__(/*! ./myId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/myId.js"), __webpack_require__(/*! ./nlId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js"), __webpack_require__(/*! ./noId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/noId.js"), __webpack_require__(/*! ./peId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/peId.js"), __webpack_require__(/*! ./plId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/plId.js"), __webpack_require__(/*! ./roId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/roId.js"), __webpack_require__(/*! ./rsId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/rsId.js"), __webpack_require__(/*! ./seId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/seId.js"), __webpack_require__(/*! ./siId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/siId.js"), __webpack_require__(/*! ./smId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/smId.js"), __webpack_require__(/*! ./thId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/thId.js"), __webpack_require__(/*! ./trId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/trId.js"), __webpack_require__(/*! ./twId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/twId.js"), __webpack_require__(/*! ./uyId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/uyId.js"), __webpack_require__(/*! ./zaId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/zaId.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1, arId_1, baId_1, bgId_1, brId_1, chId_1, clId_1, cnId_1, coId_1, czId_1, dkId_1, esId_1, fiId_1, frId_1, hkId_1, hrId_1, idId_1, ieId_1, ilId_1, isId_1, krId_1, ltId_1, lvId_1, meId_1, mkId_1, mxId_1, myId_1, nlId_1, noId_1, peId_1, plId_1, roId_1, rsId_1, seId_1, siId_1, smId_1, thId_1, trId_1, twId_1, uyId_1, zaId_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function id() {
    var COUNTRY_CODES = ['AR', 'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CO', 'CZ', 'DK', 'EE', 'ES', 'FI', 'FR', 'HK', 'HR', 'ID', 'IE', 'IL', 'IS', 'KR', 'LT', 'LV', 'ME', 'MK', 'MX', 'MY', 'NL', 'NO', 'PE', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'TR', 'TW', 'UY', 'ZA'];
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          message: ''
        }, input.options);
        var country = input.value.substr(0, 2);

        if ('function' === typeof opts.country) {
          country = opts.country.call(this);
        } else {
          country = opts.country;
        }

        if (COUNTRY_CODES.indexOf(country) === -1) {
          return {
            valid: true
          };
        }

        var result = {
          meta: {},
          valid: true
        };

        switch (country.toLowerCase()) {
          case 'ar':
            result = arId_1["default"](input.value);
            break;

          case 'ba':
            result = baId_1["default"](input.value);
            break;

          case 'bg':
            result = bgId_1["default"](input.value);
            break;

          case 'br':
            result = brId_1["default"](input.value);
            break;

          case 'ch':
            result = chId_1["default"](input.value);
            break;

          case 'cl':
            result = clId_1["default"](input.value);
            break;

          case 'cn':
            result = cnId_1["default"](input.value);
            break;

          case 'co':
            result = coId_1["default"](input.value);
            break;

          case 'cz':
            result = czId_1["default"](input.value);
            break;

          case 'dk':
            result = dkId_1["default"](input.value);
            break;

          case 'ee':
            result = ltId_1["default"](input.value);
            break;

          case 'es':
            result = esId_1["default"](input.value);
            break;

          case 'fi':
            result = fiId_1["default"](input.value);
            break;

          case 'fr':
            result = frId_1["default"](input.value);
            break;

          case 'hk':
            result = hkId_1["default"](input.value);
            break;

          case 'hr':
            result = hrId_1["default"](input.value);
            break;

          case 'id':
            result = idId_1["default"](input.value);
            break;

          case 'ie':
            result = ieId_1["default"](input.value);
            break;

          case 'il':
            result = ilId_1["default"](input.value);
            break;

          case 'is':
            result = isId_1["default"](input.value);
            break;

          case 'kr':
            result = krId_1["default"](input.value);
            break;

          case 'lt':
            result = ltId_1["default"](input.value);
            break;

          case 'lv':
            result = lvId_1["default"](input.value);
            break;

          case 'me':
            result = meId_1["default"](input.value);
            break;

          case 'mk':
            result = mkId_1["default"](input.value);
            break;

          case 'mx':
            result = mxId_1["default"](input.value);
            break;

          case 'my':
            result = myId_1["default"](input.value);
            break;

          case 'nl':
            result = nlId_1["default"](input.value);
            break;

          case 'no':
            result = noId_1["default"](input.value);
            break;

          case 'pe':
            result = peId_1["default"](input.value);
            break;

          case 'pl':
            result = plId_1["default"](input.value);
            break;

          case 'ro':
            result = roId_1["default"](input.value);
            break;

          case 'rs':
            result = rsId_1["default"](input.value);
            break;

          case 'se':
            result = seId_1["default"](input.value);
            break;

          case 'si':
            result = siId_1["default"](input.value);
            break;

          case 'sk':
            result = czId_1["default"](input.value);
            break;

          case 'sm':
            result = smId_1["default"](input.value);
            break;

          case 'th':
            result = thId_1["default"](input.value);
            break;

          case 'tr':
            result = trId_1["default"](input.value);
            break;

          case 'tw':
            result = twId_1["default"](input.value);
            break;

          case 'uy':
            result = uyId_1["default"](input.value);
            break;

          case 'za':
            result = zaId_1["default"](input.value);
            break;

          default:
            break;
        }

        var message = format_1["default"](input.l10n ? opts.message || input.l10n.id.country : opts.message, input.l10n ? input.l10n.id.countries[country.toUpperCase()] : country.toUpperCase());
        return Object.assign({}, {
          message: message
        }, result);
      }
    };
  }

  exports.default = id;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/isId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/isId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/-/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    var century = parseInt(v.charAt(9), 10);
    year = century === 9 ? 1900 + year : (20 + century) * 100 + year;

    if (!isValidDate_1["default"](year, month, day, true)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;
    return {
      meta: {},
      valid: "" + sum === v.charAt(8)
    };
  }

  exports.default = isId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function jmbg(value, countryCode) {
    if (!/^\d{13}$/.test(value)) {
      return false;
    }

    var day = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var rr = parseInt(value.substr(7, 2), 10);
    var k = parseInt(value.substr(12, 1), 10);

    if (day > 31 || month > 12) {
      return false;
    }

    var sum = 0;

    for (var i = 0; i < 6; i++) {
      sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }

    sum = 11 - sum % 11;

    if (sum === 10 || sum === 11) {
      sum = 0;
    }

    if (sum !== k) {
      return false;
    }

    switch (countryCode.toUpperCase()) {
      case 'BA':
        return 10 <= rr && rr <= 19;

      case 'MK':
        return 41 <= rr && rr <= 49;

      case 'ME':
        return 20 <= rr && rr <= 29;

      case 'RS':
        return 70 <= rr && rr <= 99;

      case 'SI':
        return 50 <= rr && rr <= 59;

      default:
        return true;
    }
  }

  exports.default = jmbg;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/krId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/krId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function krId(value) {
    var v = value.replace('-', '');

    if (!/^\d{13}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sDigit = v.charAt(6);
    var year = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);

    switch (sDigit) {
      case '1':
      case '2':
      case '5':
      case '6':
        year += 1900;
        break;

      case '3':
      case '4':
      case '7':
      case '8':
        year += 2000;
        break;

      default:
        year += 1800;
        break;
    }

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    var length = v.length;
    var sum = 0;

    for (var i = 0; i < length - 1; i++) {
      sum += weight[i] * parseInt(v.charAt(i), 10);
    }

    var checkDigit = (11 - sum % 11) % 10;
    return {
      meta: {},
      valid: "" + checkDigit === v.charAt(length - 1)
    };
  }

  exports.default = krId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ltId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/ltId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ltId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var gender = parseInt(value.charAt(0), 10);
    var year = parseInt(value.substr(1, 2), 10);
    var month = parseInt(value.substr(3, 2), 10);
    var day = parseInt(value.substr(5, 2), 10);
    var century = gender % 2 === 0 ? 17 + gender / 2 : 17 + (gender + 1) / 2;
    year = century * 100 + year;

    if (!isValidDate_1["default"](year, month, day, true)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    var sum = 0;
    var i;

    for (i = 0; i < 10; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 11;

    if (sum !== 10) {
      return {
        meta: {},
        valid: "" + sum === value.charAt(10)
      };
    }

    sum = 0;
    weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

    for (i = 0; i < 10; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 11;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === value.charAt(10)
    };
  }

  exports.default = ltId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/lvId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/lvId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function lvId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/\D/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;

    if (!isValidDate_1["default"](year, month, day, true)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

    for (var i = 0; i < 10; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = (sum + 1) % 11 % 10;
    return {
      meta: {},
      valid: "" + sum === v.charAt(10)
    };
  }

  exports.default = lvId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/meId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/meId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function meId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'ME')
    };
  }

  exports.default = meId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mkId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mkId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mkId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'MK')
    };
  }

  exports.default = mkId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mxId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/mxId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mxId(value) {
    var v = value.toUpperCase();

    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var blacklistNames = ['BACA', 'BAKA', 'BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'CAKO', 'COGE', 'COGI', 'COJA', 'COJE', 'COJI', 'COJO', 'COLA', 'CULO', 'FALO', 'FETO', 'GETA', 'GUEI', 'GUEY', 'JETA', 'JOTO', 'KACA', 'KACO', 'KAGA', 'KAGO', 'KAKA', 'KAKO', 'KOGE', 'KOGI', 'KOJA', 'KOJE', 'KOJI', 'KOJO', 'KOLA', 'KULO', 'LILO', 'LOCA', 'LOCO', 'LOKA', 'LOKO', 'MAME', 'MAMO', 'MEAR', 'MEAS', 'MEON', 'MIAR', 'MION', 'MOCO', 'MOKO', 'MULA', 'MULO', 'NACA', 'NACO', 'PEDA', 'PEDO', 'PENE', 'PIPI', 'PITO', 'POPO', 'PUTA', 'PUTO', 'QULO', 'RATA', 'ROBA', 'ROBE', 'ROBO', 'RUIN', 'SENO', 'TETA', 'VACA', 'VAGA', 'VAGO', 'VAKA', 'VUEI', 'VUEY', 'WUEI', 'WUEY'];
    var name = v.substr(0, 4);

    if (blacklistNames.indexOf(name) >= 0) {
      return {
        meta: {},
        valid: false
      };
    }

    var year = parseInt(v.substr(4, 2), 10);
    var month = parseInt(v.substr(6, 2), 10);
    var day = parseInt(v.substr(6, 2), 10);

    if (/^[0-9]$/.test(v.charAt(16))) {
      year += 1900;
    } else {
      year += 2000;
    }

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    var gender = v.charAt(10);

    if (gender !== 'H' && gender !== 'M') {
      return {
        meta: {},
        valid: false
      };
    }

    var state = v.substr(11, 2);
    var states = ['AS', 'BC', 'BS', 'CC', 'CH', 'CL', 'CM', 'CS', 'DF', 'DG', 'GR', 'GT', 'HG', 'JC', 'MC', 'MN', 'MS', 'NE', 'NL', 'NT', 'OC', 'PL', 'QR', 'QT', 'SL', 'SP', 'SR', 'TC', 'TL', 'TS', 'VZ', 'YN', 'ZS'];

    if (states.indexOf(state) === -1) {
      return {
        meta: {},
        valid: false
      };
    }

    var alphabet = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ';
    var sum = 0;
    var length = v.length;

    for (var i = 0; i < length - 1; i++) {
      sum += (18 - i) * alphabet.indexOf(v.charAt(i));
    }

    sum = (10 - sum % 10) % 10;
    return {
      meta: {},
      valid: "" + sum === v.charAt(length - 1)
    };
  }

  exports.default = mxId;
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function nlId(value) {
    if (value.length < 8) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value;

    if (v.length === 8) {
      v = "0" + v;
    }

    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.replace(/\./g, '');

    if (parseInt(v, 10) === 0) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var length = v.length;

    for (var i = 0; i < length - 1; i++) {
      sum += (9 - i) * parseInt(v.charAt(i), 10);
    }

    sum = sum % 11;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.charAt(length - 1)
    };
  }

  exports.default = nlId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/noId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/noId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function noId(value) {
    if (!/^\d{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var firstCd = function firstCd(v) {
      var weight = [3, 7, 6, 1, 8, 9, 4, 5, 2];
      var sum = 0;

      for (var i = 0; i < 9; i++) {
        sum += weight[i] * parseInt(v.charAt(i), 10);
      }

      return 11 - sum % 11;
    };

    var secondCd = function secondCd(v) {
      var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
      var sum = 0;

      for (var i = 0; i < 10; i++) {
        sum += weight[i] * parseInt(v.charAt(i), 10);
      }

      return 11 - sum % 11;
    };

    return {
      meta: {},
      valid: "" + firstCd(value) === value.substr(-2, 1) && "" + secondCd(value) === value.substr(-1)
    };
  }

  exports.default = noId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/peId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/peId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function peId(value) {
    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (value.length === 8) {
      return {
        meta: {},
        valid: true
      };
    }

    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += weight[i] * parseInt(value.charAt(i), 10);
    }

    var cd = sum % 11;
    var checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    var checkChar = "KJIHGFEDCBA".charAt(cd);
    return {
      meta: {},
      valid: value.charAt(8) === "" + checkDigit || value.charAt(8) === checkChar
    };
  }

  exports.default = peId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/plId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/plId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function plId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var length = value.length;
    var weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

    for (var i = 0; i < length - 1; i++) {
      sum += weight[i] * parseInt(value.charAt(i), 10);
    }

    sum = sum % 10;

    if (sum === 0) {
      sum = 10;
    }

    sum = 10 - sum;
    return {
      meta: {},
      valid: "" + sum === value.charAt(length - 1)
    };
  }

  exports.default = plId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/roId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/roId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function roId(value) {
    if (!/^[0-9]{13}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var gender = parseInt(value.charAt(0), 10);

    if (gender === 0 || gender === 7 || gender === 8) {
      return {
        meta: {},
        valid: false
      };
    }

    var year = parseInt(value.substr(1, 2), 10);
    var month = parseInt(value.substr(3, 2), 10);
    var day = parseInt(value.substr(5, 2), 10);
    var centuries = {
      1: 1900,
      2: 1900,
      3: 1800,
      4: 1800,
      5: 2000,
      6: 2000
    };

    if (day > 31 && month > 12) {
      return {
        meta: {},
        valid: false
      };
    }

    if (gender !== 9) {
      year = centuries[gender + ''] + year;

      if (!isValidDate_1["default"](year, month, day)) {
        return {
          meta: {},
          valid: false
        };
      }
    }

    var sum = 0;
    var weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    var length = value.length;

    for (var i = 0; i < length - 1; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 11;

    if (sum === 10) {
      sum = 1;
    }

    return {
      meta: {},
      valid: "" + sum === value.charAt(length - 1)
    };
  }

  exports.default = roId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/rsId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/rsId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function rsId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'RS')
    };
  }

  exports.default = rsId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/seId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/seId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js"), __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function seId(value) {
    if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = value.replace(/[^0-9]/g, '');
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: luhn_1["default"](v)
    };
  }

  exports.default = seId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/siId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/siId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./jmbg */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/jmbg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jmbg_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siId(value) {
    return {
      meta: {},
      valid: jmbg_1["default"](value, 'SI')
    };
  }

  exports.default = siId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/smId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/smId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function smId(value) {
    return {
      meta: {},
      valid: /^\d{5}$/.test(value)
    };
  }

  exports.default = smId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/thId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/thId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function thId(value) {
    if (value.length !== 13) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;

    for (var i = 0; i < 12; i++) {
      sum += parseInt(value.charAt(i), 10) * (13 - i);
    }

    return {
      meta: {},
      valid: (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10)
    };
  }

  exports.default = thId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/trId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/trId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function trId(value) {
    if (value.length !== 11) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;

    for (var i = 0; i < 10; i++) {
      sum += parseInt(value.charAt(i), 10);
    }

    return {
      meta: {},
      valid: sum % 10 === parseInt(value.charAt(10), 10)
    };
  }

  exports.default = trId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/twId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/twId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function twId(value) {
    var v = value.toUpperCase();

    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    var letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    var letterValue = Math.floor(letterIndex / 10) + letterIndex % 10 * (length - 1);
    var sum = 0;

    for (var i = 1; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    }

    return {
      meta: {},
      valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0
    };
  }

  exports.default = twId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/uyId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/uyId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function uyId(value) {
    if (!/^\d{8}$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [2, 9, 8, 7, 6, 3, 4];
    var sum = 0;

    for (var i = 0; i < 7; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 10;

    if (sum > 0) {
      sum = 10 - sum;
    }

    return {
      meta: {},
      valid: "" + sum === value.charAt(7)
    };
  }

  exports.default = uyId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/zaId.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/zaId.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js"), __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function zaId(value) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
      return {
        meta: {},
        valid: false
      };
    }

    var year = parseInt(value.substr(0, 2), 10);
    var currentYear = new Date().getFullYear() % 100;
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);
    year = year >= currentYear ? year + 1900 : year + 2000;

    if (!isValidDate_1["default"](year, month, day)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: luhn_1["default"](value)
    };
  }

  exports.default = zaId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
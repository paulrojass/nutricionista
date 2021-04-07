(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_vat_index_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function transform(input) {
    return input.split('').map(function (c) {
      var code = c.charCodeAt(0);
      return code >= 65 && code <= 90 ? code - 55 : c;
    }).join('').split('').map(function (c) {
      return parseInt(c, 10);
    });
  }

  function mod97And10(input) {
    var digits = transform(input);
    var temp = 0;
    var length = digits.length;

    for (var i = 0; i < length - 1; ++i) {
      temp = (temp + digits[i]) * 10 % 97;
    }

    temp += digits[length - 1];
    return temp % 97 === 1;
  }

  exports.default = mod97And10;
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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/arVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/arVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function arVat(value) {
    var v = value.replace('-', '');

    if (/^AR[0-9]{11}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{11}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 10; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 11) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(10)
    };
  }

  exports.default = arVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/atVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/atVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function atVat(value) {
    var v = value;

    if (/^ATU[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^U[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.substr(1);
    var weight = [1, 2, 1, 2, 1, 2, 1];
    var sum = 0;
    var temp = 0;

    for (var i = 0; i < 7; i++) {
      temp = parseInt(v.charAt(i), 10) * weight[i];

      if (temp > 9) {
        temp = Math.floor(temp / 10) + temp % 10;
      }

      sum += temp;
    }

    sum = 10 - (sum + 4) % 10;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(7, 1)
    };
  }

  exports.default = atVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/beVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/beVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function beVat(value) {
    var v = value;

    if (/^BE[0]?[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0]?[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (v.length === 9) {
      v = "0" + v;
    }

    if (v.substr(1, 1) === '0') {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
    return {
      meta: {},
      valid: sum % 97 === 0
    };
  }

  exports.default = beVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/bgVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/bgVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function bgVat(value) {
    var v = value;

    if (/^BG[0-9]{9,10}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9,10}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var i = 0;

    if (v.length === 9) {
      for (i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * (i + 1);
      }

      sum = sum % 11;

      if (sum === 10) {
        sum = 0;

        for (i = 0; i < 8; i++) {
          sum += parseInt(v.charAt(i), 10) * (i + 3);
        }
      }

      sum = sum % 10;
      return {
        meta: {},
        valid: "" + sum === v.substr(8)
      };
    } else {
      var isEgn = function isEgn(input) {
        var year = parseInt(input.substr(0, 2), 10) + 1900;
        var month = parseInt(input.substr(2, 2), 10);
        var day = parseInt(input.substr(4, 2), 10);

        if (month > 40) {
          year += 100;
          month -= 40;
        } else if (month > 20) {
          year -= 100;
          month -= 20;
        }

        if (!isValidDate_1["default"](year, month, day)) {
          return false;
        }

        var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        var s = 0;

        for (var j = 0; j < 9; j++) {
          s += parseInt(input.charAt(j), 10) * weight[j];
        }

        s = s % 11 % 10;
        return "" + s === input.substr(9, 1);
      };

      var isPnf = function isPnf(input) {
        var weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
        var s = 0;

        for (var j = 0; j < 9; j++) {
          s += parseInt(input.charAt(j), 10) * weight[j];
        }

        s = s % 10;
        return "" + s === input.substr(9, 1);
      };

      var isVat = function isVat(input) {
        var weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        var s = 0;

        for (var j = 0; j < 9; j++) {
          s += parseInt(input.charAt(j), 10) * weight[j];
        }

        s = 11 - s % 11;

        if (s === 10) {
          return false;
        }

        if (s === 11) {
          s = 0;
        }

        return "" + s === input.substr(9, 1);
      };

      return {
        meta: {},
        valid: isEgn(v) || isPnf(v) || isVat(v)
      };
    }
  }

  exports.default = bgVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/brVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/brVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function brVat(value) {
    if (value === '') {
      return {
        meta: {},
        valid: true
      };
    }

    var cnpj = value.replace(/[^\d]+/g, '');

    if (cnpj === '' || cnpj.length !== 14) {
      return {
        meta: {},
        valid: false
      };
    }

    if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' || cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' || cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' || cnpj === '99999999999999') {
      return {
        meta: {},
        valid: false
      };
    }

    var length = cnpj.length - 2;
    var numbers = cnpj.substring(0, length);
    var digits = cnpj.substring(length);
    var sum = 0;
    var pos = length - 7;
    var i;

    for (i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i), 10) * pos--;

      if (pos < 2) {
        pos = 9;
      }
    }

    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result !== parseInt(digits.charAt(0), 10)) {
      return {
        meta: {},
        valid: false
      };
    }

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (i = length; i >= 1; i--) {
      sum += parseInt(numbers.charAt(length - i), 10) * pos--;

      if (pos < 2) {
        pos = 9;
      }
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return {
      meta: {},
      valid: result === parseInt(digits.charAt(1), 10)
    };
  }

  exports.default = brVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/chVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/chVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function chVat(value) {
    var v = value;

    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.substr(1);
    var weight = [5, 4, 3, 2, 7, 6, 5, 4];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 10) {
      return {
        meta: {},
        valid: false
      };
    }

    if (sum === 11) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(8, 1)
    };
  }

  exports.default = chVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/cyVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/cyVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function cyVat(value) {
    var v = value;

    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (v.substr(0, 2) === '12') {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var translation = {
      0: 1,
      1: 0,
      2: 5,
      3: 7,
      4: 9,
      5: 13,
      6: 15,
      7: 17,
      8: 19,
      9: 21
    };

    for (var i = 0; i < 8; i++) {
      var temp = parseInt(v.charAt(i), 10);

      if (i % 2 === 0) {
        temp = translation["" + temp];
      }

      sum += temp;
    }

    return {
      meta: {},
      valid: "" + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26] === v.substr(8, 1)
    };
  }

  exports.default = cyVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/czVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/czVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function czVat(value) {
    var v = value;

    if (/^CZ[0-9]{8,10}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8,10}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var i = 0;

    if (v.length === 8) {
      if ("" + v.charAt(0) === '9') {
        return {
          meta: {},
          valid: false
        };
      }

      sum = 0;

      for (i = 0; i < 7; i++) {
        sum += parseInt(v.charAt(i), 10) * (8 - i);
      }

      sum = 11 - sum % 11;

      if (sum === 10) {
        sum = 0;
      }

      if (sum === 11) {
        sum = 1;
      }

      return {
        meta: {},
        valid: "" + sum === v.substr(7, 1)
      };
    } else if (v.length === 9 && "" + v.charAt(0) === '6') {
      sum = 0;

      for (i = 0; i < 7; i++) {
        sum += parseInt(v.charAt(i + 1), 10) * (8 - i);
      }

      sum = 11 - sum % 11;

      if (sum === 10) {
        sum = 0;
      }

      if (sum === 11) {
        sum = 1;
      }

      sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
      return {
        meta: {},
        valid: "" + sum === v.substr(8, 1)
      };
    } else if (v.length === 9 || v.length === 10) {
      var year = 1900 + parseInt(v.substr(0, 2), 10);
      var month = parseInt(v.substr(2, 2), 10) % 50 % 20;
      var day = parseInt(v.substr(4, 2), 10);

      if (v.length === 9) {
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

      if (v.length === 10) {
        var check = parseInt(v.substr(0, 9), 10) % 11;

        if (year < 1985) {
          check = check % 10;
        }

        return {
          meta: {},
          valid: "" + check === v.substr(9, 1)
        };
      }

      return {
        meta: {},
        valid: true
      };
    }

    return {
      meta: {},
      valid: false
    };
  }

  exports.default = czVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/deVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/deVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod11And10_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function deVat(value) {
    var v = value;

    if (/^DE[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: mod11And10_1["default"](v)
    };
  }

  exports.default = deVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/dkVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/dkVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function dkVat(value) {
    var v = value;

    if (/^DK[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var weight = [2, 7, 6, 5, 4, 3, 2, 1];

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 11 === 0
    };
  }

  exports.default = dkVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/eeVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/eeVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function eeVat(value) {
    var v = value;

    if (/^EE[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 0;
    var weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];

    for (var i = 0; i < 9; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 10 === 0
    };
  }

  exports.default = eeVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/esVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/esVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function esVat(value) {
    var v = value;

    if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var dni = function dni(input) {
      var check = parseInt(input.substr(0, 8), 10);
      return "" + 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23] === input.substr(8, 1);
    };

    var nie = function nie(input) {
      var check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
      var cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
      return "" + cd === input.substr(8, 1);
    };

    var cif = function cif(input) {
      var firstChar = input.charAt(0);
      var check;

      if ('KLM'.indexOf(firstChar) !== -1) {
        check = parseInt(input.substr(1, 8), 10);
        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
        return "" + check === input.substr(8, 1);
      } else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
        var weight = [2, 1, 2, 1, 2, 1, 2];
        var sum = 0;
        var temp = 0;

        for (var i = 0; i < 7; i++) {
          temp = parseInt(input.charAt(i + 1), 10) * weight[i];

          if (temp > 9) {
            temp = Math.floor(temp / 10) + temp % 10;
          }

          sum += temp;
        }

        sum = 10 - sum % 10;

        if (sum === 10) {
          sum = 0;
        }

        return "" + sum === input.substr(8, 1) || 'JABCDEFGHI'[sum] === input.substr(8, 1);
      }

      return false;
    };

    var first = v.charAt(0);

    if (/^[0-9]$/.test(first)) {
      return {
        meta: {
          type: 'DNI'
        },
        valid: dni(v)
      };
    } else if (/^[XYZ]$/.test(first)) {
      return {
        meta: {
          type: 'NIE'
        },
        valid: nie(v)
      };
    } else {
      return {
        meta: {
          type: 'CIF'
        },
        valid: cif(v)
      };
    }
  }

  exports.default = esVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/fiVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/fiVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function fiVat(value) {
    var v = value;

    if (/^FI[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [7, 9, 10, 5, 8, 4, 2, 1];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 11 === 0
    };
  }

  exports.default = fiVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/frVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/frVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function frVat(value) {
    var v = value;

    if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (!luhn_1["default"](v.substr(2))) {
      return {
        meta: {},
        valid: false
      };
    }

    if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
      return {
        meta: {},
        valid: v.substr(0, 2) === "" + parseInt(v.substr(2) + '12', 10) % 97
      };
    } else {
      var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      var check = void 0;

      if (/^[0-9]$/.test(v.charAt(0))) {
        check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
      } else {
        check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
      }

      return {
        meta: {},
        valid: (parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11 === check % 11
      };
    }
  }

  exports.default = frVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/gbVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/gbVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function gbVat(value) {
    var v = value;

    if (/^GB[0-9]{9}$/.test(v) || /^GB[0-9]{12}$/.test(v) || /^GBGD[0-9]{3}$/.test(v) || /^GBHA[0-9]{3}$/.test(v) || /^GB(GD|HA)8888[0-9]{5}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v) && !/^[0-9]{12}$/.test(v) && !/^GD[0-9]{3}$/.test(v) && !/^HA[0-9]{3}$/.test(v) && !/^(GD|HA)8888[0-9]{5}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;

    if (length === 5) {
      var firstTwo = v.substr(0, 2);
      var lastThree = parseInt(v.substr(2), 10);
      return {
        meta: {},
        valid: 'GD' === firstTwo && lastThree < 500 || 'HA' === firstTwo && lastThree >= 500
      };
    } else if (length === 11 && ('GD8888' === v.substr(0, 6) || 'HA8888' === v.substr(0, 6))) {
      if ('GD' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) >= 500 || 'HA' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) < 500) {
        return {
          meta: {},
          valid: false
        };
      }

      return {
        meta: {},
        valid: parseInt(v.substr(6, 3), 10) % 97 === parseInt(v.substr(9, 2), 10)
      };
    } else if (length === 9 || length === 12) {
      var weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
      var sum = 0;

      for (var i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
      }

      sum = sum % 97;
      var isValid = parseInt(v.substr(0, 3), 10) >= 100 ? sum === 0 || sum === 42 || sum === 55 : sum === 0;
      return {
        meta: {},
        valid: isValid
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  exports.default = gbVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/grVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/grVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function grVat(value) {
    var v = value;

    if (/^(GR|EL)[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (v.length === 8) {
      v = "0" + v;
    }

    var weight = [256, 128, 64, 32, 16, 8, 4, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = sum % 11 % 10;
    return {
      meta: {},
      valid: "" + sum === v.substr(8, 1)
    };
  }

  exports.default = grVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/hrVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/hrVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod11And10_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function hrVat(value) {
    var v = value;

    if (/^HR[0-9]{11}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{11}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: mod11And10_1["default"](v)
    };
  }

  exports.default = hrVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/huVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/huVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function huVat(value) {
    var v = value;

    if (/^HU[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [9, 7, 3, 1, 9, 7, 3, 1];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 10 === 0
    };
  }

  exports.default = huVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ieVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ieVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ieVat(value) {
    var v = value;

    if (/^IE[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var getCheckDigit = function getCheckDigit(inp) {
      var input = inp;

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

    if (/^[0-9]+$/.test(v.substr(0, 7))) {
      return {
        meta: {},
        valid: v.charAt(7) === getCheckDigit("" + v.substr(0, 7) + v.substr(8))
      };
    } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(v.charAt(1)) !== -1) {
      return {
        meta: {},
        valid: v.charAt(7) === getCheckDigit("" + v.substr(2, 5) + v.substr(0, 1))
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  exports.default = ieVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/index.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js"), __webpack_require__(/*! ./arVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/arVat.js"), __webpack_require__(/*! ./atVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/atVat.js"), __webpack_require__(/*! ./beVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/beVat.js"), __webpack_require__(/*! ./bgVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/bgVat.js"), __webpack_require__(/*! ./brVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/brVat.js"), __webpack_require__(/*! ./chVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/chVat.js"), __webpack_require__(/*! ./cyVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/cyVat.js"), __webpack_require__(/*! ./czVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/czVat.js"), __webpack_require__(/*! ./deVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/deVat.js"), __webpack_require__(/*! ./dkVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/dkVat.js"), __webpack_require__(/*! ./eeVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/eeVat.js"), __webpack_require__(/*! ./esVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/esVat.js"), __webpack_require__(/*! ./fiVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/fiVat.js"), __webpack_require__(/*! ./frVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/frVat.js"), __webpack_require__(/*! ./gbVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/gbVat.js"), __webpack_require__(/*! ./grVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/grVat.js"), __webpack_require__(/*! ./hrVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/hrVat.js"), __webpack_require__(/*! ./huVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/huVat.js"), __webpack_require__(/*! ./ieVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ieVat.js"), __webpack_require__(/*! ./isVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/isVat.js"), __webpack_require__(/*! ./itVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/itVat.js"), __webpack_require__(/*! ./ltVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ltVat.js"), __webpack_require__(/*! ./luVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/luVat.js"), __webpack_require__(/*! ./lvVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/lvVat.js"), __webpack_require__(/*! ./mtVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/mtVat.js"), __webpack_require__(/*! ./nlVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/nlVat.js"), __webpack_require__(/*! ./noVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/noVat.js"), __webpack_require__(/*! ./plVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/plVat.js"), __webpack_require__(/*! ./ptVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ptVat.js"), __webpack_require__(/*! ./roVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/roVat.js"), __webpack_require__(/*! ./rsVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/rsVat.js"), __webpack_require__(/*! ./ruVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ruVat.js"), __webpack_require__(/*! ./seVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/seVat.js"), __webpack_require__(/*! ./siVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/siVat.js"), __webpack_require__(/*! ./skVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/skVat.js"), __webpack_require__(/*! ./veVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/veVat.js"), __webpack_require__(/*! ./zaVat */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/zaVat.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1, arVat_1, atVat_1, beVat_1, bgVat_1, brVat_1, chVat_1, cyVat_1, czVat_1, deVat_1, dkVat_1, eeVat_1, esVat_1, fiVat_1, frVat_1, gbVat_1, grVat_1, hrVat_1, huVat_1, ieVat_1, isVat_1, itVat_1, ltVat_1, luVat_1, lvVat_1, mtVat_1, nlVat_1, noVat_1, plVat_1, ptVat_1, roVat_1, rsVat_1, ruVat_1, seVat_1, siVat_1, skVat_1, veVat_1, zaVat_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function vat() {
    var COUNTRY_CODES = ['AR', 'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE', 'ZA'];
    return {
      validate: function validate(input) {
        var value = input.value;

        if (value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          message: ''
        }, input.options);
        var country = value.substr(0, 2);

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
            result = arVat_1["default"](value);
            break;

          case 'at':
            result = atVat_1["default"](value);
            break;

          case 'be':
            result = beVat_1["default"](value);
            break;

          case 'bg':
            result = bgVat_1["default"](value);
            break;

          case 'br':
            result = brVat_1["default"](value);
            break;

          case 'ch':
            result = chVat_1["default"](value);
            break;

          case 'cy':
            result = cyVat_1["default"](value);
            break;

          case 'cz':
            result = czVat_1["default"](value);
            break;

          case 'de':
            result = deVat_1["default"](value);
            break;

          case 'dk':
            result = dkVat_1["default"](value);
            break;

          case 'ee':
            result = eeVat_1["default"](value);
            break;

          case 'el':
            result = grVat_1["default"](value);
            break;

          case 'es':
            result = esVat_1["default"](value);
            break;

          case 'fi':
            result = fiVat_1["default"](value);
            break;

          case 'fr':
            result = frVat_1["default"](value);
            break;

          case 'gb':
            result = gbVat_1["default"](value);
            break;

          case 'gr':
            result = grVat_1["default"](value);
            break;

          case 'hr':
            result = hrVat_1["default"](value);
            break;

          case 'hu':
            result = huVat_1["default"](value);
            break;

          case 'ie':
            result = ieVat_1["default"](value);
            break;

          case 'is':
            result = isVat_1["default"](value);
            break;

          case 'it':
            result = itVat_1["default"](value);
            break;

          case 'lt':
            result = ltVat_1["default"](value);
            break;

          case 'lu':
            result = luVat_1["default"](value);
            break;

          case 'lv':
            result = lvVat_1["default"](value);
            break;

          case 'mt':
            result = mtVat_1["default"](value);
            break;

          case 'nl':
            result = nlVat_1["default"](value);
            break;

          case 'no':
            result = noVat_1["default"](value);
            break;

          case 'pl':
            result = plVat_1["default"](value);
            break;

          case 'pt':
            result = ptVat_1["default"](value);
            break;

          case 'ro':
            result = roVat_1["default"](value);
            break;

          case 'rs':
            result = rsVat_1["default"](value);
            break;

          case 'ru':
            result = ruVat_1["default"](value);
            break;

          case 'se':
            result = seVat_1["default"](value);
            break;

          case 'si':
            result = siVat_1["default"](value);
            break;

          case 'sk':
            result = skVat_1["default"](value);
            break;

          case 've':
            result = veVat_1["default"](value);
            break;

          case 'za':
            result = zaVat_1["default"](value);
            break;

          default:
            break;
        }

        var message = format_1["default"](input.l10n ? opts.message || input.l10n.vat.country : opts.message, input.l10n ? input.l10n.vat.countries[country.toUpperCase()] : country.toUpperCase());
        return Object.assign({}, {
          message: message
        }, result);
      }
    };
  }

  exports.default = vat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/isVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/isVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isVat(value) {
    var v = value;

    if (/^IS[0-9]{5,6}$/.test(v)) {
      v = v.substr(2);
    }

    return {
      meta: {},
      valid: /^[0-9]{5,6}$/.test(v)
    };
  }

  exports.default = isVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/itVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/itVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function itVat(value) {
    var v = value;

    if (/^IT[0-9]{11}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{11}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    if (parseInt(v.substr(0, 7), 10) === 0) {
      return {
        meta: {},
        valid: false
      };
    }

    var lastThree = parseInt(v.substr(7, 3), 10);

    if (lastThree < 1 || lastThree > 201 && lastThree !== 999 && lastThree !== 888) {
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

  exports.default = itVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ltVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ltVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ltVat(value) {
    var v = value;

    if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var sum = 0;
    var i;

    for (i = 0; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * (1 + i % 9);
    }

    var check = sum % 11;

    if (check === 10) {
      sum = 0;

      for (i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (1 + (i + 2) % 9);
      }
    }

    check = check % 11 % 10;
    return {
      meta: {},
      valid: "" + check === v.charAt(length - 1)
    };
  }

  exports.default = ltVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/luVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/luVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function luVat(value) {
    var v = value;

    if (/^LU[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: "" + parseInt(v.substr(0, 6), 10) % 89 === v.substr(6, 2)
    };
  }

  exports.default = luVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/lvVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/lvVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function lv(value) {
    var v = value;

    if (/^LV[0-9]{11}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{11}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var first = parseInt(v.charAt(0), 10);
    var length = v.length;
    var sum = 0;
    var weight = [];
    var i;

    if (first > 3) {
      sum = 0;
      weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];

      for (i = 0; i < length; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
      }

      sum = sum % 11;
      return {
        meta: {},
        valid: sum === 3
      };
    } else {
      var day = parseInt(v.substr(0, 2), 10);
      var month = parseInt(v.substr(2, 2), 10);
      var year = parseInt(v.substr(4, 2), 10);
      year = year + 1800 + parseInt(v.charAt(6), 10) * 100;

      if (!isValidDate_1["default"](year, month, day)) {
        return {
          meta: {},
          valid: false
        };
      }

      sum = 0;
      weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

      for (i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
      }

      sum = (sum + 1) % 11 % 10;
      return {
        meta: {},
        valid: "" + sum === v.charAt(length - 1)
      };
    }
  }

  exports.default = lv;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/mtVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/mtVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mtVat(value) {
    var v = value;

    if (/^MT[0-9]{8}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{8}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [3, 4, 6, 7, 8, 9, 10, 1];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 37 === 0
    };
  }

  exports.default = mtVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/nlVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/nlVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/mod97And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod97And10.js"), __webpack_require__(/*! ../id/nlId */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/nlId.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod97And10_1, nlId_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function nlVat(value) {
    var v = value;

    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var id = v.substr(0, 9);
    return {
      meta: {},
      valid: nlId_1["default"](id).valid || mod97And10_1["default"]("NL" + v)
    };
  }

  exports.default = nlVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/noVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/noVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function noVat(value) {
    var v = value;

    if (/^NO[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
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

    if (sum === 11) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(8, 1)
    };
  }

  exports.default = noVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/plVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/plVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function plVat(value) {
    var v = value;

    if (/^PL[0-9]{10}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{10}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
    var sum = 0;

    for (var i = 0; i < 10; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
      meta: {},
      valid: sum % 11 === 0
    };
  }

  exports.default = plVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ptVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ptVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ptVat(value) {
    var v = value;

    if (/^PT[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var weight = [9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum > 9) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(8, 1)
    };
  }

  exports.default = ptVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/roVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/roVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function roVat(value) {
    var v = value;

    if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[1-9][0-9]{1,9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var length = v.length;
    var weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
    var sum = 0;

    for (var i = 0; i < length - 1; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 10 * sum % 11 % 10;
    return {
      meta: {},
      valid: "" + sum === v.substr(length - 1, 1)
    };
  }

  exports.default = roVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/rsVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/rsVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function rsVat(value) {
    var v = value;

    if (/^RS[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var sum = 10;
    var temp = 0;

    for (var i = 0; i < 8; i++) {
      temp = (parseInt(v.charAt(i), 10) + sum) % 10;

      if (temp === 0) {
        temp = 10;
      }

      sum = 2 * temp % 11;
    }

    return {
      meta: {},
      valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1
    };
  }

  exports.default = rsVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ruVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/ruVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ruVat(value) {
    var v = value;

    if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var i = 0;

    if (v.length === 10) {
      var weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
      var sum = 0;

      for (i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
      }

      sum = sum % 11;

      if (sum > 9) {
        sum = sum % 10;
      }

      return {
        meta: {},
        valid: "" + sum === v.substr(9, 1)
      };
    } else if (v.length === 12) {
      var weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
      var weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
      var sum1 = 0;
      var sum2 = 0;

      for (i = 0; i < 11; i++) {
        sum1 += parseInt(v.charAt(i), 10) * weight1[i];
        sum2 += parseInt(v.charAt(i), 10) * weight2[i];
      }

      sum1 = sum1 % 11;

      if (sum1 > 9) {
        sum1 = sum1 % 10;
      }

      sum2 = sum2 % 11;

      if (sum2 > 9) {
        sum2 = sum2 % 10;
      }

      return {
        meta: {},
        valid: "" + sum1 === v.substr(10, 1) && "" + sum2 === v.substr(11, 1)
      };
    }

    return {
      meta: {},
      valid: true
    };
  }

  exports.default = ruVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/seVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/seVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function seVat(value) {
    var v = value;

    if (/^SE[0-9]{10}01$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[0-9]{10}01$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    v = v.substr(0, 10);
    return {
      meta: {},
      valid: luhn_1["default"](v)
    };
  }

  exports.default = seVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/siVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/siVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siVat(value) {
    var res = value.match(/^(SI)?([1-9][0-9]{7})$/);

    if (!res) {
      return {
        meta: {},
        valid: false
      };
    }

    var v = res[1] ? value.substr(2) : value;
    var weight = [8, 7, 6, 5, 4, 3, 2];
    var sum = 0;

    for (var i = 0; i < 7; i++) {
      sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(7, 1)
    };
  }

  exports.default = siVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/skVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/skVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function skVat(value) {
    var v = value;

    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    return {
      meta: {},
      valid: parseInt(v, 10) % 11 === 0
    };
  }

  exports.default = skVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/veVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/veVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function veVat(value) {
    var v = value;

    if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    if (!/^[VEJPG][0-9]{9}$/.test(v)) {
      return {
        meta: {},
        valid: false
      };
    }

    var types = {
      E: 8,
      G: 20,
      J: 12,
      P: 16,
      V: 4
    };
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = types[v.charAt(0)];

    for (var i = 0; i < 8; i++) {
      sum += parseInt(v.charAt(i + 1), 10) * weight[i];
    }

    sum = 11 - sum % 11;

    if (sum === 11 || sum === 10) {
      sum = 0;
    }

    return {
      meta: {},
      valid: "" + sum === v.substr(9, 1)
    };
  }

  exports.default = veVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/zaVat.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/zaVat.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function zaVat(value) {
    var v = value;

    if (/^ZA4[0-9]{9}$/.test(v)) {
      v = v.substr(2);
    }

    return {
      meta: {},
      valid: /^4[0-9]{9}$/.test(v)
    };
  }

  exports.default = zaVat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
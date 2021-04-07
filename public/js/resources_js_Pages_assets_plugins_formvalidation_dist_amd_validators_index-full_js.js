(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_index-full_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mod37And36(value, alphabet) {
    if (alphabet === void 0) {
      alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    var length = value.length;
    var modulus = alphabet.length;
    var check = Math.floor(modulus / 2);

    for (var i = 0; i < length; i++) {
      check = ((check || modulus) * 2 % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
    }

    return check === 1;
  }

  exports.default = mod37And36;
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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function call(functionName, args) {
    if ('function' === typeof functionName) {
      return functionName.apply(this, args);
    } else if ('string' === typeof functionName) {
      var name_1 = functionName;

      if ('()' === name_1.substring(name_1.length - 2)) {
        name_1 = name_1.substring(0, name_1.length - 2);
      }

      var ns = name_1.split('.');
      var func = ns.pop();
      var context_1 = window;

      for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
        var t = ns_1[_i];
        context_1 = context_1[t];
      }

      return typeof context_1[func] === 'undefined' ? null : context_1[func].apply(this, args);
    }
  }

  exports.default = call;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function fetch(url, options) {
    var toQuery = function toQuery(obj) {
      return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
      }).join('&');
    };

    return new Promise(function (resolve, reject) {
      var opts = Object.assign({}, {
        crossDomain: false,
        headers: {},
        method: 'GET',
        params: {}
      }, options);
      var params = Object.keys(opts.params).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(opts.params[k]);
      }).join('&');
      var hasQuery = url.indexOf('?');
      var requestUrl = 'GET' === opts.method ? "" + url + (hasQuery ? '?' : '&') + params : url;

      if (opts.crossDomain) {
        var script_1 = document.createElement('script');
        var callback_1 = "___fetch" + Date.now() + "___";

        window[callback_1] = function (data) {
          delete window[callback_1];
          resolve(data);
        };

        script_1.src = "" + requestUrl + (hasQuery ? '&' : '?') + "callback=" + callback_1;
        script_1.async = true;
        script_1.addEventListener('load', function () {
          script_1.parentNode.removeChild(script_1);
        });
        script_1.addEventListener('error', function () {
          return reject;
        });
        document.head.appendChild(script_1);
      } else {
        var request_1 = new XMLHttpRequest();
        request_1.open(opts.method, requestUrl);
        request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        if ('POST' === opts.method) {
          request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        Object.keys(opts.headers).forEach(function (k) {
          return request_1.setRequestHeader(k, opts.headers[k]);
        });
        request_1.addEventListener('load', function () {
          resolve(JSON.parse(this.responseText));
        });
        request_1.addEventListener('error', function () {
          return reject;
        });
        request_1.send(toQuery(opts.params));
      }
    });
  }

  exports.default = fetch;
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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/base64.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/base64.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function base64() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(input.value)
        };
      }
    };
  }

  exports.default = base64;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function between() {
    var formatValue = function formatValue(value) {
      return parseFloat(("" + value).replace(',', '.'));
    };

    return {
      validate: function validate(input) {
        var value = input.value;

        if (value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var minValue = formatValue(opts.min);
        var maxValue = formatValue(opts.max);
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between["default"] : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) > minValue && parseFloat(value) < maxValue
        };
      }
    };
  }

  exports.default = between;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/bic.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/bic.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function bic() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value)
        };
      }
    };
  }

  exports.default = bic;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function blank() {
    return {
      validate: function validate(input) {
        return {
          valid: true
        };
      }
    };
  }

  exports.default = blank;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function callback() {
    return {
      validate: function validate(input) {
        var response = call_1["default"](input.options.callback, [input]);
        return 'boolean' === typeof response ? {
          valid: response
        } : response;
      }
    };
  }

  exports.default = callback;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function choice() {
    return {
      validate: function validate(input) {
        var numChoices = 'select' === input.element.tagName.toLowerCase() ? input.element.querySelectorAll('option:checked').length : input.elements.filter(function (ele) {
          return ele.checked;
        }).length;
        var min = input.options.min ? "" + input.options.min : '';
        var max = input.options.max ? "" + input.options.max : '';
        var msg = input.l10n ? input.options.message || input.l10n.choice["default"] : input.options.message;
        var isValid = !(min && numChoices < parseInt(min, 10) || max && numChoices > parseInt(max, 10));

        switch (true) {
          case !!min && !!max:
            msg = format_1["default"](input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
            break;

          case !!min:
            msg = format_1["default"](input.l10n ? input.l10n.choice.more : input.options.message, min);
            break;

          case !!max:
            msg = format_1["default"](input.l10n ? input.l10n.choice.less : input.options.message, max);
            break;

          default:
            break;
        }

        return {
          message: msg,
          valid: isValid
        };
      }
    };
  }

  exports.default = choice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/color.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/color.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function color() {
    var SUPPORTED_TYPES = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'];
    var KEYWORD_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

    var hex = function hex(value) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    };

    var hsl = function hsl(value) {
      return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    };

    var hsla = function hsla(value) {
      return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    };

    var keyword = function keyword(value) {
      return KEYWORD_COLORS.indexOf(value) >= 0;
    };

    var rgb = function rgb(value) {
      return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(value) || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    };

    var rgba = function rgba(value) {
      return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value) || /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var types = typeof input.options.type === 'string' ? input.options.type.toString().replace(/s/g, '').split(',') : input.options.type || SUPPORTED_TYPES;

        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
          var type = types_1[_i];
          var tpe = type.toLowerCase();

          if (SUPPORTED_TYPES.indexOf(tpe) === -1) {
            continue;
          }

          var result = true;

          switch (tpe) {
            case 'hex':
              result = hex(input.value);
              break;

            case 'hsl':
              result = hsl(input.value);
              break;

            case 'hsla':
              result = hsla(input.value);
              break;

            case 'keyword':
              result = keyword(input.value);
              break;

            case 'rgb':
              result = rgb(input.value);
              break;

            case 'rgba':
              result = rgba(input.value);
              break;
          }

          if (result) {
            return {
              valid: true
            };
          }
        }

        return {
          valid: false
        };
      }
    };
  }

  exports.default = color;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.CREDIT_CARD_TYPES = void 0;
  var CREDIT_CARD_TYPES = {
    AMERICAN_EXPRESS: {
      length: [15],
      prefix: ['34', '37']
    },
    DANKORT: {
      length: [16],
      prefix: ['5019']
    },
    DINERS_CLUB: {
      length: [14],
      prefix: ['300', '301', '302', '303', '304', '305', '36']
    },
    DINERS_CLUB_US: {
      length: [16],
      prefix: ['54', '55']
    },
    DISCOVER: {
      length: [16],
      prefix: ['6011', '622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925', '644', '645', '646', '647', '648', '649', '65']
    },
    ELO: {
      length: [16],
      prefix: ['4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509', '6277', '6362', '6363', '650', '6516', '6550']
    },
    FORBRUGSFORENINGEN: {
      length: [16],
      prefix: ['600722']
    },
    JCB: {
      length: [16],
      prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
    },
    LASER: {
      length: [16, 17, 18, 19],
      prefix: ['6304', '6706', '6771', '6709']
    },
    MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
    },
    MASTERCARD: {
      length: [16],
      prefix: ['51', '52', '53', '54', '55']
    },
    SOLO: {
      length: [16, 18, 19],
      prefix: ['6334', '6767']
    },
    UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: ['622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925']
    },
    VISA: {
      length: [16],
      prefix: ['4']
    },
    VISA_ELECTRON: {
      length: [16],
      prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917']
    }
  };
  exports.CREDIT_CARD_TYPES = CREDIT_CARD_TYPES;

  function creditCard() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: {
              type: null
            },
            valid: true
          };
        }

        if (/[^0-9-\s]+/.test(input.value)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        var v = input.value.replace(/\D/g, '');

        if (!luhn_1["default"](v)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        for (var _i = 0, _a = Object.keys(CREDIT_CARD_TYPES); _i < _a.length; _i++) {
          var tpe = _a[_i];

          for (var i in CREDIT_CARD_TYPES[tpe].prefix) {
            if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) === CREDIT_CARD_TYPES[tpe].prefix[i] && CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
              return {
                meta: {
                  type: tpe
                },
                valid: true
              };
            }
          }
        }

        return {
          meta: {
            type: null
          },
          valid: false
        };
      }
    };
  }

  exports.default = creditCard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/cusip.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/cusip.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function cusip() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var value = input.value.toUpperCase();

        if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(value)) {
          return {
            valid: false
          };
        }

        var chars = value.split('');
        var lastChar = chars.pop();
        var converted = chars.map(function (c) {
          var code = c.charCodeAt(0);

          switch (true) {
            case c === '*':
              return 36;

            case c === '@':
              return 37;

            case c === '#':
              return 38;

            case code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0):
              return code - 'A'.charCodeAt(0) + 10;

            default:
              return parseInt(c, 10);
          }
        });
        var sum = converted.map(function (v, i) {
          var _double = i % 2 === 0 ? v : 2 * v;

          return Math.floor(_double / 10) + _double % 10;
        }).reduce(function (a, b) {
          return a + b;
        }, 0);
        var checkDigit = (10 - sum % 10) % 10;
        return {
          valid: lastChar === "" + checkDigit
        };
      }
    };
  }

  exports.default = cusip;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js"), __webpack_require__(/*! ../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function date() {
    var parseDate = function parseDate(input, inputFormat, separator) {
      var yearIndex = inputFormat.indexOf('YYYY');
      var monthIndex = inputFormat.indexOf('MM');
      var dayIndex = inputFormat.indexOf('DD');

      if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
        return null;
      }

      var sections = input.split(' ');
      var dateSection = sections[0].split(separator);

      if (dateSection.length < 3) {
        return null;
      }

      var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));

      if (sections.length > 1) {
        var timeSection = sections[1].split(':');
        d.setHours(timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0);
        d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
        d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
      }

      return d;
    };

    var formatDate = function formatDate(input, inputFormat) {
      var dateFormat = inputFormat.replace(/Y/g, 'y').replace(/M/g, 'm').replace(/D/g, 'd').replace(/:m/g, ':M').replace(/:mm/g, ':MM').replace(/:S/, ':s').replace(/:SS/, ':ss');
      var d = input.getDate();
      var dd = d < 10 ? "0" + d : d;
      var m = input.getMonth() + 1;
      var mm = m < 10 ? "0" + m : m;
      var yy = ("" + input.getFullYear()).substr(2);
      var yyyy = input.getFullYear();
      var h = input.getHours() % 12 || 12;
      var hh = h < 10 ? "0" + h : h;
      var H = input.getHours();
      var HH = H < 10 ? "0" + H : H;
      var M = input.getMinutes();
      var MM = M < 10 ? "0" + M : M;
      var s = input.getSeconds();
      var ss = s < 10 ? "0" + s : s;
      var replacer = {
        H: "" + H,
        HH: "" + HH,
        M: "" + M,
        MM: "" + MM,
        d: "" + d,
        dd: "" + dd,
        h: "" + h,
        hh: "" + hh,
        m: "" + m,
        mm: "" + mm,
        s: "" + s,
        ss: "" + ss,
        yy: "" + yy,
        yyyy: "" + yyyy
      };
      return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
        return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
      });
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: {
              date: null
            },
            valid: true
          };
        }

        var opts = Object.assign({}, {
          format: input.element && input.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
          message: ''
        }, input.options);
        var message = input.l10n ? input.l10n.date["default"] : opts.message;
        var invalidResult = {
          message: "" + message,
          meta: {
            date: null
          },
          valid: false
        };
        var formats = opts.format.split(' ');
        var timeFormat = formats.length > 1 ? formats[1] : null;
        var amOrPm = formats.length > 2 ? formats[2] : null;
        var sections = input.value.split(' ');
        var dateSection = sections[0];
        var timeSection = sections.length > 1 ? sections[1] : null;

        if (formats.length !== sections.length) {
          return invalidResult;
        }

        var separator = opts.separator || (dateSection.indexOf('/') !== -1 ? '/' : dateSection.indexOf('-') !== -1 ? '-' : dateSection.indexOf('.') !== -1 ? '.' : '/');

        if (separator === null || dateSection.indexOf(separator) === -1) {
          return invalidResult;
        }

        var dateStr = dateSection.split(separator);
        var dateFormat = formats[0].split(separator);

        if (dateStr.length !== dateFormat.length) {
          return invalidResult;
        }

        var yearStr = dateStr[dateFormat.indexOf('YYYY')];
        var monthStr = dateStr[dateFormat.indexOf('MM')];
        var dayStr = dateStr[dateFormat.indexOf('DD')];

        if (!/^\d+$/.test(yearStr) || !/^\d+$/.test(monthStr) || !/^\d+$/.test(dayStr) || yearStr.length > 4 || monthStr.length > 2 || dayStr.length > 2) {
          return invalidResult;
        }

        var year = parseInt(yearStr, 10);
        var month = parseInt(monthStr, 10);
        var day = parseInt(dayStr, 10);

        if (!isValidDate_1["default"](year, month, day)) {
          return invalidResult;
        }

        var d = new Date(year, month - 1, day);

        if (timeFormat) {
          var hms = timeSection.split(':');

          if (timeFormat.split(':').length !== hms.length) {
            return invalidResult;
          }

          var h = hms.length > 0 ? hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1 : 0;
          var m = hms.length > 1 ? hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1 : 0;
          var s = hms.length > 2 ? hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1 : 0;

          if (h === -1 || m === -1 || s === -1) {
            return invalidResult;
          }

          if (s < 0 || s > 60) {
            return invalidResult;
          }

          if (h < 0 || h >= 24 || amOrPm && h > 12) {
            return invalidResult;
          }

          if (m < 0 || m > 59) {
            return invalidResult;
          }

          d.setHours(h);
          d.setMinutes(m);
          d.setSeconds(s);
        }

        var minOption = typeof opts.min === 'function' ? opts.min() : opts.min;
        var min = minOption instanceof Date ? minOption : minOption ? parseDate(minOption, dateFormat, separator) : d;
        var maxOption = typeof opts.max === 'function' ? opts.max() : opts.max;
        var max = maxOption instanceof Date ? maxOption : maxOption ? parseDate(maxOption, dateFormat, separator) : d;
        var minOptionStr = minOption instanceof Date ? formatDate(min, opts.format) : minOption;
        var maxOptionStr = maxOption instanceof Date ? formatDate(max, opts.format) : maxOption;

        switch (true) {
          case !!minOptionStr && !maxOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.min : message, minOptionStr),
              meta: {
                date: d
              },
              valid: d.getTime() >= min.getTime()
            };

          case !!maxOptionStr && !minOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.max : message, maxOptionStr),
              meta: {
                date: d
              },
              valid: d.getTime() <= max.getTime()
            };

          case !!maxOptionStr && !!minOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
              meta: {
                date: d
              },
              valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime()
            };

          default:
            return {
              message: "" + message,
              meta: {
                date: d
              },
              valid: true
            };
        }
      }
    };
  }

  exports.default = date;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function different() {
    return {
      validate: function validate(input) {
        var compareWith = 'function' === typeof input.options.compare ? input.options.compare.call(this) : input.options.compare;
        return {
          valid: compareWith === '' || input.value !== compareWith
        };
      }
    };
  }

  exports.default = different;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function digits() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^\d+$/.test(input.value)
        };
      }
    };
  }

  exports.default = digits;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ean.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ean.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ean() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input.value)) {
          return {
            valid: false
          };
        }

        var length = input.value.length;
        var sum = 0;
        var weight = length === 8 ? [3, 1] : [1, 3];

        for (var i = 0; i < length - 1; i++) {
          sum += parseInt(input.value.charAt(i), 10) * weight[i % 2];
        }

        sum = (10 - sum % 10) % 10;
        return {
          valid: "" + sum === input.value.charAt(length - 1)
        };
      }
    };
  }

  exports.default = ean;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ein.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ein.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ein() {
    var CAMPUS = {
      ANDOVER: ['10', '12'],
      ATLANTA: ['60', '67'],
      AUSTIN: ['50', '53'],
      BROOKHAVEN: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
      CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
      FRESNO: ['15', '24'],
      INTERNET: ['20', '26', '27', '45', '46', '47'],
      KANSAS_CITY: ['40', '44'],
      MEMPHIS: ['94', '95'],
      OGDEN: ['80', '90'],
      PHILADELPHIA: ['33', '39', '41', '42', '43', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
      SMALL_BUSINESS_ADMINISTRATION: ['31']
    };
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: null,
            valid: true
          };
        }

        if (!/^[0-9]{2}-?[0-9]{7}$/.test(input.value)) {
          return {
            meta: null,
            valid: false
          };
        }

        var campus = "" + input.value.substr(0, 2);

        for (var key in CAMPUS) {
          if (CAMPUS[key].indexOf(campus) !== -1) {
            return {
              meta: {
                campus: key
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

  exports.default = ein;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function emailAddress() {
    var splitEmailAddresses = function splitEmailAddresses(emailAddresses, separator) {
      var quotedFragments = emailAddresses.split(/"/);
      var quotedFragmentCount = quotedFragments.length;
      var emailAddressArray = [];
      var nextEmailAddress = '';

      for (var i = 0; i < quotedFragmentCount; i++) {
        if (i % 2 === 0) {
          var splitEmailAddressFragments = quotedFragments[i].split(separator);
          var splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

          if (splitEmailAddressFragmentCount === 1) {
            nextEmailAddress += splitEmailAddressFragments[0];
          } else {
            emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

            for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
              emailAddressArray.push(splitEmailAddressFragments[j]);
            }

            nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
          }
        } else {
          nextEmailAddress += '"' + quotedFragments[i];

          if (i < quotedFragmentCount - 1) {
            nextEmailAddress += '"';
          }
        }
      }

      emailAddressArray.push(nextEmailAddress);
      return emailAddressArray;
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          multiple: false,
          separator: /[,;]/
        }, input.options);
        var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var allowMultiple = opts.multiple === true || "" + opts.multiple === 'true';

        if (allowMultiple) {
          var separator = opts.separator || /[,;]/;
          var addresses = splitEmailAddresses(input.value, separator);
          var length_1 = addresses.length;

          for (var i = 0; i < length_1; i++) {
            if (!emailRegExp.test(addresses[i])) {
              return {
                valid: false
              };
            }
          }

          return {
            valid: true
          };
        } else {
          return {
            valid: emailRegExp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = emailAddress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function file() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var extension;
        var extensions = input.options.extension ? input.options.extension.toLowerCase().split(',') : null;
        var types = input.options.type ? input.options.type.toLowerCase().split(',') : null;
        var html5 = window['File'] && window['FileList'] && window['FileReader'];

        if (html5) {
          var files = input.element.files;
          var total = files.length;
          var allSize = 0;

          if (input.options.maxFiles && total > parseInt("" + input.options.maxFiles, 10)) {
            return {
              meta: {
                error: 'INVALID_MAX_FILES'
              },
              valid: false
            };
          }

          if (input.options.minFiles && total < parseInt("" + input.options.minFiles, 10)) {
            return {
              meta: {
                error: 'INVALID_MIN_FILES'
              },
              valid: false
            };
          }

          var metaData = {};

          for (var i = 0; i < total; i++) {
            allSize += files[i].size;
            extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
            metaData = {
              ext: extension,
              file: files[i],
              size: files[i].size,
              type: files[i].type
            };

            if (input.options.minSize && files[i].size < parseInt("" + input.options.minSize, 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MIN_SIZE'
                }, metaData),
                valid: false
              };
            }

            if (input.options.maxSize && files[i].size > parseInt("" + input.options.maxSize, 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MAX_SIZE'
                }, metaData),
                valid: false
              };
            }

            if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_EXTENSION'
                }, metaData),
                valid: false
              };
            }

            if (files[i].type && types && types.indexOf(files[i].type.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_TYPE'
                }, metaData),
                valid: false
              };
            }
          }

          if (input.options.maxTotalSize && allSize > parseInt("" + input.options.maxTotalSize, 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MAX_TOTAL_SIZE',
                totalSize: allSize
              }, metaData),
              valid: false
            };
          }

          if (input.options.minTotalSize && allSize < parseInt("" + input.options.minTotalSize, 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MIN_TOTAL_SIZE',
                totalSize: allSize
              }, metaData),
              valid: false
            };
          }
        } else {
          extension = input.value.substr(input.value.lastIndexOf('.') + 1);

          if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
            return {
              meta: {
                error: 'INVALID_EXTENSION',
                ext: extension
              },
              valid: false
            };
          }
        }

        return {
          valid: true
        };
      }
    };
  }

  exports.default = file;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function greaterThan() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var minValue = parseFloat(("" + opts.min).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan["default"] : opts.message, "" + minValue),
          valid: parseFloat(input.value) >= minValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "" + minValue),
          valid: parseFloat(input.value) > minValue
        };
      }
    };
  }

  exports.default = greaterThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/grid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/grid.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/mod37And36 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mod37And36_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function grid() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = input.value.toUpperCase();

        if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(v)) {
          return {
            valid: false
          };
        }

        v = v.replace(/\s/g, '').replace(/-/g, '');

        if ('GRID:' === v.substr(0, 5)) {
          v = v.substr(5);
        }

        return {
          valid: mod37And36_1["default"](v)
        };
      }
    };
  }

  exports.default = grid;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/hex.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/hex.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function hex() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value)
        };
      }
    };
  }

  exports.default = hex;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/iban.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/iban.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function iban() {
    var IBAN_PATTERNS = {
      AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
      AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
      AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
      AO: 'AO[0-9]{2}[0-9]{21}',
      AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
      AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
      BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
      BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
      BF: 'BF[0-9]{2}[0-9]{23}',
      BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
      BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
      BI: 'BI[0-9]{2}[0-9]{12}',
      BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
      BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
      CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
      CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
      CM: 'CM[0-9]{2}[0-9]{23}',
      CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
      CV: 'CV[0-9]{2}[0-9]{21}',
      CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
      CZ: 'CZ[0-9]{2}[0-9]{20}',
      DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
      DK: 'DK[0-9]{2}[0-9]{14}',
      DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
      DZ: 'DZ[0-9]{2}[0-9]{20}',
      EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
      ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
      FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
      FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
      FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
      GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
      GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
      GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
      GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
      GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
      GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
      HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
      HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
      IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
      IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
      IR: 'IR[0-9]{2}[0-9]{22}',
      IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
      IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
      JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
      KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
      KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
      LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
      LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
      LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
      LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
      LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
      MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
      MD: 'MD[0-9]{2}[A-Z0-9]{20}',
      ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      MG: 'MG[0-9]{2}[0-9]{23}',
      MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
      ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
      MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
      MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
      MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
      MZ: 'MZ[0-9]{2}[0-9]{21}',
      NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
      NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
      PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
      PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
      PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
      PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
      QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
      RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
      RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
      SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
      SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
      SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
      SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
      SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
      TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
      TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
      VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
      XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}'
    };
    var SEPA_COUNTRIES = ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GI', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'SM'];
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
        var v = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        var country = opts.country || v.substr(0, 2);

        if (!IBAN_PATTERNS[country]) {
          return {
            message: opts.message,
            valid: false
          };
        }

        if (opts.sepa !== undefined) {
          var isSepaCountry = SEPA_COUNTRIES.indexOf(country) !== -1;

          if ((opts.sepa === 'true' || opts.sepa === true) && !isSepaCountry || (opts.sepa === 'false' || opts.sepa === false) && isSepaCountry) {
            return {
              message: opts.message,
              valid: false
            };
          }
        }

        var msg = format_1["default"](input.l10n ? opts.message || input.l10n.iban.country : opts.message, input.l10n ? input.l10n.iban.countries[country] : country);

        if (!new RegExp("^" + IBAN_PATTERNS[country] + "$").test(input.value)) {
          return {
            message: msg,
            valid: false
          };
        }

        v = "" + v.substr(4) + v.substr(0, 4);
        v = v.split('').map(function (n) {
          var code = n.charCodeAt(0);
          return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0) ? code - 'A'.charCodeAt(0) + 10 : n;
        }).join('');
        var temp = parseInt(v.substr(0, 1), 10);
        var length = v.length;

        for (var i = 1; i < length; ++i) {
          temp = (temp * 10 + parseInt(v.substr(i, 1), 10)) % 97;
        }

        return {
          message: msg,
          valid: temp === 1
        };
      }
    };
  }

  exports.default = iban;
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function identical() {
    return {
      validate: function validate(input) {
        var compareWith = 'function' === typeof input.options.compare ? input.options.compare.call(this) : input.options.compare;
        return {
          valid: compareWith === '' || input.value === compareWith
        };
      }
    };
  }

  exports.default = identical;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imei.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imei.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function imei() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        switch (true) {
          case /^\d{15}$/.test(input.value):
          case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input.value):
          case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input.value):
            var v = input.value.replace(/[^0-9]/g, '');
            return {
              valid: luhn_1["default"](v)
            };

          case /^\d{14}$/.test(input.value):
          case /^\d{16}$/.test(input.value):
          case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input.value):
          case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input.value):
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

  exports.default = imei;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imo.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imo.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function imo() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^IMO \d{7}$/i.test(input.value)) {
          return {
            valid: false
          };
        }

        var digits = input.value.replace(/^.*(\d{7})$/, '$1');
        var sum = 0;

        for (var i = 6; i >= 1; i--) {
          sum += parseInt(digits.slice(6 - i, -i), 10) * (i + 1);
        }

        return {
          valid: sum % 10 === parseInt(digits.charAt(6), 10)
        };
      }
    };
  }

  exports.default = imo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index-full.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index-full.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./between */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js"), __webpack_require__(/*! ./blank */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js"), __webpack_require__(/*! ./callback */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js"), __webpack_require__(/*! ./choice */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js"), __webpack_require__(/*! ./creditCard */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js"), __webpack_require__(/*! ./date */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js"), __webpack_require__(/*! ./different */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js"), __webpack_require__(/*! ./digits */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js"), __webpack_require__(/*! ./emailAddress */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js"), __webpack_require__(/*! ./file */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js"), __webpack_require__(/*! ./greaterThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js"), __webpack_require__(/*! ./identical */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js"), __webpack_require__(/*! ./integer */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js"), __webpack_require__(/*! ./ip */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js"), __webpack_require__(/*! ./lessThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js"), __webpack_require__(/*! ./notEmpty */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js"), __webpack_require__(/*! ./numeric */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js"), __webpack_require__(/*! ./promise */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js"), __webpack_require__(/*! ./regexp */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js"), __webpack_require__(/*! ./remote */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js"), __webpack_require__(/*! ./stringCase */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js"), __webpack_require__(/*! ./stringLength */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js"), __webpack_require__(/*! ./uri */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js"), __webpack_require__(/*! ./base64 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/base64.js"), __webpack_require__(/*! ./bic */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/bic.js"), __webpack_require__(/*! ./color */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/color.js"), __webpack_require__(/*! ./cusip */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/cusip.js"), __webpack_require__(/*! ./ean */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ean.js"), __webpack_require__(/*! ./ein */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ein.js"), __webpack_require__(/*! ./grid */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/grid.js"), __webpack_require__(/*! ./hex */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/hex.js"), __webpack_require__(/*! ./iban */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/iban.js"), __webpack_require__(/*! ./id/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/id/index.js"), __webpack_require__(/*! ./imei */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imei.js"), __webpack_require__(/*! ./imo */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/imo.js"), __webpack_require__(/*! ./isbn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isbn.js"), __webpack_require__(/*! ./isin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isin.js"), __webpack_require__(/*! ./ismn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ismn.js"), __webpack_require__(/*! ./issn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/issn.js"), __webpack_require__(/*! ./mac */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/mac.js"), __webpack_require__(/*! ./meid */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/meid.js"), __webpack_require__(/*! ./phone */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/phone.js"), __webpack_require__(/*! ./rtn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/rtn.js"), __webpack_require__(/*! ./sedol */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/sedol.js"), __webpack_require__(/*! ./siren */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siren.js"), __webpack_require__(/*! ./siret */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siret.js"), __webpack_require__(/*! ./step */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/step.js"), __webpack_require__(/*! ./uuid */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uuid.js"), __webpack_require__(/*! ./vat/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vat/index.js"), __webpack_require__(/*! ./vin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vin.js"), __webpack_require__(/*! ./zipCode */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/zipCode.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, between_1, blank_1, callback_1, choice_1, creditCard_1, date_1, different_1, digits_1, emailAddress_1, file_1, greaterThan_1, identical_1, integer_1, ip_1, lessThan_1, notEmpty_1, numeric_1, promise_1, regexp_1, remote_1, stringCase_1, stringLength_1, uri_1, base64_1, bic_1, color_1, cusip_1, ean_1, ein_1, grid_1, hex_1, iban_1, index_1, imei_1, imo_1, isbn_1, isin_1, ismn_1, issn_1, mac_1, meid_1, phone_1, rtn_1, sedol_1, siren_1, siret_1, step_1, uuid_1, index_2, vin_1, zipCode_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    between: between_1["default"],
    blank: blank_1["default"],
    callback: callback_1["default"],
    choice: choice_1["default"],
    creditCard: creditCard_1["default"],
    date: date_1["default"],
    different: different_1["default"],
    digits: digits_1["default"],
    emailAddress: emailAddress_1["default"],
    file: file_1["default"],
    greaterThan: greaterThan_1["default"],
    identical: identical_1["default"],
    integer: integer_1["default"],
    ip: ip_1["default"],
    lessThan: lessThan_1["default"],
    notEmpty: notEmpty_1["default"],
    numeric: numeric_1["default"],
    promise: promise_1["default"],
    regexp: regexp_1["default"],
    remote: remote_1["default"],
    stringCase: stringCase_1["default"],
    stringLength: stringLength_1["default"],
    uri: uri_1["default"],
    base64: base64_1["default"],
    bic: bic_1["default"],
    color: color_1["default"],
    cusip: cusip_1["default"],
    ean: ean_1["default"],
    ein: ein_1["default"],
    grid: grid_1["default"],
    hex: hex_1["default"],
    iban: iban_1["default"],
    id: index_1["default"],
    imei: imei_1["default"],
    imo: imo_1["default"],
    isbn: isbn_1["default"],
    isin: isin_1["default"],
    ismn: ismn_1["default"],
    issn: issn_1["default"],
    mac: mac_1["default"],
    meid: meid_1["default"],
    phone: phone_1["default"],
    rtn: rtn_1["default"],
    sedol: sedol_1["default"],
    siren: siren_1["default"],
    siret: siret_1["default"],
    step: step_1["default"],
    uuid: uuid_1["default"],
    vat: index_2["default"],
    vin: vin_1["default"],
    zipCode: zipCode_1["default"]
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function integer() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, input.options);
        var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
        var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
        var testRegexp = new RegExp("^-?[0-9]{1,3}(" + thousandsSeparator + "[0-9]{3})*(" + decimalSeparator + "[0-9]+)?$");
        var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
        var v = "" + input.value;

        if (!testRegexp.test(v)) {
          return {
            valid: false
          };
        }

        if (thousandsSeparator) {
          v = v.replace(thousandsReplacer, '');
        }

        if (decimalSeparator) {
          v = v.replace(decimalSeparator, '.');
        }

        var n = parseFloat(v);
        return {
          valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n
        };
      }
    };
  }

  exports.default = integer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ip() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          ipv4: true,
          ipv6: true
        }, input.options);
        var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
        var ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;

        switch (true) {
          case opts.ipv4 && !opts.ipv6:
            return {
              message: input.l10n ? opts.message || input.l10n.ip.ipv4 : opts.message,
              valid: ipv4Regex.test(input.value)
            };

          case !opts.ipv4 && opts.ipv6:
            return {
              message: input.l10n ? opts.message || input.l10n.ip.ipv6 : opts.message,
              valid: ipv6Regex.test(input.value)
            };

          case opts.ipv4 && opts.ipv6:
          default:
            return {
              message: input.l10n ? opts.message || input.l10n.ip["default"] : opts.message,
              valid: ipv4Regex.test(input.value) || ipv6Regex.test(input.value)
            };
        }
      }
    };
  }

  exports.default = ip;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isbn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isbn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isbn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: {
              type: null
            },
            valid: true
          };
        }

        var tpe;

        switch (true) {
          case /^\d{9}[\dX]$/.test(input.value):
          case input.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
          case input.value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
            tpe = 'ISBN10';
            break;

          case /^(978|979)\d{9}[\dX]$/.test(input.value):
          case input.value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
          case input.value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
            tpe = 'ISBN13';
            break;

          default:
            return {
              meta: {
                type: null
              },
              valid: false
            };
        }

        var chars = input.value.replace(/[^0-9X]/gi, '').split('');
        var length = chars.length;
        var sum = 0;
        var i;
        var checksum;

        switch (tpe) {
          case 'ISBN10':
            sum = 0;

            for (i = 0; i < length - 1; i++) {
              sum += parseInt(chars[i], 10) * (10 - i);
            }

            checksum = 11 - sum % 11;

            if (checksum === 11) {
              checksum = 0;
            } else if (checksum === 10) {
              checksum = 'X';
            }

            return {
              meta: {
                type: tpe
              },
              valid: "" + checksum === chars[length - 1]
            };

          case 'ISBN13':
            sum = 0;

            for (i = 0; i < length - 1; i++) {
              sum += i % 2 === 0 ? parseInt(chars[i], 10) : parseInt(chars[i], 10) * 3;
            }

            checksum = 10 - sum % 10;

            if (checksum === 10) {
              checksum = '0';
            }

            return {
              meta: {
                type: tpe
              },
              valid: "" + checksum === chars[length - 1]
            };
        }
      }
    };
  }

  exports.default = isbn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isin.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/isin.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isin() {
    var COUNTRY_CODES = 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|' + 'BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|' + 'SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|' + 'IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|' + 'MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|' + 'PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|' + 'SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|' + 'YE|ZM|ZW';
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = input.value.toUpperCase();
        var regex = new RegExp('^(' + COUNTRY_CODES + ')[0-9A-Z]{10}$');

        if (!regex.test(input.value)) {
          return {
            valid: false
          };
        }

        var length = v.length;
        var converted = '';
        var i;

        for (i = 0; i < length - 1; i++) {
          var c = v.charCodeAt(i);
          converted += c > 57 ? (c - 55).toString() : v.charAt(i);
        }

        var digits = '';
        var n = converted.length;
        var group = n % 2 !== 0 ? 0 : 1;

        for (i = 0; i < n; i++) {
          digits += parseInt(converted[i], 10) * (i % 2 === group ? 2 : 1) + '';
        }

        var sum = 0;

        for (i = 0; i < digits.length; i++) {
          sum += parseInt(digits.charAt(i), 10);
        }

        sum = (10 - sum % 10) % 10;
        return {
          valid: "" + sum === v.charAt(length - 1)
        };
      }
    };
  }

  exports.default = isin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ismn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ismn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ismn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: null,
            valid: true
          };
        }

        var tpe;

        switch (true) {
          case /^M\d{9}$/.test(input.value):
          case /^M-\d{4}-\d{4}-\d{1}$/.test(input.value):
          case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
            tpe = 'ISMN10';
            break;

          case /^9790\d{9}$/.test(input.value):
          case /^979-0-\d{4}-\d{4}-\d{1}$/.test(input.value):
          case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
            tpe = 'ISMN13';
            break;

          default:
            return {
              meta: null,
              valid: false
            };
        }

        var v = input.value;

        if ('ISMN10' === tpe) {
          v = "9790" + v.substr(1);
        }

        v = v.replace(/[^0-9]/gi, '');
        var sum = 0;
        var length = v.length;
        var weight = [1, 3];

        for (var i = 0; i < length - 1; i++) {
          sum += parseInt(v.charAt(i), 10) * weight[i % 2];
        }

        sum = (10 - sum % 10) % 10;
        return {
          meta: {
            type: tpe
          },
          valid: "" + sum === v.charAt(length - 1)
        };
      }
    };
  }

  exports.default = ismn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/issn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/issn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function issn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^\d{4}\-\d{3}[\dX]$/.test(input.value)) {
          return {
            valid: false
          };
        }

        var chars = input.value.replace(/[^0-9X]/gi, '').split('');
        var length = chars.length;
        var sum = 0;

        if (chars[7] === 'X') {
          chars[7] = '10';
        }

        for (var i = 0; i < length; i++) {
          sum += parseInt(chars[i], 10) * (8 - i);
        }

        return {
          valid: sum % 11 === 0
        };
      }
    };
  }

  exports.default = issn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function lessThan() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var maxValue = parseFloat(("" + opts.max).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan["default"] : opts.message, "" + maxValue),
          valid: parseFloat(input.value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "" + maxValue),
          valid: parseFloat(input.value) < maxValue
        };
      }
    };
  }

  exports.default = lessThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/mac.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/mac.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mac() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(input.value) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(input.value)
        };
      }
    };
  }

  exports.default = mac;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/meid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/meid.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function meid() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = input.value;

        switch (true) {
          case /^[0-9A-F]{15}$/i.test(v):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(v):
          case /^\d{19}$/.test(v):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(v):
            var cd = v.charAt(v.length - 1).toUpperCase();
            v = v.replace(/[- ]/g, '');

            if (v.match(/^\d*$/i)) {
              return {
                valid: luhn_1["default"](v)
              };
            }

            v = v.slice(0, -1);
            var checkDigit = '';
            var i = void 0;

            for (i = 1; i <= 13; i += 2) {
              checkDigit += (parseInt(v.charAt(i), 16) * 2).toString(16);
            }

            var sum = 0;

            for (i = 0; i < checkDigit.length; i++) {
              sum += parseInt(checkDigit.charAt(i), 16);
            }

            return {
              valid: sum % 10 === 0 ? cd === '0' : cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16).toUpperCase()
            };

          case /^[0-9A-F]{14}$/i.test(v):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(v):
          case /^\d{18}$/.test(v):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(v):
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

  exports.default = meid;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function notEmpty() {
    return {
      validate: function validate(input) {
        var trim = !!input.options && !!input.options.trim;
        var value = input.value;
        return {
          valid: !trim && value !== '' || trim && value !== '' && value.trim() !== ''
        };
      }
    };
  }

  exports.default = notEmpty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function numeric() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, input.options);
        var v = "" + input.value;

        if (v.substr(0, 1) === opts.decimalSeparator) {
          v = "0" + opts.decimalSeparator + v.substr(1);
        } else if (v.substr(0, 2) === "-" + opts.decimalSeparator) {
          v = "-0" + opts.decimalSeparator + v.substr(2);
        }

        var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
        var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
        var testRegexp = new RegExp("^-?[0-9]{1,3}(" + thousandsSeparator + "[0-9]{3})*(" + decimalSeparator + "[0-9]+)?$");
        var thousandsReplacer = new RegExp(thousandsSeparator, 'g');

        if (!testRegexp.test(v)) {
          return {
            valid: false
          };
        }

        if (thousandsSeparator) {
          v = v.replace(thousandsReplacer, '');
        }

        if (decimalSeparator) {
          v = v.replace(decimalSeparator, '.');
        }

        var n = parseFloat(v);
        return {
          valid: !isNaN(n) && isFinite(n)
        };
      }
    };
  }

  exports.default = numeric;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/phone.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/phone.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function phone() {
    var COUNTRY_CODES = ['AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'];
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
        var v = input.value.trim();
        var country = v.substr(0, 2);

        if ('function' === typeof opts.country) {
          country = opts.country.call(this);
        } else {
          country = opts.country;
        }

        if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
          return {
            valid: true
          };
        }

        var isValid = true;

        switch (country.toUpperCase()) {
          case 'AE':
            isValid = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(v);
            break;

          case 'BG':
            isValid = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(v.replace(/\+|\s|-|\/|\(|\)/gi, ''));
            break;

          case 'BR':
            isValid = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(v);
            break;

          case 'CN':
            isValid = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(v);
            break;

          case 'CZ':
            isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
            break;

          case 'DE':
            isValid = /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(v);
            break;

          case 'DK':
            isValid = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(v);
            break;

          case 'ES':
            isValid = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(v);
            break;

          case 'FR':
            isValid = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(v);
            break;

          case 'GB':
            isValid = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(v);
            break;

          case 'IN':
            isValid = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(v);
            break;

          case 'MA':
            isValid = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(v);
            break;

          case 'NL':
            isValid = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(v);
            break;

          case 'PK':
            isValid = /^0?3[0-9]{2}[0-9]{7}$/.test(v);
            break;

          case 'RO':
            isValid = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(v);
            break;

          case 'RU':
            isValid = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(v);
            break;

          case 'SK':
            isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
            break;

          case 'TH':
            isValid = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(v);
            break;

          case 'VE':
            isValid = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(v);
            break;

          case 'US':
          default:
            isValid = /^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/.test(v);
            break;
        }

        return {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.phone.country : opts.message, input.l10n ? input.l10n.phone.countries[country] : country),
          valid: isValid
        };
      }
    };
  }

  exports.default = phone;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function promise() {
    return {
      validate: function validate(input) {
        return call_1["default"](input.options.promise, [input]);
      }
    };
  }

  exports.default = promise;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function regexp() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var reg = input.options.regexp;

        if (reg instanceof RegExp) {
          return {
            valid: reg.test(input.value)
          };
        } else {
          var pattern = reg.toString();
          var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
          return {
            valid: exp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = regexp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, fetch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function remote() {
    var DEFAULT_OPTIONS = {
      crossDomain: false,
      data: {},
      headers: {},
      method: 'GET',
      validKey: 'valid'
    };
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return Promise.resolve({
            valid: true
          });
        }

        var opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
        var data = opts.data;

        if ('function' === typeof opts.data) {
          data = opts.data.call(this, input);
        }

        if ('string' === typeof data) {
          data = JSON.parse(data);
        }

        data[opts.name || input.field] = input.value;
        var url = 'function' === typeof opts.url ? opts.url.call(this, input) : opts.url;
        return fetch_1["default"](url, {
          crossDomain: opts.crossDomain,
          headers: opts.headers,
          method: opts.method,
          params: data
        }).then(function (response) {
          return Promise.resolve({
            message: response.message,
            meta: response,
            valid: "" + response[opts.validKey] === 'true'
          });
        })["catch"](function (reason) {
          return Promise.reject({
            valid: false
          });
        });
      }
    };
  }

  exports.default = remote;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/rtn.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/rtn.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function rtn() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^\d{9}$/.test(input.value)) {
          return {
            valid: false
          };
        }

        var sum = 0;

        for (var i = 0; i < input.value.length; i += 3) {
          sum += parseInt(input.value.charAt(i), 10) * 3 + parseInt(input.value.charAt(i + 1), 10) * 7 + parseInt(input.value.charAt(i + 2), 10);
        }

        return {
          valid: sum !== 0 && sum % 10 === 0
        };
      }
    };
  }

  exports.default = rtn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/sedol.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/sedol.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function sedol() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = input.value.toUpperCase();

        if (!/^[0-9A-Z]{7}$/.test(v)) {
          return {
            valid: false
          };
        }

        var weight = [1, 3, 1, 7, 3, 9, 1];
        var length = v.length;
        var sum = 0;

        for (var i = 0; i < length - 1; i++) {
          sum += weight[i] * parseInt(v.charAt(i), 36);
        }

        sum = (10 - sum % 10) % 10;
        return {
          valid: "" + sum === v.charAt(length - 1)
        };
      }
    };
  }

  exports.default = sedol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siren.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siren.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siren() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^\d{9}$/.test(input.value) && luhn_1["default"](input.value)
        };
      }
    };
  }

  exports.default = siren;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siret.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/siret.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function siret() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var length = input.value.length;
        var sum = 0;
        var tmp;

        for (var i = 0; i < length; i++) {
          tmp = parseInt(input.value.charAt(i), 10);

          if (i % 2 === 0) {
            tmp = tmp * 2;

            if (tmp > 9) {
              tmp -= 9;
            }
          }

          sum += tmp;
        }

        return {
          valid: sum % 10 === 0
        };
      }
    };
  }

  exports.default = siret;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/step.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/step.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function step() {
    var round = function round(input, precision) {
      var m = Math.pow(10, precision);
      var x = input * m;
      var sign;

      switch (true) {
        case x === 0:
          sign = 0;
          break;

        case x > 0:
          sign = 1;
          break;

        case x < 0:
          sign = -1;
          break;
      }

      var isHalf = x % 1 === 0.5 * sign;
      return isHalf ? (Math.floor(x) + (sign > 0 ? 1 : 0)) / m : Math.round(x) / m;
    };

    var floatMod = function floatMod(x, y) {
      if (y === 0.0) {
        return 1.0;
      }

      var dotX = ("" + x).split('.');
      var dotY = ("" + y).split('.');
      var precision = (dotX.length === 1 ? 0 : dotX[1].length) + (dotY.length === 1 ? 0 : dotY[1].length);
      return round(x - y * Math.floor(x / y), precision);
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var v = parseFloat(input.value);

        if (isNaN(v) || !isFinite(v)) {
          return {
            valid: false
          };
        }

        var opts = Object.assign({}, {
          baseValue: 0,
          message: '',
          step: 1
        }, input.options);
        var mod = floatMod(v - opts.baseValue, opts.step);
        return {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.step["default"] : opts.message, "" + opts.step),
          valid: mod === 0.0 || mod === opts.step
        };
      }
    };
  }

  exports.default = step;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringCase() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          "case": 'lower'
        }, input.options);
        var caseOpt = (opts["case"] || 'lower').toLowerCase();
        return {
          message: opts.message || (input.l10n ? 'upper' === caseOpt ? input.l10n.stringCase.upper : input.l10n.stringCase["default"] : opts.message),
          valid: 'upper' === caseOpt ? input.value === input.value.toUpperCase() : input.value === input.value.toLowerCase()
        };
      }
    };
  }

  exports.default = stringCase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringLength() {
    var utf8Length = function utf8Length(str) {
      var s = str.length;

      for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);

        if (code > 0x7f && code <= 0x7ff) {
          s++;
        } else if (code > 0x7ff && code <= 0xffff) {
          s += 2;
        }

        if (code >= 0xDC00 && code <= 0xDFFF) {
          i--;
        }
      }

      return "" + s;
    };

    return {
      validate: function validate(input) {
        var opts = Object.assign({}, {
          message: '',
          trim: false,
          utf8Bytes: false
        }, input.options);
        var v = opts.trim === true || "" + opts.trim === 'true' ? input.value.trim() : input.value;

        if (v === '') {
          return {
            valid: true
          };
        }

        var min = opts.min ? "" + opts.min : '';
        var max = opts.max ? "" + opts.max : '';
        var length = opts.utf8Bytes ? utf8Length(v) : v.length;
        var isValid = true;
        var msg = input.l10n ? opts.message || input.l10n.stringLength["default"] : opts.message;

        if (min && length < parseInt(min, 10) || max && length > parseInt(max, 10)) {
          isValid = false;
        }

        switch (true) {
          case !!min && !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [min, max]);
            break;

          case !!min:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "" + (parseInt(min, 10) - 1));
            break;

          case !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "" + (parseInt(max, 10) + 1));
            break;

          default:
            break;
        }

        return {
          message: msg,
          valid: isValid
        };
      }
    };
  }

  exports.default = stringLength;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function uri() {
    var DEFAULT_OPTIONS = {
      allowEmptyProtocol: false,
      allowLocal: false,
      protocol: 'http, https, ftp'
    };
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
        var allowLocal = opts.allowLocal === true || "" + opts.allowLocal === 'true';
        var allowEmptyProtocol = opts.allowEmptyProtocol === true || "" + opts.allowEmptyProtocol === 'true';
        var protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
        var urlExp = new RegExp("^" + "(?:(?:" + protocol + ")://)" + (allowEmptyProtocol ? '?' : '') + "(?:\\S+(?::\\S*)?@)?" + "(?:" + (allowLocal ? '' : "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" + "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" + "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (allowLocal ? '?' : '') + ")" + "(?::\\d{2,5})?" + "(?:/[^\\s]*)?$", "i");
        return {
          valid: urlExp.test(input.value)
        };
      }
    };
  }

  exports.default = uri;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uuid.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uuid.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function uuid() {
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
        var patterns = {
          3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
          4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
        };
        var version = opts.version ? "" + opts.version : 'all';
        return {
          message: opts.version ? format_1["default"](input.l10n ? opts.message || input.l10n.uuid.version : opts.message, opts.version) : input.l10n ? input.l10n.uuid["default"] : opts.message,
          valid: null === patterns[version] ? true : patterns[version].test(input.value)
        };
      }
    };
  }

  exports.default = uuid;
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vin.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/vin.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function vin() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(input.value)) {
          return {
            valid: false
          };
        }

        var v = input.value.toUpperCase();
        var chars = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
          E: 5,
          F: 6,
          G: 7,
          H: 8,
          J: 1,
          K: 2,
          L: 3,
          M: 4,
          N: 5,
          P: 7,
          R: 9,
          S: 2,
          T: 3,
          U: 4,
          V: 5,
          W: 6,
          X: 7,
          Y: 8,
          Z: 9,
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9
        };
        var weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
        var length = v.length;
        var sum = 0;

        for (var i = 0; i < length; i++) {
          sum += chars["" + v.charAt(i)] * weights[i];
        }

        var reminder = "" + sum % 11;

        if (reminder === '10') {
          reminder = 'X';
        }

        return {
          valid: reminder === v.charAt(8)
        };
      }
    };
  }

  exports.default = vin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/zipCode.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/zipCode.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function zipCode() {
    var COUNTRY_CODES = ['AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'];

    var gb = function gb(value) {
      var firstChar = '[ABCDEFGHIJKLMNOPRSTUWYZ]';
      var secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]';
      var thirdChar = '[ABCDEFGHJKPMNRSTUVWXY]';
      var fourthChar = '[ABEHMNPRVWXY]';
      var fifthChar = '[ABDEFGHJLNPQRSTUWXYZ]';
      var regexps = [new RegExp("^(" + firstChar + "{1}" + secondChar + "?[0-9]{1,2})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'), new RegExp("^(" + firstChar + "{1}[0-9]{1}" + thirdChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'), new RegExp("^(" + firstChar + "{1}" + secondChar + "{1}?[0-9]{1}" + fourthChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'), new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i];

      for (var _i = 0, regexps_1 = regexps; _i < regexps_1.length; _i++) {
        var reg = regexps_1[_i];

        if (reg.test(value)) {
          return true;
        }
      }

      return false;
    };

    return {
      validate: function validate(input) {
        var opts = Object.assign({}, input.options);

        if (input.value === '' || !opts.country) {
          return {
            valid: true
          };
        }

        var country = input.value.substr(0, 2);

        if ('function' === typeof opts.country) {
          country = opts.country.call(this);
        } else {
          country = opts.country;
        }

        if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
          return {
            valid: true
          };
        }

        var isValid = false;
        country = country.toUpperCase();

        switch (country) {
          case 'AT':
            isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
            break;

          case 'BG':
            isValid = /^([1-9]{1}[0-9]{3})$/.test(input.value);
            break;

          case 'BR':
            isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(input.value);
            break;

          case 'CA':
            isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(input.value);
            break;

          case 'CH':
            isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
            break;

          case 'CZ':
            isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
            break;

          case 'DE':
            isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(input.value);
            break;

          case 'DK':
            isValid = /^(DK(-|\s)?)?\d{4}$/i.test(input.value);
            break;

          case 'ES':
            isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(input.value);
            break;

          case 'FR':
            isValid = /^[0-9]{5}$/i.test(input.value);
            break;

          case 'GB':
            isValid = gb(input.value);
            break;

          case 'IN':
            isValid = /^\d{3}\s?\d{3}$/.test(input.value);
            break;

          case 'IE':
            isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(input.value);
            break;

          case 'IT':
            isValid = /^(I-|IT-)?\d{5}$/i.test(input.value);
            break;

          case 'MA':
            isValid = /^[1-9][0-9]{4}$/i.test(input.value);
            break;

          case 'NL':
            isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(input.value);
            break;

          case 'PL':
            isValid = /^[0-9]{2}\-[0-9]{3}$/.test(input.value);
            break;

          case 'PT':
            isValid = /^[1-9]\d{3}-\d{3}$/.test(input.value);
            break;

          case 'RO':
            isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(input.value);
            break;

          case 'RU':
            isValid = /^[0-9]{6}$/i.test(input.value);
            break;

          case 'SE':
            isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(input.value);
            break;

          case 'SG':
            isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(input.value);
            break;

          case 'SK':
            isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
            break;

          case 'US':
          default:
            isValid = /^\d{4,5}([\-]?\d{4})?$/.test(input.value);
            break;
        }

        return {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.zipCode.country : opts.message, input.l10n ? input.l10n.zipCode.countries[country] : country),
          valid: isValid
        };
      }
    };
  }

  exports.default = zipCode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
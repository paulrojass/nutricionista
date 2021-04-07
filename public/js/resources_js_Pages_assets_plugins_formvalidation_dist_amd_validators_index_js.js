(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_validators_index_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./between */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js"), __webpack_require__(/*! ./blank */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js"), __webpack_require__(/*! ./callback */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js"), __webpack_require__(/*! ./choice */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js"), __webpack_require__(/*! ./creditCard */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js"), __webpack_require__(/*! ./date */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js"), __webpack_require__(/*! ./different */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js"), __webpack_require__(/*! ./digits */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js"), __webpack_require__(/*! ./emailAddress */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js"), __webpack_require__(/*! ./file */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js"), __webpack_require__(/*! ./greaterThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js"), __webpack_require__(/*! ./identical */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js"), __webpack_require__(/*! ./integer */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js"), __webpack_require__(/*! ./ip */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js"), __webpack_require__(/*! ./lessThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js"), __webpack_require__(/*! ./notEmpty */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js"), __webpack_require__(/*! ./numeric */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js"), __webpack_require__(/*! ./promise */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js"), __webpack_require__(/*! ./regexp */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js"), __webpack_require__(/*! ./remote */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js"), __webpack_require__(/*! ./stringCase */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js"), __webpack_require__(/*! ./stringLength */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js"), __webpack_require__(/*! ./uri */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, between_1, blank_1, callback_1, choice_1, creditCard_1, date_1, different_1, digits_1, emailAddress_1, file_1, greaterThan_1, identical_1, integer_1, ip_1, lessThan_1, notEmpty_1, numeric_1, promise_1, regexp_1, remote_1, stringCase_1, stringLength_1, uri_1) {
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
    uri: uri_1["default"]
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

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Recaptcha_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Plugin = function () {
    function Plugin(opts) {
      this.opts = opts;
    }

    Plugin.prototype.setCore = function (core) {
      this.core = core;
      return this;
    };

    Plugin.prototype.install = function () {};

    Plugin.prototype.uninstall = function () {};

    return Plugin;
  }();

  exports.default = Plugin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha.js ***!
  \****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, fetch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Recaptcha = function (_super) {
    __extends(Recaptcha, _super);

    function Recaptcha(opts) {
      var _this = _super.call(this, opts) || this;

      _this.widgetIds = new Map();
      _this.captchaStatus = 'NotValidated';
      _this.opts = Object.assign({}, Recaptcha.DEFAULT_OPTIONS, opts);
      _this.fieldResetHandler = _this.onResetField.bind(_this);
      _this.preValidateFilter = _this.preValidate.bind(_this);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
      return _this;
    }

    Recaptcha.prototype.install = function () {
      var _this = this;

      this.core.on('core.field.reset', this.fieldResetHandler).on('plugins.icon.placed', this.iconPlacedHandler).registerFilter('validate-pre', this.preValidateFilter);
      var loadPrevCaptcha = typeof window[Recaptcha.LOADED_CALLBACK] === 'undefined' ? function () {} : window[Recaptcha.LOADED_CALLBACK];

      window[Recaptcha.LOADED_CALLBACK] = function () {
        loadPrevCaptcha();
        var captchaOptions = {
          'badge': _this.opts.badge,
          'callback': function callback() {
            if (_this.opts.backendVerificationUrl === '') {
              _this.captchaStatus = 'Valid';

              _this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'Valid');
            }
          },
          'error-callback': function errorCallback() {
            _this.captchaStatus = 'Invalid';

            _this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'Invalid');
          },
          'expired-callback': function expiredCallback() {
            _this.captchaStatus = 'NotValidated';

            _this.core.updateFieldStatus(Recaptcha.CAPTCHA_FIELD, 'NotValidated');
          },
          'sitekey': _this.opts.siteKey,
          'size': _this.opts.size
        };
        var widgetId = window['grecaptcha'].render(_this.opts.element, captchaOptions);

        _this.widgetIds.set(_this.opts.element, widgetId);

        _this.core.addField(Recaptcha.CAPTCHA_FIELD, {
          validators: {
            promise: {
              message: _this.opts.message,
              promise: function promise(input) {
                var _a;

                var value = _this.widgetIds.has(_this.opts.element) ? window['grecaptcha'].getResponse(_this.widgetIds.get(_this.opts.element)) : input.value;

                if (value === '') {
                  _this.captchaStatus = 'Invalid';
                  return Promise.resolve({
                    valid: false
                  });
                } else if (_this.opts.backendVerificationUrl === '') {
                  _this.captchaStatus = 'Valid';
                  return Promise.resolve({
                    valid: true
                  });
                } else if (_this.captchaStatus === 'Valid') {
                  return Promise.resolve({
                    valid: true
                  });
                } else {
                  return fetch_1["default"](_this.opts.backendVerificationUrl, {
                    method: 'POST',
                    params: (_a = {}, _a[Recaptcha.CAPTCHA_FIELD] = value, _a)
                  }).then(function (response) {
                    var isValid = "" + response['success'] === 'true';
                    _this.captchaStatus = isValid ? 'Valid' : 'Invalid';
                    return Promise.resolve({
                      meta: response,
                      valid: isValid
                    });
                  })["catch"](function (reason) {
                    _this.captchaStatus = 'NotValidated';
                    return Promise.reject({
                      valid: false
                    });
                  });
                }
              }
            }
          }
        });
      };

      var src = this.getScript();

      if (!document.body.querySelector("script[src=\"" + src + "\"]")) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = src;
        document.body.appendChild(script);
      }
    };

    Recaptcha.prototype.uninstall = function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.core.off('core.field.reset', this.fieldResetHandler).off('plugins.icon.placed', this.iconPlacedHandler).deregisterFilter('validate-pre', this.preValidateFilter);
      this.widgetIds.clear();
      var src = this.getScript();
      var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"" + src + "\"]"));
      scripts.forEach(function (s) {
        return s.parentNode.removeChild(s);
      });
      this.core.removeField(Recaptcha.CAPTCHA_FIELD);
    };

    Recaptcha.prototype.getScript = function () {
      var lang = this.opts.language ? "&hl=" + this.opts.language : '';
      return "https://www.google.com/recaptcha/api.js?onload=" + Recaptcha.LOADED_CALLBACK + "&render=explicit" + lang;
    };

    Recaptcha.prototype.preValidate = function () {
      var _this = this;

      if (this.opts.size === 'invisible' && this.widgetIds.has(this.opts.element)) {
        var widgetId_1 = this.widgetIds.get(this.opts.element);
        return this.captchaStatus === 'Valid' ? Promise.resolve() : new Promise(function (resolve, reject) {
          window['grecaptcha'].execute(widgetId_1).then(function () {
            if (_this.timer) {
              clearTimeout(_this.timer);
            }

            _this.timer = window.setTimeout(resolve, 1 * 1000);
          });
        });
      } else {
        return Promise.resolve();
      }
    };

    Recaptcha.prototype.onResetField = function (e) {
      if (e.field === Recaptcha.CAPTCHA_FIELD && this.widgetIds.has(this.opts.element)) {
        var widgetId = this.widgetIds.get(this.opts.element);
        window['grecaptcha'].reset(widgetId);
      }
    };

    Recaptcha.prototype.onIconPlaced = function (e) {
      if (e.field === Recaptcha.CAPTCHA_FIELD) {
        if (this.opts.size === 'invisible') {
          e.iconElement.style.display = 'none';
        } else {
          var captchaContainer = document.getElementById(this.opts.element);

          if (captchaContainer) {
            captchaContainer.parentNode.insertBefore(e.iconElement, captchaContainer.nextSibling);
          }
        }
      }
    };

    Recaptcha.CAPTCHA_FIELD = 'g-recaptcha-response';
    Recaptcha.DEFAULT_OPTIONS = {
      backendVerificationUrl: '',
      badge: 'bottomright',
      size: 'normal',
      theme: 'light'
    };
    Recaptcha.LOADED_CALLBACK = '___reCaptchaLoaded___';
    return Recaptcha;
  }(Plugin_1["default"]);

  exports.default = Recaptcha;
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

/***/ })

}]);
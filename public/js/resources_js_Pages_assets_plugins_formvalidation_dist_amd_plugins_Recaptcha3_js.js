(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Recaptcha3_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha3.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha3.js ***!
  \*****************************************************************************************/
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

  var Recaptcha3 = function (_super) {
    __extends(Recaptcha3, _super);

    function Recaptcha3(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = Object.assign({}, {
        minimumScore: 0
      }, opts);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
      return _this;
    }

    Recaptcha3.prototype.install = function () {
      var _this = this;

      this.core.on('plugins.icon.placed', this.iconPlacedHandler);
      var loadPrevCaptcha = typeof window[Recaptcha3.LOADED_CALLBACK] === 'undefined' ? function () {} : window[Recaptcha3.LOADED_CALLBACK];

      window[Recaptcha3.LOADED_CALLBACK] = function () {
        loadPrevCaptcha();
        var tokenField = document.createElement('input');
        tokenField.setAttribute('type', 'hidden');
        tokenField.setAttribute('name', Recaptcha3.CAPTCHA_FIELD);
        document.getElementById(_this.opts.element).appendChild(tokenField);

        _this.core.addField(Recaptcha3.CAPTCHA_FIELD, {
          validators: {
            promise: {
              message: _this.opts.message,
              promise: function promise(input) {
                return new Promise(function (resolve, reject) {
                  window['grecaptcha'].execute(_this.opts.siteKey, {
                    action: _this.opts.action
                  }).then(function (token) {
                    var _a;

                    fetch_1["default"](_this.opts.backendVerificationUrl, {
                      method: 'POST',
                      params: (_a = {}, _a[Recaptcha3.CAPTCHA_FIELD] = token, _a)
                    }).then(function (response) {
                      var isValid = "" + response.success === 'true' && response.score >= _this.opts.minimumScore;
                      resolve({
                        message: response.message || _this.opts.message,
                        meta: response,
                        valid: isValid
                      });
                    })["catch"](function (_) {
                      reject({
                        valid: false
                      });
                    });
                  });
                });
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

    Recaptcha3.prototype.uninstall = function () {
      this.core.off('plugins.icon.placed', this.iconPlacedHandler);
      var src = this.getScript();
      var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"" + src + "\"]"));
      scripts.forEach(function (s) {
        return s.parentNode.removeChild(s);
      });
      this.core.removeField(Recaptcha3.CAPTCHA_FIELD);
    };

    Recaptcha3.prototype.getScript = function () {
      var lang = this.opts.language ? "&hl=" + this.opts.language : '';
      return 'https://www.google.com/recaptcha/api.js?' + ("onload=" + Recaptcha3.LOADED_CALLBACK + "&render=" + this.opts.siteKey + lang);
    };

    Recaptcha3.prototype.onIconPlaced = function (e) {
      if (e.field === Recaptcha3.CAPTCHA_FIELD) {
        e.iconElement.style.display = 'none';
      }
    };

    Recaptcha3.CAPTCHA_FIELD = '___g-recaptcha-token___';
    Recaptcha3.LOADED_CALLBACK = '___reCaptcha3Loaded___';
    return Recaptcha3;
  }(Plugin_1["default"]);

  exports.default = Recaptcha3;
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
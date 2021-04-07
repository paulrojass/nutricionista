(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Recaptcha3Token_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha3Token.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Recaptcha3Token.js ***!
  \**********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Recaptcha3Token = function (_super) {
    __extends(Recaptcha3Token, _super);

    function Recaptcha3Token(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = Object.assign({}, {
        action: 'submit',
        hiddenTokenName: '___hidden-token___'
      }, opts);
      _this.onValidHandler = _this.onFormValid.bind(_this);
      return _this;
    }

    Recaptcha3Token.prototype.install = function () {
      this.core.on('core.form.valid', this.onValidHandler);
      this.hiddenTokenEle = document.createElement('input');
      this.hiddenTokenEle.setAttribute('type', 'hidden');
      this.core.getFormElement().appendChild(this.hiddenTokenEle);
      var loadPrevCaptcha = typeof window[Recaptcha3Token.LOADED_CALLBACK] === 'undefined' ? function () {} : window[Recaptcha3Token.LOADED_CALLBACK];

      window[Recaptcha3Token.LOADED_CALLBACK] = function () {
        loadPrevCaptcha();
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

    Recaptcha3Token.prototype.uninstall = function () {
      this.core.off('core.form.valid', this.onValidHandler);
      var src = this.getScript();
      var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"" + src + "\"]"));
      scripts.forEach(function (s) {
        return s.parentNode.removeChild(s);
      });
      this.core.getFormElement().removeChild(this.hiddenTokenEle);
    };

    Recaptcha3Token.prototype.onFormValid = function () {
      var _this = this;

      window['grecaptcha'].execute(this.opts.siteKey, {
        action: this.opts.action
      }).then(function (token) {
        _this.hiddenTokenEle.setAttribute('name', _this.opts.hiddenTokenName);

        _this.hiddenTokenEle.value = token;

        var form = _this.core.getFormElement();

        if (form instanceof HTMLFormElement) {
          form.submit();
        }
      });
    };

    Recaptcha3Token.prototype.getScript = function () {
      var lang = this.opts.language ? "&hl=" + this.opts.language : '';
      return 'https://www.google.com/recaptcha/api.js?' + ("onload=" + Recaptcha3Token.LOADED_CALLBACK + "&render=" + this.opts.siteKey + lang);
    };

    Recaptcha3Token.LOADED_CALLBACK = '___reCaptcha3Loaded___';
    return Recaptcha3Token;
  }(Plugin_1["default"]);

  exports.default = Recaptcha3Token;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
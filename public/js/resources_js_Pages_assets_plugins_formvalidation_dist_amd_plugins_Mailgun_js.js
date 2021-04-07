(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Mailgun_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js ***!
  \************************************************************************************/
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

  var Alias = function (_super) {
    __extends(Alias, _super);

    function Alias(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = opts || {};
      _this.validatorNameFilter = _this.getValidatorName.bind(_this);
      return _this;
    }

    Alias.prototype.install = function () {
      this.core.registerFilter('validator-name', this.validatorNameFilter);
    };

    Alias.prototype.uninstall = function () {
      this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    };

    Alias.prototype.getValidatorName = function (alias, field) {
      return this.opts[alias] || alias;
    };

    return Alias;
  }(Plugin_1["default"]);

  exports.default = Alias;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Mailgun.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Mailgun.js ***!
  \**************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ./Alias */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, Alias_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Mailgun = function (_super) {
    __extends(Mailgun, _super);

    function Mailgun(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = Object.assign({}, {
        suggestion: false
      }, opts);
      _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
      return _this;
    }

    Mailgun.prototype.install = function () {
      if (this.opts.suggestion) {
        this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
      }

      var aliasOpts = {
        mailgun: 'remote'
      };
      this.core.registerPlugin('___mailgunAlias', new Alias_1["default"](aliasOpts)).addField(this.opts.field, {
        validators: {
          mailgun: {
            crossDomain: true,
            data: {
              api_key: this.opts.apiKey
            },
            headers: {
              'Content-Type': 'application/json'
            },
            message: this.opts.message,
            name: 'address',
            url: 'https://api.mailgun.net/v3/address/validate',
            validKey: 'is_valid'
          }
        }
      });
    };

    Mailgun.prototype.uninstall = function () {
      if (this.opts.suggestion) {
        this.core.off('plugins.message.displayed', this.messageDisplayedHandler);
      }

      this.core.removeField(this.opts.field);
    };

    Mailgun.prototype.onMessageDisplayed = function (e) {
      if (e.field === this.opts.field && 'mailgun' === e.validator && e.meta && e.meta.did_you_mean) {
        e.messageElement.innerHTML = "Did you mean " + e.meta.did_you_mean + "?";
      }
    };

    return Mailgun;
  }(Plugin_1["default"]);

  exports.default = Mailgun;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
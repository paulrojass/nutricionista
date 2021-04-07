(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Dependency_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Dependency.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Dependency.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Dependency = function (_super) {
    __extends(Dependency, _super);

    function Dependency(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = opts || {};
      _this.triggerExecutedHandler = _this.onTriggerExecuted.bind(_this);
      return _this;
    }

    Dependency.prototype.install = function () {
      this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    };

    Dependency.prototype.uninstall = function () {
      this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    };

    Dependency.prototype.onTriggerExecuted = function (e) {
      if (this.opts[e.field]) {
        var dependencies = this.opts[e.field].split(' ');

        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
          var d = dependencies_1[_i];
          var dependentField = d.trim();

          if (this.opts[dependentField]) {
            this.core.revalidateField(dependentField);
          }
        }
      }
    };

    return Dependency;
  }(Plugin_1["default"]);

  exports.default = Dependency;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
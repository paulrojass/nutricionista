(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Sequence_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Sequence.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Sequence.js ***!
  \***************************************************************************************/
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

  var Sequence = function (_super) {
    __extends(Sequence, _super);

    function Sequence(opts) {
      var _this = _super.call(this, opts) || this;

      _this.invalidFields = new Map();
      _this.opts = Object.assign({}, {
        enabled: true
      }, opts);
      _this.validatorHandler = _this.onValidatorValidated.bind(_this);
      _this.shouldValidateFilter = _this.shouldValidate.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      return _this;
    }

    Sequence.prototype.install = function () {
      this.core.on('core.validator.validated', this.validatorHandler).on('core.field.added', this.fieldAddedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.validating', this.elementValidatingHandler).registerFilter('field-should-validate', this.shouldValidateFilter);
    };

    Sequence.prototype.uninstall = function () {
      this.invalidFields.clear();
      this.core.off('core.validator.validated', this.validatorHandler).off('core.field.added', this.fieldAddedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.validating', this.elementValidatingHandler).deregisterFilter('field-should-validate', this.shouldValidateFilter);
    };

    Sequence.prototype.shouldValidate = function (field, element, value, validator) {
      var stop = (this.opts.enabled === true || this.opts.enabled[field] === true) && this.invalidFields.has(element) && !!this.invalidFields.get(element).length && this.invalidFields.get(element).indexOf(validator) === -1;
      return !stop;
    };

    Sequence.prototype.onValidatorValidated = function (e) {
      var validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
      var index = validators.indexOf(e.validator);

      if (e.result.valid && index >= 0) {
        validators.splice(index, 1);
      } else if (!e.result.valid && index === -1) {
        validators.push(e.validator);
      }

      this.invalidFields.set(e.element, validators);
    };

    Sequence.prototype.onFieldAdded = function (e) {
      if (e.elements) {
        this.clearInvalidFields(e.elements);
      }
    };

    Sequence.prototype.onElementNotValidated = function (e) {
      this.clearInvalidFields(e.elements);
    };

    Sequence.prototype.onElementValidating = function (e) {
      this.clearInvalidFields(e.elements);
    };

    Sequence.prototype.clearInvalidFields = function (elements) {
      var _this = this;

      elements.forEach(function (ele) {
        return _this.invalidFields["delete"](ele);
      });
    };

    return Sequence;
  }(Plugin_1["default"]);

  exports.default = Sequence;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
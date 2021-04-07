(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_StartEndDate_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/StartEndDate.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/StartEndDate.js ***!
  \*******************************************************************************************/
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

  var StartEndDate = function (_super) {
    __extends(StartEndDate, _super);

    function StartEndDate(opts) {
      var _this = _super.call(this, opts) || this;

      _this.fieldValidHandler = _this.onFieldValid.bind(_this);
      _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
      return _this;
    }

    StartEndDate.prototype.install = function () {
      var _this = this;

      var fieldOptions = this.core.getFields();
      this.startDateFieldOptions = fieldOptions[this.opts.startDate.field];
      this.endDateFieldOptions = fieldOptions[this.opts.endDate.field];
      var form = this.core.getFormElement();
      this.core.on('core.field.valid', this.fieldValidHandler).on('core.field.invalid', this.fieldInvalidHandler).addField(this.opts.startDate.field, {
        validators: {
          date: {
            format: this.opts.format,
            max: function max() {
              var endDateField = form.querySelector("[name=\"" + _this.opts.endDate.field + "\"]");
              return endDateField.value;
            },
            message: this.opts.startDate.message
          }
        }
      }).addField(this.opts.endDate.field, {
        validators: {
          date: {
            format: this.opts.format,
            message: this.opts.endDate.message,
            min: function min() {
              var startDateField = form.querySelector("[name=\"" + _this.opts.startDate.field + "\"]");
              return startDateField.value;
            }
          }
        }
      });
    };

    StartEndDate.prototype.uninstall = function () {
      this.core.removeField(this.opts.startDate.field);

      if (this.startDateFieldOptions) {
        this.core.addField(this.opts.startDate.field, this.startDateFieldOptions);
      }

      this.core.removeField(this.opts.endDate.field);

      if (this.endDateFieldOptions) {
        this.core.addField(this.opts.endDate.field, this.endDateFieldOptions);
      }

      this.core.off('core.field.valid', this.fieldValidHandler).off('core.field.invalid', this.fieldInvalidHandler);
    };

    StartEndDate.prototype.onFieldInvalid = function (field) {
      switch (field) {
        case this.opts.startDate.field:
          this.startDateValid = false;
          break;

        case this.opts.endDate.field:
          this.endDateValid = false;
          break;

        default:
          break;
      }
    };

    StartEndDate.prototype.onFieldValid = function (field) {
      switch (field) {
        case this.opts.startDate.field:
          this.startDateValid = true;

          if (this.endDateValid === false) {
            this.core.revalidateField(this.opts.endDate.field);
          }

          break;

        case this.opts.endDate.field:
          this.endDateValid = true;

          if (this.startDateValid === false) {
            this.core.revalidateField(this.opts.startDate.field);
          }

          break;

        default:
          break;
      }
    };

    return StartEndDate;
  }(Plugin_1["default"]);

  exports.default = StartEndDate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
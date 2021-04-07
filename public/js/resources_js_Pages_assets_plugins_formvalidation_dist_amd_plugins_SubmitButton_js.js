(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_SubmitButton_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/SubmitButton.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/SubmitButton.js ***!
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

  var SubmitButton = function (_super) {
    __extends(SubmitButton, _super);

    function SubmitButton(opts) {
      var _this = _super.call(this, opts) || this;

      _this.isFormValid = false;
      _this.opts = Object.assign({}, {
        aspNetButton: false,
        buttons: function buttons(form) {
          return [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])'));
        }
      }, opts);
      _this.submitHandler = _this.handleSubmitEvent.bind(_this);
      _this.buttonClickHandler = _this.handleClickEvent.bind(_this);
      return _this;
    }

    SubmitButton.prototype.install = function () {
      var _this = this;

      if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
        return;
      }

      var form = this.core.getFormElement();
      this.submitButtons = this.opts.buttons(form);
      form.setAttribute('novalidate', 'novalidate');
      form.addEventListener('submit', this.submitHandler);
      this.hiddenClickedEle = document.createElement('input');
      this.hiddenClickedEle.setAttribute('type', 'hidden');
      form.appendChild(this.hiddenClickedEle);
      this.submitButtons.forEach(function (button) {
        button.addEventListener('click', _this.buttonClickHandler);
      });
    };

    SubmitButton.prototype.uninstall = function () {
      var _this = this;

      var form = this.core.getFormElement();

      if (form instanceof HTMLFormElement) {
        form.removeEventListener('submit', this.submitHandler);
      }

      this.submitButtons.forEach(function (button) {
        button.removeEventListener('click', _this.buttonClickHandler);
      });
      this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
    };

    SubmitButton.prototype.handleSubmitEvent = function (e) {
      this.validateForm(e);
    };

    SubmitButton.prototype.handleClickEvent = function (e) {
      var target = e.currentTarget;

      if (target instanceof HTMLElement) {
        if (this.opts.aspNetButton && this.isFormValid === true) {} else {
          var form = this.core.getFormElement();
          form.removeEventListener('submit', this.submitHandler);
          this.clickedButton = e.target;
          var name_1 = this.clickedButton.getAttribute('name');
          var value = this.clickedButton.getAttribute('value');

          if (name_1 && value) {
            this.hiddenClickedEle.setAttribute('name', name_1);
            this.hiddenClickedEle.setAttribute('value', value);
          }

          this.validateForm(e);
        }
      }
    };

    SubmitButton.prototype.validateForm = function (e) {
      var _this = this;

      e.preventDefault();
      this.core.validate().then(function (result) {
        if (result === 'Valid' && _this.opts.aspNetButton && !_this.isFormValid && _this.clickedButton) {
          _this.isFormValid = true;

          _this.clickedButton.removeEventListener('click', _this.buttonClickHandler);

          _this.clickedButton.click();
        }
      });
    };

    return SubmitButton;
  }(Plugin_1["default"]);

  exports.default = SubmitButton;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
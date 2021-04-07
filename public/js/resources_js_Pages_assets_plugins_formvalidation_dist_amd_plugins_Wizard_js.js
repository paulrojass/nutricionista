(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Wizard_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js ***!
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

  var Excluded = function (_super) {
    __extends(Excluded, _super);

    function Excluded(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = Object.assign({}, {
        excluded: Excluded.defaultIgnore
      }, opts);
      _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
      return _this;
    }

    Excluded.defaultIgnore = function (field, element, elements) {
      var isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
      var disabled = element.getAttribute('disabled');
      return disabled === '' || disabled === 'disabled' || element.getAttribute('type') === 'hidden' || !isVisible;
    };

    Excluded.prototype.install = function () {
      this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    };

    Excluded.prototype.uninstall = function () {
      this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    };

    Excluded.prototype.ignoreValidation = function (field, element, elements) {
      return this.opts.excluded.apply(this, [field, element, elements]);
    };

    return Excluded;
  }(Plugin_1["default"]);

  exports.default = Excluded;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Wizard.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Wizard.js ***!
  \*************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ./Excluded */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, classSet_1, Excluded_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Wizard = function (_super) {
    __extends(Wizard, _super);

    function Wizard(opts) {
      var _this = _super.call(this, opts) || this;

      _this.currentStep = 0;
      _this.numSteps = 0;
      _this.opts = Object.assign({}, {
        activeStepClass: 'fv-plugins-wizard--active',
        onStepActive: function onStepActive() {},
        onStepInvalid: function onStepInvalid() {},
        onStepValid: function onStepValid() {},
        onValid: function onValid() {},
        stepClass: 'fv-plugins-wizard--step'
      }, opts);
      _this.prevStepHandler = _this.onClickPrev.bind(_this);
      _this.nextStepHandler = _this.onClickNext.bind(_this);
      return _this;
    }

    Wizard.prototype.install = function () {
      var _a;

      var _this = this;

      this.core.registerPlugin(Wizard.EXCLUDED_PLUGIN, new Excluded_1["default"]());
      var form = this.core.getFormElement();
      this.steps = [].slice.call(form.querySelectorAll(this.opts.stepSelector));
      this.numSteps = this.steps.length;
      this.steps.forEach(function (s) {
        var _a;

        classSet_1["default"](s, (_a = {}, _a[_this.opts.stepClass] = true, _a));
      });
      classSet_1["default"](this.steps[0], (_a = {}, _a[this.opts.activeStepClass] = true, _a));
      this.prevButton = form.querySelector(this.opts.prevButton);
      this.nextButton = form.querySelector(this.opts.nextButton);
      this.prevButton.addEventListener('click', this.prevStepHandler);
      this.nextButton.addEventListener('click', this.nextStepHandler);
    };

    Wizard.prototype.uninstall = function () {
      this.core.deregisterPlugin(Wizard.EXCLUDED_PLUGIN);
      this.prevButton.removeEventListener('click', this.prevStepHandler);
      this.nextButton.removeEventListener('click', this.nextStepHandler);
    };

    Wizard.prototype.getCurrentStep = function () {
      return this.currentStep;
    };

    Wizard.prototype.goToPrevStep = function () {
      var _a, _b;

      if (this.currentStep >= 1) {
        classSet_1["default"](this.steps[this.currentStep], (_a = {}, _a[this.opts.activeStepClass] = false, _a));
        this.currentStep--;
        classSet_1["default"](this.steps[this.currentStep], (_b = {}, _b[this.opts.activeStepClass] = true, _b));
        this.onStepActive();
      }
    };

    Wizard.prototype.goToNextStep = function () {
      var _this = this;

      this.core.validate().then(function (status) {
        var _a, _b;

        if (status === 'Valid') {
          var nextStep = _this.currentStep + 1;

          if (nextStep >= _this.numSteps) {
            _this.currentStep = _this.numSteps - 1;
          } else {
            classSet_1["default"](_this.steps[_this.currentStep], (_a = {}, _a[_this.opts.activeStepClass] = false, _a));
            _this.currentStep = nextStep;
            classSet_1["default"](_this.steps[_this.currentStep], (_b = {}, _b[_this.opts.activeStepClass] = true, _b));
          }

          _this.onStepActive();

          _this.onStepValid();

          if (nextStep === _this.numSteps) {
            _this.onValid();
          }
        } else if (status === 'Invalid') {
          _this.onStepInvalid();
        }
      });
    };

    Wizard.prototype.onClickPrev = function () {
      this.goToPrevStep();
    };

    Wizard.prototype.onClickNext = function () {
      this.goToNextStep();
    };

    Wizard.prototype.onStepActive = function () {
      var e = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit('plugins.wizard.step.active', e);
      this.opts.onStepActive(e);
    };

    Wizard.prototype.onStepValid = function () {
      var e = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit('plugins.wizard.step.valid', e);
      this.opts.onStepValid(e);
    };

    Wizard.prototype.onStepInvalid = function () {
      var e = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit('plugins.wizard.step.invalid', e);
      this.opts.onStepInvalid(e);
    };

    Wizard.prototype.onValid = function () {
      var e = {
        numSteps: this.numSteps
      };
      this.core.emit('plugins.wizard.valid', e);
      this.opts.onValid(e);
    };

    Wizard.EXCLUDED_PLUGIN = '___wizardExcluded';
    return Wizard;
  }(Plugin_1["default"]);

  exports.default = Wizard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function addClass(element, classes) {
    classes.split(' ').forEach(function (clazz) {
      if (element.classList) {
        element.classList.add(clazz);
      } else if ((" " + element.className + " ").indexOf(" " + clazz + " ")) {
        element.className += " " + clazz;
      }
    });
  }

  function removeClass(element, classes) {
    classes.split(' ').forEach(function (clazz) {
      element.classList ? element.classList.remove(clazz) : element.className = element.className.replace(clazz, '');
    });
  }

  function classSet(element, classes) {
    var adding = [];
    var removing = [];
    Object.keys(classes).forEach(function (clazz) {
      if (clazz) {
        classes[clazz] ? adding.push(clazz) : removing.push(clazz);
      }
    });
    removing.forEach(function (clazz) {
      return removeClass(element, clazz);
    });
    adding.forEach(function (clazz) {
      return addClass(element, clazz);
    });
  }

  exports.default = classSet;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
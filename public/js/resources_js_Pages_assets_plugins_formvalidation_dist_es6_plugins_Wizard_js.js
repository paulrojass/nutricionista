(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Wizard_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var t = /*#__PURE__*/function () {
  function t(_t) {
    _classCallCheck(this, t);

    this.opts = _t;
  }

  _createClass(t, [{
    key: "setCore",
    value: function setCore(_t2) {
      this.core = _t2;
      return this;
    }
  }, {
    key: "install",
    value: function install() {}
  }, {
    key: "uninstall",
    value: function uninstall() {}
  }]);

  return t;
}();



/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Excluded.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Excluded.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var e = /*#__PURE__*/function (_t) {
  _inherits(e, _t);

  var _super = _createSuper(e);

  function e(t) {
    var _this;

    _classCallCheck(this, e);

    _this = _super.call(this, t);
    _this.opts = Object.assign({}, {
      excluded: e.defaultIgnore
    }, t);
    _this.ignoreValidationFilter = _this.ignoreValidation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(e, [{
    key: "install",
    value: function install() {
      this.core.registerFilter("element-ignored", this.ignoreValidationFilter);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.core.deregisterFilter("element-ignored", this.ignoreValidationFilter);
    }
  }, {
    key: "ignoreValidation",
    value: function ignoreValidation(t, _e2, i) {
      return this.opts.excluded.apply(this, [t, _e2, i]);
    }
  }], [{
    key: "defaultIgnore",
    value: function defaultIgnore(t, _e, i) {
      var r = !!(_e.offsetWidth || _e.offsetHeight || _e.getClientRects().length);

      var n = _e.getAttribute("disabled");

      return n === "" || n === "disabled" || _e.getAttribute("type") === "hidden" || !r;
    }
  }]);

  return e;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Wizard.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Wizard.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js");
/* harmony import */ var _utils_classSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/classSet.js");
/* harmony import */ var _Excluded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Excluded */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Excluded.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var i = /*#__PURE__*/function (_t) {
  _inherits(i, _t);

  var _super = _createSuper(i);

  function i(t) {
    var _this;

    _classCallCheck(this, i);

    _this = _super.call(this, t);
    _this.currentStep = 0;
    _this.numSteps = 0;
    _this.opts = Object.assign({}, {
      activeStepClass: "fv-plugins-wizard--active",
      onStepActive: function onStepActive() {},
      onStepInvalid: function onStepInvalid() {},
      onStepValid: function onStepValid() {},
      onValid: function onValid() {},
      stepClass: "fv-plugins-wizard--step"
    }, t);
    _this.prevStepHandler = _this.onClickPrev.bind(_assertThisInitialized(_this));
    _this.nextStepHandler = _this.onClickNext.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(i, [{
    key: "install",
    value: function install() {
      var _this2 = this;

      this.core.registerPlugin(i.EXCLUDED_PLUGIN, new _Excluded__WEBPACK_IMPORTED_MODULE_2__.default());
      var t = this.core.getFormElement();
      this.steps = [].slice.call(t.querySelectorAll(this.opts.stepSelector));
      this.numSteps = this.steps.length;
      this.steps.forEach(function (t) {
        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(t, _defineProperty({}, _this2.opts.stepClass, true));
      });
      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.steps[0], _defineProperty({}, this.opts.activeStepClass, true));
      this.prevButton = t.querySelector(this.opts.prevButton);
      this.nextButton = t.querySelector(this.opts.nextButton);
      this.prevButton.addEventListener("click", this.prevStepHandler);
      this.nextButton.addEventListener("click", this.nextStepHandler);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.core.deregisterPlugin(i.EXCLUDED_PLUGIN);
      this.prevButton.removeEventListener("click", this.prevStepHandler);
      this.nextButton.removeEventListener("click", this.nextStepHandler);
    }
  }, {
    key: "getCurrentStep",
    value: function getCurrentStep() {
      return this.currentStep;
    }
  }, {
    key: "goToPrevStep",
    value: function goToPrevStep() {
      if (this.currentStep >= 1) {
        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.steps[this.currentStep], _defineProperty({}, this.opts.activeStepClass, false));
        this.currentStep--;
        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.steps[this.currentStep], _defineProperty({}, this.opts.activeStepClass, true));
        this.onStepActive();
      }
    }
  }, {
    key: "goToNextStep",
    value: function goToNextStep() {
      var _this3 = this;

      this.core.validate().then(function (t) {
        if (t === "Valid") {
          var _t2 = _this3.currentStep + 1;

          if (_t2 >= _this3.numSteps) {
            _this3.currentStep = _this3.numSteps - 1;
          } else {
            (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(_this3.steps[_this3.currentStep], _defineProperty({}, _this3.opts.activeStepClass, false));
            _this3.currentStep = _t2;
            (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(_this3.steps[_this3.currentStep], _defineProperty({}, _this3.opts.activeStepClass, true));
          }

          _this3.onStepActive();

          _this3.onStepValid();

          if (_t2 === _this3.numSteps) {
            _this3.onValid();
          }
        } else if (t === "Invalid") {
          _this3.onStepInvalid();
        }
      });
    }
  }, {
    key: "onClickPrev",
    value: function onClickPrev() {
      this.goToPrevStep();
    }
  }, {
    key: "onClickNext",
    value: function onClickNext() {
      this.goToNextStep();
    }
  }, {
    key: "onStepActive",
    value: function onStepActive() {
      var t = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit("plugins.wizard.step.active", t);
      this.opts.onStepActive(t);
    }
  }, {
    key: "onStepValid",
    value: function onStepValid() {
      var t = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit("plugins.wizard.step.valid", t);
      this.opts.onStepValid(t);
    }
  }, {
    key: "onStepInvalid",
    value: function onStepInvalid() {
      var t = {
        numSteps: this.numSteps,
        step: this.currentStep
      };
      this.core.emit("plugins.wizard.step.invalid", t);
      this.opts.onStepInvalid(t);
    }
  }, {
    key: "onValid",
    value: function onValid() {
      var t = {
        numSteps: this.numSteps
      };
      this.core.emit("plugins.wizard.valid", t);
      this.opts.onValid(t);
    }
  }]);

  return i;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);


i.EXCLUDED_PLUGIN = "___wizardExcluded";

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/classSet.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/classSet.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
function s(s, a) {
  a.split(" ").forEach(function (a) {
    if (s.classList) {
      s.classList.add(a);
    } else if (" ".concat(s.className, " ").indexOf(" ".concat(a, " "))) {
      s.className += " ".concat(a);
    }
  });
}

function a(s, a) {
  a.split(" ").forEach(function (a) {
    s.classList ? s.classList.remove(a) : s.className = s.className.replace(a, "");
  });
}

function c(c, e) {
  var t = [];
  var f = [];
  Object.keys(e).forEach(function (s) {
    if (s) {
      e[s] ? t.push(s) : f.push(s);
    }
  });
  f.forEach(function (s) {
    return a(c, s);
  });
  t.forEach(function (a) {
    return s(c, a);
  });
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Sequence_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Sequence.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Sequence.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
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



var i = /*#__PURE__*/function (_e) {
  _inherits(i, _e);

  var _super = _createSuper(i);

  function i(e) {
    var _this;

    _classCallCheck(this, i);

    _this = _super.call(this, e);
    _this.invalidFields = new Map();
    _this.opts = Object.assign({}, {
      enabled: true
    }, e);
    _this.validatorHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
    _this.shouldValidateFilter = _this.shouldValidate.bind(_assertThisInitialized(_this));
    _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
    _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
    _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(i, [{
    key: "install",
    value: function install() {
      this.core.on("core.validator.validated", this.validatorHandler).on("core.field.added", this.fieldAddedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("core.element.validating", this.elementValidatingHandler).registerFilter("field-should-validate", this.shouldValidateFilter);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.invalidFields.clear();
      this.core.off("core.validator.validated", this.validatorHandler).off("core.field.added", this.fieldAddedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("core.element.validating", this.elementValidatingHandler).deregisterFilter("field-should-validate", this.shouldValidateFilter);
    }
  }, {
    key: "shouldValidate",
    value: function shouldValidate(e, _i, t, l) {
      var d = (this.opts.enabled === true || this.opts.enabled[e] === true) && this.invalidFields.has(_i) && !!this.invalidFields.get(_i).length && this.invalidFields.get(_i).indexOf(l) === -1;
      return !d;
    }
  }, {
    key: "onValidatorValidated",
    value: function onValidatorValidated(e) {
      var _i2 = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];

      var t = _i2.indexOf(e.validator);

      if (e.result.valid && t >= 0) {
        _i2.splice(t, 1);
      } else if (!e.result.valid && t === -1) {
        _i2.push(e.validator);
      }

      this.invalidFields.set(e.element, _i2);
    }
  }, {
    key: "onFieldAdded",
    value: function onFieldAdded(e) {
      if (e.elements) {
        this.clearInvalidFields(e.elements);
      }
    }
  }, {
    key: "onElementNotValidated",
    value: function onElementNotValidated(e) {
      this.clearInvalidFields(e.elements);
    }
  }, {
    key: "onElementValidating",
    value: function onElementValidating(e) {
      this.clearInvalidFields(e.elements);
    }
  }, {
    key: "clearInvalidFields",
    value: function clearInvalidFields(e) {
      var _this2 = this;

      e.forEach(function (e) {
        return _this2.invalidFields["delete"](e);
      });
    }
  }]);

  return i;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ })

}]);
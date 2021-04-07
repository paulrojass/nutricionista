(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Icon_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Icon.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Icon.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js");
/* harmony import */ var _utils_classSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/classSet.js");
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




var i = /*#__PURE__*/function (_e) {
  _inherits(i, _e);

  var _super = _createSuper(i);

  function i(e) {
    var _this;

    _classCallCheck(this, i);

    _this = _super.call(this, e);
    _this.icons = new Map();
    _this.opts = Object.assign({}, {
      invalid: "fv-plugins-icon--invalid",
      onPlaced: function onPlaced() {},
      onSet: function onSet() {},
      valid: "fv-plugins-icon--valid",
      validating: "fv-plugins-icon--validating"
    }, e);
    _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
    _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
    _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
    _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
    _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(i, [{
    key: "install",
    value: function install() {
      this.core.on("core.element.validating", this.elementValidatingHandler).on("core.element.validated", this.elementValidatedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("core.element.ignored", this.elementIgnoredHandler).on("core.field.added", this.fieldAddedHandler);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.icons.forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      this.icons.clear();
      this.core.off("core.element.validating", this.elementValidatingHandler).off("core.element.validated", this.elementValidatedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("core.element.ignored", this.elementIgnoredHandler).off("core.field.added", this.fieldAddedHandler);
    }
  }, {
    key: "onFieldAdded",
    value: function onFieldAdded(e) {
      var _this2 = this;

      var t = e.elements;

      if (t) {
        t.forEach(function (e) {
          var t = _this2.icons.get(e);

          if (t) {
            t.parentNode.removeChild(t);

            _this2.icons["delete"](e);
          }
        });
        this.prepareFieldIcon(e.field, t);
      }
    }
  }, {
    key: "prepareFieldIcon",
    value: function prepareFieldIcon(e, t) {
      var _this3 = this;

      if (t.length) {
        var _i8 = t[0].getAttribute("type");

        if ("radio" === _i8 || "checkbox" === _i8) {
          this.prepareElementIcon(e, t[0]);
        } else {
          t.forEach(function (t) {
            return _this3.prepareElementIcon(e, t);
          });
        }
      }
    }
  }, {
    key: "prepareElementIcon",
    value: function prepareElementIcon(e, _i2) {
      var n = document.createElement("i");
      n.setAttribute("data-field", e);

      _i2.parentNode.insertBefore(n, _i2.nextSibling);

      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(n, {
        "fv-plugins-icon": true
      });
      var l = {
        classes: {
          invalid: this.opts.invalid,
          valid: this.opts.valid,
          validating: this.opts.validating
        },
        element: _i2,
        field: e,
        iconElement: n
      };
      this.core.emit("plugins.icon.placed", l);
      this.opts.onPlaced(l);
      this.icons.set(_i2, n);
    }
  }, {
    key: "onElementValidating",
    value: function onElementValidating(e) {
      var _this$setClasses;

      var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses = {}, _defineProperty(_this$setClasses, this.opts.invalid, false), _defineProperty(_this$setClasses, this.opts.valid, false), _defineProperty(_this$setClasses, this.opts.validating, true), _this$setClasses));
      var _i3 = {
        element: e.element,
        field: e.field,
        iconElement: t,
        status: "Validating"
      };
      this.core.emit("plugins.icon.set", _i3);
      this.opts.onSet(_i3);
    }
  }, {
    key: "onElementValidated",
    value: function onElementValidated(e) {
      var _this$setClasses2;

      var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses2 = {}, _defineProperty(_this$setClasses2, this.opts.invalid, !e.valid), _defineProperty(_this$setClasses2, this.opts.valid, e.valid), _defineProperty(_this$setClasses2, this.opts.validating, false), _this$setClasses2));
      var _i4 = {
        element: e.element,
        field: e.field,
        iconElement: t,
        status: e.valid ? "Valid" : "Invalid"
      };
      this.core.emit("plugins.icon.set", _i4);
      this.opts.onSet(_i4);
    }
  }, {
    key: "onElementNotValidated",
    value: function onElementNotValidated(e) {
      var _this$setClasses3;

      var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses3 = {}, _defineProperty(_this$setClasses3, this.opts.invalid, false), _defineProperty(_this$setClasses3, this.opts.valid, false), _defineProperty(_this$setClasses3, this.opts.validating, false), _this$setClasses3));
      var _i5 = {
        element: e.element,
        field: e.field,
        iconElement: t,
        status: "NotValidated"
      };
      this.core.emit("plugins.icon.set", _i5);
      this.opts.onSet(_i5);
    }
  }, {
    key: "onElementIgnored",
    value: function onElementIgnored(e) {
      var _this$setClasses4;

      var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses4 = {}, _defineProperty(_this$setClasses4, this.opts.invalid, false), _defineProperty(_this$setClasses4, this.opts.valid, false), _defineProperty(_this$setClasses4, this.opts.validating, false), _this$setClasses4));
      var _i6 = {
        element: e.element,
        field: e.field,
        iconElement: t,
        status: "Ignored"
      };
      this.core.emit("plugins.icon.set", _i6);
      this.opts.onSet(_i6);
    }
  }, {
    key: "setClasses",
    value: function setClasses(e, _i7, n, l) {
      var s = _i7.getAttribute("type");

      var d = "radio" === s || "checkbox" === s ? n[0] : _i7;

      if (this.icons.has(d)) {
        var _e2 = this.icons.get(d);

        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(_e2, l);
        return _e2;
      } else {
        return null;
      }
    }
  }]);

  return i;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);



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
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_MandatoryIcon_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/MandatoryIcon.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/MandatoryIcon.js ***!
  \********************************************************************************************/
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    _this.removedIcons = {
      Invalid: "",
      NotValidated: "",
      Valid: "",
      Validating: ""
    };
    _this.icons = new Map();
    _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
    _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
    _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
    _this.iconPlacedHandler = _this.onIconPlaced.bind(_assertThisInitialized(_this));
    _this.iconSetHandler = _this.onIconSet.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(i, [{
    key: "install",
    value: function install() {
      this.core.on("core.element.validating", this.elementValidatingHandler).on("core.element.validated", this.elementValidatedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("plugins.icon.placed", this.iconPlacedHandler).on("plugins.icon.set", this.iconSetHandler);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.icons.clear();
      this.core.off("core.element.validating", this.elementValidatingHandler).off("core.element.validated", this.elementValidatedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("plugins.icon.placed", this.iconPlacedHandler).off("plugins.icon.set", this.iconSetHandler);
    }
  }, {
    key: "onIconPlaced",
    value: function onIconPlaced(e) {
      var _this2 = this;

      var _i = this.core.getFields()[e.field].validators;
      var s = this.core.getElements(e.field);

      if (_i && _i["notEmpty"] && _i["notEmpty"].enabled !== false && s.length) {
        this.icons.set(e.element, e.iconElement);

        var _i7 = s[0].getAttribute("type");

        var _n = !_i7 ? "" : _i7.toLowerCase();

        var _l = "checkbox" === _n || "radio" === _n ? [s[0]] : s;

        var _iterator = _createForOfIteratorHelper(_l),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i8 = _step.value;

            if (this.core.getElementValue(e.field, _i8) === "") {
              (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(e.iconElement, _defineProperty({}, this.opts.icon, true));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.iconClasses = e.classes;
      var n = this.opts.icon.split(" ");
      var l = {
        Invalid: this.iconClasses.invalid ? this.iconClasses.invalid.split(" ") : [],
        Valid: this.iconClasses.valid ? this.iconClasses.valid.split(" ") : [],
        Validating: this.iconClasses.validating ? this.iconClasses.validating.split(" ") : []
      };
      Object.keys(l).forEach(function (e) {
        var t = [];

        var _iterator2 = _createForOfIteratorHelper(n),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i9 = _step2.value;

            if (l[e].indexOf(_i9) === -1) {
              t.push(_i9);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this2.removedIcons[e] = t.join(" ");
      });
    }
  }, {
    key: "onElementValidating",
    value: function onElementValidating(e) {
      this.updateIconClasses(e.element, "Validating");
    }
  }, {
    key: "onElementValidated",
    value: function onElementValidated(e) {
      this.updateIconClasses(e.element, e.valid ? "Valid" : "Invalid");
    }
  }, {
    key: "onElementNotValidated",
    value: function onElementNotValidated(e) {
      this.updateIconClasses(e.element, "NotValidated");
    }
  }, {
    key: "updateIconClasses",
    value: function updateIconClasses(e, _i5) {
      var s = this.icons.get(e);

      if (s && this.iconClasses && (this.iconClasses.valid || this.iconClasses.invalid || this.iconClasses.validating)) {
        var _t2;

        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(s, (_t2 = {}, _defineProperty(_t2, this.removedIcons[_i5], false), _defineProperty(_t2, this.opts.icon, false), _t2));
      }
    }
  }, {
    key: "onIconSet",
    value: function onIconSet(e) {
      var _i6 = this.icons.get(e.element);

      if (_i6 && e.status === "NotValidated" && this.core.getElementValue(e.field, e.element) === "") {
        (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(_i6, _defineProperty({}, this.opts.icon, true));
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
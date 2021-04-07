(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Tooltip_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Tooltip.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Tooltip.js ***!
  \**************************************************************************************/
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




var i = /*#__PURE__*/function (_t) {
  _inherits(i, _t);

  var _super = _createSuper(i);

  function i(t) {
    var _this;

    _classCallCheck(this, i);

    _this = _super.call(this, t);
    _this.messages = new Map();
    _this.opts = Object.assign({}, {
      placement: "top",
      trigger: "click"
    }, t);
    _this.iconPlacedHandler = _this.onIconPlaced.bind(_assertThisInitialized(_this));
    _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
    _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
    _this.documentClickHandler = _this.onDocumentClicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(i, [{
    key: "install",
    value: function install() {
      this.tip = document.createElement("div");
      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.tip, _defineProperty({
        "fv-plugins-tooltip": true
      }, "fv-plugins-tooltip--".concat(this.opts.placement), true));
      document.body.appendChild(this.tip);
      this.core.on("plugins.icon.placed", this.iconPlacedHandler).on("core.validator.validated", this.validatorValidatedHandler).on("core.element.validated", this.elementValidatedHandler);

      if ("click" === this.opts.trigger) {
        document.addEventListener("click", this.documentClickHandler);
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.messages.clear();
      document.body.removeChild(this.tip);
      this.core.off("plugins.icon.placed", this.iconPlacedHandler).off("core.validator.validated", this.validatorValidatedHandler).off("core.element.validated", this.elementValidatedHandler);

      if ("click" === this.opts.trigger) {
        document.removeEventListener("click", this.documentClickHandler);
      }
    }
  }, {
    key: "onIconPlaced",
    value: function onIconPlaced(t) {
      var _this2 = this;

      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(t.iconElement, {
        "fv-plugins-tooltip-icon": true
      });

      switch (this.opts.trigger) {
        case "hover":
          t.iconElement.addEventListener("mouseenter", function (e) {
            return _this2.show(t.element, e);
          });
          t.iconElement.addEventListener("mouseleave", function (t) {
            return _this2.hide();
          });
          break;

        case "click":
        default:
          t.iconElement.addEventListener("click", function (e) {
            return _this2.show(t.element, e);
          });
          break;
      }
    }
  }, {
    key: "onValidatorValidated",
    value: function onValidatorValidated(t) {
      if (!t.result.valid) {
        var _e2 = t.elements;

        var _i4 = t.element.getAttribute("type");

        var s = "radio" === _i4 || "checkbox" === _i4 ? _e2[0] : t.element;
        var l = typeof t.result.message === "string" ? t.result.message : t.result.message[this.core.getLocale()];
        this.messages.set(s, l);
      }
    }
  }, {
    key: "onElementValidated",
    value: function onElementValidated(t) {
      if (t.valid) {
        var _e3 = t.elements;

        var _i5 = t.element.getAttribute("type");

        var s = "radio" === _i5 || "checkbox" === _i5 ? _e3[0] : t.element;
        this.messages["delete"](s);
      }
    }
  }, {
    key: "onDocumentClicked",
    value: function onDocumentClicked(t) {
      this.hide();
    }
  }, {
    key: "show",
    value: function show(t, _i3) {
      _i3.preventDefault();

      _i3.stopPropagation();

      if (!this.messages.has(t)) {
        return;
      }

      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.tip, {
        "fv-plugins-tooltip--hide": false
      });
      this.tip.innerHTML = "<span class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(t), "</span>");
      var s = _i3.target;
      var l = s.getBoundingClientRect();
      var o = 0;
      var n = 0;

      switch (this.opts.placement) {
        case "top":
        default:
          o = l.top - l.height;
          n = l.left + l.width / 2 - this.tip.clientWidth / 2;
          break;

        case "top-left":
          o = l.top - l.height;
          n = l.left;
          break;

        case "top-right":
          o = l.top - l.height;
          n = l.left + l.width - this.tip.clientWidth;
          break;

        case "bottom":
          o = l.top + l.height;
          n = l.left + l.width / 2 - this.tip.clientWidth / 2;
          break;

        case "bottom-left":
          o = l.top + l.height;
          n = l.left;
          break;

        case "bottom-right":
          o = l.top + l.height;
          n = l.left + l.width - this.tip.clientWidth;
          break;

        case "left":
          o = l.top + l.height / 2 - this.tip.clientHeight / 2;
          n = l.left - this.tip.clientWidth;
          break;

        case "right":
          o = l.top + l.height / 2 - this.tip.clientHeight / 2;
          n = l.left + l.width;
          break;
      }

      var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var d = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      o = o + a;
      n = n + d;
      this.tip.setAttribute("style", "top: ".concat(o, "px; left: ").concat(n, "px"));
    }
  }, {
    key: "hide",
    value: function hide() {
      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(this.tip, {
        "fv-plugins-tooltip--hide": true
      });
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
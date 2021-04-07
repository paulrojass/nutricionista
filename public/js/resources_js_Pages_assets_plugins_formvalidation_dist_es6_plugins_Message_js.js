(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Message_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Message.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Message.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
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




var s = /*#__PURE__*/function (_e) {
  _inherits(s, _e);

  var _super = _createSuper(s);

  function s(e) {
    var _this;

    _classCallCheck(this, s);

    _this = _super.call(this, e);
    _this.messages = new Map();
    _this.defaultContainer = document.createElement("div");
    _this.opts = Object.assign({}, {
      container: function container(e, t) {
        return _this.defaultContainer;
      }
    }, e);
    _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
    _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
    _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
    _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
    _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(s, [{
    key: "install",
    value: function install() {
      this.core.getFormElement().appendChild(this.defaultContainer);
      this.core.on("core.element.ignored", this.elementIgnoredHandler).on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler).on("core.validator.validated", this.validatorValidatedHandler).on("core.validator.notvalidated", this.validatorNotValidatedHandler);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.core.getFormElement().removeChild(this.defaultContainer);
      this.messages.forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      this.messages.clear();
      this.core.off("core.element.ignored", this.elementIgnoredHandler).off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler).off("core.validator.validated", this.validatorValidatedHandler).off("core.validator.notvalidated", this.validatorNotValidatedHandler);
    }
  }, {
    key: "onFieldAdded",
    value: function onFieldAdded(e) {
      var _this2 = this;

      var t = e.elements;

      if (t) {
        t.forEach(function (e) {
          var t = _this2.messages.get(e);

          if (t) {
            t.parentNode.removeChild(t);

            _this2.messages["delete"](e);
          }
        });
        this.prepareFieldContainer(e.field, t);
      }
    }
  }, {
    key: "onFieldRemoved",
    value: function onFieldRemoved(e) {
      var _this3 = this;

      if (!e.elements.length || !e.field) {
        return;
      }

      var t = e.elements[0].getAttribute("type");

      var _s2 = "radio" === t || "checkbox" === t ? [e.elements[0]] : e.elements;

      _s2.forEach(function (e) {
        if (_this3.messages.has(e)) {
          var _t = _this3.messages.get(e);

          _t.parentNode.removeChild(_t);

          _this3.messages["delete"](e);
        }
      });
    }
  }, {
    key: "prepareFieldContainer",
    value: function prepareFieldContainer(e, t) {
      var _this4 = this;

      if (t.length) {
        var _s12 = t[0].getAttribute("type");

        if ("radio" === _s12 || "checkbox" === _s12) {
          this.prepareElementContainer(e, t[0], t);
        } else {
          t.forEach(function (_s4) {
            return _this4.prepareElementContainer(e, _s4, t);
          });
        }
      }
    }
  }, {
    key: "prepareElementContainer",
    value: function prepareElementContainer(e, _s5, i) {
      var a;

      switch (true) {
        case "string" === typeof this.opts.container:
          var _t2 = this.opts.container;
          _t2 = "#" === _t2.charAt(0) ? "[id=\"".concat(_t2.substring(1), "\"]") : _t2;
          a = this.core.getFormElement().querySelector(_t2);
          break;

        default:
          a = this.opts.container(e, _s5);
          break;
      }

      var l = document.createElement("div");
      a.appendChild(l);
      (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(l, {
        "fv-plugins-message-container": true
      });
      this.core.emit("plugins.message.placed", {
        element: _s5,
        elements: i,
        field: e,
        messageElement: l
      });
      this.messages.set(_s5, l);
    }
  }, {
    key: "getMessage",
    value: function getMessage(e) {
      return typeof e.message === "string" ? e.message : e.message[this.core.getLocale()];
    }
  }, {
    key: "onValidatorValidated",
    value: function onValidatorValidated(e) {
      var _s6 = e.elements;
      var i = e.element.getAttribute("type");
      var a = "radio" === i || "checkbox" === i ? _s6[0] : e.element;

      if (this.messages.has(a)) {
        var _s13 = this.messages.get(a);

        var _i = _s13.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));

        if (!_i && !e.result.valid) {
          var _i2 = document.createElement("div");

          _i2.innerHTML = this.getMessage(e.result);

          _i2.setAttribute("data-field", e.field);

          _i2.setAttribute("data-validator", e.validator);

          if (this.opts.clazz) {
            (0,_utils_classSet__WEBPACK_IMPORTED_MODULE_1__.default)(_i2, _defineProperty({}, this.opts.clazz, true));
          }

          _s13.appendChild(_i2);

          this.core.emit("plugins.message.displayed", {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: _i2,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (_i && !e.result.valid) {
          _i.innerHTML = this.getMessage(e.result);
          this.core.emit("plugins.message.displayed", {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: _i,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (_i && e.result.valid) {
          _s13.removeChild(_i);
        }
      }
    }
  }, {
    key: "onValidatorNotValidated",
    value: function onValidatorNotValidated(e) {
      var t = e.elements;

      var _s8 = e.element.getAttribute("type");

      var i = "radio" === _s8 || "checkbox" === _s8 ? t[0] : e.element;

      if (this.messages.has(i)) {
        var _t4 = this.messages.get(i);

        var _s14 = _t4.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));

        if (_s14) {
          _t4.removeChild(_s14);
        }
      }
    }
  }, {
    key: "onElementIgnored",
    value: function onElementIgnored(e) {
      var t = e.elements;

      var _s10 = e.element.getAttribute("type");

      var i = "radio" === _s10 || "checkbox" === _s10 ? t[0] : e.element;

      if (this.messages.has(i)) {
        var _t5 = this.messages.get(i);

        var _s15 = [].slice.call(_t5.querySelectorAll("[data-field=\"".concat(e.field, "\"]")));

        _s15.forEach(function (e) {
          _t5.removeChild(e);
        });
      }
    }
  }], [{
    key: "getClosestContainer",
    value: function getClosestContainer(e, t, _s) {
      var i = e;

      while (i) {
        if (i === t) {
          break;
        }

        i = i.parentElement;

        if (_s.test(i.className)) {
          break;
        }
      }

      return i;
    }
  }]);

  return s;
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
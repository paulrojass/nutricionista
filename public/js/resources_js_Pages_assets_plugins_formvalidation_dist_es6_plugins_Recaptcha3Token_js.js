(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Recaptcha3Token_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Recaptcha3Token.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Recaptcha3Token.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
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



var t = /*#__PURE__*/function (_e) {
  _inherits(t, _e);

  var _super = _createSuper(t);

  function t(e) {
    var _this;

    _classCallCheck(this, t);

    _this = _super.call(this, e);
    _this.opts = Object.assign({}, {
      action: "submit",
      hiddenTokenName: "___hidden-token___"
    }, e);
    _this.onValidHandler = _this.onFormValid.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(t, [{
    key: "install",
    value: function install() {
      this.core.on("core.form.valid", this.onValidHandler);
      this.hiddenTokenEle = document.createElement("input");
      this.hiddenTokenEle.setAttribute("type", "hidden");
      this.core.getFormElement().appendChild(this.hiddenTokenEle);
      var e = typeof window[t.LOADED_CALLBACK] === "undefined" ? function () {} : window[t.LOADED_CALLBACK];

      window[t.LOADED_CALLBACK] = function () {
        e();
      };

      var o = this.getScript();

      if (!document.body.querySelector("script[src=\"".concat(o, "\"]"))) {
        var _e2 = document.createElement("script");

        _e2.type = "text/javascript";
        _e2.async = true;
        _e2.defer = true;
        _e2.src = o;
        document.body.appendChild(_e2);
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.core.off("core.form.valid", this.onValidHandler);
      var e = this.getScript();

      var _t = [].slice.call(document.body.querySelectorAll("script[src=\"".concat(e, "\"]")));

      _t.forEach(function (e) {
        return e.parentNode.removeChild(e);
      });

      this.core.getFormElement().removeChild(this.hiddenTokenEle);
    }
  }, {
    key: "onFormValid",
    value: function onFormValid() {
      var _this2 = this;

      window["grecaptcha"].execute(this.opts.siteKey, {
        action: this.opts.action
      }).then(function (e) {
        _this2.hiddenTokenEle.setAttribute("name", _this2.opts.hiddenTokenName);

        _this2.hiddenTokenEle.value = e;

        var _t2 = _this2.core.getFormElement();

        if (_t2 instanceof HTMLFormElement) {
          _t2.submit();
        }
      });
    }
  }, {
    key: "getScript",
    value: function getScript() {
      var e = this.opts.language ? "&hl=".concat(this.opts.language) : "";
      return "https://www.google.com/recaptcha/api.js?" + "onload=".concat(t.LOADED_CALLBACK, "&render=").concat(this.opts.siteKey).concat(e);
    }
  }]);

  return t;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);


t.LOADED_CALLBACK = "___reCaptcha3Loaded___";

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Recaptcha3_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Recaptcha3.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Recaptcha3.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/fetch.js");
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
    _this.opts = Object.assign({}, {
      minimumScore: 0
    }, e);
    _this.iconPlacedHandler = _this.onIconPlaced.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(s, [{
    key: "install",
    value: function install() {
      var _this2 = this;

      this.core.on("plugins.icon.placed", this.iconPlacedHandler);
      var e = typeof window[s.LOADED_CALLBACK] === "undefined" ? function () {} : window[s.LOADED_CALLBACK];

      window[s.LOADED_CALLBACK] = function () {
        e();
        var i = document.createElement("input");
        i.setAttribute("type", "hidden");
        i.setAttribute("name", s.CAPTCHA_FIELD);
        document.getElementById(_this2.opts.element).appendChild(i);

        _this2.core.addField(s.CAPTCHA_FIELD, {
          validators: {
            promise: {
              message: _this2.opts.message,
              promise: function promise(e) {
                return new Promise(function (e, i) {
                  window["grecaptcha"].execute(_this2.opts.siteKey, {
                    action: _this2.opts.action
                  }).then(function (o) {
                    (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.default)(_this2.opts.backendVerificationUrl, {
                      method: "POST",
                      params: _defineProperty({}, s.CAPTCHA_FIELD, o)
                    }).then(function (t) {
                      var _s = "".concat(t.success) === "true" && t.score >= _this2.opts.minimumScore;

                      e({
                        message: t.message || _this2.opts.message,
                        meta: t,
                        valid: _s
                      });
                    })["catch"](function (e) {
                      i({
                        valid: false
                      });
                    });
                  });
                });
              }
            }
          }
        });
      };

      var i = this.getScript();

      if (!document.body.querySelector("script[src=\"".concat(i, "\"]"))) {
        var _e2 = document.createElement("script");

        _e2.type = "text/javascript";
        _e2.async = true;
        _e2.defer = true;
        _e2.src = i;
        document.body.appendChild(_e2);
      }
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.core.off("plugins.icon.placed", this.iconPlacedHandler);
      var e = this.getScript();
      var t = [].slice.call(document.body.querySelectorAll("script[src=\"".concat(e, "\"]")));
      t.forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      this.core.removeField(s.CAPTCHA_FIELD);
    }
  }, {
    key: "getScript",
    value: function getScript() {
      var e = this.opts.language ? "&hl=".concat(this.opts.language) : "";
      return "https://www.google.com/recaptcha/api.js?" + "onload=".concat(s.LOADED_CALLBACK, "&render=").concat(this.opts.siteKey).concat(e);
    }
  }, {
    key: "onIconPlaced",
    value: function onIconPlaced(e) {
      if (e.field === s.CAPTCHA_FIELD) {
        e.iconElement.style.display = "none";
      }
    }
  }]);

  return s;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);


s.CAPTCHA_FIELD = "___g-recaptcha-token___";
s.LOADED_CALLBACK = "___reCaptcha3Loaded___";

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/fetch.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/fetch.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e(e, t) {
  var n = function n(e) {
    return Object.keys(e).map(function (t) {
      return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]));
    }).join("&");
  };

  return new Promise(function (o, s) {
    var d = Object.assign({}, {
      crossDomain: false,
      headers: {},
      method: "GET",
      params: {}
    }, t);
    var a = Object.keys(d.params).map(function (e) {
      return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(d.params[e]));
    }).join("&");
    var r = e.indexOf("?");
    var c = "GET" === d.method ? "".concat(e).concat(r ? "?" : "&").concat(a) : e;

    if (d.crossDomain) {
      var _e = document.createElement("script");

      var _t = "___fetch".concat(Date.now(), "___");

      window[_t] = function (e) {
        delete window[_t];
        o(e);
      };

      _e.src = "".concat(c).concat(r ? "&" : "?", "callback=").concat(_t);
      _e.async = true;

      _e.addEventListener("load", function () {
        _e.parentNode.removeChild(_e);
      });

      _e.addEventListener("error", function () {
        return s;
      });

      document.head.appendChild(_e);
    } else {
      var _e2 = new XMLHttpRequest();

      _e2.open(d.method, c);

      _e2.setRequestHeader("X-Requested-With", "XMLHttpRequest");

      if ("POST" === d.method) {
        _e2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      }

      Object.keys(d.headers).forEach(function (t) {
        return _e2.setRequestHeader(t, d.headers[t]);
      });

      _e2.addEventListener("load", function () {
        o(JSON.parse(this.responseText));
      });

      _e2.addEventListener("error", function () {
        return s;
      });

      _e2.send(n(d.params));
    }
  });
}

/***/ })

}]);
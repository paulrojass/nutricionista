(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_plugins_Declarative_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Declarative.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/plugins/Declarative.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/core/Plugin.js");
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



var t = /*#__PURE__*/function (_e) {
  _inherits(t, _e);

  var _super = _createSuper(t);

  function t(e) {
    var _this;

    _classCallCheck(this, t);

    _this = _super.call(this, e);
    _this.addedFields = new Map();
    _this.opts = Object.assign({}, {
      html5Input: false,
      pluginPrefix: "data-fvp-",
      prefix: "data-fv-"
    }, e);
    _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
    _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(t, [{
    key: "install",
    value: function install() {
      var _this2 = this;

      this.parsePlugins();
      var e = this.parseOptions();
      Object.keys(e).forEach(function (_t) {
        if (!_this2.addedFields.has(_t)) {
          _this2.addedFields.set(_t, true);
        }

        _this2.core.addField(_t, e[_t]);
      });
      this.core.on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler);
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this.addedFields.clear();
      this.core.off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler);
    }
  }, {
    key: "onFieldAdded",
    value: function onFieldAdded(e) {
      var _this3 = this;

      var _t2 = e.elements;

      if (!_t2 || _t2.length === 0 || this.addedFields.has(e.field)) {
        return;
      }

      this.addedFields.set(e.field, true);

      _t2.forEach(function (_t3) {
        var s = _this3.parseElement(_t3);

        if (!_this3.isEmptyOption(s)) {
          var _t12 = {
            selector: e.options.selector,
            validators: Object.assign({}, e.options.validators || {}, s.validators)
          };

          _this3.core.setFieldOptions(e.field, _t12);
        }
      });
    }
  }, {
    key: "onFieldRemoved",
    value: function onFieldRemoved(e) {
      if (e.field && this.addedFields.has(e.field)) {
        this.addedFields["delete"](e.field);
      }
    }
  }, {
    key: "parseOptions",
    value: function parseOptions() {
      var _this4 = this;

      var e = this.opts.prefix;
      var _t5 = {};
      var s = this.core.getFields();
      var a = this.core.getFormElement();
      var i = [].slice.call(a.querySelectorAll("[name], [".concat(e, "field]")));
      i.forEach(function (s) {
        var a = _this4.parseElement(s);

        if (!_this4.isEmptyOption(a)) {
          var _i = s.getAttribute("name") || s.getAttribute("".concat(e, "field"));

          _t5[_i] = Object.assign({}, _t5[_i], a);
        }
      });
      Object.keys(_t5).forEach(function (e) {
        Object.keys(_t5[e].validators).forEach(function (a) {
          _t5[e].validators[a].enabled = _t5[e].validators[a].enabled || false;

          if (s[e] && s[e].validators && s[e].validators[a]) {
            Object.assign(_t5[e].validators[a], s[e].validators[a]);
          }
        });
      });
      return Object.assign({}, s, _t5);
    }
  }, {
    key: "createPluginInstance",
    value: function createPluginInstance(e, _t6) {
      var s = e.split(".");
      var a = window || this;

      for (var _e2 = 0, _t13 = s.length; _e2 < _t13; _e2++) {
        a = a[s[_e2]];
      }

      if (typeof a !== "function") {
        throw new Error("the plugin ".concat(e, " doesn't exist"));
      }

      return new a(_t6);
    }
  }, {
    key: "parsePlugins",
    value: function parsePlugins() {
      var _this5 = this;

      var e = this.core.getFormElement();

      var _t8 = new RegExp("^".concat(this.opts.pluginPrefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));

      var s = e.attributes.length;
      var a = {};

      for (var i = 0; i < s; i++) {
        var _s = e.attributes[i].name;
        var n = e.attributes[i].value;

        var r = _t8.exec(_s);

        if (r && r.length === 4) {
          var _e3 = this.toCamelCase(r[1]);

          a[_e3] = Object.assign({}, r[3] ? _defineProperty({}, this.toCamelCase(r[3]), n) : {
            enabled: "" === n || "true" === n
          }, a[_e3]);
        }
      }

      Object.keys(a).forEach(function (e) {
        var _t9 = a[e];
        var s = _t9["enabled"];
        var i = _t9["class"];

        if (s && i) {
          delete _t9["enabled"];
          delete _t9["clazz"];

          var _s2 = _this5.createPluginInstance(i, _t9);

          _this5.core.registerPlugin(e, _s2);
        }
      });
    }
  }, {
    key: "isEmptyOption",
    value: function isEmptyOption(e) {
      var _t10 = e.validators;
      return Object.keys(_t10).length === 0 && _t10.constructor === Object;
    }
  }, {
    key: "parseElement",
    value: function parseElement(e) {
      var _t11 = new RegExp("^".concat(this.opts.prefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));

      var s = e.attributes.length;
      var a = {};
      var i = e.getAttribute("type");

      for (var n = 0; n < s; n++) {
        var _s3 = e.attributes[n].name;
        var r = e.attributes[n].value;

        if (this.opts.html5Input) {
          switch (true) {
            case "minlength" === _s3:
              a["stringLength"] = Object.assign({}, {
                enabled: true,
                min: parseInt(r, 10)
              }, a["stringLength"]);
              break;

            case "maxlength" === _s3:
              a["stringLength"] = Object.assign({}, {
                enabled: true,
                max: parseInt(r, 10)
              }, a["stringLength"]);
              break;

            case "pattern" === _s3:
              a["regexp"] = Object.assign({}, {
                enabled: true,
                regexp: r
              }, a["regexp"]);
              break;

            case "required" === _s3:
              a["notEmpty"] = Object.assign({}, {
                enabled: true
              }, a["notEmpty"]);
              break;

            case "type" === _s3 && "color" === r:
              a["color"] = Object.assign({}, {
                enabled: true,
                type: "hex"
              }, a["color"]);
              break;

            case "type" === _s3 && "email" === r:
              a["emailAddress"] = Object.assign({}, {
                enabled: true
              }, a["emailAddress"]);
              break;

            case "type" === _s3 && "url" === r:
              a["uri"] = Object.assign({}, {
                enabled: true
              }, a["uri"]);
              break;

            case "type" === _s3 && "range" === r:
              a["between"] = Object.assign({}, {
                enabled: true,
                max: parseFloat(e.getAttribute("max")),
                min: parseFloat(e.getAttribute("min"))
              }, a["between"]);
              break;

            case "min" === _s3 && i !== "date" && i !== "range":
              a["greaterThan"] = Object.assign({}, {
                enabled: true,
                min: parseFloat(r)
              }, a["greaterThan"]);
              break;

            case "max" === _s3 && i !== "date" && i !== "range":
              a["lessThan"] = Object.assign({}, {
                enabled: true,
                max: parseFloat(r)
              }, a["lessThan"]);
              break;

            default:
              break;
          }
        }

        var l = _t11.exec(_s3);

        if (l && l.length === 4) {
          var _e4 = this.toCamelCase(l[1]);

          a[_e4] = Object.assign({}, l[3] ? _defineProperty({}, this.toCamelCase(l[3]), this.normalizeValue(r)) : {
            enabled: "" === r || "true" === r
          }, a[_e4]);
        }
      }

      return {
        validators: a
      };
    }
  }, {
    key: "normalizeValue",
    value: function normalizeValue(e) {
      return e === "true" ? true : e === "false" ? false : e;
    }
  }, {
    key: "toUpperCase",
    value: function toUpperCase(e) {
      return e.charAt(1).toUpperCase();
    }
  }, {
    key: "toCamelCase",
    value: function toCamelCase(e) {
      return e.replace(/-./g, this.toUpperCase);
    }
  }]);

  return t;
}(_core_Plugin__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ })

}]);
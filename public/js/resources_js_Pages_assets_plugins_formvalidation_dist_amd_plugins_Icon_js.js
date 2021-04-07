(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Icon_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Icon.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Icon.js ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, classSet_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Icon = function (_super) {
    __extends(Icon, _super);

    function Icon(opts) {
      var _this = _super.call(this, opts) || this;

      _this.icons = new Map();
      _this.opts = Object.assign({}, {
        invalid: 'fv-plugins-icon--invalid',
        onPlaced: function onPlaced() {},
        onSet: function onSet() {},
        valid: 'fv-plugins-icon--valid',
        validating: 'fv-plugins-icon--validating'
      }, opts);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      return _this;
    }

    Icon.prototype.install = function () {
      this.core.on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler);
    };

    Icon.prototype.uninstall = function () {
      this.icons.forEach(function (icon) {
        return icon.parentNode.removeChild(icon);
      });
      this.icons.clear();
      this.core.off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler);
    };

    Icon.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (elements) {
        elements.forEach(function (ele) {
          var icon = _this.icons.get(ele);

          if (icon) {
            icon.parentNode.removeChild(icon);

            _this.icons["delete"](ele);
          }
        });
        this.prepareFieldIcon(e.field, elements);
      }
    };

    Icon.prototype.prepareFieldIcon = function (field, elements) {
      var _this = this;

      if (elements.length) {
        var type = elements[0].getAttribute('type');

        if ('radio' === type || 'checkbox' === type) {
          this.prepareElementIcon(field, elements[0]);
        } else {
          elements.forEach(function (ele) {
            return _this.prepareElementIcon(field, ele);
          });
        }
      }
    };

    Icon.prototype.prepareElementIcon = function (field, ele) {
      var i = document.createElement('i');
      i.setAttribute('data-field', field);
      ele.parentNode.insertBefore(i, ele.nextSibling);
      classSet_1["default"](i, {
        'fv-plugins-icon': true
      });
      var e = {
        classes: {
          invalid: this.opts.invalid,
          valid: this.opts.valid,
          validating: this.opts.validating
        },
        element: ele,
        field: field,
        iconElement: i
      };
      this.core.emit('plugins.icon.placed', e);
      this.opts.onPlaced(e);
      this.icons.set(ele, i);
    };

    Icon.prototype.onElementValidating = function (e) {
      var _a;

      var icon = this.setClasses(e.field, e.element, e.elements, (_a = {}, _a[this.opts.invalid] = false, _a[this.opts.valid] = false, _a[this.opts.validating] = true, _a));
      var evt = {
        element: e.element,
        field: e.field,
        iconElement: icon,
        status: 'Validating'
      };
      this.core.emit('plugins.icon.set', evt);
      this.opts.onSet(evt);
    };

    Icon.prototype.onElementValidated = function (e) {
      var _a;

      var icon = this.setClasses(e.field, e.element, e.elements, (_a = {}, _a[this.opts.invalid] = !e.valid, _a[this.opts.valid] = e.valid, _a[this.opts.validating] = false, _a));
      var evt = {
        element: e.element,
        field: e.field,
        iconElement: icon,
        status: e.valid ? 'Valid' : 'Invalid'
      };
      this.core.emit('plugins.icon.set', evt);
      this.opts.onSet(evt);
    };

    Icon.prototype.onElementNotValidated = function (e) {
      var _a;

      var icon = this.setClasses(e.field, e.element, e.elements, (_a = {}, _a[this.opts.invalid] = false, _a[this.opts.valid] = false, _a[this.opts.validating] = false, _a));
      var evt = {
        element: e.element,
        field: e.field,
        iconElement: icon,
        status: 'NotValidated'
      };
      this.core.emit('plugins.icon.set', evt);
      this.opts.onSet(evt);
    };

    Icon.prototype.onElementIgnored = function (e) {
      var _a;

      var icon = this.setClasses(e.field, e.element, e.elements, (_a = {}, _a[this.opts.invalid] = false, _a[this.opts.valid] = false, _a[this.opts.validating] = false, _a));
      var evt = {
        element: e.element,
        field: e.field,
        iconElement: icon,
        status: 'Ignored'
      };
      this.core.emit('plugins.icon.set', evt);
      this.opts.onSet(evt);
    };

    Icon.prototype.setClasses = function (field, element, elements, classes) {
      var type = element.getAttribute('type');
      var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;

      if (this.icons.has(ele)) {
        var icon = this.icons.get(ele);
        classSet_1["default"](icon, classes);
        return icon;
      } else {
        return null;
      }
    };

    return Icon;
  }(Plugin_1["default"]);

  exports.default = Icon;
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
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_index_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js ***!
  \************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Alias = function (_super) {
    __extends(Alias, _super);

    function Alias(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = opts || {};
      _this.validatorNameFilter = _this.getValidatorName.bind(_this);
      return _this;
    }

    Alias.prototype.install = function () {
      this.core.registerFilter('validator-name', this.validatorNameFilter);
    };

    Alias.prototype.uninstall = function () {
      this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    };

    Alias.prototype.getValidatorName = function (alias, field) {
      return this.opts[alias] || alias;
    };

    return Alias;
  }(Plugin_1["default"]);

  exports.default = Alias;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Aria.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Aria.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Aria = function (_super) {
    __extends(Aria, _super);

    function Aria() {
      var _this = _super.call(this, {}) || this;

      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.fieldValidHandler = _this.onFieldValid.bind(_this);
      _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
      _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
      return _this;
    }

    Aria.prototype.install = function () {
      this.core.on('core.field.valid', this.fieldValidHandler).on('core.field.invalid', this.fieldInvalidHandler).on('core.element.validated', this.elementValidatedHandler).on('plugins.message.displayed', this.messageDisplayedHandler);
    };

    Aria.prototype.uninstall = function () {
      this.core.off('core.field.valid', this.fieldValidHandler).off('core.field.invalid', this.fieldInvalidHandler).off('core.element.validated', this.elementValidatedHandler).off('plugins.message.displayed', this.messageDisplayedHandler);
    };

    Aria.prototype.onElementValidated = function (e) {
      if (e.valid) {
        e.element.setAttribute('aria-invalid', 'false');
        e.element.removeAttribute('aria-describedby');
      }
    };

    Aria.prototype.onFieldValid = function (field) {
      var elements = this.core.getElements(field);

      if (elements) {
        elements.forEach(function (ele) {
          ele.setAttribute('aria-invalid', 'false');
          ele.removeAttribute('aria-describedby');
        });
      }
    };

    Aria.prototype.onFieldInvalid = function (field) {
      var elements = this.core.getElements(field);

      if (elements) {
        elements.forEach(function (ele) {
          return ele.setAttribute('aria-invalid', 'true');
        });
      }
    };

    Aria.prototype.onMessageDisplayed = function (e) {
      e.messageElement.setAttribute('role', 'alert');
      e.messageElement.setAttribute('aria-hidden', 'false');
      var elements = this.core.getElements(e.field);
      var index = elements.indexOf(e.element);
      var id = "js-fv-" + e.field + "-" + index + "-" + Date.now() + "-message";
      e.messageElement.setAttribute('id', id);
      e.element.setAttribute('aria-describedby', id);
      var type = e.element.getAttribute('type');

      if ('radio' === type || 'checkbox' === type) {
        elements.forEach(function (ele) {
          return ele.setAttribute('aria-describedby', id);
        });
      }
    };

    return Aria;
  }(Plugin_1["default"]);

  exports.default = Aria;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Declarative.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Declarative.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Declarative = function (_super) {
    __extends(Declarative, _super);

    function Declarative(opts) {
      var _this = _super.call(this, opts) || this;

      _this.addedFields = new Map();
      _this.opts = Object.assign({}, {
        html5Input: false,
        pluginPrefix: 'data-fvp-',
        prefix: 'data-fv-'
      }, opts);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      return _this;
    }

    Declarative.prototype.install = function () {
      var _this = this;

      this.parsePlugins();
      var opts = this.parseOptions();
      Object.keys(opts).forEach(function (field) {
        if (!_this.addedFields.has(field)) {
          _this.addedFields.set(field, true);
        }

        _this.core.addField(field, opts[field]);
      });
      this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
    };

    Declarative.prototype.uninstall = function () {
      this.addedFields.clear();
      this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    };

    Declarative.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (!elements || elements.length === 0 || this.addedFields.has(e.field)) {
        return;
      }

      this.addedFields.set(e.field, true);
      elements.forEach(function (ele) {
        var declarativeOptions = _this.parseElement(ele);

        if (!_this.isEmptyOption(declarativeOptions)) {
          var mergeOptions = {
            selector: e.options.selector,
            validators: Object.assign({}, e.options.validators || {}, declarativeOptions.validators)
          };

          _this.core.setFieldOptions(e.field, mergeOptions);
        }
      });
    };

    Declarative.prototype.onFieldRemoved = function (e) {
      if (e.field && this.addedFields.has(e.field)) {
        this.addedFields["delete"](e.field);
      }
    };

    Declarative.prototype.parseOptions = function () {
      var _this = this;

      var prefix = this.opts.prefix;
      var opts = {};
      var fields = this.core.getFields();
      var form = this.core.getFormElement();
      var elements = [].slice.call(form.querySelectorAll("[name], [" + prefix + "field]"));
      elements.forEach(function (ele) {
        var validators = _this.parseElement(ele);

        if (!_this.isEmptyOption(validators)) {
          var field = ele.getAttribute('name') || ele.getAttribute(prefix + "field");
          opts[field] = Object.assign({}, opts[field], validators);
        }
      });
      Object.keys(opts).forEach(function (field) {
        Object.keys(opts[field].validators).forEach(function (v) {
          opts[field].validators[v].enabled = opts[field].validators[v].enabled || false;

          if (fields[field] && fields[field].validators && fields[field].validators[v]) {
            Object.assign(opts[field].validators[v], fields[field].validators[v]);
          }
        });
      });
      return Object.assign({}, fields, opts);
    };

    Declarative.prototype.createPluginInstance = function (clazz, opts) {
      var arr = clazz.split('.');
      var fn = window || this;

      for (var i = 0, len = arr.length; i < len; i++) {
        fn = fn[arr[i]];
      }

      if (typeof fn !== 'function') {
        throw new Error("the plugin " + clazz + " doesn't exist");
      }

      return new fn(opts);
    };

    Declarative.prototype.parsePlugins = function () {
      var _a;

      var _this = this;

      var form = this.core.getFormElement();
      var reg = new RegExp("^" + this.opts.pluginPrefix + "([a-z0-9-]+)(___)*([a-z0-9-]+)*$");
      var numAttributes = form.attributes.length;
      var plugins = {};

      for (var i = 0; i < numAttributes; i++) {
        var name_1 = form.attributes[i].name;
        var value = form.attributes[i].value;
        var items = reg.exec(name_1);

        if (items && items.length === 4) {
          var pluginName = this.toCamelCase(items[1]);
          plugins[pluginName] = Object.assign({}, items[3] ? (_a = {}, _a[this.toCamelCase(items[3])] = value, _a) : {
            enabled: '' === value || 'true' === value
          }, plugins[pluginName]);
        }
      }

      Object.keys(plugins).forEach(function (pluginName) {
        var opts = plugins[pluginName];
        var enabled = opts['enabled'];
        var clazz = opts['class'];

        if (enabled && clazz) {
          delete opts['enabled'];
          delete opts['clazz'];

          var p = _this.createPluginInstance(clazz, opts);

          _this.core.registerPlugin(pluginName, p);
        }
      });
    };

    Declarative.prototype.isEmptyOption = function (opts) {
      var validators = opts.validators;
      return Object.keys(validators).length === 0 && validators.constructor === Object;
    };

    Declarative.prototype.parseElement = function (ele) {
      var _a;

      var reg = new RegExp("^" + this.opts.prefix + "([a-z0-9-]+)(___)*([a-z0-9-]+)*$");
      var numAttributes = ele.attributes.length;
      var opts = {};
      var type = ele.getAttribute('type');

      for (var i = 0; i < numAttributes; i++) {
        var name_2 = ele.attributes[i].name;
        var value = ele.attributes[i].value;

        if (this.opts.html5Input) {
          switch (true) {
            case 'minlength' === name_2:
              opts['stringLength'] = Object.assign({}, {
                enabled: true,
                min: parseInt(value, 10)
              }, opts['stringLength']);
              break;

            case 'maxlength' === name_2:
              opts['stringLength'] = Object.assign({}, {
                enabled: true,
                max: parseInt(value, 10)
              }, opts['stringLength']);
              break;

            case 'pattern' === name_2:
              opts['regexp'] = Object.assign({}, {
                enabled: true,
                regexp: value
              }, opts['regexp']);
              break;

            case 'required' === name_2:
              opts['notEmpty'] = Object.assign({}, {
                enabled: true
              }, opts['notEmpty']);
              break;

            case 'type' === name_2 && 'color' === value:
              opts['color'] = Object.assign({}, {
                enabled: true,
                type: 'hex'
              }, opts['color']);
              break;

            case 'type' === name_2 && 'email' === value:
              opts['emailAddress'] = Object.assign({}, {
                enabled: true
              }, opts['emailAddress']);
              break;

            case 'type' === name_2 && 'url' === value:
              opts['uri'] = Object.assign({}, {
                enabled: true
              }, opts['uri']);
              break;

            case 'type' === name_2 && 'range' === value:
              opts['between'] = Object.assign({}, {
                enabled: true,
                max: parseFloat(ele.getAttribute('max')),
                min: parseFloat(ele.getAttribute('min'))
              }, opts['between']);
              break;

            case 'min' === name_2 && type !== 'date' && type !== 'range':
              opts['greaterThan'] = Object.assign({}, {
                enabled: true,
                min: parseFloat(value)
              }, opts['greaterThan']);
              break;

            case 'max' === name_2 && type !== 'date' && type !== 'range':
              opts['lessThan'] = Object.assign({}, {
                enabled: true,
                max: parseFloat(value)
              }, opts['lessThan']);
              break;

            default:
              break;
          }
        }

        var items = reg.exec(name_2);

        if (items && items.length === 4) {
          var v = this.toCamelCase(items[1]);
          opts[v] = Object.assign({}, items[3] ? (_a = {}, _a[this.toCamelCase(items[3])] = this.normalizeValue(value), _a) : {
            enabled: '' === value || 'true' === value
          }, opts[v]);
        }
      }

      return {
        validators: opts
      };
    };

    Declarative.prototype.normalizeValue = function (value) {
      return value === 'true' ? true : value === 'false' ? false : value;
    };

    Declarative.prototype.toUpperCase = function (input) {
      return input.charAt(1).toUpperCase();
    };

    Declarative.prototype.toCamelCase = function (input) {
      return input.replace(/-./g, this.toUpperCase);
    };

    return Declarative;
  }(Plugin_1["default"]);

  exports.default = Declarative;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/DefaultSubmit.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/DefaultSubmit.js ***!
  \********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var DefaultSubmit = function (_super) {
    __extends(DefaultSubmit, _super);

    function DefaultSubmit() {
      var _this = _super.call(this, {}) || this;

      _this.onValidHandler = _this.onFormValid.bind(_this);
      return _this;
    }

    DefaultSubmit.prototype.install = function () {
      var form = this.core.getFormElement();

      if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
        throw new Error('Do not use `submit` for the name attribute of submit button');
      }

      this.core.on('core.form.valid', this.onValidHandler);
    };

    DefaultSubmit.prototype.uninstall = function () {
      this.core.off('core.form.valid', this.onValidHandler);
    };

    DefaultSubmit.prototype.onFormValid = function () {
      var form = this.core.getFormElement();

      if (form instanceof HTMLFormElement) {
        form.submit();
      }
    };

    return DefaultSubmit;
  }(Plugin_1["default"]);

  exports.default = DefaultSubmit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Dependency.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Dependency.js ***!
  \*****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Dependency = function (_super) {
    __extends(Dependency, _super);

    function Dependency(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = opts || {};
      _this.triggerExecutedHandler = _this.onTriggerExecuted.bind(_this);
      return _this;
    }

    Dependency.prototype.install = function () {
      this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    };

    Dependency.prototype.uninstall = function () {
      this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    };

    Dependency.prototype.onTriggerExecuted = function (e) {
      if (this.opts[e.field]) {
        var dependencies = this.opts[e.field].split(' ');

        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
          var d = dependencies_1[_i];
          var dependentField = d.trim();

          if (this.opts[dependentField]) {
            this.core.revalidateField(dependentField);
          }
        }
      }
    };

    return Dependency;
  }(Plugin_1["default"]);

  exports.default = Dependency;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js ***!
  \***************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Excluded = function (_super) {
    __extends(Excluded, _super);

    function Excluded(opts) {
      var _this = _super.call(this, opts) || this;

      _this.opts = Object.assign({}, {
        excluded: Excluded.defaultIgnore
      }, opts);
      _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
      return _this;
    }

    Excluded.defaultIgnore = function (field, element, elements) {
      var isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
      var disabled = element.getAttribute('disabled');
      return disabled === '' || disabled === 'disabled' || element.getAttribute('type') === 'hidden' || !isVisible;
    };

    Excluded.prototype.install = function () {
      this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    };

    Excluded.prototype.uninstall = function () {
      this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    };

    Excluded.prototype.ignoreValidation = function (field, element, elements) {
      return this.opts.excluded.apply(this, [field, element, elements]);
    };

    return Excluded;
  }(Plugin_1["default"]);

  exports.default = Excluded;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/FieldStatus.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/FieldStatus.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var FieldStatus = function (_super) {
    __extends(FieldStatus, _super);

    function FieldStatus(opts) {
      var _this = _super.call(this, opts) || this;

      _this.statuses = new Map();
      _this.opts = Object.assign({}, {
        onStatusChanged: function onStatusChanged() {}
      }, opts);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      return _this;
    }

    FieldStatus.prototype.install = function () {
      this.core.on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
    };

    FieldStatus.prototype.uninstall = function () {
      this.statuses.clear();
      this.core.off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    };

    FieldStatus.prototype.areFieldsValid = function () {
      return Array.from(this.statuses.values()).every(function (value) {
        return value === 'Valid' || value === 'NotValidated' || value === 'Ignored';
      });
    };

    FieldStatus.prototype.getStatuses = function () {
      return this.statuses;
    };

    FieldStatus.prototype.onFieldAdded = function (e) {
      this.statuses.set(e.field, 'NotValidated');
    };

    FieldStatus.prototype.onFieldRemoved = function (e) {
      if (this.statuses.has(e.field)) {
        this.statuses["delete"](e.field);
      }

      this.opts.onStatusChanged(this.areFieldsValid());
    };

    FieldStatus.prototype.onElementValidating = function (e) {
      this.statuses.set(e.field, 'Validating');
      this.opts.onStatusChanged(false);
    };

    FieldStatus.prototype.onElementValidated = function (e) {
      this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');

      if (e.valid) {
        this.opts.onStatusChanged(this.areFieldsValid());
      } else {
        this.opts.onStatusChanged(false);
      }
    };

    FieldStatus.prototype.onElementNotValidated = function (e) {
      this.statuses.set(e.field, 'NotValidated');
      this.opts.onStatusChanged(false);
    };

    FieldStatus.prototype.onElementIgnored = function (e) {
      this.statuses.set(e.field, 'Ignored');
      this.opts.onStatusChanged(this.areFieldsValid());
    };

    return FieldStatus;
  }(Plugin_1["default"]);

  exports.default = FieldStatus;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Framework.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Framework.js ***!
  \****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ../utils/closest */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/closest.js"), __webpack_require__(/*! ./Message */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Message.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, classSet_1, closest_1, Message_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Framework = function (_super) {
    __extends(Framework, _super);

    function Framework(opts) {
      var _this = _super.call(this, opts) || this;

      _this.results = new Map();
      _this.containers = new Map();
      _this.opts = Object.assign({}, {
        defaultMessageContainer: true,
        eleInvalidClass: '',
        eleValidClass: '',
        rowClasses: '',
        rowValidatingClass: ''
      }, opts);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      return _this;
    }

    Framework.prototype.install = function () {
      var _a;

      var _this = this;

      classSet_1["default"](this.core.getFormElement(), (_a = {}, _a[this.opts.formClass] = true, _a['fv-plugins-framework'] = true, _a));
      this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('plugins.icon.placed', this.iconPlacedHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);

      if (this.opts.defaultMessageContainer) {
        this.core.registerPlugin('___frameworkMessage', new Message_1["default"]({
          clazz: this.opts.messageClass,
          container: function container(field, element) {
            var selector = 'string' === typeof _this.opts.rowSelector ? _this.opts.rowSelector : _this.opts.rowSelector(field, element);
            var groupEle = closest_1["default"](element, selector);
            return Message_1["default"].getClosestContainer(element, groupEle, _this.opts.rowPattern);
          }
        }));
      }
    };

    Framework.prototype.uninstall = function () {
      var _a;

      this.results.clear();
      this.containers.clear();
      classSet_1["default"](this.core.getFormElement(), (_a = {}, _a[this.opts.formClass] = false, _a['fv-plugins-framework'] = false, _a));
      this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('plugins.icon.placed', this.iconPlacedHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    };

    Framework.prototype.onIconPlaced = function (e) {};

    Framework.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (elements) {
        elements.forEach(function (ele) {
          var _a;

          var groupEle = _this.containers.get(ele);

          if (groupEle) {
            classSet_1["default"](groupEle, (_a = {}, _a[_this.opts.rowInvalidClass] = false, _a[_this.opts.rowValidatingClass] = false, _a[_this.opts.rowValidClass] = false, _a['fv-plugins-icon-container'] = false, _a));

            _this.containers["delete"](ele);
          }
        });
        this.prepareFieldContainer(e.field, elements);
      }
    };

    Framework.prototype.onFieldRemoved = function (e) {
      var _this = this;

      e.elements.forEach(function (ele) {
        var _a;

        var groupEle = _this.containers.get(ele);

        if (groupEle) {
          classSet_1["default"](groupEle, (_a = {}, _a[_this.opts.rowInvalidClass] = false, _a[_this.opts.rowValidatingClass] = false, _a[_this.opts.rowValidClass] = false, _a));
        }
      });
    };

    Framework.prototype.prepareFieldContainer = function (field, elements) {
      var _this = this;

      if (elements.length) {
        var type = elements[0].getAttribute('type');

        if ('radio' === type || 'checkbox' === type) {
          this.prepareElementContainer(field, elements[0]);
        } else {
          elements.forEach(function (ele) {
            return _this.prepareElementContainer(field, ele);
          });
        }
      }
    };

    Framework.prototype.prepareElementContainer = function (field, element) {
      var _a;

      var selector = 'string' === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(field, element);
      var groupEle = closest_1["default"](element, selector);

      if (groupEle !== element) {
        classSet_1["default"](groupEle, (_a = {}, _a[this.opts.rowClasses] = true, _a['fv-plugins-icon-container'] = true, _a));
        this.containers.set(element, groupEle);
      }
    };

    Framework.prototype.onElementValidating = function (e) {
      var _a;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
      var groupEle = this.containers.get(element);

      if (groupEle) {
        classSet_1["default"](groupEle, (_a = {}, _a[this.opts.rowInvalidClass] = false, _a[this.opts.rowValidatingClass] = true, _a[this.opts.rowValidClass] = false, _a));
      }
    };

    Framework.prototype.onElementNotValidated = function (e) {
      this.removeClasses(e.element, e.elements);
    };

    Framework.prototype.onElementIgnored = function (e) {
      this.removeClasses(e.element, e.elements);
    };

    Framework.prototype.removeClasses = function (element, elements) {
      var _a, _b;

      var type = element.getAttribute('type');
      var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
      classSet_1["default"](ele, (_a = {}, _a[this.opts.eleValidClass] = false, _a[this.opts.eleInvalidClass] = false, _a));
      var groupEle = this.containers.get(ele);

      if (groupEle) {
        classSet_1["default"](groupEle, (_b = {}, _b[this.opts.rowInvalidClass] = false, _b[this.opts.rowValidatingClass] = false, _b[this.opts.rowValidClass] = false, _b));
      }
    };

    Framework.prototype.onElementValidated = function (e) {
      var _a, _b, _c;

      var _this = this;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
      classSet_1["default"](element, (_a = {}, _a[this.opts.eleValidClass] = e.valid, _a[this.opts.eleInvalidClass] = !e.valid, _a));
      var groupEle = this.containers.get(element);

      if (groupEle) {
        if (!e.valid) {
          this.results.set(element, false);
          classSet_1["default"](groupEle, (_b = {}, _b[this.opts.rowInvalidClass] = true, _b[this.opts.rowValidatingClass] = false, _b[this.opts.rowValidClass] = false, _b));
        } else {
          this.results["delete"](element);
          var isValid_1 = true;
          this.containers.forEach(function (value, key) {
            if (value === groupEle && _this.results.get(key) === false) {
              isValid_1 = false;
            }
          });

          if (isValid_1) {
            classSet_1["default"](groupEle, (_c = {}, _c[this.opts.rowInvalidClass] = false, _c[this.opts.rowValidatingClass] = false, _c[this.opts.rowValidClass] = true, _c));
          }
        }
      }
    };

    return Framework;
  }(Plugin_1["default"]);

  exports.default = Framework;
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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Message.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Message.js ***!
  \**************************************************************************************/
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

  var Message = function (_super) {
    __extends(Message, _super);

    function Message(opts) {
      var _this = _super.call(this, opts) || this;

      _this.messages = new Map();
      _this.defaultContainer = document.createElement('div');
      _this.opts = Object.assign({}, {
        container: function container(field, element) {
          return _this.defaultContainer;
        }
      }, opts);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
      _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_this);
      return _this;
    }

    Message.getClosestContainer = function (element, upper, pattern) {
      var ele = element;

      while (ele) {
        if (ele === upper) {
          break;
        }

        ele = ele.parentElement;

        if (pattern.test(ele.className)) {
          break;
        }
      }

      return ele;
    };

    Message.prototype.install = function () {
      this.core.getFormElement().appendChild(this.defaultContainer);
      this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler).on('core.validator.validated', this.validatorValidatedHandler).on('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };

    Message.prototype.uninstall = function () {
      this.core.getFormElement().removeChild(this.defaultContainer);
      this.messages.forEach(function (message) {
        return message.parentNode.removeChild(message);
      });
      this.messages.clear();
      this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler).off('core.validator.validated', this.validatorValidatedHandler).off('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };

    Message.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (elements) {
        elements.forEach(function (ele) {
          var msg = _this.messages.get(ele);

          if (msg) {
            msg.parentNode.removeChild(msg);

            _this.messages["delete"](ele);
          }
        });
        this.prepareFieldContainer(e.field, elements);
      }
    };

    Message.prototype.onFieldRemoved = function (e) {
      var _this = this;

      if (!e.elements.length || !e.field) {
        return;
      }

      var type = e.elements[0].getAttribute('type');
      var elements = 'radio' === type || 'checkbox' === type ? [e.elements[0]] : e.elements;
      elements.forEach(function (ele) {
        if (_this.messages.has(ele)) {
          var container = _this.messages.get(ele);

          container.parentNode.removeChild(container);

          _this.messages["delete"](ele);
        }
      });
    };

    Message.prototype.prepareFieldContainer = function (field, elements) {
      var _this = this;

      if (elements.length) {
        var type = elements[0].getAttribute('type');

        if ('radio' === type || 'checkbox' === type) {
          this.prepareElementContainer(field, elements[0], elements);
        } else {
          elements.forEach(function (ele) {
            return _this.prepareElementContainer(field, ele, elements);
          });
        }
      }
    };

    Message.prototype.prepareElementContainer = function (field, element, elements) {
      var container;

      switch (true) {
        case 'string' === typeof this.opts.container:
          var selector = this.opts.container;
          selector = '#' === selector.charAt(0) ? "[id=\"" + selector.substring(1) + "\"]" : selector;
          container = this.core.getFormElement().querySelector(selector);
          break;

        default:
          container = this.opts.container(field, element);
          break;
      }

      var message = document.createElement('div');
      container.appendChild(message);
      classSet_1["default"](message, {
        'fv-plugins-message-container': true
      });
      this.core.emit('plugins.message.placed', {
        element: element,
        elements: elements,
        field: field,
        messageElement: message
      });
      this.messages.set(element, message);
    };

    Message.prototype.getMessage = function (result) {
      return typeof result.message === 'string' ? result.message : result.message[this.core.getLocale()];
    };

    Message.prototype.onValidatorValidated = function (e) {
      var _a;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container = this.messages.get(element);
        var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");

        if (!messageEle && !e.result.valid) {
          var ele = document.createElement('div');
          ele.innerHTML = this.getMessage(e.result);
          ele.setAttribute('data-field', e.field);
          ele.setAttribute('data-validator', e.validator);

          if (this.opts.clazz) {
            classSet_1["default"](ele, (_a = {}, _a[this.opts.clazz] = true, _a));
          }

          container.appendChild(ele);
          this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: ele,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (messageEle && !e.result.valid) {
          messageEle.innerHTML = this.getMessage(e.result);
          this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: messageEle,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (messageEle && e.result.valid) {
          container.removeChild(messageEle);
        }
      }
    };

    Message.prototype.onValidatorNotValidated = function (e) {
      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container = this.messages.get(element);
        var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");

        if (messageEle) {
          container.removeChild(messageEle);
        }
      }
    };

    Message.prototype.onElementIgnored = function (e) {
      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container_1 = this.messages.get(element);
        var messageElements = [].slice.call(container_1.querySelectorAll("[data-field=\"" + e.field + "\"]"));
        messageElements.forEach(function (messageEle) {
          container_1.removeChild(messageEle);
        });
      }
    };

    return Message;
  }(Plugin_1["default"]);

  exports.default = Message;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Sequence.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Sequence.js ***!
  \***************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Sequence = function (_super) {
    __extends(Sequence, _super);

    function Sequence(opts) {
      var _this = _super.call(this, opts) || this;

      _this.invalidFields = new Map();
      _this.opts = Object.assign({}, {
        enabled: true
      }, opts);
      _this.validatorHandler = _this.onValidatorValidated.bind(_this);
      _this.shouldValidateFilter = _this.shouldValidate.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      return _this;
    }

    Sequence.prototype.install = function () {
      this.core.on('core.validator.validated', this.validatorHandler).on('core.field.added', this.fieldAddedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.validating', this.elementValidatingHandler).registerFilter('field-should-validate', this.shouldValidateFilter);
    };

    Sequence.prototype.uninstall = function () {
      this.invalidFields.clear();
      this.core.off('core.validator.validated', this.validatorHandler).off('core.field.added', this.fieldAddedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.validating', this.elementValidatingHandler).deregisterFilter('field-should-validate', this.shouldValidateFilter);
    };

    Sequence.prototype.shouldValidate = function (field, element, value, validator) {
      var stop = (this.opts.enabled === true || this.opts.enabled[field] === true) && this.invalidFields.has(element) && !!this.invalidFields.get(element).length && this.invalidFields.get(element).indexOf(validator) === -1;
      return !stop;
    };

    Sequence.prototype.onValidatorValidated = function (e) {
      var validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
      var index = validators.indexOf(e.validator);

      if (e.result.valid && index >= 0) {
        validators.splice(index, 1);
      } else if (!e.result.valid && index === -1) {
        validators.push(e.validator);
      }

      this.invalidFields.set(e.element, validators);
    };

    Sequence.prototype.onFieldAdded = function (e) {
      if (e.elements) {
        this.clearInvalidFields(e.elements);
      }
    };

    Sequence.prototype.onElementNotValidated = function (e) {
      this.clearInvalidFields(e.elements);
    };

    Sequence.prototype.onElementValidating = function (e) {
      this.clearInvalidFields(e.elements);
    };

    Sequence.prototype.clearInvalidFields = function (elements) {
      var _this = this;

      elements.forEach(function (ele) {
        return _this.invalidFields["delete"](ele);
      });
    };

    return Sequence;
  }(Plugin_1["default"]);

  exports.default = Sequence;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/SubmitButton.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/SubmitButton.js ***!
  \*******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var SubmitButton = function (_super) {
    __extends(SubmitButton, _super);

    function SubmitButton(opts) {
      var _this = _super.call(this, opts) || this;

      _this.isFormValid = false;
      _this.opts = Object.assign({}, {
        aspNetButton: false,
        buttons: function buttons(form) {
          return [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])'));
        }
      }, opts);
      _this.submitHandler = _this.handleSubmitEvent.bind(_this);
      _this.buttonClickHandler = _this.handleClickEvent.bind(_this);
      return _this;
    }

    SubmitButton.prototype.install = function () {
      var _this = this;

      if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
        return;
      }

      var form = this.core.getFormElement();
      this.submitButtons = this.opts.buttons(form);
      form.setAttribute('novalidate', 'novalidate');
      form.addEventListener('submit', this.submitHandler);
      this.hiddenClickedEle = document.createElement('input');
      this.hiddenClickedEle.setAttribute('type', 'hidden');
      form.appendChild(this.hiddenClickedEle);
      this.submitButtons.forEach(function (button) {
        button.addEventListener('click', _this.buttonClickHandler);
      });
    };

    SubmitButton.prototype.uninstall = function () {
      var _this = this;

      var form = this.core.getFormElement();

      if (form instanceof HTMLFormElement) {
        form.removeEventListener('submit', this.submitHandler);
      }

      this.submitButtons.forEach(function (button) {
        button.removeEventListener('click', _this.buttonClickHandler);
      });
      this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
    };

    SubmitButton.prototype.handleSubmitEvent = function (e) {
      this.validateForm(e);
    };

    SubmitButton.prototype.handleClickEvent = function (e) {
      var target = e.currentTarget;

      if (target instanceof HTMLElement) {
        if (this.opts.aspNetButton && this.isFormValid === true) {} else {
          var form = this.core.getFormElement();
          form.removeEventListener('submit', this.submitHandler);
          this.clickedButton = e.target;
          var name_1 = this.clickedButton.getAttribute('name');
          var value = this.clickedButton.getAttribute('value');

          if (name_1 && value) {
            this.hiddenClickedEle.setAttribute('name', name_1);
            this.hiddenClickedEle.setAttribute('value', value);
          }

          this.validateForm(e);
        }
      }
    };

    SubmitButton.prototype.validateForm = function (e) {
      var _this = this;

      e.preventDefault();
      this.core.validate().then(function (result) {
        if (result === 'Valid' && _this.opts.aspNetButton && !_this.isFormValid && _this.clickedButton) {
          _this.isFormValid = true;

          _this.clickedButton.removeEventListener('click', _this.buttonClickHandler);

          _this.clickedButton.click();
        }
      });
    };

    return SubmitButton;
  }(Plugin_1["default"]);

  exports.default = SubmitButton;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Tooltip.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Tooltip.js ***!
  \**************************************************************************************/
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

  var Tooltip = function (_super) {
    __extends(Tooltip, _super);

    function Tooltip(opts) {
      var _this = _super.call(this, opts) || this;

      _this.messages = new Map();
      _this.opts = Object.assign({}, {
        placement: 'top',
        trigger: 'click'
      }, opts);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
      _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.documentClickHandler = _this.onDocumentClicked.bind(_this);
      return _this;
    }

    Tooltip.prototype.install = function () {
      var _a;

      this.tip = document.createElement('div');
      classSet_1["default"](this.tip, (_a = {
        'fv-plugins-tooltip': true
      }, _a["fv-plugins-tooltip--" + this.opts.placement] = true, _a));
      document.body.appendChild(this.tip);
      this.core.on('plugins.icon.placed', this.iconPlacedHandler).on('core.validator.validated', this.validatorValidatedHandler).on('core.element.validated', this.elementValidatedHandler);

      if ('click' === this.opts.trigger) {
        document.addEventListener('click', this.documentClickHandler);
      }
    };

    Tooltip.prototype.uninstall = function () {
      this.messages.clear();
      document.body.removeChild(this.tip);
      this.core.off('plugins.icon.placed', this.iconPlacedHandler).off('core.validator.validated', this.validatorValidatedHandler).off('core.element.validated', this.elementValidatedHandler);

      if ('click' === this.opts.trigger) {
        document.removeEventListener('click', this.documentClickHandler);
      }
    };

    Tooltip.prototype.onIconPlaced = function (e) {
      var _this = this;

      classSet_1["default"](e.iconElement, {
        'fv-plugins-tooltip-icon': true
      });

      switch (this.opts.trigger) {
        case 'hover':
          e.iconElement.addEventListener('mouseenter', function (evt) {
            return _this.show(e.element, evt);
          });
          e.iconElement.addEventListener('mouseleave', function (evt) {
            return _this.hide();
          });
          break;

        case 'click':
        default:
          e.iconElement.addEventListener('click', function (evt) {
            return _this.show(e.element, evt);
          });
          break;
      }
    };

    Tooltip.prototype.onValidatorValidated = function (e) {
      if (!e.result.valid) {
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        var message = typeof e.result.message === 'string' ? e.result.message : e.result.message[this.core.getLocale()];
        this.messages.set(ele, message);
      }
    };

    Tooltip.prototype.onElementValidated = function (e) {
      if (e.valid) {
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        this.messages["delete"](ele);
      }
    };

    Tooltip.prototype.onDocumentClicked = function (e) {
      this.hide();
    };

    Tooltip.prototype.show = function (ele, e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.messages.has(ele)) {
        return;
      }

      classSet_1["default"](this.tip, {
        'fv-plugins-tooltip--hide': false
      });
      this.tip.innerHTML = "<span class=\"fv-plugins-tooltip__content\">" + this.messages.get(ele) + "</span>";
      var icon = e.target;
      var rect = icon.getBoundingClientRect();
      var top = 0;
      var left = 0;

      switch (this.opts.placement) {
        case 'top':
        default:
          top = rect.top - rect.height;
          left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
          break;

        case 'top-left':
          top = rect.top - rect.height;
          left = rect.left;
          break;

        case 'top-right':
          top = rect.top - rect.height;
          left = rect.left + rect.width - this.tip.clientWidth;
          break;

        case 'bottom':
          top = rect.top + rect.height;
          left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
          break;

        case 'bottom-left':
          top = rect.top + rect.height;
          left = rect.left;
          break;

        case 'bottom-right':
          top = rect.top + rect.height;
          left = rect.left + rect.width - this.tip.clientWidth;
          break;

        case 'left':
          top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
          left = rect.left - this.tip.clientWidth;
          break;

        case 'right':
          top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
          left = rect.left + rect.width;
          break;
      }

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      top = top + scrollTop;
      left = left + scrollLeft;
      this.tip.setAttribute('style', "top: " + top + "px; left: " + left + "px");
    };

    Tooltip.prototype.hide = function () {
      classSet_1["default"](this.tip, {
        'fv-plugins-tooltip--hide': true
      });
    };

    return Tooltip;
  }(Plugin_1["default"]);

  exports.default = Tooltip;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Trigger.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Trigger.js ***!
  \**************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Trigger = function (_super) {
    __extends(Trigger, _super);

    function Trigger(opts) {
      var _this = _super.call(this, opts) || this;

      _this.handlers = [];
      _this.timers = new Map();

      _this.ieVersion = function () {
        var v = 3;
        var div = document.createElement('div');
        var a = div['all'] || [];

        while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><br><![endif]-->', a[0]) {}

        return v > 4 ? v : document['documentMode'];
      }();

      var ele = document.createElement('div');
      _this.defaultEvent = _this.ieVersion === 9 || !('oninput' in ele) ? 'keyup' : 'input';
      _this.opts = Object.assign({}, {
        delay: 0,
        event: _this.defaultEvent,
        threshold: 0
      }, opts);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      return _this;
    }

    Trigger.prototype.install = function () {
      this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
    };

    Trigger.prototype.uninstall = function () {
      this.handlers.forEach(function (item) {
        return item.element.removeEventListener(item.event, item.handler);
      });
      this.handlers = [];
      this.timers.forEach(function (t) {
        return window.clearTimeout(t);
      });
      this.timers.clear();
      this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    };

    Trigger.prototype.prepareHandler = function (field, elements) {
      var _this = this;

      elements.forEach(function (ele) {
        var events = [];

        switch (true) {
          case !!_this.opts.event && _this.opts.event[field] === false:
            events = [];
            break;

          case !!_this.opts.event && !!_this.opts.event[field]:
            events = _this.opts.event[field].split(' ');
            break;

          case 'string' === typeof _this.opts.event && _this.opts.event !== _this.defaultEvent:
            events = _this.opts.event.split(' ');
            break;

          default:
            var type = ele.getAttribute('type');
            var tagName = ele.tagName.toLowerCase();
            var event_1 = 'radio' === type || 'checkbox' === type || 'file' === type || 'select' === tagName ? 'change' : _this.ieVersion >= 10 && ele.getAttribute('placeholder') ? 'keyup' : _this.defaultEvent;
            events = [event_1];
            break;
        }

        events.forEach(function (evt) {
          var evtHandler = function evtHandler(e) {
            return _this.handleEvent(e, field, ele);
          };

          _this.handlers.push({
            element: ele,
            event: evt,
            field: field,
            handler: evtHandler
          });

          ele.addEventListener(evt, evtHandler);
        });
      });
    };

    Trigger.prototype.handleEvent = function (e, field, ele) {
      var _this = this;

      if (this.exceedThreshold(field, ele) && this.core.executeFilter('plugins-trigger-should-validate', true, [field, ele])) {
        var handler = function handler() {
          return _this.core.validateElement(field, ele).then(function (_) {
            _this.core.emit('plugins.trigger.executed', {
              element: ele,
              event: e,
              field: field
            });
          });
        };

        var delay = this.opts.delay[field] || this.opts.delay;

        if (delay === 0) {
          handler();
        } else {
          var timer = this.timers.get(ele);

          if (timer) {
            window.clearTimeout(timer);
          }

          this.timers.set(ele, window.setTimeout(handler, delay * 1000));
        }
      }
    };

    Trigger.prototype.onFieldAdded = function (e) {
      this.handlers.filter(function (item) {
        return item.field === e.field;
      }).forEach(function (item) {
        return item.element.removeEventListener(item.event, item.handler);
      });
      this.prepareHandler(e.field, e.elements);
    };

    Trigger.prototype.onFieldRemoved = function (e) {
      this.handlers.filter(function (item) {
        return item.field === e.field && e.elements.indexOf(item.element) >= 0;
      }).forEach(function (item) {
        return item.element.removeEventListener(item.event, item.handler);
      });
    };

    Trigger.prototype.exceedThreshold = function (field, element) {
      var threshold = this.opts.threshold[field] === 0 || this.opts.threshold === 0 ? false : this.opts.threshold[field] || this.opts.threshold;

      if (!threshold) {
        return true;
      }

      var type = element.getAttribute('type');

      if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(type) !== -1) {
        return true;
      }

      var value = this.core.getElementValue(field, element);
      return value.length >= threshold;
    };

    return Trigger;
  }(Plugin_1["default"]);

  exports.default = Trigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/index.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Alias */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Alias.js"), __webpack_require__(/*! ./Aria */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Aria.js"), __webpack_require__(/*! ./Declarative */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Declarative.js"), __webpack_require__(/*! ./DefaultSubmit */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/DefaultSubmit.js"), __webpack_require__(/*! ./Dependency */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Dependency.js"), __webpack_require__(/*! ./Excluded */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Excluded.js"), __webpack_require__(/*! ./FieldStatus */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/FieldStatus.js"), __webpack_require__(/*! ./Framework */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Framework.js"), __webpack_require__(/*! ./Icon */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Icon.js"), __webpack_require__(/*! ./Message */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Message.js"), __webpack_require__(/*! ./Sequence */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Sequence.js"), __webpack_require__(/*! ./SubmitButton */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/SubmitButton.js"), __webpack_require__(/*! ./Tooltip */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Tooltip.js"), __webpack_require__(/*! ./Trigger */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Trigger.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Alias_1, Aria_1, Declarative_1, DefaultSubmit_1, Dependency_1, Excluded_1, FieldStatus_1, Framework_1, Icon_1, Message_1, Sequence_1, SubmitButton_1, Tooltip_1, Trigger_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    Alias: Alias_1["default"],
    Aria: Aria_1["default"],
    Declarative: Declarative_1["default"],
    DefaultSubmit: DefaultSubmit_1["default"],
    Dependency: Dependency_1["default"],
    Excluded: Excluded_1["default"],
    FieldStatus: FieldStatus_1["default"],
    Framework: Framework_1["default"],
    Icon: Icon_1["default"],
    Message: Message_1["default"],
    Sequence: Sequence_1["default"],
    SubmitButton: SubmitButton_1["default"],
    Tooltip: Tooltip_1["default"],
    Trigger: Trigger_1["default"]
  };
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/closest.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/closest.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element['mozMatchesSelector'] || element['msMatchesSelector'];

    if (nativeMatches) {
      return nativeMatches.call(element, selector);
    }

    var nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
    return nodes.indexOf(element) >= 0;
  }

  function closest(element, selector) {
    var ele = element;

    while (ele) {
      if (matches(ele, selector)) {
        break;
      }

      ele = ele.parentElement;
    }

    return ele;
  }

  exports.default = closest;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
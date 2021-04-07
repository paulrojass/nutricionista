(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_index_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/index.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js"), __webpack_require__(/*! ./mod11And10 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js"), __webpack_require__(/*! ./mod37And36 */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js"), __webpack_require__(/*! ./verhoeff */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1, mod11And10_1, mod37And36_1, verhoeff_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    luhn: luhn_1["default"],
    mod11And10: mod11And10_1["default"],
    mod37And36: mod37And36_1["default"],
    verhoeff: verhoeff_1["default"]
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function luhn(value) {
    var length = value.length;
    var prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    var mul = 0;
    var sum = 0;

    while (length--) {
      sum += prodArr[mul][parseInt(value.charAt(length), 10)];
      mul = 1 - mul;
    }

    return sum % 10 === 0 && sum > 0;
  }

  exports.default = luhn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod11And10.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mod11And10(value) {
    var length = value.length;
    var check = 5;

    for (var i = 0; i < length; i++) {
      check = ((check || 10) * 2 % 11 + parseInt(value.charAt(i), 10)) % 10;
    }

    return check === 1;
  }

  exports.default = mod11And10;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/mod37And36.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function mod37And36(value, alphabet) {
    if (alphabet === void 0) {
      alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    var length = value.length;
    var modulus = alphabet.length;
    var check = Math.floor(modulus / 2);

    for (var i = 0; i < length; i++) {
      check = ((check || modulus) * 2 % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
    }

    return check === 1;
  }

  exports.default = mod37And36;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/verhoeff.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function verhoeff(value) {
    var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
    var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
    var invertedArray = value.reverse();
    var c = 0;

    for (var i = 0; i < invertedArray.length; i++) {
      c = d[c][p[i % 8][invertedArray[i]]];
    }

    return c === 0;
  }

  exports.default = verhoeff;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Core.js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Core.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./emitter */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/emitter.js"), __webpack_require__(/*! ./filter */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/filter.js"), __webpack_require__(/*! ../filters/getFieldValue */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js"), __webpack_require__(/*! ../validators/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, emitter_1, filter_1, getFieldValue_1, index_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.Core = void 0;

  var Core = function () {
    function Core(form, fields) {
      this.elements = {};
      this.ee = emitter_1["default"]();
      this.filter = filter_1["default"]();
      this.plugins = {};
      this.results = new Map();
      this.validators = {};
      this.form = form;
      this.fields = fields;
    }

    Core.prototype.on = function (event, func) {
      this.ee.on(event, func);
      return this;
    };

    Core.prototype.off = function (event, func) {
      this.ee.off(event, func);
      return this;
    };

    Core.prototype.emit = function (event) {
      var _a;

      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      (_a = this.ee).emit.apply(_a, __spreadArrays([event], args));

      return this;
    };

    Core.prototype.registerPlugin = function (name, plugin) {
      if (this.plugins[name]) {
        throw new Error("The plguin " + name + " is registered");
      }

      plugin.setCore(this);
      plugin.install();
      this.plugins[name] = plugin;
      return this;
    };

    Core.prototype.deregisterPlugin = function (name) {
      var plugin = this.plugins[name];

      if (plugin) {
        plugin.uninstall();
      }

      delete this.plugins[name];
      return this;
    };

    Core.prototype.registerValidator = function (name, func) {
      if (this.validators[name]) {
        throw new Error("The validator " + name + " is registered");
      }

      this.validators[name] = func;
      return this;
    };

    Core.prototype.registerFilter = function (name, func) {
      this.filter.add(name, func);
      return this;
    };

    Core.prototype.deregisterFilter = function (name, func) {
      this.filter.remove(name, func);
      return this;
    };

    Core.prototype.executeFilter = function (name, defaultValue, args) {
      return this.filter.execute(name, defaultValue, args);
    };

    Core.prototype.addField = function (field, options) {
      var opts = Object.assign({}, {
        selector: '',
        validators: {}
      }, options);
      this.fields[field] = this.fields[field] ? {
        selector: opts.selector || this.fields[field].selector,
        validators: Object.assign({}, this.fields[field].validators, opts.validators)
      } : opts;
      this.elements[field] = this.queryElements(field);
      this.emit('core.field.added', {
        elements: this.elements[field],
        field: field,
        options: this.fields[field]
      });
      return this;
    };

    Core.prototype.removeField = function (field) {
      if (!this.fields[field]) {
        throw new Error("The field " + field + " validators are not defined. Please ensure the field is added first");
      }

      var elements = this.elements[field];
      var options = this.fields[field];
      delete this.elements[field];
      delete this.fields[field];
      this.emit('core.field.removed', {
        elements: elements,
        field: field,
        options: options
      });
      return this;
    };

    Core.prototype.validate = function () {
      var _this = this;

      this.emit('core.form.validating');
      return this.filter.execute('validate-pre', Promise.resolve(), []).then(function () {
        return Promise.all(Object.keys(_this.fields).map(function (field) {
          return _this.validateField(field);
        })).then(function (results) {
          switch (true) {
            case results.indexOf('Invalid') !== -1:
              _this.emit('core.form.invalid');

              return Promise.resolve('Invalid');

            case results.indexOf('NotValidated') !== -1:
              _this.emit('core.form.notvalidated');

              return Promise.resolve('NotValidated');

            default:
              _this.emit('core.form.valid');

              return Promise.resolve('Valid');
          }
        });
      });
    };

    Core.prototype.validateField = function (field) {
      var _this = this;

      var result = this.results.get(field);

      if (result === 'Valid' || result === 'Invalid') {
        return Promise.resolve(result);
      }

      this.emit('core.field.validating', field);
      var elements = this.elements[field];

      if (elements.length === 0) {
        this.emit('core.field.valid', field);
        return Promise.resolve('Valid');
      }

      var type = elements[0].getAttribute('type');

      if ('radio' === type || 'checkbox' === type || elements.length === 1) {
        return this.validateElement(field, elements[0]);
      } else {
        return Promise.all(elements.map(function (ele) {
          return _this.validateElement(field, ele);
        })).then(function (results) {
          switch (true) {
            case results.indexOf('Invalid') !== -1:
              _this.emit('core.field.invalid', field);

              _this.results.set(field, 'Invalid');

              return Promise.resolve('Invalid');

            case results.indexOf('NotValidated') !== -1:
              _this.emit('core.field.notvalidated', field);

              _this.results["delete"](field);

              return Promise.resolve('NotValidated');

            default:
              _this.emit('core.field.valid', field);

              _this.results.set(field, 'Valid');

              return Promise.resolve('Valid');
          }
        });
      }
    };

    Core.prototype.validateElement = function (field, ele) {
      var _this = this;

      this.results["delete"](field);
      var elements = this.elements[field];
      var ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);

      if (ignored) {
        this.emit('core.element.ignored', {
          element: ele,
          elements: elements,
          field: field
        });
        return Promise.resolve('Ignored');
      }

      var validatorList = this.fields[field].validators;
      this.emit('core.element.validating', {
        element: ele,
        elements: elements,
        field: field
      });
      var promises = Object.keys(validatorList).map(function (v) {
        return function () {
          return _this.executeValidator(field, ele, v, validatorList[v]);
        };
      });
      return this.waterfall(promises).then(function (results) {
        var isValid = results.indexOf('Invalid') === -1;

        _this.emit('core.element.validated', {
          element: ele,
          elements: elements,
          field: field,
          valid: isValid
        });

        var type = ele.getAttribute('type');

        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
          _this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
        }

        return Promise.resolve(isValid ? 'Valid' : 'Invalid');
      })["catch"](function (reason) {
        _this.emit('core.element.notvalidated', {
          element: ele,
          elements: elements,
          field: field
        });

        return Promise.resolve(reason);
      });
    };

    Core.prototype.executeValidator = function (field, ele, v, opts) {
      var _this = this;

      var elements = this.elements[field];
      var name = this.filter.execute('validator-name', v, [v, field]);
      opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);

      if (!this.validators[name] || opts.enabled === false) {
        this.emit('core.validator.validated', {
          element: ele,
          elements: elements,
          field: field,
          result: this.normalizeResult(field, name, {
            valid: true
          }),
          validator: name
        });
        return Promise.resolve('Valid');
      }

      var validator = this.validators[name];
      var value = this.getElementValue(field, ele, name);
      var willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);

      if (!willValidate) {
        this.emit('core.validator.notvalidated', {
          element: ele,
          elements: elements,
          field: field,
          validator: v
        });
        return Promise.resolve('NotValidated');
      }

      this.emit('core.validator.validating', {
        element: ele,
        elements: elements,
        field: field,
        validator: v
      });
      var result = validator().validate({
        element: ele,
        elements: elements,
        field: field,
        l10n: this.localization,
        options: opts,
        value: value
      });
      var isPromise = 'function' === typeof result['then'];

      if (isPromise) {
        return result.then(function (r) {
          var data = _this.normalizeResult(field, v, r);

          _this.emit('core.validator.validated', {
            element: ele,
            elements: elements,
            field: field,
            result: data,
            validator: v
          });

          return data.valid ? 'Valid' : 'Invalid';
        });
      } else {
        var data = this.normalizeResult(field, v, result);
        this.emit('core.validator.validated', {
          element: ele,
          elements: elements,
          field: field,
          result: data,
          validator: v
        });
        return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
      }
    };

    Core.prototype.getElementValue = function (field, ele, validator) {
      var defaultValue = getFieldValue_1["default"](this.form, field, ele, this.elements[field]);
      return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
    };

    Core.prototype.getElements = function (field) {
      return this.elements[field];
    };

    Core.prototype.getFields = function () {
      return this.fields;
    };

    Core.prototype.getFormElement = function () {
      return this.form;
    };

    Core.prototype.getLocale = function () {
      return this.locale;
    };

    Core.prototype.getPlugin = function (name) {
      return this.plugins[name];
    };

    Core.prototype.updateFieldStatus = function (field, status, validator) {
      var _this = this;

      var elements = this.elements[field];
      var type = elements[0].getAttribute('type');
      var list = 'radio' === type || 'checkbox' === type ? [elements[0]] : elements;
      list.forEach(function (ele) {
        return _this.updateElementStatus(field, ele, status, validator);
      });

      if (!validator) {
        switch (status) {
          case 'NotValidated':
            this.emit('core.field.notvalidated', field);
            this.results["delete"](field);
            break;

          case 'Validating':
            this.emit('core.field.validating', field);
            this.results["delete"](field);
            break;

          case 'Valid':
            this.emit('core.field.valid', field);
            this.results.set(field, 'Valid');
            break;

          case 'Invalid':
            this.emit('core.field.invalid', field);
            this.results.set(field, 'Invalid');
            break;
        }
      }

      return this;
    };

    Core.prototype.updateElementStatus = function (field, ele, status, validator) {
      var _this = this;

      var elements = this.elements[field];
      var fieldValidators = this.fields[field].validators;
      var validatorArr = validator ? [validator] : Object.keys(fieldValidators);

      switch (status) {
        case 'NotValidated':
          validatorArr.forEach(function (v) {
            return _this.emit('core.validator.notvalidated', {
              element: ele,
              elements: elements,
              field: field,
              validator: v
            });
          });
          this.emit('core.element.notvalidated', {
            element: ele,
            elements: elements,
            field: field
          });
          break;

        case 'Validating':
          validatorArr.forEach(function (v) {
            return _this.emit('core.validator.validating', {
              element: ele,
              elements: elements,
              field: field,
              validator: v
            });
          });
          this.emit('core.element.validating', {
            element: ele,
            elements: elements,
            field: field
          });
          break;

        case 'Valid':
          validatorArr.forEach(function (v) {
            return _this.emit('core.validator.validated', {
              element: ele,
              field: field,
              result: {
                message: fieldValidators[v].message,
                valid: true
              },
              validator: v
            });
          });
          this.emit('core.element.validated', {
            element: ele,
            elements: elements,
            field: field,
            valid: true
          });
          break;

        case 'Invalid':
          validatorArr.forEach(function (v) {
            return _this.emit('core.validator.validated', {
              element: ele,
              field: field,
              result: {
                message: fieldValidators[v].message,
                valid: false
              },
              validator: v
            });
          });
          this.emit('core.element.validated', {
            element: ele,
            elements: elements,
            field: field,
            valid: false
          });
          break;
      }

      return this;
    };

    Core.prototype.resetForm = function (reset) {
      var _this = this;

      Object.keys(this.fields).forEach(function (field) {
        return _this.resetField(field, reset);
      });
      this.emit('core.form.reset', {
        reset: reset
      });
      return this;
    };

    Core.prototype.resetField = function (field, reset) {
      if (reset) {
        var elements = this.elements[field];
        var type_1 = elements[0].getAttribute('type');
        elements.forEach(function (ele) {
          if ('radio' === type_1 || 'checkbox' === type_1) {
            ele.removeAttribute('selected');
            ele.removeAttribute('checked');
            ele.checked = false;
          } else {
            ele.setAttribute('value', '');

            if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
              ele.value = '';
            }
          }
        });
      }

      this.updateFieldStatus(field, 'NotValidated');
      this.emit('core.field.reset', {
        field: field,
        reset: reset
      });
      return this;
    };

    Core.prototype.revalidateField = function (field) {
      this.updateFieldStatus(field, 'NotValidated');
      return this.validateField(field);
    };

    Core.prototype.disableValidator = function (field, validator) {
      return this.toggleValidator(false, field, validator);
    };

    Core.prototype.enableValidator = function (field, validator) {
      return this.toggleValidator(true, field, validator);
    };

    Core.prototype.updateValidatorOption = function (field, validator, name, value) {
      if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
        this.fields[field].validators[validator][name] = value;
      }

      return this;
    };

    Core.prototype.setFieldOptions = function (field, options) {
      this.fields[field] = options;
      return this;
    };

    Core.prototype.destroy = function () {
      var _this = this;

      Object.keys(this.plugins).forEach(function (id) {
        return _this.plugins[id].uninstall();
      });
      this.ee.clear();
      this.filter.clear();
      this.results.clear();
      this.plugins = {};
      return this;
    };

    Core.prototype.setLocale = function (locale, localization) {
      this.locale = locale;
      this.localization = localization;
      return this;
    };

    Core.prototype.waterfall = function (promises) {
      return promises.reduce(function (p, c, i, a) {
        return p.then(function (res) {
          return c().then(function (result) {
            res.push(result);
            return res;
          });
        });
      }, Promise.resolve([]));
    };

    Core.prototype.queryElements = function (field) {
      var selector = this.fields[field].selector ? '#' === this.fields[field].selector.charAt(0) ? "[id=\"" + this.fields[field].selector.substring(1) + "\"]" : this.fields[field].selector : "[name=\"" + field + "\"]";
      return [].slice.call(this.form.querySelectorAll(selector));
    };

    Core.prototype.normalizeResult = function (field, validator, result) {
      var opts = this.fields[field].validators[validator];
      return Object.assign({}, result, {
        message: result.message || (opts ? opts.message : '') || (this.localization && this.localization[validator] && this.localization[validator]["default"] ? this.localization[validator]["default"] : '') || "The field " + field + " is not valid"
      });
    };

    Core.prototype.toggleValidator = function (enabled, field, validator) {
      var _this = this;

      var validatorArr = this.fields[field].validators;

      if (validator && validatorArr && validatorArr[validator]) {
        this.fields[field].validators[validator].enabled = enabled;
      } else if (!validator) {
        Object.keys(validatorArr).forEach(function (v) {
          return _this.fields[field].validators[v].enabled = enabled;
        });
      }

      return this.updateFieldStatus(field, 'NotValidated', validator);
    };

    return Core;
  }();

  exports.Core = Core;

  function formValidation(form, options) {
    var opts = Object.assign({}, {
      fields: {},
      locale: 'en_US',
      plugins: {}
    }, options);
    var core = new Core(form, opts.fields);
    core.setLocale(opts.locale, opts.localization);
    Object.keys(opts.plugins).forEach(function (name) {
      return core.registerPlugin(name, opts.plugins[name]);
    });
    Object.keys(index_1["default"]).forEach(function (name) {
      return core.registerValidator(name, index_1["default"][name]);
    });
    Object.keys(opts.fields).forEach(function (field) {
      return core.addField(field, opts.fields[field]);
    });
    return core;
  }

  exports.default = formValidation;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/emitter.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/emitter.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function emitter() {
    return {
      fns: {},
      clear: function clear() {
        this.fns = {};
      },
      emit: function emit(event) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        (this.fns[event] || []).map(function (handler) {
          return handler.apply(handler, args);
        });
      },
      off: function off(event, func) {
        if (this.fns[event]) {
          var index = this.fns[event].indexOf(func);

          if (index >= 0) {
            this.fns[event].splice(index, 1);
          }
        }
      },
      on: function on(event, func) {
        (this.fns[event] = this.fns[event] || []).push(func);
      }
    };
  }

  exports.default = emitter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/filter.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/filter.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function filter() {
    return {
      filters: {},
      add: function add(name, func) {
        (this.filters[name] = this.filters[name] || []).push(func);
      },
      clear: function clear() {
        this.filters = {};
      },
      execute: function execute(name, defaultValue, args) {
        if (!this.filters[name] || !this.filters[name].length) {
          return defaultValue;
        }

        var result = defaultValue;
        var filters = this.filters[name];
        var count = filters.length;

        for (var i = 0; i < count; i++) {
          result = filters[i].apply(result, args);
        }

        return result;
      },
      remove: function remove(name, func) {
        if (this.filters[name]) {
          this.filters[name] = this.filters[name].filter(function (f) {
            return f !== func;
          });
        }
      }
    };
  }

  exports.default = filter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/index.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Core */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Core.js"), __webpack_require__(/*! ./Plugin */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/Plugin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Core_1, Plugin_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.Plugin = void 0;
  exports.Plugin = Plugin_1["default"];
  exports.default = Core_1["default"];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function getFieldValue(form, field, element, elements) {
    var type = (element.getAttribute('type') || '').toLowerCase();
    var tagName = element.tagName.toLowerCase();

    switch (tagName) {
      case 'textarea':
        return element.value;

      case 'select':
        var select = element;
        var index = select.selectedIndex;
        return index >= 0 ? select.options.item(index).value : '';

      case 'input':
        if ('radio' === type || 'checkbox' === type) {
          var checked = elements.filter(function (ele) {
            return ele.checked;
          }).length;
          return checked === 0 ? '' : checked + '';
        } else {
          return element.value;
        }

      default:
        return '';
    }
  }

  exports.default = getFieldValue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/index.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./getFieldValue */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/getFieldValue.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, getFieldValue_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    getFieldValue: getFieldValue_1["default"]
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/index.js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/index.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./algorithms/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/index.js"), __webpack_require__(/*! ./core/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/core/index.js"), __webpack_require__(/*! ./filters/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/filters/index.js"), __webpack_require__(/*! ./plugins/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/index.js"), __webpack_require__(/*! ./utils/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/index.js"), __webpack_require__(/*! ./validators/index */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1, index_2, index_3, index_4, index_5, index_6) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.Plugin = exports.validators = exports.utils = exports.plugins = exports.locales = exports.filters = exports.formValidation = exports.algorithms = void 0;
  exports.algorithms = index_1["default"];
  exports.formValidation = index_2["default"];
  Object.defineProperty(exports, "Plugin", ({
    enumerable: true,
    get: function get() {
      return index_2.Plugin;
    }
  }));
  exports.filters = index_3["default"];
  exports.plugins = index_4["default"];
  exports.utils = index_5["default"];
  exports.validators = index_6["default"];
  var locales = {};
  exports.locales = locales;
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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function call(functionName, args) {
    if ('function' === typeof functionName) {
      return functionName.apply(this, args);
    } else if ('string' === typeof functionName) {
      var name_1 = functionName;

      if ('()' === name_1.substring(name_1.length - 2)) {
        name_1 = name_1.substring(0, name_1.length - 2);
      }

      var ns = name_1.split('.');
      var func = ns.pop();
      var context_1 = window;

      for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
        var t = ns_1[_i];
        context_1 = context_1[t];
      }

      return typeof context_1[func] === 'undefined' ? null : context_1[func].apply(this, args);
    }
  }

  exports.default = call;
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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function fetch(url, options) {
    var toQuery = function toQuery(obj) {
      return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
      }).join('&');
    };

    return new Promise(function (resolve, reject) {
      var opts = Object.assign({}, {
        crossDomain: false,
        headers: {},
        method: 'GET',
        params: {}
      }, options);
      var params = Object.keys(opts.params).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(opts.params[k]);
      }).join('&');
      var hasQuery = url.indexOf('?');
      var requestUrl = 'GET' === opts.method ? "" + url + (hasQuery ? '?' : '&') + params : url;

      if (opts.crossDomain) {
        var script_1 = document.createElement('script');
        var callback_1 = "___fetch" + Date.now() + "___";

        window[callback_1] = function (data) {
          delete window[callback_1];
          resolve(data);
        };

        script_1.src = "" + requestUrl + (hasQuery ? '&' : '?') + "callback=" + callback_1;
        script_1.async = true;
        script_1.addEventListener('load', function () {
          script_1.parentNode.removeChild(script_1);
        });
        script_1.addEventListener('error', function () {
          return reject;
        });
        document.head.appendChild(script_1);
      } else {
        var request_1 = new XMLHttpRequest();
        request_1.open(opts.method, requestUrl);
        request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        if ('POST' === opts.method) {
          request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        Object.keys(opts.headers).forEach(function (k) {
          return request_1.setRequestHeader(k, opts.headers[k]);
        });
        request_1.addEventListener('load', function () {
          resolve(JSON.parse(this.responseText));
        });
        request_1.addEventListener('error', function () {
          return reject;
        });
        request_1.send(toQuery(opts.params));
      }
    });
  }

  exports.default = fetch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js ***!
  \***********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function format(message, parameters) {
    var params = Array.isArray(parameters) ? parameters : [parameters];
    var output = message;
    params.forEach(function (p) {
      output = output.replace('%s', p);
    });
    return output;
  }

  exports.default = format;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/hasClass.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/hasClass.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function hasClass(element, clazz) {
    return element.classList ? element.classList.contains(clazz) : new RegExp("(^| )" + clazz + "( |$)", 'gi').test(element.className);
  }

  exports.default = hasClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/index.js ***!
  \**********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js"), __webpack_require__(/*! ./classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ./closest */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/closest.js"), __webpack_require__(/*! ./fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js"), __webpack_require__(/*! ./format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js"), __webpack_require__(/*! ./hasClass */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/hasClass.js"), __webpack_require__(/*! ./isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1, classSet_1, closest_1, fetch_1, format_1, hasClass_1, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    call: call_1["default"],
    classSet: classSet_1["default"],
    closest: closest_1["default"],
    fetch: fetch_1["default"],
    format: format_1["default"],
    hasClass: hasClass_1["default"],
    isValidDate: isValidDate_1["default"]
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function isValidDate(year, month, day, notInFuture) {
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return false;
    }

    if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
      return false;
    }

    var numDays = [31, year % 400 === 0 || year % 100 !== 0 && year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day <= 0 || day > numDays[month - 1]) {
      return false;
    }

    if (notInFuture === true) {
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getMonth();
      var currentDay = currentDate.getDate();
      return year < currentYear || year === currentYear && month - 1 < currentMonth || year === currentYear && month - 1 === currentMonth && day < currentDay;
    }

    return true;
  }

  exports.default = isValidDate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function between() {
    var formatValue = function formatValue(value) {
      return parseFloat(("" + value).replace(',', '.'));
    };

    return {
      validate: function validate(input) {
        var value = input.value;

        if (value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var minValue = formatValue(opts.min);
        var maxValue = formatValue(opts.max);
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between["default"] : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, ["" + minValue, "" + maxValue]),
          valid: parseFloat(value) > minValue && parseFloat(value) < maxValue
        };
      }
    };
  }

  exports.default = between;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function blank() {
    return {
      validate: function validate(input) {
        return {
          valid: true
        };
      }
    };
  }

  exports.default = blank;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function callback() {
    return {
      validate: function validate(input) {
        var response = call_1["default"](input.options.callback, [input]);
        return 'boolean' === typeof response ? {
          valid: response
        } : response;
      }
    };
  }

  exports.default = callback;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function choice() {
    return {
      validate: function validate(input) {
        var numChoices = 'select' === input.element.tagName.toLowerCase() ? input.element.querySelectorAll('option:checked').length : input.elements.filter(function (ele) {
          return ele.checked;
        }).length;
        var min = input.options.min ? "" + input.options.min : '';
        var max = input.options.max ? "" + input.options.max : '';
        var msg = input.l10n ? input.options.message || input.l10n.choice["default"] : input.options.message;
        var isValid = !(min && numChoices < parseInt(min, 10) || max && numChoices > parseInt(max, 10));

        switch (true) {
          case !!min && !!max:
            msg = format_1["default"](input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
            break;

          case !!min:
            msg = format_1["default"](input.l10n ? input.l10n.choice.more : input.options.message, min);
            break;

          case !!max:
            msg = format_1["default"](input.l10n ? input.l10n.choice.less : input.options.message, max);
            break;

          default:
            break;
        }

        return {
          message: msg,
          valid: isValid
        };
      }
    };
  }

  exports.default = choice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../algorithms/luhn */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/algorithms/luhn.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, luhn_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.CREDIT_CARD_TYPES = void 0;
  var CREDIT_CARD_TYPES = {
    AMERICAN_EXPRESS: {
      length: [15],
      prefix: ['34', '37']
    },
    DANKORT: {
      length: [16],
      prefix: ['5019']
    },
    DINERS_CLUB: {
      length: [14],
      prefix: ['300', '301', '302', '303', '304', '305', '36']
    },
    DINERS_CLUB_US: {
      length: [16],
      prefix: ['54', '55']
    },
    DISCOVER: {
      length: [16],
      prefix: ['6011', '622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925', '644', '645', '646', '647', '648', '649', '65']
    },
    ELO: {
      length: [16],
      prefix: ['4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509', '6277', '6362', '6363', '650', '6516', '6550']
    },
    FORBRUGSFORENINGEN: {
      length: [16],
      prefix: ['600722']
    },
    JCB: {
      length: [16],
      prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
    },
    LASER: {
      length: [16, 17, 18, 19],
      prefix: ['6304', '6706', '6771', '6709']
    },
    MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
    },
    MASTERCARD: {
      length: [16],
      prefix: ['51', '52', '53', '54', '55']
    },
    SOLO: {
      length: [16, 18, 19],
      prefix: ['6334', '6767']
    },
    UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: ['622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925']
    },
    VISA: {
      length: [16],
      prefix: ['4']
    },
    VISA_ELECTRON: {
      length: [16],
      prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917']
    }
  };
  exports.CREDIT_CARD_TYPES = CREDIT_CARD_TYPES;

  function creditCard() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: {
              type: null
            },
            valid: true
          };
        }

        if (/[^0-9-\s]+/.test(input.value)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        var v = input.value.replace(/\D/g, '');

        if (!luhn_1["default"](v)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        for (var _i = 0, _a = Object.keys(CREDIT_CARD_TYPES); _i < _a.length; _i++) {
          var tpe = _a[_i];

          for (var i in CREDIT_CARD_TYPES[tpe].prefix) {
            if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) === CREDIT_CARD_TYPES[tpe].prefix[i] && CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
              return {
                meta: {
                  type: tpe
                },
                valid: true
              };
            }
          }
        }

        return {
          meta: {
            type: null
          },
          valid: false
        };
      }
    };
  }

  exports.default = creditCard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js"), __webpack_require__(/*! ../utils/isValidDate */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/isValidDate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1, isValidDate_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function date() {
    var parseDate = function parseDate(input, inputFormat, separator) {
      var yearIndex = inputFormat.indexOf('YYYY');
      var monthIndex = inputFormat.indexOf('MM');
      var dayIndex = inputFormat.indexOf('DD');

      if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
        return null;
      }

      var sections = input.split(' ');
      var dateSection = sections[0].split(separator);

      if (dateSection.length < 3) {
        return null;
      }

      var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));

      if (sections.length > 1) {
        var timeSection = sections[1].split(':');
        d.setHours(timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0);
        d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
        d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
      }

      return d;
    };

    var formatDate = function formatDate(input, inputFormat) {
      var dateFormat = inputFormat.replace(/Y/g, 'y').replace(/M/g, 'm').replace(/D/g, 'd').replace(/:m/g, ':M').replace(/:mm/g, ':MM').replace(/:S/, ':s').replace(/:SS/, ':ss');
      var d = input.getDate();
      var dd = d < 10 ? "0" + d : d;
      var m = input.getMonth() + 1;
      var mm = m < 10 ? "0" + m : m;
      var yy = ("" + input.getFullYear()).substr(2);
      var yyyy = input.getFullYear();
      var h = input.getHours() % 12 || 12;
      var hh = h < 10 ? "0" + h : h;
      var H = input.getHours();
      var HH = H < 10 ? "0" + H : H;
      var M = input.getMinutes();
      var MM = M < 10 ? "0" + M : M;
      var s = input.getSeconds();
      var ss = s < 10 ? "0" + s : s;
      var replacer = {
        H: "" + H,
        HH: "" + HH,
        M: "" + M,
        MM: "" + MM,
        d: "" + d,
        dd: "" + dd,
        h: "" + h,
        hh: "" + hh,
        m: "" + m,
        mm: "" + mm,
        s: "" + s,
        ss: "" + ss,
        yy: "" + yy,
        yyyy: "" + yyyy
      };
      return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
        return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
      });
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            meta: {
              date: null
            },
            valid: true
          };
        }

        var opts = Object.assign({}, {
          format: input.element && input.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
          message: ''
        }, input.options);
        var message = input.l10n ? input.l10n.date["default"] : opts.message;
        var invalidResult = {
          message: "" + message,
          meta: {
            date: null
          },
          valid: false
        };
        var formats = opts.format.split(' ');
        var timeFormat = formats.length > 1 ? formats[1] : null;
        var amOrPm = formats.length > 2 ? formats[2] : null;
        var sections = input.value.split(' ');
        var dateSection = sections[0];
        var timeSection = sections.length > 1 ? sections[1] : null;

        if (formats.length !== sections.length) {
          return invalidResult;
        }

        var separator = opts.separator || (dateSection.indexOf('/') !== -1 ? '/' : dateSection.indexOf('-') !== -1 ? '-' : dateSection.indexOf('.') !== -1 ? '.' : '/');

        if (separator === null || dateSection.indexOf(separator) === -1) {
          return invalidResult;
        }

        var dateStr = dateSection.split(separator);
        var dateFormat = formats[0].split(separator);

        if (dateStr.length !== dateFormat.length) {
          return invalidResult;
        }

        var yearStr = dateStr[dateFormat.indexOf('YYYY')];
        var monthStr = dateStr[dateFormat.indexOf('MM')];
        var dayStr = dateStr[dateFormat.indexOf('DD')];

        if (!/^\d+$/.test(yearStr) || !/^\d+$/.test(monthStr) || !/^\d+$/.test(dayStr) || yearStr.length > 4 || monthStr.length > 2 || dayStr.length > 2) {
          return invalidResult;
        }

        var year = parseInt(yearStr, 10);
        var month = parseInt(monthStr, 10);
        var day = parseInt(dayStr, 10);

        if (!isValidDate_1["default"](year, month, day)) {
          return invalidResult;
        }

        var d = new Date(year, month - 1, day);

        if (timeFormat) {
          var hms = timeSection.split(':');

          if (timeFormat.split(':').length !== hms.length) {
            return invalidResult;
          }

          var h = hms.length > 0 ? hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1 : 0;
          var m = hms.length > 1 ? hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1 : 0;
          var s = hms.length > 2 ? hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1 : 0;

          if (h === -1 || m === -1 || s === -1) {
            return invalidResult;
          }

          if (s < 0 || s > 60) {
            return invalidResult;
          }

          if (h < 0 || h >= 24 || amOrPm && h > 12) {
            return invalidResult;
          }

          if (m < 0 || m > 59) {
            return invalidResult;
          }

          d.setHours(h);
          d.setMinutes(m);
          d.setSeconds(s);
        }

        var minOption = typeof opts.min === 'function' ? opts.min() : opts.min;
        var min = minOption instanceof Date ? minOption : minOption ? parseDate(minOption, dateFormat, separator) : d;
        var maxOption = typeof opts.max === 'function' ? opts.max() : opts.max;
        var max = maxOption instanceof Date ? maxOption : maxOption ? parseDate(maxOption, dateFormat, separator) : d;
        var minOptionStr = minOption instanceof Date ? formatDate(min, opts.format) : minOption;
        var maxOptionStr = maxOption instanceof Date ? formatDate(max, opts.format) : maxOption;

        switch (true) {
          case !!minOptionStr && !maxOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.min : message, minOptionStr),
              meta: {
                date: d
              },
              valid: d.getTime() >= min.getTime()
            };

          case !!maxOptionStr && !minOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.max : message, maxOptionStr),
              meta: {
                date: d
              },
              valid: d.getTime() <= max.getTime()
            };

          case !!maxOptionStr && !!minOptionStr:
            return {
              message: format_1["default"](input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
              meta: {
                date: d
              },
              valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime()
            };

          default:
            return {
              message: "" + message,
              meta: {
                date: d
              },
              valid: true
            };
        }
      }
    };
  }

  exports.default = date;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function different() {
    return {
      validate: function validate(input) {
        var compareWith = 'function' === typeof input.options.compare ? input.options.compare.call(this) : input.options.compare;
        return {
          valid: compareWith === '' || input.value !== compareWith
        };
      }
    };
  }

  exports.default = different;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function digits() {
    return {
      validate: function validate(input) {
        return {
          valid: input.value === '' || /^\d+$/.test(input.value)
        };
      }
    };
  }

  exports.default = digits;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function emailAddress() {
    var splitEmailAddresses = function splitEmailAddresses(emailAddresses, separator) {
      var quotedFragments = emailAddresses.split(/"/);
      var quotedFragmentCount = quotedFragments.length;
      var emailAddressArray = [];
      var nextEmailAddress = '';

      for (var i = 0; i < quotedFragmentCount; i++) {
        if (i % 2 === 0) {
          var splitEmailAddressFragments = quotedFragments[i].split(separator);
          var splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

          if (splitEmailAddressFragmentCount === 1) {
            nextEmailAddress += splitEmailAddressFragments[0];
          } else {
            emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

            for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
              emailAddressArray.push(splitEmailAddressFragments[j]);
            }

            nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
          }
        } else {
          nextEmailAddress += '"' + quotedFragments[i];

          if (i < quotedFragmentCount - 1) {
            nextEmailAddress += '"';
          }
        }
      }

      emailAddressArray.push(nextEmailAddress);
      return emailAddressArray;
    };

    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          multiple: false,
          separator: /[,;]/
        }, input.options);
        var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var allowMultiple = opts.multiple === true || "" + opts.multiple === 'true';

        if (allowMultiple) {
          var separator = opts.separator || /[,;]/;
          var addresses = splitEmailAddresses(input.value, separator);
          var length_1 = addresses.length;

          for (var i = 0; i < length_1; i++) {
            if (!emailRegExp.test(addresses[i])) {
              return {
                valid: false
              };
            }
          }

          return {
            valid: true
          };
        } else {
          return {
            valid: emailRegExp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = emailAddress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function file() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var extension;
        var extensions = input.options.extension ? input.options.extension.toLowerCase().split(',') : null;
        var types = input.options.type ? input.options.type.toLowerCase().split(',') : null;
        var html5 = window['File'] && window['FileList'] && window['FileReader'];

        if (html5) {
          var files = input.element.files;
          var total = files.length;
          var allSize = 0;

          if (input.options.maxFiles && total > parseInt("" + input.options.maxFiles, 10)) {
            return {
              meta: {
                error: 'INVALID_MAX_FILES'
              },
              valid: false
            };
          }

          if (input.options.minFiles && total < parseInt("" + input.options.minFiles, 10)) {
            return {
              meta: {
                error: 'INVALID_MIN_FILES'
              },
              valid: false
            };
          }

          var metaData = {};

          for (var i = 0; i < total; i++) {
            allSize += files[i].size;
            extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
            metaData = {
              ext: extension,
              file: files[i],
              size: files[i].size,
              type: files[i].type
            };

            if (input.options.minSize && files[i].size < parseInt("" + input.options.minSize, 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MIN_SIZE'
                }, metaData),
                valid: false
              };
            }

            if (input.options.maxSize && files[i].size > parseInt("" + input.options.maxSize, 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MAX_SIZE'
                }, metaData),
                valid: false
              };
            }

            if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_EXTENSION'
                }, metaData),
                valid: false
              };
            }

            if (files[i].type && types && types.indexOf(files[i].type.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_TYPE'
                }, metaData),
                valid: false
              };
            }
          }

          if (input.options.maxTotalSize && allSize > parseInt("" + input.options.maxTotalSize, 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MAX_TOTAL_SIZE',
                totalSize: allSize
              }, metaData),
              valid: false
            };
          }

          if (input.options.minTotalSize && allSize < parseInt("" + input.options.minTotalSize, 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MIN_TOTAL_SIZE',
                totalSize: allSize
              }, metaData),
              valid: false
            };
          }
        } else {
          extension = input.value.substr(input.value.lastIndexOf('.') + 1);

          if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
            return {
              meta: {
                error: 'INVALID_EXTENSION',
                ext: extension
              },
              valid: false
            };
          }
        }

        return {
          valid: true
        };
      }
    };
  }

  exports.default = file;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function greaterThan() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var minValue = parseFloat(("" + opts.min).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan["default"] : opts.message, "" + minValue),
          valid: parseFloat(input.value) >= minValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "" + minValue),
          valid: parseFloat(input.value) > minValue
        };
      }
    };
  }

  exports.default = greaterThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js ***!
  \*******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function identical() {
    return {
      validate: function validate(input) {
        var compareWith = 'function' === typeof input.options.compare ? input.options.compare.call(this) : input.options.compare;
        return {
          valid: compareWith === '' || input.value === compareWith
        };
      }
    };
  }

  exports.default = identical;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/index.js ***!
  \***************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./between */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/between.js"), __webpack_require__(/*! ./blank */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/blank.js"), __webpack_require__(/*! ./callback */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/callback.js"), __webpack_require__(/*! ./choice */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/choice.js"), __webpack_require__(/*! ./creditCard */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/creditCard.js"), __webpack_require__(/*! ./date */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/date.js"), __webpack_require__(/*! ./different */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/different.js"), __webpack_require__(/*! ./digits */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/digits.js"), __webpack_require__(/*! ./emailAddress */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/emailAddress.js"), __webpack_require__(/*! ./file */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/file.js"), __webpack_require__(/*! ./greaterThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/greaterThan.js"), __webpack_require__(/*! ./identical */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/identical.js"), __webpack_require__(/*! ./integer */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js"), __webpack_require__(/*! ./ip */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js"), __webpack_require__(/*! ./lessThan */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js"), __webpack_require__(/*! ./notEmpty */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js"), __webpack_require__(/*! ./numeric */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js"), __webpack_require__(/*! ./promise */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js"), __webpack_require__(/*! ./regexp */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js"), __webpack_require__(/*! ./remote */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js"), __webpack_require__(/*! ./stringCase */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js"), __webpack_require__(/*! ./stringLength */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js"), __webpack_require__(/*! ./uri */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, between_1, blank_1, callback_1, choice_1, creditCard_1, date_1, different_1, digits_1, emailAddress_1, file_1, greaterThan_1, identical_1, integer_1, ip_1, lessThan_1, notEmpty_1, numeric_1, promise_1, regexp_1, remote_1, stringCase_1, stringLength_1, uri_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.default = {
    between: between_1["default"],
    blank: blank_1["default"],
    callback: callback_1["default"],
    choice: choice_1["default"],
    creditCard: creditCard_1["default"],
    date: date_1["default"],
    different: different_1["default"],
    digits: digits_1["default"],
    emailAddress: emailAddress_1["default"],
    file: file_1["default"],
    greaterThan: greaterThan_1["default"],
    identical: identical_1["default"],
    integer: integer_1["default"],
    ip: ip_1["default"],
    lessThan: lessThan_1["default"],
    notEmpty: notEmpty_1["default"],
    numeric: numeric_1["default"],
    promise: promise_1["default"],
    regexp: regexp_1["default"],
    remote: remote_1["default"],
    stringCase: stringCase_1["default"],
    stringLength: stringLength_1["default"],
    uri: uri_1["default"]
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/integer.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function integer() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, input.options);
        var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
        var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
        var testRegexp = new RegExp("^-?[0-9]{1,3}(" + thousandsSeparator + "[0-9]{3})*(" + decimalSeparator + "[0-9]+)?$");
        var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
        var v = "" + input.value;

        if (!testRegexp.test(v)) {
          return {
            valid: false
          };
        }

        if (thousandsSeparator) {
          v = v.replace(thousandsReplacer, '');
        }

        if (decimalSeparator) {
          v = v.replace(decimalSeparator, '.');
        }

        var n = parseFloat(v);
        return {
          valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n
        };
      }
    };
  }

  exports.default = integer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/ip.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function ip() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          ipv4: true,
          ipv6: true
        }, input.options);
        var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
        var ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;

        switch (true) {
          case opts.ipv4 && !opts.ipv6:
            return {
              message: input.l10n ? opts.message || input.l10n.ip.ipv4 : opts.message,
              valid: ipv4Regex.test(input.value)
            };

          case !opts.ipv4 && opts.ipv6:
            return {
              message: input.l10n ? opts.message || input.l10n.ip.ipv6 : opts.message,
              valid: ipv6Regex.test(input.value)
            };

          case opts.ipv4 && opts.ipv6:
          default:
            return {
              message: input.l10n ? opts.message || input.l10n.ip["default"] : opts.message,
              valid: ipv4Regex.test(input.value) || ipv6Regex.test(input.value)
            };
        }
      }
    };
  }

  exports.default = ip;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/lessThan.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function lessThan() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          inclusive: true,
          message: ''
        }, input.options);
        var maxValue = parseFloat(("" + opts.max).replace(',', '.'));
        return opts.inclusive ? {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan["default"] : opts.message, "" + maxValue),
          valid: parseFloat(input.value) <= maxValue
        } : {
          message: format_1["default"](input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "" + maxValue),
          valid: parseFloat(input.value) < maxValue
        };
      }
    };
  }

  exports.default = lessThan;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/notEmpty.js ***!
  \******************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function notEmpty() {
    return {
      validate: function validate(input) {
        var trim = !!input.options && !!input.options.trim;
        var value = input.value;
        return {
          valid: !trim && value !== '' || trim && value !== '' && value.trim() !== ''
        };
      }
    };
  }

  exports.default = notEmpty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/numeric.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function numeric() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, input.options);
        var v = "" + input.value;

        if (v.substr(0, 1) === opts.decimalSeparator) {
          v = "0" + opts.decimalSeparator + v.substr(1);
        } else if (v.substr(0, 2) === "-" + opts.decimalSeparator) {
          v = "-0" + opts.decimalSeparator + v.substr(2);
        }

        var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
        var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
        var testRegexp = new RegExp("^-?[0-9]{1,3}(" + thousandsSeparator + "[0-9]{3})*(" + decimalSeparator + "[0-9]+)?$");
        var thousandsReplacer = new RegExp(thousandsSeparator, 'g');

        if (!testRegexp.test(v)) {
          return {
            valid: false
          };
        }

        if (thousandsSeparator) {
          v = v.replace(thousandsReplacer, '');
        }

        if (decimalSeparator) {
          v = v.replace(decimalSeparator, '.');
        }

        var n = parseFloat(v);
        return {
          valid: !isNaN(n) && isFinite(n)
        };
      }
    };
  }

  exports.default = numeric;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/promise.js ***!
  \*****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/call */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/call.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, call_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function promise() {
    return {
      validate: function validate(input) {
        return call_1["default"](input.options.promise, [input]);
      }
    };
  }

  exports.default = promise;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/regexp.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function regexp() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var reg = input.options.regexp;

        if (reg instanceof RegExp) {
          return {
            valid: reg.test(input.value)
          };
        } else {
          var pattern = reg.toString();
          var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
          return {
            valid: exp.test(input.value)
          };
        }
      }
    };
  }

  exports.default = regexp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/remote.js ***!
  \****************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/fetch.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, fetch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function remote() {
    var DEFAULT_OPTIONS = {
      crossDomain: false,
      data: {},
      headers: {},
      method: 'GET',
      validKey: 'valid'
    };
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return Promise.resolve({
            valid: true
          });
        }

        var opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
        var data = opts.data;

        if ('function' === typeof opts.data) {
          data = opts.data.call(this, input);
        }

        if ('string' === typeof data) {
          data = JSON.parse(data);
        }

        data[opts.name || input.field] = input.value;
        var url = 'function' === typeof opts.url ? opts.url.call(this, input) : opts.url;
        return fetch_1["default"](url, {
          crossDomain: opts.crossDomain,
          headers: opts.headers,
          method: opts.method,
          params: data
        }).then(function (response) {
          return Promise.resolve({
            message: response.message,
            meta: response,
            valid: "" + response[opts.validKey] === 'true'
          });
        })["catch"](function (reason) {
          return Promise.reject({
            valid: false
          });
        });
      }
    };
  }

  exports.default = remote;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringCase.js ***!
  \********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringCase() {
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, {
          "case": 'lower'
        }, input.options);
        var caseOpt = (opts["case"] || 'lower').toLowerCase();
        return {
          message: opts.message || (input.l10n ? 'upper' === caseOpt ? input.l10n.stringCase.upper : input.l10n.stringCase["default"] : opts.message),
          valid: 'upper' === caseOpt ? input.value === input.value.toUpperCase() : input.value === input.value.toLowerCase()
        };
      }
    };
  }

  exports.default = stringCase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/stringLength.js ***!
  \**********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/format */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/format.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, format_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function stringLength() {
    var utf8Length = function utf8Length(str) {
      var s = str.length;

      for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);

        if (code > 0x7f && code <= 0x7ff) {
          s++;
        } else if (code > 0x7ff && code <= 0xffff) {
          s += 2;
        }

        if (code >= 0xDC00 && code <= 0xDFFF) {
          i--;
        }
      }

      return "" + s;
    };

    return {
      validate: function validate(input) {
        var opts = Object.assign({}, {
          message: '',
          trim: false,
          utf8Bytes: false
        }, input.options);
        var v = opts.trim === true || "" + opts.trim === 'true' ? input.value.trim() : input.value;

        if (v === '') {
          return {
            valid: true
          };
        }

        var min = opts.min ? "" + opts.min : '';
        var max = opts.max ? "" + opts.max : '';
        var length = opts.utf8Bytes ? utf8Length(v) : v.length;
        var isValid = true;
        var msg = input.l10n ? opts.message || input.l10n.stringLength["default"] : opts.message;

        if (min && length < parseInt(min, 10) || max && length > parseInt(max, 10)) {
          isValid = false;
        }

        switch (true) {
          case !!min && !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [min, max]);
            break;

          case !!min:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "" + (parseInt(min, 10) - 1));
            break;

          case !!max:
            msg = format_1["default"](input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "" + (parseInt(max, 10) + 1));
            break;

          default:
            break;
        }

        return {
          message: msg,
          valid: isValid
        };
      }
    };
  }

  exports.default = stringLength;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/validators/uri.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  function uri() {
    var DEFAULT_OPTIONS = {
      allowEmptyProtocol: false,
      allowLocal: false,
      protocol: 'http, https, ftp'
    };
    return {
      validate: function validate(input) {
        if (input.value === '') {
          return {
            valid: true
          };
        }

        var opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
        var allowLocal = opts.allowLocal === true || "" + opts.allowLocal === 'true';
        var allowEmptyProtocol = opts.allowEmptyProtocol === true || "" + opts.allowEmptyProtocol === 'true';
        var protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
        var urlExp = new RegExp("^" + "(?:(?:" + protocol + ")://)" + (allowEmptyProtocol ? '?' : '') + "(?:\\S+(?::\\S*)?@)?" + "(?:" + (allowLocal ? '' : "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" + "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" + "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (allowLocal ? '?' : '') + ")" + "(?::\\d{2,5})?" + "(?:/[^\\s]*)?$", "i");
        return {
          valid: urlExp.test(input.value)
        };
      }
    };
  }

  exports.default = uri;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
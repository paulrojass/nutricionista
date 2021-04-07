(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_amd_plugins_Uikit_js"],{

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

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Uikit.js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Uikit.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/classSet */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ./Framework */ "./resources/js/Pages/assets/plugins/formvalidation/dist/amd/plugins/Framework.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, classSet_1, Framework_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));

  var Uikit = function (_super) {
    __extends(Uikit, _super);

    function Uikit(opts) {
      return _super.call(this, Object.assign({}, {
        formClass: 'fv-plugins-uikit',
        messageClass: 'uk-text-danger',
        rowInvalidClass: 'uk-form-danger',
        rowPattern: /^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,
        rowSelector: '.uk-margin',
        rowValidClass: 'uk-form-success'
      }, opts)) || this;
    }

    Uikit.prototype.onIconPlaced = function (e) {
      var type = e.element.getAttribute('type');

      if ('checkbox' === type || 'radio' === type) {
        var parent_1 = e.element.parentElement;
        classSet_1["default"](e.iconElement, {
          'fv-plugins-icon-check': true
        });
        parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
      }
    };

    return Uikit;
  }(Framework_1["default"]);

  exports.default = Uikit;
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
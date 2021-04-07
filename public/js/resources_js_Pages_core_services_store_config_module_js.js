(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_services_store_config_module_js"],{

/***/ "./resources/js/Pages/core/services/store/config.module.js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/core/services/store/config.module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_LAYOUT_CONFIG": () => (/* binding */ SET_LAYOUT_CONFIG),
/* harmony export */   "RESET_LAYOUT_CONFIG": () => (/* binding */ RESET_LAYOUT_CONFIG),
/* harmony export */   "OVERRIDE_LAYOUT_CONFIG": () => (/* binding */ OVERRIDE_LAYOUT_CONFIG),
/* harmony export */   "OVERRIDE_PAGE_LAYOUT_CONFIG": () => (/* binding */ OVERRIDE_PAGE_LAYOUT_CONFIG),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/layout.config.json */ "./resources/js/Pages/core/config/layout.config.json");
var _actions, _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // action types

var SET_LAYOUT_CONFIG = "setLayoutConfig";
var RESET_LAYOUT_CONFIG = "resetLayoutConfig";
var OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig";
var OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig"; // mutation types

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state: {
    config: _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__,
    initial: _config_layout_config_json__WEBPACK_IMPORTED_MODULE_2__
  },
  getters: {
    /**
     * Get config from layout config
     * @param state
     * @returns {function(path, defaultValue): *}
     */
    layoutConfig: function layoutConfig(state) {
      return function (path, defaultValue) {
        return object_path__WEBPACK_IMPORTED_MODULE_0___default().get(state.config, path, defaultValue);
      };
    }
  },
  actions: (_actions = {}, _defineProperty(_actions, SET_LAYOUT_CONFIG, function (state, payload) {
    state.commit(SET_LAYOUT_CONFIG, payload);
  }), _defineProperty(_actions, RESET_LAYOUT_CONFIG, function (state) {
    state.commit(RESET_LAYOUT_CONFIG);
  }), _defineProperty(_actions, OVERRIDE_LAYOUT_CONFIG, function (state) {
    state.commit(OVERRIDE_LAYOUT_CONFIG);
  }), _defineProperty(_actions, OVERRIDE_PAGE_LAYOUT_CONFIG, function (state, payload) {
    state.commit(OVERRIDE_PAGE_LAYOUT_CONFIG, payload);
  }), _actions),
  mutations: (_mutations = {}, _defineProperty(_mutations, SET_LAYOUT_CONFIG, function (state, payload) {
    state.config = payload;
  }), _defineProperty(_mutations, RESET_LAYOUT_CONFIG, function (state) {
    state.config = Object.assign({}, state.initial);
  }), _defineProperty(_mutations, OVERRIDE_LAYOUT_CONFIG, function (state) {
    state.config = state.initial = Object.assign({}, state.initial, JSON.parse(localStorage.getItem("config")));
  }), _defineProperty(_mutations, OVERRIDE_PAGE_LAYOUT_CONFIG, function (state, payload) {
    state.config = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(state.config, payload);
  }), _mutations)
});

/***/ }),

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (options.includeInheritedProps && (currentPath === '__proto__' ||
        (currentPath === 'constructor' && typeof currentValue === 'function'))) {
        throw new Error('For security reasons, object\'s magic properties cannot be set')
      }
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),

/***/ "./resources/js/Pages/core/config/layout.config.json":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/core/config/layout.config.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"demo":"demo6","self":{"layout":"default","body":{},"logo":"/media/logos/logo-letter-9.png"},"loader":{"type":"spinner-logo","logo":"/media/logos/logo-letter-1.png","message":"Please wait..."},"breakpoints":{"sm":576,"md":768,"lg":992,"xl":1200,"xxl":1200},"colors":{"theme":{"base":{"white":"#ffffff","primary":"#8950FC","secondary":"#E5EAEE","success":"#1BC5BD","info":"#8950FC","warning":"#FFA800","danger":"#F64E60","light":"#F3F6F9","dark":"#212121"},"light":{"white":"#ffffff","primary":"#E1E9FF","secondary":"#ECF0F3","success":"#C9F7F5","info":"#EEE5FF","warning":"#FFF4DE","danger":"#fC929C","light":"#F3F6F9","dark":"#D6D6E0"},"inverse":{"white":"#ffffff","primary":"#ffffff","secondary":"#212121","success":"#ffffff","info":"#ffffff","warning":"#ffffff","danger":"#ffffff","light":"#464E5F","dark":"#ffffff"}},"gray":{"gray-100":"#F3F6F9","gray-200":"#ECF0F3","gray-300":"#E5EAEE","gray-400":"#D6D6E0","gray-500":"#B5B5C3","gray-600":"#80808F","gray-700":"#464E5F","gray-800":"#1B283F","gray-900":"#212121"}},"font-family":"Poppins","header":{"self":{"width":"fluid","fixed":{"desktop":true,"mobile":true}}},"subheader":{"display":true,"displayDesc":false,"displayDaterangepicker":true,"layout":"subheader-v6","fixed":false,"width":"fixed","clear":false,"style":"transparent"},"content":{"width":"fixed"},"aside":{"self":{"display":true,"fixed":true,"minimize":{"toggle":true,"default":false}},"secondary":{"display":true},"menu":{"dropdown":false,"scroll":false,"submenu":{"accordion":true}}},"footer":{"width":"fixed","fixed":false},"extras":{"search":{"display":false,"layout":"offcanvas","offcanvas":{"direction":"left"}},"notifications":{"display":false,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"quick-actions":{"display":true,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"cart":{"display":false,"layout":"dropdown","offcanvas":{"direction":"right"}},"chat":{"display":false},"user":{"display":true,"layout":"offcanvas","dropdown":{"style":"dark"},"offcanvas":{"direction":"left"}},"languages":{"display":false},"quick-panel":{"display":true,"offcanvas":{"direction":"left"}},"toolbar":{"display":true},"scrolltop":{"display":true}}}');

/***/ })

}]);
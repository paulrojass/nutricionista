(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_remote_js"],{

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

/***/ }),

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/remote.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/remote.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch */ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/utils/fetch.js");

function a() {
  var a = {
    crossDomain: false,
    data: {},
    headers: {},
    method: "GET",
    validKey: "valid"
  };
  return {
    validate: function validate(t) {
      if (t.value === "") {
        return Promise.resolve({
          valid: true
        });
      }

      var s = Object.assign({}, a, t.options);
      var r = s.data;

      if ("function" === typeof s.data) {
        r = s.data.call(this, t);
      }

      if ("string" === typeof r) {
        r = JSON.parse(r);
      }

      r[s.name || t.field] = t.value;
      var o = "function" === typeof s.url ? s.url.call(this, t) : s.url;
      return (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__.default)(o, {
        crossDomain: s.crossDomain,
        headers: s.headers,
        method: s.method,
        params: r
      }).then(function (e) {
        return Promise.resolve({
          message: e.message,
          meta: e,
          valid: "".concat(e[s.validKey]) === "true"
        });
      })["catch"](function (e) {
        return Promise.reject({
          valid: false
        });
      });
    }
  };
}

/***/ })

}]);
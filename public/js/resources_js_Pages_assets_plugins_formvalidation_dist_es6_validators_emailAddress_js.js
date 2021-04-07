(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_emailAddress_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/emailAddress.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/emailAddress.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
function t() {
  var t = function t(_t3, e) {
    var s = _t3.split(/"/);

    var l = s.length;
    var n = [];
    var r = "";

    for (var _t = 0; _t < l; _t++) {
      if (_t % 2 === 0) {
        var _l = s[_t].split(e);

        var a = _l.length;

        if (a === 1) {
          r += _l[0];
        } else {
          n.push(r + _l[0]);

          for (var _t2 = 1; _t2 < a - 1; _t2++) {
            n.push(_l[_t2]);
          }

          r = _l[a - 1];
        }
      } else {
        r += '"' + s[_t];

        if (_t < l - 1) {
          r += '"';
        }
      }
    }

    n.push(r);
    return n;
  };

  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var s = Object.assign({}, {
        multiple: false,
        separator: /[,;]/
      }, e.options);
      var l = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      var n = s.multiple === true || "".concat(s.multiple) === "true";

      if (n) {
        var _n = s.separator || /[,;]/;

        var r = t(e.value, _n);
        var a = r.length;

        for (var _t4 = 0; _t4 < a; _t4++) {
          if (!l.test(r[_t4])) {
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
          valid: l.test(e.value)
        };
      }
    }
  };
}

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_plugins_formvalidation_dist_es6_validators_file_js"],{

/***/ "./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/file.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/assets/plugins/formvalidation/dist/es6/validators/file.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
function e() {
  return {
    validate: function validate(e) {
      if (e.value === "") {
        return {
          valid: true
        };
      }

      var t;
      var i = e.options.extension ? e.options.extension.toLowerCase().split(",") : null;
      var s = e.options.type ? e.options.type.toLowerCase().split(",") : null;
      var n = window["File"] && window["FileList"] && window["FileReader"];

      if (n) {
        var _n = e.element.files;
        var o = _n.length;
        var a = 0;

        if (e.options.maxFiles && o > parseInt("".concat(e.options.maxFiles), 10)) {
          return {
            meta: {
              error: "INVALID_MAX_FILES"
            },
            valid: false
          };
        }

        if (e.options.minFiles && o < parseInt("".concat(e.options.minFiles), 10)) {
          return {
            meta: {
              error: "INVALID_MIN_FILES"
            },
            valid: false
          };
        }

        var r = {};

        for (var l = 0; l < o; l++) {
          a += _n[l].size;
          t = _n[l].name.substr(_n[l].name.lastIndexOf(".") + 1);
          r = {
            ext: t,
            file: _n[l],
            size: _n[l].size,
            type: _n[l].type
          };

          if (e.options.minSize && _n[l].size < parseInt("".concat(e.options.minSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_MIN_SIZE"
              }, r),
              valid: false
            };
          }

          if (e.options.maxSize && _n[l].size > parseInt("".concat(e.options.maxSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_MAX_SIZE"
              }, r),
              valid: false
            };
          }

          if (i && i.indexOf(t.toLowerCase()) === -1) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_EXTENSION"
              }, r),
              valid: false
            };
          }

          if (_n[l].type && s && s.indexOf(_n[l].type.toLowerCase()) === -1) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_TYPE"
              }, r),
              valid: false
            };
          }
        }

        if (e.options.maxTotalSize && a > parseInt("".concat(e.options.maxTotalSize), 10)) {
          return {
            meta: Object.assign({}, {
              error: "INVALID_MAX_TOTAL_SIZE",
              totalSize: a
            }, r),
            valid: false
          };
        }

        if (e.options.minTotalSize && a < parseInt("".concat(e.options.minTotalSize), 10)) {
          return {
            meta: Object.assign({}, {
              error: "INVALID_MIN_TOTAL_SIZE",
              totalSize: a
            }, r),
            valid: false
          };
        }
      } else {
        t = e.value.substr(e.value.lastIndexOf(".") + 1);

        if (i && i.indexOf(t.toLowerCase()) === -1) {
          return {
            meta: {
              error: "INVALID_EXTENSION",
              ext: t
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

/***/ })

}]);
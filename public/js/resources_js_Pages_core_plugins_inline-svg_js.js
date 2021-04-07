(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_core_plugins_inline-svg_js"],{

/***/ "./resources/js/Pages/core/plugins/inline-svg.js":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/core/plugins/inline-svg.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-inline-svg */ "./node_modules/vue-inline-svg/dist/vue-inline-svg.js");
/* harmony import */ var vue_inline_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_inline_svg__WEBPACK_IMPORTED_MODULE_0__);


vue__WEBPACK_IMPORTED_MODULE_1__.default.use(vue_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSvgPlugin);

/***/ }),

/***/ "./node_modules/vue-inline-svg/dist/vue-inline-svg.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-inline-svg/dist/vue-inline-svg.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    /** @type Object{string: Promise<Element>} */
    var cache = {};
    /**
     * Remove false attrs
     * @param {Object} attrs
     */

    function filterAttrs(attrs) {
      return Object.keys(attrs).reduce(function (result, key) {
        if (attrs[key] !== false && attrs[key] !== null && attrs[key] !== undefined) {
          result[key] = attrs[key];
        }

        return result;
      }, {});
    }

    var InlineSvgComponent = {
      // name: 'inline-svg',
      inheritAttrs: false,
      render: function render(createElement) {
        if (!this.isLoaded) {
          return null;
        }

        return createElement('svg', {
          on: this.$listeners,
          attrs: Object.assign(this.svgAttrs, filterAttrs(this.$attrs)),
          domProps: {
            innerHTML: this.svgContent
          }
        });
      },
      props: {
        src: {
          type: String,
          required: true
        },
        transformSource: {
          type: Function,
          "default": function _default(svg) {
            return svg;
          }
        }
      },
      data: function data() {
        return {
          isLoaded: false,
          svgAttrs: {},
          svgContent: ''
        };
      },
      watch: {
        src: function src(newValue) {
          // re-generate inline svg
          this.inline(newValue);
        }
      },
      mounted: function mounted() {
        // generate inline svg
        this.inline(this.src);
      },
      methods: {
        /**
         * Replace image with loaded svg
         * @param {string} src
         */
        inline: function inline(src) {
          var _this = this;

          // fill cache by src with promise
          if (!cache[src]) {
            // notify svg is unloaded
            if (this.isLoaded) {
              this.isLoaded = false;
              this.$emit('unloaded');
            } // download


            cache[src] = this.download(src);
          } // inline svg when cached promise resolves


          cache[src].then(function (svg) {
            // copy attrs
            _this.svgAttrs = {};
            var attrs = svg.attributes;

            for (var i = attrs.length - 1; i >= 0; i--) {
              _this.svgAttrs[attrs[i].name] = attrs[i].value;
            } // copy inner html


            _this.svgContent = svg.innerHTML; // render svg element

            _this.isLoaded = true; // wait to render

            _this.$nextTick(function () {
              // notify
              _this.$emit('loaded', _this.$el);
            });
          })["catch"](function (err) {
            // remove cached rejected promise so next image can try load again
            delete cache[src];

            _this.$emit('error', err);
          });
        },

        /**
         * Get the contents of the SVG
         * @param {string} url
         * @returns {Promise<Element>}
         */
        download: function download(url) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function () {
              if (request.status >= 200 && request.status < 400) {
                try {
                  // Setup a parser to convert the response to text/xml in order for it to be manipulated and changed
                  var parser = new DOMParser();
                  var result = parser.parseFromString(request.responseText, 'text/xml');
                  var svgEl = result.getElementsByTagName('svg')[0];

                  if (svgEl) {
                    svgEl = _this2.transformSource(svgEl);
                    resolve(svgEl);
                  } else {
                    reject(new Error('Loaded file is not valid SVG"'));
                  }
                } catch (e) {
                  reject(e);
                }
              } else {
                reject(new Error('Error loading SVG'));
              }
            };

            request.onerror = reject;
            request.send();
          });
        }
      }
    };
    var InlineSvgPlugin = {
      install: function install(Vue) {
        Vue.component('inline-svg', InlineSvgComponent);
      }
    };

    exports.InlineSvgComponent = InlineSvgComponent;
    exports.InlineSvgPlugin = InlineSvgPlugin;
    exports.default = InlineSvgComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ })

}]);
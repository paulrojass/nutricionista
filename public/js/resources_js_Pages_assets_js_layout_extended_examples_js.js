(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_examples_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/examples.js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/examples.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutExamples = function () {
  var initDefaultMode = function initDefaultMode(element) {
    var elements = element;

    if (typeof elements === 'undefined') {
      elements = document.querySelectorAll('.example:not(.example-compact):not(.example-hover):not(.example-basic)');
    }

    if (elements && elements.length > 0) {
      for (var i = 0; i < elements.length; ++i) {
        var example = elements[i];
        var copy = KTUtil.find(example, '.example-copy');

        if (copy) {
          var clipboard = new ClipboardJS(copy, {
            target: function target(trigger) {
              var example = trigger.closest('.example');
              var el = KTUtil.find(example, '.example-code .tab-pane.active');

              if (!el) {
                el = KTUtil.find(example, '.example-code');
              }

              return el;
            }
          });
          clipboard.on('success', function (e) {
            KTUtil.addClass(e.trigger, 'example-copied');
            e.clearSelection();
            setTimeout(function () {
              KTUtil.removeClass(e.trigger, 'example-copied');
            }, 2000);
          });
        }
      }
    }
  };

  var initCompactMode = function initCompactMode(element) {
    var example, code, toggle, copy, clipboard;
    var elements = element;

    if (typeof elements === 'undefined') {
      var elements = document.querySelectorAll('.example.example-compact');
    }

    if (elements && elements.length > 0) {
      for (var i = 0; i < elements.length; ++i) {
        var example = elements[i];
        var toggle = KTUtil.find(example, '.example-toggle');
        var copy = KTUtil.find(example, '.example-copy'); // Handle toggle

        KTUtil.addEvent(toggle, 'click', function () {
          var example = this.closest('.example');
          var code = KTUtil.find(example, '.example-code');
          var the = this;

          if (KTUtil.hasClass(this, 'example-toggled')) {
            KTUtil.slideUp(code, 300, function () {
              KTUtil.removeClass(the, 'example-toggled');
              KTUtil.removeClass(code, 'example-code-on');
              KTUtil.hide(code);
            });
          } else {
            KTUtil.addClass(code, 'example-code-on');
            KTUtil.addClass(this, 'example-toggled');
            KTUtil.slideDown(code, 300, function () {
              KTUtil.show(code);
            });
          }
        }); // Handle copy

        if (copy) {
          var clipboard = new ClipboardJS(copy, {
            target: function target(trigger) {
              var example = trigger.closest('.example');
              var el = KTUtil.find(example, '.example-code .tab-pane.active');

              if (!el) {
                el = KTUtil.find(example, '.example-code');
              }

              return el;
            }
          });
          clipboard.on('success', function (e) {
            KTUtil.addClass(e.trigger, 'example-copied');
            e.clearSelection();
            setTimeout(function () {
              KTUtil.removeClass(e.trigger, 'example-copied');
            }, 2000);
          });
        }
      }
    }
  };

  return {
    init: function init(element, options) {
      initDefaultMode(element);
      initCompactMode(element);
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutExamples);

/***/ })

}]);
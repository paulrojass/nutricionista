(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_quick-panel_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/quick-panel.js":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/quick-panel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var KTLayoutQuickPanel = function () {
  // Private properties
  var _element;

  var _offcanvasObject;

  var _notificationsElement;

  var _logsElement;

  var _settingsElement; // Private functions


  var _getContentHeight = function _getContentHeight() {
    var height;
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var height = parseInt(KTUtil.getViewPort().height);

    if (header) {
      height = height - parseInt(KTUtil.actualHeight(header));
      height = height - parseInt(KTUtil.css(header, 'marginTop'));
      height = height - parseInt(KTUtil.css(header, 'marginBottom'));
    }

    if (content) {
      height = height - parseInt(KTUtil.css(content, 'marginTop'));
      height = height - parseInt(KTUtil.css(content, 'marginBottom'));
    }

    height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
    height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
    height = height - 2;
    return height;
  };

  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_panel_close',
      toggleBy: 'kt_quick_panel_toggle'
    });
  };

  var _initNotifications = function _initNotifications() {
    KTUtil.scrollInit(_notificationsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _initLogs = function _initLogs() {
    KTUtil.scrollInit(_logsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _initSettings = function _initSettings() {
    KTUtil.scrollInit(_settingsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _updateScrollbars = function _updateScrollbars() {
    $(_element).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      KTUtil.scrollUpdate(_notificationsElement);
      KTUtil.scrollUpdate(_logsElement);
      KTUtil.scrollUpdate(_settingsElement);
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
      _notificationsElement = KTUtil.getById('kt_quick_panel_notifications');
      _logsElement = KTUtil.getById('kt_quick_panel_logs');
      _settingsElement = KTUtil.getById('kt_quick_panel_settings');

      _init();

      _initNotifications();

      _initLogs();

      _initSettings();
    }
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickPanel);

/***/ })

}]);
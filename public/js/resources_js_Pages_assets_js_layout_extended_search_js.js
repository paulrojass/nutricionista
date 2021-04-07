(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_layout_extended_search_js"],{

/***/ "./resources/js/Pages/assets/js/layout/extended/search.js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/assets/js/layout/extended/search.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
 //
// Handle User Quick Search For Dropdown, Inline and Offcanvas Search Panels
//

var KTLayoutSearch = function KTLayoutSearch() {
  // Private properties
  var _target;

  var _form;

  var _input;

  var _closeIcon;

  var _resultWrapper;

  var _resultDropdown;

  var _resultDropdownToggle;

  var _closeIconContainer;

  var _inputGroup;

  var _query = '';
  var _hasResult = false;
  var _timeout = false;
  var _isProcessing = false;
  var _requestTimeout = 200; // ajax request fire timeout in milliseconds

  var _spinnerClass = 'spinner spinner-sm spinner-primary';
  var _resultClass = 'quick-search-has-result';
  var _minLength = 2; // Private functions

  var _showProgress = function _showProgress() {
    _isProcessing = true;
    KTUtil.addClass(_closeIconContainer, _spinnerClass);

    if (_closeIcon) {
      KTUtil.hide(_closeIcon);
    }
  };

  var _hideProgress = function _hideProgress() {
    _isProcessing = false;
    KTUtil.removeClass(_closeIconContainer, _spinnerClass);

    if (_closeIcon) {
      if (_input.value.length < _minLength) {
        KTUtil.hide(_closeIcon);
      } else {
        KTUtil.show(_closeIcon, 'flex');
      }
    }
  };

  var _showDropdown = function _showDropdown() {
    if (_resultDropdownToggle && !KTUtil.hasClass(_resultDropdown, 'show')) {
      $(_resultDropdownToggle).dropdown('toggle');
      $(_resultDropdownToggle).dropdown('update');
    }
  };

  var _hideDropdown = function _hideDropdown() {
    if (_resultDropdownToggle && KTUtil.hasClass(_resultDropdown, 'show')) {
      $(_resultDropdownToggle).dropdown('toggle');
    }
  };

  var _processSearch = function _processSearch() {
    if (_hasResult && _query === _input.value) {
      _hideProgress();

      KTUtil.addClass(_target, _resultClass);

      _showDropdown();

      KTUtil.scrollUpdate(_resultWrapper);
      return;
    }

    _query = _input.value;
    KTUtil.removeClass(_target, _resultClass);

    _showProgress();

    _hideDropdown();

    setTimeout(function () {
      $.ajax({
        url: HOST_URL + '/api/quick_search.php',
        data: {
          query: _query
        },
        dataType: 'html',
        success: function success(res) {
          _hasResult = true;

          _hideProgress();

          KTUtil.addClass(_target, _resultClass);
          KTUtil.setHTML(_resultWrapper, res);

          _showDropdown();

          KTUtil.scrollUpdate(_resultWrapper);
        },
        error: function error(res) {
          _hasResult = false;

          _hideProgress();

          KTUtil.addClass(_target, _resultClass);
          KTUtil.setHTML(_resultWrapper, '<span class="font-weight-bold text-muted">Connection error. Please try again later..</div>');

          _showDropdown();

          KTUtil.scrollUpdate(_resultWrapper);
        }
      });
    }, 1000);
  };

  var _handleCancel = function _handleCancel(e) {
    _input.value = '';
    _query = '';
    _hasResult = false;
    KTUtil.hide(_closeIcon);
    KTUtil.removeClass(_target, _resultClass);

    _hideDropdown();
  };

  var _handleSearch = function _handleSearch() {
    if (_input.value.length < _minLength) {
      _hideProgress();

      _hideDropdown();

      return;
    }

    if (_isProcessing == true) {
      return;
    }

    if (_timeout) {
      clearTimeout(_timeout);
    }

    _timeout = setTimeout(function () {
      _processSearch();
    }, _requestTimeout);
  }; // Public methods


  return {
    init: function init(id) {
      _target = KTUtil.getById(id);

      if (!_target) {
        return;
      }

      _form = KTUtil.find(_target, '.quick-search-form');
      _input = KTUtil.find(_target, '.form-control');
      _closeIcon = KTUtil.find(_target, '.quick-search-close');
      _resultWrapper = KTUtil.find(_target, '.quick-search-wrapper');
      _resultDropdown = KTUtil.find(_target, '.dropdown-menu');
      _resultDropdownToggle = KTUtil.find(_target, '[data-toggle="dropdown"]');
      _inputGroup = KTUtil.find(_target, '.input-group');
      _closeIconContainer = KTUtil.find(_target, '.input-group .input-group-append'); // Attach input keyup handler

      KTUtil.addEvent(_input, 'keyup', _handleSearch);
      KTUtil.addEvent(_input, 'focus', _handleSearch); // Prevent enter click

      _form.onkeypress = function (e) {
        var key = e.charCode || e.keyCode || 0;

        if (key == 13) {
          e.preventDefault();
        }
      };

      KTUtil.addEvent(_closeIcon, 'click', _handleCancel);
    }
  };
};

var KTLayoutSearchInline = KTLayoutSearch;
var KTLayoutSearchOffcanvas = KTLayoutSearch;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutSearch);

/***/ })

}]);
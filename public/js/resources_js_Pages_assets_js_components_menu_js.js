(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_assets_js_components_menu_js"],{

/***/ "./resources/js/Pages/assets/js/components/menu.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/assets/js/components/menu.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./resources/js/Pages/assets/js/components/util.js");
/* module decorator */ module = __webpack_require__.hmd(module);


 // Component Definition

var KTMenu = function KTMenu(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = _util__WEBPACK_IMPORTED_MODULE_0__.default.getById(elementId);
  var body = _util__WEBPACK_IMPORTED_MODULE_0__.default.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    // scrollable area with Perfect Scroll
    scroll: {
      rememberPosition: false
    },
    // accordion submenu mode
    accordion: {
      slideSpeed: 200,
      // accordion toggle slide speed in milliseconds
      autoScroll: false,
      // enable auto scrolling(focus) to the clicked menu item
      autoScrollSpeed: 1200,
      expandAll: true // allow having multiple expanded accordions in the menu

    },
    // dropdown submenu mode
    dropdown: {
      timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown

    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTMenu}
     */
    construct: function construct(options) {
      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.data(element).has('menu')) {
        the = _util__WEBPACK_IMPORTED_MODULE_0__.default.data(element).get('menu');
      } else {
        // reset menu
        Plugin.init(options); // reset menu

        Plugin.reset(); // build menu

        Plugin.build();
        _util__WEBPACK_IMPORTED_MODULE_0__.default.data(element).set('menu', the);
      }

      return the;
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    init: function init(options) {
      the.events = [];
      the.eventHandlers = {}; // merge default and user defined options

      the.options = _util__WEBPACK_IMPORTED_MODULE_0__.default.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0;
      the.uid = _util__WEBPACK_IMPORTED_MODULE_0__.default.getUniqueID();
    },
    update: function update(options) {
      // merge default and user defined options
      the.options = _util__WEBPACK_IMPORTED_MODULE_0__.default.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0; // reset menu

      Plugin.reset();
      the.eventHandlers = {}; // build menu

      Plugin.build();
      _util__WEBPACK_IMPORTED_MODULE_0__.default.data(element).set('menu', the);
    },
    reload: function reload() {
      // reset menu
      Plugin.reset(); // build menu

      Plugin.build(); // reset submenu props

      Plugin.resetSubmenuProps();
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    build: function build() {
      // General accordion submenu toggle
      the.eventHandlers['event_1'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion); // Dropdown mode(hoverable)

      if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
        // dropdown submenu - hover toggle
        the.eventHandlers['event_2'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
        the.eventHandlers['event_3'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit); // dropdown submenu - click toggle

        the.eventHandlers['event_4'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
        the.eventHandlers['event_5'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
      } // Handle general link click


      the.eventHandlers['event_6'] = _util__WEBPACK_IMPORTED_MODULE_0__.default.on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick); // Init scrollable menu

      if (the.options.scroll && the.options.scroll.height) {
        Plugin.scrollInit();
      }
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    reset: function reset() {
      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'click', the.eventHandlers['event_1']); // dropdown submenu - hover toggle

      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'mouseover', the.eventHandlers['event_2']);
      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'mouseout', the.eventHandlers['event_3']); // dropdown submenu - click toggle

      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'click', the.eventHandlers['event_4']);
      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'click', the.eventHandlers['event_5']); // handle link click

      _util__WEBPACK_IMPORTED_MODULE_0__.default.off(element, 'click', the.eventHandlers['event_6']);
    },

    /**
     * Init scroll menu
     *
    */
    scrollInit: function scrollInit() {
      if (the.options.scroll && the.options.scroll.height) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollDestroy(element, true);
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollInit(element, {
          mobileNativeScroll: true,
          windowScroll: false,
          resetHeightOnDestroy: true,
          handleWindowResize: true,
          height: the.options.scroll.height,
          rememberPosition: the.options.scroll.rememberPosition
        });
      } else {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollDestroy(element, true);
      }
    },

    /**
     * Update scroll menu
    */
    scrollUpdate: function scrollUpdate() {
      if (the.options.scroll && the.options.scroll.height) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollUpdate(element);
      }
    },

    /**
     * Scroll top
    */
    scrollTop: function scrollTop() {
      if (the.options.scroll && the.options.scroll.height) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollTop(element);
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    getSubmenuMode: function getSubmenuMode(el) {
      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointUp('lg')) {
        if (el && _util__WEBPACK_IMPORTED_MODULE_0__.default.hasAttr(el, 'data-menu-toggle') && _util__WEBPACK_IMPORTED_MODULE_0__.default.attr(el, 'data-menu-toggle') == 'hover') {
          return 'dropdown';
        }

        if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isset(the.options.submenu, 'desktop.state.body')) {
          if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClasses(body, the.options.submenu.desktop.state.body)) {
            return the.options.submenu.desktop.state.mode;
          } else {
            return the.options.submenu.desktop["default"];
          }
        } else if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isset(the.options.submenu, 'desktop')) {
          return the.options.submenu.desktop;
        }
      } else if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointUp('md') && _util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointDown('lg') && _util__WEBPACK_IMPORTED_MODULE_0__.default.isset(the.options.submenu, 'tablet')) {
        return the.options.submenu.tablet;
      } else if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointDown('md') && _util__WEBPACK_IMPORTED_MODULE_0__.default.isset(the.options.submenu, 'mobile')) {
        return the.options.submenu.mobile;
      } else {
        return false;
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    isConditionalSubmenuDropdown: function isConditionalSubmenuDropdown() {
      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointUp('lg') && _util__WEBPACK_IMPORTED_MODULE_0__.default.isset(the.options.submenu, 'desktop.state.body')) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Reset submenu attributes
     * @returns {KTMenu}
     */
    resetSubmenuProps: function resetSubmenuProps(e) {
      var submenus = _util__WEBPACK_IMPORTED_MODULE_0__.default.findAll(element, '.menu-submenu');

      if (submenus) {
        for (var i = 0, len = submenus.length; i < len; i++) {
          var submenu = submenus[0];
          _util__WEBPACK_IMPORTED_MODULE_0__.default.css(submenu, 'display', '');
          _util__WEBPACK_IMPORTED_MODULE_0__.default.css(submenu, 'overflow', '');

          if (submenu.hasAttribute('data-hor-direction')) {
            _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(submenu, 'menu-submenu-left');
            _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(submenu, 'menu-submenu-right');
            _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(submenu, submenu.getAttribute('data-hor-direction'));
          }
        }
      }
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverEnter: function handleSubmenuDrodownHoverEnter(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      if (the.resumeDropdownHover() === false) {
        return;
      }

      var item = this;

      if (item.getAttribute('data-hover') == '1') {
        item.removeAttribute('data-hover');
        clearTimeout(item.getAttribute('data-timeout'));
        item.removeAttribute('data-timeout');
      }

      Plugin.showSubmenuDropdown(item);
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverExit: function handleSubmenuDrodownHoverExit(e) {
      if (the.resumeDropdownHover() === false) {
        return;
      }

      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this;
      var time = the.options.dropdown.timeout;
      var timeout = setTimeout(function () {
        if (item.getAttribute('data-hover') == '1') {
          Plugin.hideSubmenuDropdown(item, true);
        }
      }, time);
      item.setAttribute('data-hover', '1');
      item.setAttribute('data-timeout', timeout);
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClick: function handleSubmenuDropdownClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.menu-item'); // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
        return;
      }

      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(item, 'menu-item-hover') === false) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(item, 'menu-item-open-dropdown');
        Plugin.showSubmenuDropdown(item);
      } else {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(item, 'menu-item-open-dropdown');
        Plugin.hideSubmenuDropdown(item, true);
      }

      e.preventDefault();
    },

    /**
     * Handles tab click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownTabClick: function handleSubmenuDropdownTabClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.menu-item'); // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
        return;
      }

      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(item, 'menu-item-hover') == false) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(item, 'menu-item-open-dropdown');
        Plugin.showSubmenuDropdown(item);
      }

      e.preventDefault();
    },

    /**
     * Handles link click
     * @returns {KTMenu}
     */
    handleLinkClick: function handleLinkClick(e) {
      var submenu = this.closest('.menu-item.menu-item-submenu'); // Trigger click event handlers

      var result = Plugin.eventTrigger('linkClick', this, e);

      if (result === false) {
        return;
      }

      if (submenu && Plugin.getSubmenuMode(submenu) === 'dropdown') {
        Plugin.hideSubmenuDropdowns();
      }
    },

    /**
     * Handles submenu dropdown close on link click
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClose: function handleSubmenuDropdownClose(e, el) {
      // exit if its not submenu dropdown mode
      if (Plugin.getSubmenuMode(el) === 'accordion') {
        return;
      }

      var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)'); // check if currently clicked link's parent item ha

      if (shown.length > 0 && _util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
        // close opened dropdown menus
        for (var i = 0, len = shown.length; i < len; i++) {
          Plugin.hideSubmenuDropdown(shown[0], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    handleSubmenuAccordion: function handleSubmenuAccordion(e, el) {
      var query;
      var item = el ? el : this; // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item'))) {
        if (query.getAttribute('data-menu-submenu-mode') != 'accordion') {
          e.preventDefault();
          return;
        }
      }

      var li = item.closest('.menu-item');
      var submenu = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(li, '.menu-submenu, .menu-inner');

      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
        return;
      }

      if (li && submenu) {
        e.preventDefault();
        var speed = the.options.accordion.slideSpeed;
        var hasClosables = false;

        if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(li, 'menu-item-open') === false) {
          // hide other accordions
          if (the.options.accordion.expandAll === false) {
            var subnav = item.closest('.menu-nav, .menu-subnav');
            var closables = _util__WEBPACK_IMPORTED_MODULE_0__.default.children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');

            if (subnav && closables) {
              for (var i = 0, len = closables.length; i < len; i++) {
                var el_ = closables[0];
                var submenu_ = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(el_, '.menu-submenu');

                if (submenu_) {
                  _util__WEBPACK_IMPORTED_MODULE_0__.default.slideUp(submenu_, speed, function () {
                    Plugin.scrollUpdate();
                    _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(el_, 'menu-item-open');
                  });
                }
              }
            }
          }

          _util__WEBPACK_IMPORTED_MODULE_0__.default.slideDown(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.scrollUpdate();
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(li, 'menu-item-open');
        } else {
          _util__WEBPACK_IMPORTED_MODULE_0__.default.slideUp(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.scrollUpdate();
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(li, 'menu-item-open');
        }
      }
    },

    /**
     * scroll to item function
     * @returns {KTMenu}
     */
    scrollToItem: function scrollToItem(item) {
      // handle auto scroll for accordion submenus
      if (_util__WEBPACK_IMPORTED_MODULE_0__.default.isBreakpointUp('lg') && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1') {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.scrollTo(item, the.options.accordion.autoScrollSpeed);
      }
    },

    /**
     * Hide submenu dropdown
     * @returns {KTMenu}
     */
    hideSubmenuDropdown: function hideSubmenuDropdown(item, classAlso) {
      // remove submenu activation class
      if (classAlso) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(item, 'menu-item-hover');
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(item, 'menu-item-active-tab');
      } // clear timeout


      item.removeAttribute('data-hover');

      if (item.getAttribute('data-menu-toggle-class')) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(body, item.getAttribute('data-menu-toggle-class'));
      }

      var timeout = item.getAttribute('data-timeout');
      item.removeAttribute('data-timeout');
      clearTimeout(timeout);
    },

    /**
     * Hide submenu dropdowns
     * @returns {KTMenu}
     */
    hideSubmenuDropdowns: function hideSubmenuDropdowns() {
      var items;

      if (items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])')) {
        for (var j = 0, cnt = items.length; j < cnt; j++) {
          Plugin.hideSubmenuDropdown(items[j], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    showSubmenuDropdown: function showSubmenuDropdown(item) {
      // close active submenus
      var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');

      if (list) {
        for (var i = 0, len = list.length; i < len; i++) {
          var el = list[i];

          if (item !== el && el.contains(item) === false && item.contains(el) === false) {
            Plugin.hideSubmenuDropdown(el, true);
          }
        }
      } // add submenu activation class


      _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(item, 'menu-item-hover'); // Change the alignment of submenu is offscreen.

      var submenu = _util__WEBPACK_IMPORTED_MODULE_0__.default.find(item, '.menu-submenu');

      if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
        if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(submenu, 'menu-submenu-left')) {
          submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
        } else if (_util__WEBPACK_IMPORTED_MODULE_0__.default.hasClass(submenu, 'menu-submenu-right')) {
          submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
        }
      }

      if (submenu && _util__WEBPACK_IMPORTED_MODULE_0__.default.isOffscreen(submenu, 'left', 15) === true) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(submenu, 'menu-submenu-left');
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(submenu, 'menu-submenu-right');
      } else if (submenu && _util__WEBPACK_IMPORTED_MODULE_0__.default.isOffscreen(submenu, 'right', 15) === true) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(submenu, 'menu-submenu-right');
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(submenu, 'menu-submenu-left');
      }

      if (item.getAttribute('data-menu-toggle-class')) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(body, item.getAttribute('data-menu-toggle-class'));
      }
    },

    /**
     * Handles submenu slide toggle
     * @returns {KTMenu}
     */
    createSubmenuDropdownClickDropoff: function createSubmenuDropdownClickDropoff(el) {
      var query;
      var zIndex = (query = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(el, '.menu-submenu') ? _util__WEBPACK_IMPORTED_MODULE_0__.default.css(query, 'z-index') : 0) - 1;
      var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
      body.appendChild(dropoff);
      _util__WEBPACK_IMPORTED_MODULE_0__.default.addEvent(dropoff, 'click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        _util__WEBPACK_IMPORTED_MODULE_0__.default.remove(this);
        Plugin.hideSubmenuDropdown(el, true);
      });
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    pauseDropdownHover: function pauseDropdownHover(time) {
      var date = new Date();
      the.pauseDropdownHoverTime = date.getTime() + time;
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    resumeDropdownHover: function resumeDropdownHover() {
      var date = new Date();
      return date.getTime() > the.pauseDropdownHoverTime ? true : false;
    },

    /**
     * Reset menu's current active item
     * @returns {KTMenu}
     */
    resetActiveItem: function resetActiveItem(item) {
      var list;
      var parents;
      list = element.querySelectorAll('.menu-item-active');

      for (var i = 0, len = list.length; i < len; i++) {
        var el = list[0];
        _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(el, 'menu-item-active');
        _util__WEBPACK_IMPORTED_MODULE_0__.default.hide(_util__WEBPACK_IMPORTED_MODULE_0__.default.child(el, '.menu-submenu'));
        parents = _util__WEBPACK_IMPORTED_MODULE_0__.default.parents(el, '.menu-item-submenu') || [];

        for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
          var el_ = parents[i];
          _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(el_, 'menu-item-open');
          _util__WEBPACK_IMPORTED_MODULE_0__.default.hide(_util__WEBPACK_IMPORTED_MODULE_0__.default.child(el_, '.menu-submenu'));
        }
      } // close open submenus


      if (the.options.accordion.expandAll === false) {
        if (list = element.querySelectorAll('.menu-item-open')) {
          for (var i = 0, len = list.length; i < len; i++) {
            _util__WEBPACK_IMPORTED_MODULE_0__.default.removeClass(parents[0], 'menu-item-open');
          }
        }
      }
    },

    /**
     * Sets menu's active item
     * @returns {KTMenu}
     */
    setActiveItem: function setActiveItem(item) {
      // reset current active item
      Plugin.resetActiveItem();
      var parents = _util__WEBPACK_IMPORTED_MODULE_0__.default.parents(item, '.menu-item-submenu') || [];

      for (var i = 0, len = parents.length; i < len; i++) {
        _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(parents[i], 'menu-item-open');
      }

      _util__WEBPACK_IMPORTED_MODULE_0__.default.addClass(item, 'menu-item-active');
    },

    /**
     * Returns page breadcrumbs for the menu's active item
     * @returns {KTMenu}
     */
    getBreadcrumbs: function getBreadcrumbs(item) {
      var query;
      var breadcrumbs = [];
      var link = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(item, '.menu-link');
      breadcrumbs.push({
        text: query = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(link, '.menu-text') ? query.innerHTML : '',
        title: link.getAttribute('title'),
        href: link.getAttribute('href')
      });
      var parents = _util__WEBPACK_IMPORTED_MODULE_0__.default.parents(item, '.menu-item-submenu');

      for (var i = 0, len = parents.length; i < len; i++) {
        var submenuLink = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(parents[i], '.menu-link');
        breadcrumbs.push({
          text: query = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(submenuLink, '.menu-text') ? query.innerHTML : '',
          title: submenuLink.getAttribute('title'),
          href: submenuLink.getAttribute('href')
        });
      }

      return breadcrumbs.reverse();
    },

    /**
     * Returns page title for the menu's active item
     * @returns {KTMenu}
     */
    getPageTitle: function getPageTitle(item) {
      var query;
      return query = _util__WEBPACK_IMPORTED_MODULE_0__.default.child(item, '.menu-text') ? query.innerHTML : '';
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, target, e) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, target, e);
            }
          } else {
            return event.handler.call(this, target, e);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    },
    removeEvent: function removeEvent(name) {
      if (the.events[name]) {
        delete the.events[name];
      }
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Update scroll
   */


  the.scrollUpdate = function () {
    return Plugin.scrollUpdate();
  };
  /**
   * Re-init scroll
   */


  the.scrollReInit = function () {
    return Plugin.scrollInit();
  };
  /**
   * Scroll top
   */


  the.scrollTop = function () {
    return Plugin.scrollTop();
  };
  /**
   * Set active menu item
   */


  the.setActiveItem = function (item) {
    return Plugin.setActiveItem(item);
  };

  the.reload = function () {
    return Plugin.reload();
  };

  the.update = function (options) {
    return Plugin.update(options);
  };
  /**
   * Set breadcrumb for menu item
   */


  the.getBreadcrumbs = function (item) {
    return Plugin.getBreadcrumbs(item);
  };
  /**
   * Set page title for menu item
   */


  the.getPageTitle = function (item) {
    return Plugin.getPageTitle(item);
  };
  /**
   * Get submenu mode
   */


  the.getSubmenuMode = function (el) {
    return Plugin.getSubmenuMode(el);
  };
  /**
   * Hide dropdown
   * @returns {Object}
   */


  the.hideDropdown = function (item) {
    Plugin.hideSubmenuDropdown(item, true);
  };
  /**
   * Hide dropdowns
   * @returns {Object}
   */


  the.hideDropdowns = function () {
    Plugin.hideSubmenuDropdowns();
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.pauseDropdownHover = function (time) {
    Plugin.pauseDropdownHover(time);
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.resumeDropdownHover = function () {
    return Plugin.resumeDropdownHover();
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.off = function (name) {
    return Plugin.removeEvent(name);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Handle plugin on window resize

  _util__WEBPACK_IMPORTED_MODULE_0__.default.addResizeHandler(function () {
    if (init) {
      the.reload();
    }
  }); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTMenu;
} // Plugin global lazy initialization


document.addEventListener("click", function (e) {
  var body = _util__WEBPACK_IMPORTED_MODULE_0__.default.getByTagName('body')[0];
  var query;

  if (query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]')) {
    for (var i = 0, len = query.length; i < len; i++) {
      var element = query[i].closest('.menu-nav').parentNode;

      if (element) {
        var the = _util__WEBPACK_IMPORTED_MODULE_0__.default.data(element).get('menu');

        if (!the) {
          break;
        }

        if (!the || the.getSubmenuMode() !== 'dropdown') {
          break;
        }

        if (e.target !== element && element.contains(e.target) === false) {
          the.hideDropdowns();
        }
      }
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTMenu);

/***/ }),

/***/ "./resources/js/Pages/assets/js/components/util.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/assets/js/components/util.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);

/**
 * @class KTUtil  base utilize class that privides helper functions
 */
// Polyfills

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */


if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return null;
  };
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */


(function (elem) {
  for (var i = 0; i < elem.length; i++) {
    if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;

    window[elem[i]].prototype.remove = function () {
      this.parentNode.removeChild(this);
    };
  }
})(['Element', 'CharacterData', 'DocumentType']); //
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//


(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // getAttributeNames


if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }

    return result;
  };
} // Global variables


window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function () {
  var resizeHandlers = [];
  /** @type {object} breakpoints The device width breakpoints **/

  var breakpoints = {
    sm: 544,
    // Small screen / phone
    md: 768,
    // Medium screen / tablet
    lg: 992,
    // Large screen / desktop
    xl: 1200 // Extra large screen / wide desktop

  };
  /**
   * Handle window resize event with some
   * delay to attach event handlers upon resize complete
   */

  var _windowResizeHandler = function _windowResizeHandler() {
    var _runResizeHandlers = function _runResizeHandlers() {
      // reinitialize other subscribed elements
      for (var i = 0; i < resizeHandlers.length; i++) {
        var each = resizeHandlers[i];
        each.call();
      }
    };

    var timer;
    window.addEventListener('resize', function () {
      KTUtil.throttle(timer, function () {
        _runResizeHandlers();
      }, 200);
    });
  };

  return {
    /**
     * Class main initializer.
     * @param {object} settings.
     * @returns null
     */
    //main function to initiate the theme
    init: function init(settings) {
      if (settings && settings.breakpoints) {
        breakpoints = settings.breakpoints;
      }

      _windowResizeHandler();
    },

    /**
     * Adds window resize event handler.
     * @param {function} callback function.
     */
    addResizeHandler: function addResizeHandler(callback) {
      resizeHandlers.push(callback);
    },

    /**
     * Removes window resize event handler.
     * @param {function} callback function.
     */
    removeResizeHandler: function removeResizeHandler(callback) {
      for (var i = 0; i < resizeHandlers.length; i++) {
        if (callback === resizeHandlers[i]) {
          delete resizeHandlers[i];
        }
      }
    },

    /**
     * Trigger window resize handlers.
     */
    runResizeHandlers: function runResizeHandlers() {
      _runResizeHandlers();
    },
    resize: function resize() {
      if (typeof Event === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
      } else {
        // for IE and other old browsers
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
      }
    },

    /**
     * Get GET parameter value from URL.
     * @param {string} paramName Parameter name.
     * @returns {string}
     */
    getURLParam: function getURLParam(paramName) {
      var searchString = window.location.search.substring(1),
          i,
          val,
          params = searchString.split("&");

      for (i = 0; i < params.length; i++) {
        val = params[i].split("=");

        if (val[0] == paramName) {
          return unescape(val[1]);
        }
      }

      return null;
    },

    /**
     * Checks whether current device is mobile touch.
     * @returns {boolean}
     */
    isMobileDevice: function isMobileDevice() {
      var test = this.getViewPort().width < this.getBreakpoint('lg') ? true : false;

      if (test === false) {
        // For use within normal web clients
        test = navigator.userAgent.match(/iPad/i) != null;
      }

      return test;
    },

    /**
     * Checks whether current device is desktop.
     * @returns {boolean}
     */
    isDesktopDevice: function isDesktopDevice() {
      return KTUtil.isMobileDevice() ? false : true;
    },

    /**
     * Gets browser window viewport size. Ref:
     * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
     * @returns {object}
     */
    getViewPort: function getViewPort() {
      var e = window,
          a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    },

    /**
     * Checks whether given device mode is currently activated.
     * @param {string} mode Responsive mode name(e.g: desktop,
     *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
     * @returns {boolean}
     */
    isInResponsiveRange: function isInResponsiveRange(mode) {
      var breakpoint = this.getViewPort().width;

      if (mode == 'general') {
        return true;
      } else if (mode == 'desktop' && breakpoint >= this.getBreakpoint('lg') + 1) {
        return true;
      } else if (mode == 'tablet' && breakpoint >= this.getBreakpoint('md') + 1 && breakpoint < this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
        return true;
      } else if (mode == 'desktop-and-tablet' && breakpoint >= this.getBreakpoint('md') + 1) {
        return true;
      } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
        return true;
      }

      return false;
    },

    /**
           * Checks whether given device mode is currently activated.
           * @param {string} mode Responsive mode name(e.g: desktop,
           *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
           * @returns {boolean}
           */
    isBreakpointUp: function isBreakpointUp(mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);
      return width >= breakpoint;
    },
    isBreakpointDown: function isBreakpointDown(mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);
      return width < breakpoint;
    },

    /**
     * Generates unique ID for give prefix.
     * @param {string} prefix Prefix for generated ID
     * @returns {boolean}
     */
    getUniqueID: function getUniqueID(prefix) {
      return prefix + Math.floor(Math.random() * new Date().getTime());
    },

    /**
     * Gets window width for give breakpoint mode.
     * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
     * @returns {number}
     */
    getBreakpoint: function getBreakpoint(mode) {
      return breakpoints[mode];
    },

    /**
     * Checks whether object has property matchs given key path.
     * @param {object} obj Object contains values paired with given key path
     * @param {string} keys Keys path seperated with dots
     * @returns {object}
     */
    isset: function isset(obj, keys) {
      var stone;
      keys = keys || '';

      if (keys.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
      }

      keys = keys.split('.');

      do {
        if (obj === undefined) {
          return false;
        }

        stone = keys.shift();

        if (!obj.hasOwnProperty(stone)) {
          return false;
        }

        obj = obj[stone];
      } while (keys.length);

      return true;
    },

    /**
     * Gets highest z-index of the given element parents
     * @param {object} el jQuery element object
     * @returns {number}
     */
    getHighestZindex: function getHighestZindex(el) {
      var position, value;

      while (el && el !== document) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = KTUtil.css(el, 'position');

        if (position === "absolute" || position === "relative" || position === "fixed") {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt(KTUtil.css(el, 'z-index'));

          if (!isNaN(value) && value !== 0) {
            return value;
          }
        }

        el = el.parentNode;
      }

      return null;
    },

    /**
     * Checks whether the element has any parent with fixed positionfreg
     * @param {object} el jQuery element object
     * @returns {boolean}
     */
    hasFixedPositionedParent: function hasFixedPositionedParent(el) {
      var position;

      while (el && el !== document) {
        position = KTUtil.css(el, 'position');

        if (position === "fixed") {
          return true;
        }

        el = el.parentNode;
      }

      return false;
    },

    /**
     * Simulates delay
     */
    sleep: function sleep(milliseconds) {
      var start = new Date().getTime();

      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },

    /**
     * Gets randomly generated integer value within given min and max range
     * @param {number} min Range start value
     * @param {number} max Range end value
     * @returns {number}
     */
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Checks whether Angular library is included
     * @returns {boolean}
     */
    isAngularVersion: function isAngularVersion() {
      return window.Zone !== undefined ? true : false;
    },
    // Deep extend:  $.extend(true, {}, objA, objB);
    deepExtend: function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;

        for (var key in obj) {
          if (!obj.hasOwnProperty(key)) {
            continue;
          } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


          if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            out[key] = KTUtil.deepExtend(out[key], obj[key]);
            continue;
          }

          out[key] = obj[key];
        }
      }

      return out;
    },
    // extend:  $.extend({}, objA, objB);
    extend: function extend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) continue;

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
        }
      }

      return out;
    },
    getById: function getById(el) {
      if (typeof el === 'string') {
        return document.getElementById(el);
      } else {
        return el;
      }
    },
    getByTag: function getByTag(query) {
      return document.getElementsByTagName(query);
    },
    getByTagName: function getByTagName(query) {
      return document.getElementsByTagName(query);
    },
    getByClass: function getByClass(query) {
      return document.getElementsByClassName(query);
    },
    getBody: function getBody() {
      return document.getElementsByTagName('body')[0];
    },

    /**
     * Checks whether the element has given classes
     * @param {object} el jQuery element object
     * @param {string} Classes string
     * @returns {boolean}
     */
    hasClasses: function hasClasses(el, classes) {
      if (!el) {
        return;
      }

      var classesArr = classes.split(" ");

      for (var i = 0; i < classesArr.length; i++) {
        if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
          return false;
        }
      }

      return true;
    },
    hasClass: function hasClass(el, className) {
      if (!el) {
        return;
      }

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    },
    addClass: function addClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          if (classNames[i] && classNames[i].length > 0) {
            el.classList.add(KTUtil.trim(classNames[i]));
          }
        }
      } else if (!KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className += ' ' + KTUtil.trim(classNames[x]);
        }
      }
    },
    removeClass: function removeClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          el.classList.remove(KTUtil.trim(classNames[i]));
        }
      } else if (KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
        }
      }
    },
    triggerCustomEvent: function triggerCustomEvent(el, eventName, data) {
      var event;

      if (window.CustomEvent) {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    },
    triggerEvent: function triggerEvent(node, eventName) {
      // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
      var doc;

      if (node.ownerDocument) {
        doc = node.ownerDocument;
      } else if (node.nodeType == 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
      } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
      }

      if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = ""; // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.

        switch (eventName) {
          case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.

          case "mouseenter":
          case "mouseleave":
          case "mousedown":
          case "mouseup":
            eventClass = "MouseEvents";
            break;

          case "focus":
          case "change":
          case "blur":
          case "select":
            eventClass = "HTMLEvents";
            break;

          default:
            throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
            break;
        }

        var event = doc.createEvent(eventClass);
        var bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action

        node.dispatchEvent(event, true);
      } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events

        node.fireEvent("on" + eventName, event);
      }
    },
    index: function index(el) {
      var c = el.parentNode.children,
          i = 0;

      for (; i < c.length; i++) {
        if (c[i] == el) return i;
      }
    },
    trim: function trim(string) {
      return string.trim();
    },
    eventTriggered: function eventTriggered(e) {
      if (e.currentTarget.dataset.triggered) {
        return true;
      } else {
        e.currentTarget.dataset.triggered = true;
        return false;
      }
    },
    remove: function remove(el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },
    find: function find(parent, query) {
      parent = KTUtil.getById(parent);

      if (parent) {
        return parent.querySelector(query);
      }
    },
    findAll: function findAll(parent, query) {
      parent = KTUtil.getById(parent);

      if (parent) {
        return parent.querySelectorAll(query);
      }
    },
    insertAfter: function insertAfter(el, referenceNode) {
      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    },
    parents: function parents(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;

          while (--i >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
      } // Set up a parent array


      var parents = []; // Push each parent element to the array

      for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
          if (elem.matches(selector)) {
            parents.push(elem);
          }

          continue;
        }

        parents.push(elem);
      } // Return our parent array


      return parents;
    },
    children: function children(el, selector, log) {
      if (!el || !el.childNodes) {
        return;
      }

      var result = [],
          i = 0,
          l = el.childNodes.length;

      for (var i; i < l; ++i) {
        if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
          result.push(el.childNodes[i]);
        }
      }

      return result;
    },
    child: function child(el, selector, log) {
      var children = KTUtil.children(el, selector, log);
      return children ? children[0] : null;
    },
    matches: function matches(el, selector, log) {
      var p = Element.prototype;

      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      if (el && el.tagName) {
        return f.call(el, selector);
      } else {
        return false;
      }
    },
    data: function data(el) {
      return {
        set: function set(name, data) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            window.KTUtilElementDataStoreID++;
            el.customDataTag = window.KTUtilElementDataStoreID;
          }

          if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
            window.KTUtilElementDataStore[el.customDataTag] = {};
          }

          window.KTUtilElementDataStore[el.customDataTag][name] = data;
        },
        get: function get(name) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            return null;
          }

          return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
        },
        has: function has(name) {
          if (!el) {
            return false;
          }

          if (el.customDataTag === undefined) {
            return false;
          }

          return window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name] ? true : false;
        },
        remove: function remove(name) {
          if (el && this.has(name)) {
            delete window.KTUtilElementDataStore[el.customDataTag][name];
          }
        }
      };
    },
    outerWidth: function outerWidth(el, margin) {
      var width;

      if (margin === true) {
        width = parseFloat(el.offsetWidth);
        width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));
        return parseFloat(width);
      } else {
        width = parseFloat(el.offsetWidth);
        return width;
      }
    },
    offset: function offset(el) {
      var rect, win;

      if (!el) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!el.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = el.getBoundingClientRect();
      win = el.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    height: function height(el) {
      return KTUtil.css(el, 'height');
    },
    outerHeight: function outerHeight(el, withMargin) {
      var height = el.offsetHeight;
      var style;

      if (typeof withMargin !== 'undefined' && withMargin === true) {
        style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
      } else {
        return height;
      }
    },
    visible: function visible(el) {
      return !(el.offsetWidth === 0 && el.offsetHeight === 0);
    },
    attr: function attr(el, name, value) {
      if (el == undefined) {
        return;
      }

      if (value !== undefined) {
        el.setAttribute(name, value);
      } else {
        return el.getAttribute(name);
      }
    },
    hasAttr: function hasAttr(el, name) {
      if (el == undefined) {
        return;
      }

      return el.getAttribute(name) ? true : false;
    },
    removeAttr: function removeAttr(el, name) {
      if (el == undefined) {
        return;
      }

      el.removeAttribute(name);
    },
    animate: function animate(from, to, duration, update, easing, done) {
      /**
       * TinyAnimate.easings
       *  Adapted from jQuery Easing
       */
      var easings = {};
      var easing;

      easings.linear = function (t, b, c, d) {
        return c * t / d + b;
      };

      easing = easings.linear; // Early bail out if called incorrectly

      if (typeof from !== 'number' || typeof to !== 'number' || typeof duration !== 'number' || typeof update !== 'function') {
        return;
      } // Create mock done() function if necessary


      if (typeof done !== 'function') {
        done = function done() {};
      } // Pick implementation (requestAnimationFrame | setTimeout)


      var rAF = window.requestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 50);
      }; // Animation loop


      var canceled = false;
      var change = to - from;

      function loop(timestamp) {
        var time = (timestamp || +new Date()) - start;

        if (time >= 0) {
          update(easing(time, from, change, duration));
        }

        if (time >= 0 && time >= duration) {
          update(to);
          done();
        } else {
          rAF(loop);
        }
      }

      update(from); // Start animation loop

      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();
      rAF(loop);
    },
    actualCss: function actualCss(el, prop, cache) {
      var css = '';

      if (el instanceof HTMLElement === false) {
        return;
      }

      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        var value; // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden

        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

        if (prop == 'width') {
          value = el.offsetWidth;
        } else if (prop == 'height') {
          value = el.offsetHeight;
        }

        el.style.cssText = css; // store it in cache

        el.setAttribute('kt-hidden-' + prop, value);
        return parseFloat(value);
      } else {
        // store it in cache
        return parseFloat(el.getAttribute('kt-hidden-' + prop));
      }
    },
    actualHeight: function actualHeight(el, cache) {
      return KTUtil.actualCss(el, 'height', cache);
    },
    actualWidth: function actualWidth(el, cache) {
      return KTUtil.actualCss(el, 'width', cache);
    },
    getScroll: function getScroll(element, method) {
      // The passed in `method` value should be 'Top' or 'Left'
      method = 'scroll' + method;
      return element == window || element == document ? self[method == 'scrollTop' ? 'pageYOffset' : 'pageXOffset'] || browserSupportsBoxModel && document.documentElement[method] || document.body[method] : element[method];
    },
    css: function css(el, styleProp, value) {
      if (!el) {
        return;
      }

      if (value !== undefined) {
        el.style[styleProp] = value;
      } else {
        var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hyphen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
          // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
          });
          value = el.currentStyle[styleProp]; // convert other units to pixels on IE

          if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return function (value) {
              var oldLeft = el.style.left,
                  oldRsLeft = el.runtimeStyle.left;
              el.runtimeStyle.left = el.currentStyle.left;
              el.style.left = value || 0;
              value = el.style.pixelLeft + "px";
              el.style.left = oldLeft;
              el.runtimeStyle.left = oldRsLeft;
              return value;
            }(value);
          }

          return value;
        }
      }
    },
    slide: function slide(el, dir, speed, callback, recalcMaxHeight) {
      if (!el || dir == 'up' && KTUtil.visible(el) === false || dir == 'down' && KTUtil.visible(el) === true) {
        return;
      }

      speed = speed ? speed : 600;
      var calcHeight = KTUtil.actualHeight(el);
      var calcPaddingTop = false;
      var calcPaddingBottom = false;

      if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
        KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
      }

      if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
        KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
      }

      if (KTUtil.data(el).has('slide-padding-top')) {
        calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
      }

      if (KTUtil.data(el).has('slide-padding-bottom')) {
        calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
      }

      if (dir == 'up') {
        // up
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = calcPaddingTop - value + 'px';
          }, 'linear');
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = calcPaddingBottom - value + 'px';
          }, 'linear');
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = calcHeight - value + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = 'none';

          if (typeof callback === 'function') {
            callback();
          }
        });
      } else if (dir == 'down') {
        // down
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            //
            el.style.paddingTop = value + 'px';
          }, 'linear', function () {
            el.style.paddingTop = '';
          });
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = value + 'px';
          }, 'linear', function () {
            el.style.paddingBottom = '';
          });
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = value + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = '';
          el.style.overflow = '';

          if (typeof callback === 'function') {
            callback();
          }
        });
      }
    },
    slideUp: function slideUp(el, speed, callback) {
      KTUtil.slide(el, 'up', speed, callback);
    },
    slideDown: function slideDown(el, speed, callback) {
      KTUtil.slide(el, 'down', speed, callback);
    },
    show: function show(el, display) {
      if (typeof el !== 'undefined') {
        el.style.display = display ? display : 'block';
      }
    },
    hide: function hide(el) {
      if (typeof el !== 'undefined') {
        el.style.display = 'none';
      }
    },
    addEvent: function addEvent(el, type, handler, one) {
      if (typeof el !== 'undefined' && el !== null) {
        el.addEventListener(type, handler);
      }
    },
    removeEvent: function removeEvent(el, type, handler) {
      if (el !== null) {
        el.removeEventListener(type, handler);
      }
    },
    on: function on(element, selector, event, handler) {
      if (!selector) {
        return;
      }

      var eventId = KTUtil.getUniqueID('event');

      window.KTUtilDelegatedEventHandlers[eventId] = function (e) {
        var targets = element.querySelectorAll(selector);
        var target = e.target;

        while (target && target !== element) {
          for (var i = 0, j = targets.length; i < j; i++) {
            if (target === targets[i]) {
              handler.call(target, e);
            }
          }

          target = target.parentNode;
        }
      };

      KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      return eventId;
    },
    off: function off(element, event, eventId) {
      if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
        return;
      }

      KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      delete window.KTUtilDelegatedEventHandlers[eventId];
    },
    one: function onetime(el, type, callback) {
      el.addEventListener(type, function callee(e) {
        // remove event
        if (e.target && e.target.removeEventListener) {
          e.target.removeEventListener(e.type, callee);
        } // need to verify from https://themeforest.net/author_dashboard#comment_23615588


        if (el && el.removeEventListener) {
          e.currentTarget.removeEventListener(e.type, callee);
        } // call handler


        return callback(e);
      });
    },
    hash: function hash(str) {
      var hash = 0,
          i,
          chr;
      if (str.length === 0) return hash;

      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return hash;
    },
    animateClass: function animateClass(el, animationName, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.addClass(el, 'animated ' + animationName);
      KTUtil.one(el, animation, function () {
        KTUtil.removeClass(el, 'animated ' + animationName);
      });

      if (callback) {
        KTUtil.one(el, animation, callback);
      }
    },
    transitionEnd: function transitionEnd(el, callback) {
      var transition;
      var transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        WebkitTransition: 'webkitTransitionEnd',
        msTransition: 'msTransitionEnd'
      };

      for (var t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
        }
      }

      KTUtil.one(el, transition, callback);
    },
    animationEnd: function animationEnd(el, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.one(el, animation, callback);
    },
    animateDelay: function animateDelay(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-delay', value);
      }
    },
    animateDuration: function animateDuration(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-duration', value);
      }
    },
    scrollTo: function scrollTo(target, offset, duration) {
      var duration = duration ? duration : 500;
      var targetPos = target ? KTUtil.offset(target).top : 0;
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var from, to;

      if (offset) {
        scrollPos += offset;
      }

      from = scrollPos;
      to = targetPos;
      KTUtil.animate(from, to, duration, function (value) {
        document.documentElement.scrollTop = value;
        document.body.parentNode.scrollTop = value;
        document.body.scrollTop = value;
      }); //, easing, done
    },
    scrollTop: function scrollTop(offset, duration) {
      KTUtil.scrollTo(null, offset, duration);
    },
    isArray: function isArray(obj) {
      return obj && Array.isArray(obj);
    },
    ready: function ready(callback) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    },
    numberString: function numberString(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;

      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    },
    detectIE: function detectIE() {
      var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    },
    isRTL: function isRTL() {
      var html = KTUtil.getByTagName('html')[0];

      if (html) {
        return KTUtil.attr(html, 'direction') == 'rtl';
      }
    },
    // Scroller
    scrollInit: function scrollInit(element, options) {
      if (!element) {
        return;
      } // Learn more: https://github.com/mdbootstrap/perfect-scrollbar#options


      var pluginDefOptions = {
        wheelSpeed: 0.5,
        swipeEasing: true,
        wheelPropagation: false,
        minScrollbarLength: 40,
        maxScrollbarLength: 300,
        suppressScrollX: true
      };
      options = KTUtil.deepExtend({}, pluginDefOptions, options); // Define init function

      function init() {
        var ps;
        var height; // Get extra options via data attributes

        var attrs = element.getAttributeNames();

        if (attrs.length > 0) {
          attrs.forEach(function (attrName) {
            // more options; https://github.com/ganlanyuan/tiny-slider#options
            if (/^data-.*/g.test(attrName)) {
              if (['scroll', 'height', 'mobile-height'].includes(optionName) == false) {
                var optionName = attrName.replace('data-', '').toLowerCase().replace(/(?:[\s-])\w/g, function (match) {
                  return match.replace('-', '').toUpperCase();
                });
                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
              }
            }
          });
        }

        if (options.height instanceof Function) {
          height = options.height.call();
        } else {
          if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
            height = parseInt(options.mobileHeight);
          } else if (options.height) {
            height = parseInt(options.height);
          } else {
            height = parseInt(KTUtil.css(element, 'height'));
          }
        }

        if (height === false) {
          KTUtil.scrollDestroy(element, true);
          return;
        }

        height = parseInt(height); // Destroy scroll on table and mobile modes

        if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
          ps = KTUtil.data(element).get('ps');

          if (ps) {
            if (options.resetHeightOnDestroy) {
              KTUtil.css(element, 'height', 'auto');
            } else {
              KTUtil.css(element, 'overflow', 'auto');

              if (height > 0) {
                KTUtil.css(element, 'height', height + 'px');
              }
            }

            ps.destroy();
            ps = KTUtil.data(element).remove('ps');
          } else if (height > 0) {
            KTUtil.css(element, 'overflow', 'auto');
            KTUtil.css(element, 'height', height + 'px');
          }

          return;
        }

        if (height > 0) {
          KTUtil.css(element, 'height', height + 'px');
        }

        if (options.desktopNativeScroll) {
          KTUtil.css(element, 'overflow', 'auto');
          return;
        } // Pass options via HTML Attributes


        if (KTUtil.attr(element, 'data-window-scroll') == 'true') {
          options.windowScroll = true;
        } // Init scroll


        ps = KTUtil.data(element).get('ps');

        if (ps) {
          ps.update();
        } else {
          KTUtil.css(element, 'overflow', 'hidden');
          KTUtil.addClass(element, 'scroll');
          ps = new PerfectScrollbar(element, options);
          KTUtil.data(element).set('ps', ps);
        } // Remember scroll position in cookie


        var uid = KTUtil.attr(element, 'id'); // Todo:Consider using Localstorage

        if (options.rememberPosition === true && KTCookie && uid) {
          if (KTCookie.getCookie(uid)) {
            var pos = parseInt(KTCookie.getCookie(uid));

            if (pos > 0) {
              element.scrollTop = pos;
            }
          }

          element.addEventListener('ps-scroll-y', function () {
            KTCookie.setCookie(uid, element.scrollTop);
          });
        }
      } // Init


      init(); // Handle window resize

      if (options.handleWindowResize) {
        KTUtil.addResizeHandler(function () {
          init();
        });
      }
    },
    scrollUpdate: function scrollUpdate(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.update();
      }
    },
    scrollUpdateAll: function scrollUpdateAll(parent) {
      var scrollers = KTUtil.findAll(parent, '.ps');

      for (var i = 0, len = scrollers.length; i < len; i++) {
        KTUtil.scrollUpdate(scrollers[i]);
      }
    },
    scrollDestroy: function scrollDestroy(element, resetAll) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.destroy();
        ps = KTUtil.data(element).remove('ps');
      }

      if (element && resetAll) {
        element.style.setProperty('overflow', '');
        element.style.setProperty('height', '');
      }
    },
    filterBoolean: function filterBoolean(val) {
      // Convert string boolean
      if (val === true || val === 'true') {
        return true;
      }

      if (val === false || val === 'false') {
        return false;
      }

      return val;
    },
    setHTML: function setHTML(el, html) {
      el.innerHTML = html;
    },
    getHTML: function getHTML(el) {
      if (el) {
        return el.innerHTML;
      }
    },
    getDocumentHeight: function getDocumentHeight() {
      var body = document.body;
      var html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    },
    getScrollTop: function getScrollTop() {
      return (document.scrollingElement || document.documentElement).scrollTop;
    },
    changeColor: function changeColor(col, amt) {
      var usePound = false;

      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }

      var num = parseInt(col, 16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;else if (r < 0) r = 0;
      var b = (num >> 8 & 0x00FF) + amt;
      if (b > 255) b = 255;else if (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;else if (g < 0) g = 0;
      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    },
    // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
    throttle: function throttle(timer, func, delay) {
      // If setTimeout is already scheduled, no need to do anything
      if (timer) {
        return;
      } // Schedule a setTimeout after delay seconds


      timer = setTimeout(function () {
        func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>
        // the next scroll event function execution can be scheduled by the setTimeout

        timer = undefined;
      }, delay);
    },
    // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
    debounce: function debounce(timer, func, delay) {
      // Cancels the setTimeout method execution
      clearTimeout(timer); // Executes the func after delay time.

      timer = setTimeout(func, delay);
    },
    btnWait: function btnWait(el, cls, message, disable) {
      if (!el) {
        return;
      }

      if (typeof disable !== 'undefined' && disable === true) {
        KTUtil.attr(el, "disabled", true);
      }

      if (cls) {
        KTUtil.addClass(el, cls);
        KTUtil.attr(el, "wait-class", cls);
      }

      if (message) {
        var caption = KTUtil.find(el, '.btn-caption');

        if (caption) {
          KTUtil.data(caption).set('caption', KTUtil.getHTML(caption));
          KTUtil.setHTML(caption, message);
        } else {
          KTUtil.data(el).set('caption', KTUtil.getHTML(el));
          KTUtil.setHTML(el, message);
        }
      }
    },
    btnRelease: function btnRelease(el) {
      if (!el) {
        return;
      } /// Show loading state on button


      KTUtil.removeAttr(el, "disabled");

      if (KTUtil.hasAttr(el, "wait-class")) {
        KTUtil.removeClass(el, KTUtil.attr(el, "wait-class"));
      }

      var caption = KTUtil.find(el, '.btn-caption');

      if (caption && KTUtil.data(caption).has('caption')) {
        KTUtil.setHTML(caption, KTUtil.data(caption).get('caption'));
      } else if (KTUtil.data(el).has('caption')) {
        KTUtil.setHTML(el, KTUtil.data(el).get('caption'));
      }
    },
    isOffscreen: function isOffscreen(el, direction, offset) {
      offset = offset || 0;
      var windowWidth = KTUtil.getViewPort().width;
      var windowHeight = KTUtil.getViewPort().height;
      var top = KTUtil.offset(el).top;
      var height = KTUtil.outerHeight(el) + offset;
      var left = KTUtil.offset(el).left;
      var width = KTUtil.outerWidth(el) + offset;

      if (direction == 'bottom') {
        if (windowHeight < top + height) {
          return true;
        } else if (windowHeight > top + height * 1.5) {
          return true;
        }
      }

      if (direction == 'top') {
        if (top < 0) {
          return true;
        } else if (top > height) {
          return true;
        }
      }

      if (direction == 'left') {
        if (left < 0) {
          return true;
        } else if (left * 2 > width) {//console.log('left 2');
          //return true;
        }
      }

      if (direction == 'right') {
        if (windowWidth < left + width) {
          return true;
        } else {//console.log('right 2');
          //return true;
        }
      }

      return false;
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTUtil;
} // Initialize KTUtil class on document ready


KTUtil.ready(function () {
  if (typeof KTAppSettings !== 'undefined') {
    KTUtil.init(KTAppSettings);
  } else {
    KTUtil.init();
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTUtil);

/***/ })

}]);
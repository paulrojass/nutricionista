//require('./src/main.js')
//import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from "vue";
//import App from "./App.vue";
//import router from "./router";
import store from "./core/services/store";
//import ApiService from "./core/services/api.service";
//import MockService from "./core/mock/mock.service";
import { VERIFY_AUTH } from "./core/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "./core/services/store/config.module";

Vue.config.productionTip = false;
/** Vue Filters Start */
Vue.filter('truncate', function (text, length, suffix) {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});
/** Vue Filters End */

// // Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// // Vue 3rd party plugins
import i18n from "./core/plugins/vue-i18n";
import vuetify from "./core/plugins/vuetify";
import "./core/plugins/portal-vue";
import "./core/plugins/bootstrap-vue";
import "./core/plugins/perfect-scrollbar";
import "./core/plugins/highlight-js";
import "./core/plugins/inline-svg";
import "./core/plugins/apexcharts";
import "./core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import { InertiaProgress } from '@inertiajs/progress'

import { App, plugin } from '@inertiajs/inertia-vue'
//import Vue from 'vue'

InertiaProgress.init()
Vue.use(plugin)
Vue.mixin({methods:{route:window.route}})

// // API service init
//ApiService.init();

// // Remove this to disable mock API
//MockService.init();

//router.beforeEach((to, from, next) => {
   //Ensure we checked auth before each page load.
  //Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

   //reset config to initial state
  //store.dispatch(RESET_LAYOUT_CONFIG);

   //Scroll page to top on every route change
  //setTimeout(() => {
    //window.scrollTo(0, 0);
  //}, 100);
//});

//new Vue({
//  router,
//  store,
//  i18n,
//  vuetify,
//  render: h => h(App)
//}).$mount("#app");

const el = document.getElementById('app')

new Vue({
    store,
    i18n,
    vuetify,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`../Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el)
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

//window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//const app = new Vue({
//    el: '#app',
//});

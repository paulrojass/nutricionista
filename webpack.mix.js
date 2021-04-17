const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.vue()
mix.sass('resources/sass/app.scss', 'public/css')
.sass('resources/js/src/assets/sass/style.vue.scss', 'public/css/admin')
mix.webpackConfig({
   output: {
       chunkFilename: `js/[name].js?id=[chunkhash]`
   },
   resolve: {
       alias: {
           'vue$': 'vue/dist/vue.runtime.esm.js',
           '@': path.resolve(__dirname, 'resources/js/src/')
       }
   }
});

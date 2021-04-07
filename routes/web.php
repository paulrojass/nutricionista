<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
/Route::get('/', function () {
    return view('welcome');
});
*/


Route::get('login')->name('login')->uses([App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->middleware('guest');

Route::post('login')->name('login.attempt')->uses([App\Http\Controllers\Auth\LoginController::class, 'login'])->middleware('guest');

Route::get('/', App\Http\Controllers\WelcomeController::class);

Route::prefix('panel')->group(function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::resource('pacientes', App\Http\Controllers\PatientController::class);
});


//Auth::routes();


Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

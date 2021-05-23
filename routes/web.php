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

Auth::routes();

Route::get('login')->name('login')->uses([App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->middleware('guest');

Route::post('login')->name('login.attempt')->uses([App\Http\Controllers\Auth\LoginController::class, 'login'])->middleware('guest');

Route::get('/', App\Http\Controllers\WelcomeController::class);
Route::get('/solicitud-de-cita', [App\Http\Controllers\LandingController::class, 'landing'])->name('landing');
Route::get('/solicitud-de-cita-exitoso', [App\Http\Controllers\LandingController::class, 'success'])->name('success');
Route::post('/solicitud-de-cita/crear', [App\Http\Controllers\LandingController::class, 'storeCandidate'])->name('landing-store-candidate');

Route::prefix('panel')->group(function () {
  Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
  Route::get('finanzas', [App\Http\Controllers\HomeController::class, 'finance'])->name('finance');
  Route::delete('candidatos/{id}', [App\Http\Controllers\PatientController::class, 'destroyCandidate'])->name('candidates.destroy');
  Route::get('candidatos', [App\Http\Controllers\PatientController::class, 'candidates'] )->name('candidates.index');
  Route::get('pacientes/buscar', [App\Http\Controllers\PatientController::class, 'search'] )->name('patients.search');
  Route::get('pacientes/buscar-status', [App\Http\Controllers\PatientController::class, 'searchStatus'] )->name('patients.search-status');
  Route::get('pacientes/{patient_id}/historial', [App\Http\Controllers\PatientController::class, 'showHistory'] )->name('patients.show-history');
  Route::resource('pacientes',
  App\Http\Controllers\PatientController::class,
  [
    'names' => [
      'index' => 'patients.index',
      'create' => 'patients.create',
      'show' => 'patients.show',
      'store' => 'patients.store',
      'edit' => 'patients.edit',
      'update' => 'patients.update',
      'destroy' => 'patients.destroy'
    ]
  ]);
  
  Route::get('controles/editar-fecha/{id}', [App\Http\Controllers\ControlController::class, 'editDate'])->name('controls.edit-date');
  Route::post('controles/cambiar-estado/', [App\Http\Controllers\ControlController::class, 'changeStatus'])->name('controls.change-status');
  Route::get('controles/buscar', [App\Http\Controllers\ControlController::class, 'search'])->name('controls.search');
  Route::resource('controles',
  App\Http\Controllers\ControlController::class,
  [
    'names' => [
      'index' => 'controls.index',
      'show' => 'controls.show',
      'store' => 'controls.store',
      'edit' => 'controls.edit',
      'update' => 'controls.update',
      'destroy' => 'controls.destroy'
    ]
  ])
  ->except(['create']);
  
  Route::resource('notes',
  App\Http\Controllers\NoteController::class,
  [
    'names' => [
      'store' => 'notes.store',
      'destroy' => 'notes.destroy'
    ]
  ])
  ->except(['index, create, show, edit, update']);
  
  Route::get('controles-pacientes', [App\Http\Controllers\ControlController::class, 'patients'])->name('controls.patients');
  Route::get('controles/crear/{patient_id}', [App\Http\Controllers\ControlController::class, 'create'])->name('controls.create');
  Route::get('calendario', [App\Http\Controllers\ControlController::class, 'calendar'])->name('calendar');
  
  Route::get('archivos/crear/{patient_id}', [App\Http\Controllers\AttachmentController::class, 'create'])->name('attachments.create');
  Route::resource('archivos',
  App\Http\Controllers\AttachmentController::class,
  [
    'names' => [
      'index' => 'attachments.index',
      'show' => 'attachments.show',
      'store' => 'attachments.store',
      'edit' => 'attachments.edit',
      'update' => 'attachments.update',
      'destroy' => 'attachments.destroy'
    ]
  ])
  ->except(['create']);
  
  Route::prefix('configuracion')->group(function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'settings'])->name('settings');
    Route::get('ciudades/{city_id}/planes', [App\Http\Controllers\PlanController::class, 'index'])->name('plans.index');
    Route::resource('ciudades',
    App\Http\Controllers\CityController::class,
    [
      'names' => [
        'index' => 'cities.index',
        'create' => 'cities.create',
        'show' => 'cities.show',
        'store' => 'cities.store',
        'edit' => 'cities.edit',
        'update' => 'cities.update',
        'destroy' => 'cities.destroy'
      ]
    ]);
    Route::resource('planes',
    App\Http\Controllers\PlanController::class,
    [
      'names' => [
        'create' => 'plans.create',
        'show' => 'plans.show',
        'store' => 'plans.store',
        'edit' => 'plans.edit',
        'update' => 'plans.update',
        'destroy' => 'plans.destroy'
      ]
    ])
    ->except(['index']);
  });
});
Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

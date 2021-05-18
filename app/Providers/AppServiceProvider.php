<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
  * Register any application services.
  *
  * @return void
  */
  public function register()
  {
    //
  }
  
  /**
  * Bootstrap any application services.
  *
  * @return void
  */
  public function boot()
  {
    Schema::defaultStringLength(191);
    
    Carbon::setLocale(config('app.locale'));
    
    /**
    * Permite mostrar las rutas en español
    *
    * @author William Páez <paez.william8@gmail.com>
    */
    Route::resourceVerbs([
      'create' => 'crear',
      'edit' => 'editar',
    ]);
  }
}

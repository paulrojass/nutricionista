<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

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
    
    VerifyEmail::toMailUsing(function ($notifiable, $url) {
      return (new MailMessage)
      ->subject('Verificación de usuario')
      ->line('Para verificar la creación del usuario en la plataforma por favor haga clic en el siguiente botón.')
      ->action('Verificar correo', $url);
    });
    
  }
}

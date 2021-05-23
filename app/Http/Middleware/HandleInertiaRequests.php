<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Carbon\Carbon;

use App\Models\Patient;
use App\Models\Control;

class HandleInertiaRequests extends Middleware
{
  /**
  * The root template that's loaded on the first page visit.
  *
  * @see https://inertiajs.com/server-side-setup#root-template
  * @var string
  */
  protected $rootView = 'app';
  
  /**
  * Determines the current asset version.
  *
  * @see https://inertiajs.com/asset-versioning
  * @param  \Illuminate\Http\Request  $request
  * @return string|null
  */
  public function version(Request $request)
  {
    return parent::version($request);
  }
  
  /**
  * Defines the props that are shared by default.
  *
  * @see https://inertiajs.com/shared-data
  * @param  \Illuminate\Http\Request  $request
  * @return array
  */
  public function share(Request $request)
  {
    $auth_user = auth()->user();
    $patients = Patient::all()->count();
    $inactives = Patient::where('active', 0)->take(5)->get();
    $inactivesTotal = Patient::where('active', 0)->count();
    $activesTotal = Patient::where('active', 1)->count();
    if($patients > 0 ){
      $activePatients = round(($activesTotal*100) / $patients);
      $inactivePatients = round(($inactivesTotal*100) / $patients);
    } else {
      $activePatients = 0;
      $inactivePatients = 0;
    }
    $successControls = Control::where('date', Carbon::today())
    ->whereIn('status', ['albahaca', 'verde'])->count();
    $controls = Control::where('date', Carbon::today())->count();
    //dd($controls);
    if ($controls > 0) {
      $controlsSuccessToday = round(($successControls*100) / $controls);
    } else {
      $controlsSuccessToday = 0;
      $controls = 0;
    }
    return array_merge(parent::share($request), [
      'auth_user' => $auth_user ? : null,
      'inactives' => $inactives ? : 0,
      'activesTotal' => $activesTotal ? : 0,
      'inactivesTotal' => $inactivesTotal ? : 0,
      'activePatients' => $activePatients ? : 0,
      'inactivePatients' => $inactivePatients ? : 0,
      'successControls' => $successControls ? : 0,
      'controlsSuccessToday' => $controlsSuccessToday ? : 0,
      'flash' => [
        'message' => fn () => $request->session()->get('message')
      ],
    ]);
  }
}

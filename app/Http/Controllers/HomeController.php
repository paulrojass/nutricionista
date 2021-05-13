<?php

namespace App\Http\Controllers;
use Illuminate\Support\Arr;

use App\Models\Control;
use App\Models\Patient;
use Carbon\Carbon;
use Inertia\Inertia;

use App\Models\City;
use App\Models\Plan;

class HomeController extends Controller
{
  /**
  * Create a new controller instance.
  *
  * @return void
  */
  public function __construct()
  {
    $this->middleware('auth');
  }
  
  /**
  * Show the application dashboard.
  *
  * @return \Illuminate\Contracts\Support\Renderable
  */
  public function index()
  {
    $monthControls = Control::whereBetween('date', [
      Carbon::now()->startOfMonth(),
      Carbon::now()->endOfMonth()]
      )->where('date', '>=', Carbon::today())->with('patient')
      ->orderByRaw('DATE_FORMAT(date, "%m-%d %h:%m:%s")')
      ->get();
      $weekControls = Control::whereBetween('date', [
        Carbon::now()->startOfWeek(),
        Carbon::now()->endOfWeek()]
        )->where('date', '>=', Carbon::today())->with('patient')
        ->orderByRaw('DATE_FORMAT(date, "%m-%d %h:%m:%s")')
        ->get();
        $dayControls = Control::whereDate('date', Carbon::today())->with('patient')
        ->orderByRaw('DATE_FORMAT(date, "%m-%d %h:%m:%s")')
        ->get();
        return Inertia::render('Home', [
          'monthControls' => $monthControls,
          'weekControls' => $weekControls,
          'dayControls' => $dayControls
        ]);
      }
      
      public function finance()
      {
        $total_controls = Control::all();
        $month_candidates = Patient::whereBetween('created_at', [
          Carbon::now()->startOfMonth(),
          Carbon::now()->endOfMonth()]
          )->where('active', 0)
          ->count();
          $month_patients = Patient::whereBetween('created_at', [
            Carbon::now()->startOfMonth(),
            Carbon::now()->endOfMonth()])
            ->where('active', 1)
            ->count();
            $total_actives = Patient::where('active', 1)->count();
            $patients = Patient::all()->count();
            
            $this_year = Control::whereBetween('date', [
              Carbon::now()->startOfYear(),
              Carbon::now()->endOfYear()])->get();
              
              $last_year = Control::whereBetween('date', [
                Carbon::now()->subYear('1')->startOfYear(),
                Carbon::now()->subYear('1')->endOfYear()])->get();
                
                $total_this_year_cop = $this_year
                ->whereIn('status', ['albahaca', 'verde'])
                ->where('plan.city.currency', 'COP')
                ->sum('plan.price');
                
                $total_this_year_usd = $this_year
                ->whereIn('status', ['albahaca', 'verde'])
                ->where('plan.city.currency', 'USD')
                ->sum('plan.price');
                
                $total_last_year_cop = $last_year
                ->whereIn('status', ['albahaca', 'verde'])
                ->where('plan.city.currency', 'COP')
                ->sum('plan.price');
                
                $total_last_year_usd = $last_year
                ->whereIn('status', ['albahaca', 'verde'])
                ->where('plan.city.currency', 'USD')
                ->sum('plan.price');
                
                
                
                $total_usd = $total_controls->where('plan.city.currency', 'USD')->sum('plan.price');
                $total_cop = $total_controls->where('plan.city.currency', 'COP')->sum('plan.price');
                $usd_mensual = array();
                $cop_mensual = array();
                $meses = array();
                $cont = 0;
                for ($i=12 ; $i > 0 ; $i--) {
                  $start = Carbon::now()->subMonth($i)->startOfMonth();
                  $end = Carbon::now()->subMonth($i)->endOfMonth();
                  $controls = Control::whereBetween('date', [$start, $end])->get();
                  $cop = $controls
                  ->whereIn('status', ['albahaca', 'verde'])
                  ->where('plan.city.currency', 'COP')
                  ->sum('plan.price');
                  
                  $usd = $controls
                  ->whereIn('status', ['albahaca', 'verde'])
                  ->where('plan.city.currency', 'USD')
                  ->sum('plan.price');
                  
                  $fecha = $start->format('M-y');
                  $usd_mensual = Arr::add($usd_mensual, $cont, $usd);
                  $cop_mensual = Arr::add($cop_mensual, $cont, $cop);
                  $meses = Arr::add($meses, $cont, $fecha);
                  $cont++;
                }
                
                //dd($cop_mensual);
                return Inertia::render('settings/Finance', [
                  'total_cop' => $total_cop,
                  'total_usd' => $total_usd,
                  'usd_mensual' => $usd_mensual,
                  'cop_mensual' => $cop_mensual,
                  'meses' => $meses,
                  'month_candidates' => $month_candidates,
                  'month_patients' => $month_patients,
                  'total_actives' => $total_actives,
                  'patients' => $patients,
                  'total_this_year_usd' => $total_this_year_usd,
                  'total_this_year_cop' => $total_this_year_cop,
                  'total_last_year_usd' => $total_last_year_usd,
                  'total_last_year_cop' => $total_last_year_cop
                ]);
              }
              
              public function settings()
              {
                return Inertia::render('settings/Index');
              }
              
              public function cities()
              {
                
              }
            }
            
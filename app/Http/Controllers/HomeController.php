<?php

namespace App\Http\Controllers;

use App\Models\Control;
use App\Models\Patient;
use Carbon\Carbon;
use Inertia\Inertia;

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
    }
    
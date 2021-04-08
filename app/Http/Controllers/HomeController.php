<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Control;
use App\Models\Patient;
use Inertia\Inertia;

use Carbon\Carbon;

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
            )->get();
        $weekControls = Control::whereBetween('date', [
            Carbon::now()->startOfWeek(),
            Carbon::now()->endOfWeek()]
            )->get();
        $dayControls = Control::where('date', Carbon::today())->get();

        $active = Patient::where('active', 1)->count();
        $inactive = Patient::where('active', 0)->count();
        return Inertia::render('Home', [
            'monthControls' => $monthControls,
            'weekControls' => $weekControls,
            'dayControls' => $dayControls,
            'active' => $active,
            'inactive' => $inactive
        ]);
    }
}

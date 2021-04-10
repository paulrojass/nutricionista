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
        )->where('date', '>=', Carbon::now())->with('patient')->get();
        $weekControls = Control::whereBetween('date', [
            Carbon::now()->startOfWeek(),
            Carbon::now()->endOfWeek()]
        )->where('date', '>=', Carbon::now())->with('patient')->get();
        $dayControls = Control::where('date', Carbon::today())->with('patient')->get();

        $active = Patient::where('active', 1)->count();
        $inactive = Patient::where('active', 0)->count();
        return Inertia::render('Home', [
            'monthControls' => $monthControls,
            'weekControls' => $weekControls,
            'dayControls' => $dayControls,
            'active' => $active,
            'inactive' => $inactive,
        ]);

    }
}

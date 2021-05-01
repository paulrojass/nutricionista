<?php

namespace App\Http\Controllers;

use App\Models\Control;
use App\Models\Patient;
use App\Models\City;
use Illuminate\Http\Request;

use Inertia\Inertia;

class ControlController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
  }
  
  public function patients()
  {
    $patients = Patient::orderBy('created_at', 'DESC')->where('active', 1)->get();
    return Inertia::render('control/Patients', [
      'patients' => $patients
    ]);
  }
  
  public function calendar()
  {
    return Inertia::render('control/Calendar');
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create($id)
  {
    $patient = Patient::find($id);
    $cities = City::all();
    return Inertia::render('control/Create', [
      'patient' => $patient,
      'cities' => $cities
    ]);
  }
  
  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
    $patient = Patient::find($request->patient);
    //si es paciente prospecto cambia a activo
    $patient->status = 1;
    $patient->save();
    
    $control = new Control();
    $control->patient_id = $request->patien_id;
    $control->plan_id = $request->plan_id;
    $control->city_name = $request->city_name;
    $control->agreement_name = $request->agreement_name;
    $control->agreement_price = $request->agreement_price;
    $control->date = $request->date;
    $control->time = $request->time;
    $control->note = $request->note;
    $control->save();
    
    return response()->json();
  }
  
  /**
  * Display the specified resource.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function show(Control $control)
  {
    //
  }
  
  /**
  * Show the form for editing the specified resource.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function edit(Control $control)
  {
    //
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, Control $control)
  {
    //
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    //
  }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;

use App\Models\Control;
use App\Models\Patient;
use App\Models\City;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;

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
  
  public function calendarAdd()
  {
    //Agregar evento en Google calendar
    $event = new Event();
    //$event->id =  Str::lower(Str::random(26));
    $event->name = 'nuevo Evento';
    $event->startDateTime = Carbon::now();
    $event->endDateTime = Carbon::now()->addHour();
    $event->save();
    
    dd($event);
    
    $e = Event::get();
    dd($e);
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create($id)
  {
    $patient = Patient::find($id);
    $cities = City::query()->with('plans')->get();
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
    dd($request->all());
    $startDateTime = Carbon::parse($request->input('date').' '.$request->input('time'), 'America/Caracas');
    $endDateTime = (clone $startDateTime)->addHour();
    
    $patient = Patient::find($request->patient_id);
    //si es paciente prospecto cambia a activo
    $patient->active = 1;
    $patient->save();
    
    $event = new Event();
    //$event->id =  Str::lower(Str::random(26));
    $event->name = 'Control: '.$patient->first_name_1.' '.$patient->last_name_1;
    $event->startDateTime = $startDateTime;
    $event->endDateTime = $endDateTime;
    $event->save();
    
    $control = new Control();
    $control->patient_id = $request->patient_id;
    $control->city_name = $request->city_name;
    $control->plan_id = $request->plan_id;
    if($request->agreement == 1) {
      $control->agreement_name = $request->agreement_name;
      $control->agreement_price = $request->agreement_price;
    }
    $control->date = $request->date;
    $control->time = $request->time;
    $control->note = $request->note;
    $control->save();
    
    return $this->calendar();
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

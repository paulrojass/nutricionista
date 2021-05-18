<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;

use App\Models\Control;
use App\Models\Patient;
use App\Models\City;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;
use App\Http\Resources\ControlResource;


use Inertia\Inertia;
use Redirect;

class ControlController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $controls = Control::query()->with('patient')->get();
    return $this->controls($controls);
  }
  
  public function controls($controls)
  {
    return Inertia::render('control/List', [
      'controls' => $controls
    ]);
  }
  
  public function patients()
  {
    $patients = Patient::orderBy('created_at', 'DESC')->get();
    return Inertia::render('control/Patients', [
      'patients' => $patients
    ]);
  }
  
  public function search(Request $request)
  {
    
    $filled = array_filter(request()->only([
      'patient_name',
      'start_date',
      'end_date'
    ]));
    $controls = Control::when(count($filled) > 0, function($query) use($filled) {
      foreach ($filled as $column => $value) {
        // if($column == "patient_name") {
        //   $query->where('control.patient.first_name_1', 'LIKE', '%' . $value . '%');
        //   $query->where('control.patient.first_name_2', 'LIKE', '%' . $value . '%');
        //   $query->where('control.patient.last_name_1', 'LIKE', '%' . $value . '%');
        //   $query->where('control.patient.last_name_2', 'LIKE', '%' . $value . '%');
        // }
        if($column == "start_date") {
          $query->where('date', '>=', $value);
        }
        if($column == "end_date") {
          $query->where('date', '<=', $value);
        }
        //$query->where($column, 'LIKE', '%' . $value . '%');
      }
    })->with('patient')->get();
    //dd($controls);
    
    //dd(ControlResource::collection($controls));
    //return ControlResource::collection($controls);
    return $this->controls($controls);
  }
  
  public function calendar()
  {
    return Inertia::render('control/Calendar');
  }
  
  public function changeStatus(Request $request)
  {
    $control = Control::find($request->id);
    $control->status = $request->status;
    $control->save();
    return Redirect::route('controls.index');
    //return Redirect::back();
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
    $startDateTime = Carbon::parse($request->input('date').' '.$request->input('time'), 'America/Caracas');
    $endDateTime = (clone $startDateTime)->addHour();
    
    $patient = Patient::find($request->patient_id);
    //si es paciente prospecto cambia a activo
    $patient->active = 1;
    $patient->save();
    
    $event = new Event();
    $event->name = 'Control: '.$patient->first_name_1.' '.$patient->last_name_1;
    $event->startDateTime = $startDateTime;
    $event->endDateTime = $endDateTime;
    $event = $event->save(); //need to save it in variable to get the id !
    
    $city = City::find($request->city);
    if($city->name == "Colombia (online)" || $city->name == "Extranjero (online)") {
      $city_name = $request->city_name;
    } else {
      $city_name = $city->name;
    }
    
    
    $control = new Control();
    $control->event_id = $event->id;
    $control->patient_id = $request->patient_id;
    
    $control->city_name = $city_name;
    $control->plan_id = $request->plan_id;
    if($request->agreement == 1) {
      $control->agreement_name = $request->agreement_name;
      $control->agreement_price = $request->agreement_price;
    }
    $control->date = $request->date;
    $control->time = $request->time;
    $control->note = $request->note;
    $control->status = 'flamenco';
    $control->save();
    
    return $this->calendar();
  }
  
  /**
  * Display the specified resource.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    $control = Control::where('id',$id)->with('patient')->with('plan')->with('plan.city')->first();
    $cities = City::query()->with('plans')->get();
    return Inertia::render('control/Show', [
      'control' => $control,
      'cities' => $cities
    ]);
  }
  
  /**
  * Show the form for editing the specified resource.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function edit($id)
  {
    $control = Control::where('id', $id)->with('patient')->first();
    return Inertia::render('control/EditStatus', [
      'control' => $control,
    ]);
  }
  
  public function editDate($id)
  {
    $control = Control::where('id', $id)->with('patient')->first();
    return Inertia::render('control/EditDate', [
      'control' => $control,
    ]);
  }
  
  public function edit0($id)
  {
    $control = Control::find($id)->with('patient')->with('plan')->first();
    $cities = City::query()->with('plans')->get();
    return Inertia::render('control/Edit', [
      'control' => $control,
      'cities' => $cities
    ]);
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    $startDateTime = Carbon::parse($request->input('date').' '.$request->input('time'), 'America/Caracas');
    $endDateTime = (clone $startDateTime)->addHour();
    
    $control = Control::find($id);
    if($control->event_id){
      $event = Event::find($control->event_id);
      $event->startDateTime = $startDateTime;
      $event->endDateTime = $endDateTime;
      $event = $event->save();
    }
    
    $control->date = $request->date;
    $control->time = $request->time;
    $control->status = 'naranja';
    $control->save();
    
    return Redirect::route('controls.index');
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Models\Control  $control
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    $control = Control::find($id);
    if($control->event_id){
      $event = Event::find($control->event_id);
      $event = $event->delete();
    }
    $control->delete();
    return Redirect::route('controls.index');
  }
}

<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Redirect;

class PatientController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $patients = Patient::orderBy('created_at', 'DESC')->where('active', 1)->get();
    return Inertia::render('Patients', [
      'patients' => $patients,
    ]);
  }
  
  public function candidates()
  {
    $candidates = Patient::where('active', 0)->get();
    return Inertia::render('Candidates', [
      'candidates' => $candidates
    ]);
  }
  
  public function search(Request $request)
  {
    $query = trim($request->get('search'));
    
    $patients = Patient::withName($query)->get();
    
    return Inertia::render('Patients', [
      'patients' => $patients
    ]);
    
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    $cities = City::all();
    return Inertia::render('form/NewPatient', [
      'cities' => $cities,
    ]);
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function createCandidate()
  {
    $cities = City::all();
    return Inertia::render('form/NewPatient', [
      'cities' => $cities,
    ]);
  }
  
  public function show($id)
  {
    $patient = Patient::find($id);
    return Inertia::render('Profile', [
      'patient' => $patient,
    ]);
  }
  
  public function edit($id)
  {
    $patient = Patient::find($id);
    $cities = City::all();
    return Inertia::render('profile/History', [
      'patient' => $patient,
      'cities' => $cities,
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
    $patient = new Patient();
    $patient->first_name_1 = $request->first_name_1;
    $patient->first_name_2 = $request->first_name_2;
    $patient->last_name_1 = $request->last_name_1;
    $patient->last_name_2 = $request->last_name_2;
    $patient->birth_date = $request->birth_date;
    $patient->email = $request->email;
    $patient->phone = $request->phone;
    $patient->aspiration = $request->aspiration;
    $patient->active = 0;
    $patient->save();
    
    return $this->index();
  }
  
  public function storeCandidate(Request $request)
  {
    $patient = new Patient();
    $patient->city_id = $request->city_id;
    $patient->first_name_1 = $request->first_name_1;
    $patient->first_name_2 = $request->first_name_2;
    $patient->last_name_1 = $request->last_name_1;
    $patient->last_name_2 = $request->last_name_2;
    $patient->email = $request->email;
    $patient->phone = $request->phone;
    $patient->active = 0;
    $patient->save();
    
    return $this->index();
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Models\Patient  $patient
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    $validated = $request->validate([
      'first_name_1' => ['required', 'max:50'],
      'last_name_1' => ['required', 'max:50'],
      'email' => ['required', 'max:50', 'email']
    ]);
    $patient = Patient::find($id);
    $patient->update($request->all());
    if($request->rad_athletic_discipline == 'Otra') {
      $patient->athletic_discipline = $request->athletic_discipline;
    } else {
      $patient->athletic_discipline = $request->rad_athletic_discipline;
    }
    $patient->save();
    return $this->edit($id);
  }
  
  public function destroyCandidate($id)
  {
    $patient = Patient::find($id);
    $patient->delete();
    return redirect()->route('candidates.index');
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Models\Patient  $patient
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    $patient = Patient::find($id);
    $patient->delete();
    return Redirect::route('patients.index');
  }
}

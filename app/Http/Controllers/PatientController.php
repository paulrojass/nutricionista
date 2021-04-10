<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::orderBy('created_at', 'DESC')->with('city')->get();
        return Inertia::render('Patients', [
            'patients' => $patients,
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $patient = new Patient();
        $patient->city_id = $request->city_id;
        $patient->first_name_1 = $request->first_name_1;
        $patient->first_name_2 = $request->first_name_2;
        $patient->last_name_1 = $request->last_name_1;
        $patient->last_name_2 = $request->last_name_2;
        $patient->email = $request->email;
        $patient->phone = $request->phone;
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
        $patient = Patient::find($id);
        $patient->email = $request->email;
        $patient->save();
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
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Patient;
use Redirect;

class LandingController extends Controller
{
  /**
  * Handle the incoming request.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function landing(Request $request)
  {
    return Inertia::render('Landing');
  }
  
  public function storeCandidate(Request $request)
  {
    $patient = new Patient();
    $patient->first_name_1 = $request->first_name_1;
    $patient->first_name_2 = $request->first_name_2;
    $patient->last_name_1 = $request->last_name_1;
    $patient->last_name_2 = $request->last_name_2;
    $patient->email = $request->email;
    $patient->phone = $request->phone;
    $patient->aspiration = $request->aspiration;
    $patient->active = 0;
    $patient->save();
    
    return redirect()->route('success')->with('success', 'Solicitud enviada exitosamente');
  }
  
  public function success(){
    return Inertia::render('Success');
  }
  
}

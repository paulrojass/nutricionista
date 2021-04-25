<?php

namespace App\Http\Controllers;

use App\Models\Control;
use App\Models\Patient;
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
    $candidate = Patient::find($id);
    return Inertia::render('control/Create', [
      'candidate' => $candidate
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
    //
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

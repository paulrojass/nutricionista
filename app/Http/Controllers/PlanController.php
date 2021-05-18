<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Plan;
use Illuminate\Http\Request;

use Inertia\Inertia;

class PlanController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index($id)
  {
    $city = City::where('id', $id)
    ->with(array('plans' => function($query) {
      $query->with('controls');
      }))
      ->first();
      return Inertia::render('settings/Plans', [
        'city' => $city
      ]);
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create($id)
    {
      $city = City::find($id);
      return Inertia::render('settings/plans/Create', [
        'city' => $city
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
      $plan = new Plan;
      $plan->city_id = $request->city_id;
      $plan->name = $request->name;
      $plan->price = $request->price;
      $plan->save();
      
      return redirect()->route('plans.index', $request->city_id);
    }
    
    /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\Models\Plan  $plan
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
      $plan = Plan::find($id);
      return Inertia::render('settings/plans/Edit', [
        'plan' => $plan
      ]);
    }
    
    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \App\Models\Plan  $plan
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, $id)
    {
      $plan = Plan::find($id);
      $plan->name = $request->name;
      $plan->price = $request->price;
      $plan->save();
      return redirect()->route('plans.index', $plan->city_id);
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\Plan  $plan
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
      $plan = Plan::find($id);
      $city = City::find($plan->city_id);
      $plan->delete();
      
      if($city->plans->count() > 0 ){
        return redirect()->route('plans.index', $city->id);
      } else {
        return redirect()->route('cities.index');
      }
    }
  }
  
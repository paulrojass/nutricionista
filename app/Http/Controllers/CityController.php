<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Redirect;
use Response;

class CityController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $cities = City::query()->
    with(array('plans' => function($query) {
      $query->with('controls');
      }))->get();
      return Inertia::render('settings/Cities', [
        'cities' => $cities
      ]);
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create()
    {
      return Inertia::render('settings/cities/Create');
    }
    
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
      $city = new City();
      $city->name = $request->name;
      if ($request->online) {
        $city->online = 1;
      }
      $city->currency = $request->currency;
      $city->save();
      return Redirect::route('cities.index');
    }
    
    /**
    * Display the specified resource.
    *
    * @param  \App\Models\City  $city
    * @return \Illuminate\Http\Response
    */
    public function show(City $city)
    {
      //
    }
    
    /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\Models\City  $city
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
      $city = City::find($id);
      return Inertia::render('settings/cities/Edit', [
        'city' => $city
      ]);
    }
    
    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \App\Models\City  $city
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, $id)
    {
      $city = City::find($id);
      $city->name = $request->name;
      $city->online = $request->online;
      $city->currency = $request->currency;
      $city->save();
      return redirect()->route('cities.index');
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\City  $city
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
      $city = City::find($id);
      $city->delete();
      return redirect()->route('cities.index');
    }
  }
  
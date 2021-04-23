<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\City;

class CitySeeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {
    Model::unguard();
    
    $states = [
      "Bogota",
      "Medellin",
      "Villaviecencio",
      "Colombia (online)",
      "Extranjero (online)"
    ];
    
    DB::transaction(function () use ($states) {
      foreach ($states as $state) {
        City::updateOrCreate(
          [
            'name' => $state,
          ],
          [
            'online' => 0,
            'currency' => 'COP'
          ]
        );
      }
    });
  }
}

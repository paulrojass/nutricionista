<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\City;
use App\Models\Plan;

class PlanSeeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {
    DB::transaction(function () {
      $cities = City::all();
      foreach ($cities as $city) {
        
        $plan1 = Plan::updateOrCreate(
          [
            'name' => '1ra Vez',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan2 = Plan::updateOrCreate(
          [
            'name' => 'Control',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan3 = Plan::updateOrCreate(
          [
            'name' => '1ra Vez paquete 2',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan4 = Plan::updateOrCreate(
          [
            'name' => '1ra Vez paquete 3',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan5 = Plan::updateOrCreate(
          [
            'name' => 'Control 1/2',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan6 = Plan::updateOrCreate(
          [
            'name' => 'Control 2/2',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan7 = Plan::updateOrCreate(
          [
            'name' => 'Control 1/3',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan8 = Plan::updateOrCreate(
          [
            'name' => 'Control 2/3',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
        $plan8 = Plan::updateOrCreate(
          [
            'name' => 'Control 3/3',
            'city_id' => $city->id,
          ],
          [
            'price' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
          ]
        );
        
      }
    });
  }
}

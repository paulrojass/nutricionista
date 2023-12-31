<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\City;
use App\Models\Control;
use App\Models\Patient;

class DatabaseSeeder extends Seeder
{
  /**
  * Seed the application's database.
  *
  * @return void
  */
  public function run()
  {
    $this->call(UserSeeder::class);
    $this->call(CitySeeder::class);
    $this->call(PlanSeeder::class);
    //Patient::factory(30)->create();
    //Control::factory(50)->create();
  }
}

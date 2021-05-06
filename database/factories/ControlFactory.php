<?php

namespace Database\Factories;

use App\Models\Control;
use App\Models\Patient;
use App\Models\Plan;
use Illuminate\Database\Eloquent\Factories\Factory;

class ControlFactory extends Factory
{
  /**
  * The name of the factory's corresponding model.
  *
  * @var string
  */
  protected $model = Control::class;
  
  /**
  * Define the model's default state.
  *
  * @return array
  */
  public function definition()
  {
    return [
      'patient_id' => Patient::all()->random()->id,
      'plan_id' => Plan::all()->random()->id,
      'city_name' => 'asignado',
      'date' => $this->faker->dateTimeBetween('-0 week', '+4 week'),
      'time' => $this->faker->time(),
      'note' => $this->faker->paragraph(),
      'status' => 'flamenco'
    ];
  }
}

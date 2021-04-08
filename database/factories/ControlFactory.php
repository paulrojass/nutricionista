<?php

namespace Database\Factories;

use App\Models\Control;
use App\Models\Patient;
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
            'date' => $this->faker->dateTimeBetween('-0 week', '+4 week'),
            'note' => $this->faker->paragraph()
        ];
    }
}

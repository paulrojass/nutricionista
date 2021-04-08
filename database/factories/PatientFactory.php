<?php

namespace Database\Factories;

use App\Models\Patient;
use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Patient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'city_id' => City::all()->random()->id,
            'first_name_1' => $this->faker->firstNameMale(),
            'first_name_2' => $this->faker->firstNameMale(),
            'last_name_1' => $this->faker->lastName(),
            'last_name_2' => $this->faker->lastName(),
            'birth_date' => $this->faker->dateTimeBetween('-50 year', '-20 year'),
            'active' => $this->faker->numberBetween(0, 1),
            'goal' => $this->faker->paragraph(),
            'avatar' => 'default.jpg'
        ];
    }
}

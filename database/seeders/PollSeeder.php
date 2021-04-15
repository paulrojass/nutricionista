<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Patient;
use App\Models\Poll;

class PollSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $patients = Patient::where('active', 1)->get();
      foreach ($patients as $patient) {
        DB::table('polls')->insert([
          'patient_id' => $patient->id,
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ]);
      }
    }
}

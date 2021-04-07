<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::transaction(function () {

            /** @var object Crea el usuario ADMIN por defecto de la aplicación */
            $userAdmin = User::updateOrCreate(
                ['email' => 'admin@admin.com'],
                [
                    'name' => 'Admin',
                    'password' => bcrypt('12345678'),
                    'created_at' => Carbon::now()
                ]
            );
        });
    }
}

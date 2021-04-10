<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained()->onDelete('cascade');
            $table->string('first_name_1', 30);
            $table->string('first_name_2', 30);
            $table->string('last_name_1', 30);
            $table->string('last_name_2', 30);
            $table->string('phone', 30);
            $table->string('email')->unique();
            $table->date('birth_date')->nullable();
            $table->boolean('active')->default(0);
            $table->text('goal')->nullable();
            $table->string('avatar')->default('default.jpg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}

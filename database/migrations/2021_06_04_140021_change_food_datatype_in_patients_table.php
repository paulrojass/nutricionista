<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFoodDatatypeInPatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patients', function (Blueprint $table) {
             $table->text('breakfast')->change();
             $table->text('brunch')->change();
             $table->text('lunch')->change();
             $table->text('snack')->change();
             $table->text('dinner')->change();
             $table->text('street_food')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patients', function (Blueprint $table) {
             $table->string('breakfast')->change();
             $table->string('brunch')->change();
             $table->string('lunch')->change();
             $table->string('snack')->change();
             $table->string('dinner')->change();
             $table->string('street_food')->change();
        });
    }
}

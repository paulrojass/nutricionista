<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateControlsTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('controls', function (Blueprint $table) {
      $table->id();
      $table->foreignId('patient_id')->constrained()->onDelete('cascade');
      $table->foreignId('plan_id')->constrained();
      $table->string('city_name');
      $table->string('agreement_name')->nullable();
      $table->string('agreement_price')->nullable();
      $table->date('date');
      $table->time('time');
      $table->text('note');
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
    Schema::dropIfExists('controls');
  }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('images', function (Blueprint $table) {
      $table->id();
      $table->foreignId('patient_id')->constrained()->onDelete('cascade');
      $table->string('location', 100);
      $table->string('format', 10);
      $table->string('name', 100)->nullable();
      $table->text('description', 100)->nullable();
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
    Schema::dropIfExists('images');
  }
}

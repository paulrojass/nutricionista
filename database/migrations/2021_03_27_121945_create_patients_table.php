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
      $table->string('first_name_1', 30);
      $table->string('first_name_2', 30)->nullable();
      $table->string('last_name_1', 30);
      $table->string('last_name_2', 30)->nullable();
      $table->string('phone', 30);
      $table->string('email');
      $table->boolean('active')->default(0);
      $table->date('birth_date')->nullable();
      $table->text('aspiration')->nullable();
      $table->string('goal')->nullable();
      $table->string('avatar')->default('default.jpg');
      $table->string('laboratory')->nullable();
      $table->string('previous_experience')->nullable();
      $table->string('medical_condition')->nullable();
      $table->string('medicine')->nullable();
      $table->string('supplement')->nullable();
      $table->string('previous_supplement')->nullable();
      $table->string('weight_variation')->nullable();
      $table->string('job')->nullable();
      $table->boolean('sedentary')->default(0);
      $table->string('athletic_discipline')->nullable();
      $table->text('training_description')->nullable();
      $table->integer('training_hours')->nullable();
      $table->integer('training_days')->nullable();
      $table->string('breakfast')->nullable();
      $table->string('brunch')->nullable();
      $table->string('lunch')->nullable();
      $table->string('snack')->nullable();
      $table->string('dinner')->nullable();
      $table->string('street_food')->nullable();
      $table->boolean('pollo')->default(0);
      $table->boolean('pescado_blanco')->default(0);
      $table->boolean('carne_de_res')->default(0);
      $table->boolean('lomo_de_cerdo')->default(0);
      $table->boolean('atun')->default(0);
      $table->boolean('huevos')->default(0);
      $table->boolean('claras_de_huevos')->default(0);
      $table->boolean('pavo')->default(0);
      $table->boolean('salmon')->default(0);
      $table->boolean('whey_protein')->default(0);
      $table->boolean('arroz')->default(0);
      $table->boolean('arroz_integral')->default(0);
      $table->boolean('pasta')->default(0);
      $table->boolean('pasta_integral')->default(0);
      $table->boolean('platano')->default(0);
      $table->boolean('papa')->default(0);
      $table->boolean('arepa')->default(0);
      $table->boolean('pan')->default(0);
      $table->boolean('avena')->default(0);
      $table->boolean('tostadas_de_arroz')->default(0);
      $table->boolean('frutos_rojos')->default(0);
      $table->boolean('frutos_amarillos')->default(0);
      $table->boolean('frutos_verdes')->default(0);
      $table->boolean('banano')->default(0);
      $table->boolean('frutas_deshidratadas')->default(0);
      $table->boolean('verduras_cocidas')->default(0);
      $table->boolean('vegetales_frescos')->default(0);
      $table->boolean('quesos_frescos')->default(0);
      $table->boolean('quesos_madurados')->default(0);
      $table->boolean('yogures')->default(0);
      $table->boolean('leche')->default(0);
      $table->boolean('crema_de_leche')->default(0);
      $table->boolean('mantequilla')->default(0);
      $table->boolean('grasas')->default(0);
      $table->boolean('aguacate')->default(0);
      $table->boolean('frutos_secos')->default(0);
      $table->boolean('aceites_adicionados')->default(0);
      $table->boolean('crema_de_mani')->default(0);

      $table->string('unwanted_food')->nullable();
      $table->string('desired_food')->nullable();
      $table->string('water')->nullable();
      $table->boolean('soda')->default(0);
      $table->boolean('alcoholic_drinks')->default(0);
      $table->boolean('coffee')->default(0);
      $table->boolean('tea')->default(0);

      $table->boolean('bajo_consumo_energetico')->default(0);
      $table->boolean('bajo_consumo_proteico')->default(0);
      $table->boolean('bajo_consumo_carbohidratos')->default(0);
      $table->boolean('bajo_consumo_grasas_escenciales')->default(0);
      $table->boolean('bajo_consumo_micronutrientes')->default(0);
      $table->boolean('alto_consumo_ultraprcesados')->default(0);
      $table->boolean('inadecuado_timming_ingestas')->default(0);
      $table->boolean('esquema_hidratacion_inadecuado')->default(0);
      $table->boolean('dieta_alta_fodmaps')->default(0);
      $table->boolean('excedente_calorico')->default(0);

      $table->boolean('dieta_alta_proteinas')->default(0);
      $table->boolean('deficit_calorico')->default(0);
      $table->boolean('dieta_de_mantenimiento')->default(0);
      $table->boolean('superavit_calorico')->default(0);
      $table->boolean('ayuno_intermitente')->default(0);
      $table->boolean('dietas_keto')->default(0);
      $table->boolean('dieta_baja_en_fodmaps')->default(0);
      $table->boolean('medidas_anti_inflamatorias')->default(0);
      $table->boolean('dieta_muy_baja_en_carbohidratos')->default(0);
      $table->boolean('esquema_de_suplementacion')->default(0);

      $table->text('proteinas_vegetales')->nullable();
      $table->text('otros_proteinas')->nullable();
      $table->text('otros_carbohidratos')->nullable();
      $table->text('otros_frutas')->nullable();
      $table->text('otros_vegetales')->nullable();
      $table->text('otros_lacteos')->nullable();
      $table->text('otros_grasas')->nullable();

      $table->text('menses')->nullable();
      $table->text('intestinal')->nullable();
      $table->text('sleep_quality')->nullable();
      $table->text('otro_valoracion')->nullable();
      $table->text('otro_objetivo')->nullable();


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

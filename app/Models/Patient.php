<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
  /**
  * Lista de atributos que pueden ser asignados masivamente
  *
  * @var array $fillable
  */
    protected $fillable = [
    'first_name_1',
    'first_name_2',
    'last_name_1',
    'last_name_2',
    'birth_date',
    'phone',
    'email',
    'active',
    'aspiration',
    'goal',
    'avatar',
    'laboratory',
    'previous_experience',
    'medical_condition',
    'medicine',
    'supplement',
    'previous_supplement',
    'weight_variation',
    'job',
    'sedentary',
    'athletic_discipline',
    'training_description',
    'training_hours',
    'training_days',
    'breakfast',
    'brunch',
    'lunch',
    'snack',
    'dinner',
    'street_food',
    'pollo',
    'pescado_blanco',
    'carne_de_res',
    'lomo_de_cerdo',
    'atun',
    'huevos',
    'claras_de_huevos',
    'pavo',
    'salmon',
    'whey_protein',
    'arroz',
    'arroz_integral',
    'pasta',
    'pasta_integral',
    'platano',
    'papa',
    'arepa',
    'pan',
    'avena',
    'tostadas_de_arroz',
    'frutos_rojos',
    'frutos_amarillos',
    'frutos_verdes',
    'banano',
    'frutas_deshidratadas',
    'verduras_cocidas',
    'vegetales_frescos',
    'quesos_frescos',
    'quesos_madurados',
    'yogures',
    'leche',
    'crema_de_leche',
    'mantequilla',
    'grasas',
    'aguacate',
    'frutos_secos',
    'aceites_adicionados',
    'crema_de_mani',
    'unwanted_food',
    'desired_food',
    'water',
    'soda',
    'alcoholic_drinks',
    'coffee',
    'tea',
    'bajo_consumo_energetico',
    'bajo_consumo_proteico',
    'bajo_consumo_carbohidratos',
    'bajo_consumo_grasas_escenciales',
    'bajo_consumo_micronutrientes',
    'alto_consumo_ultraprcesados',
    'inadecuado_timming_ingestas',
    'esquema_hidratacion_inadecuado',
    'dieta_alta_fodmaps',
    'excedente_calorico',
    'dieta_alta_proteinas',
    'deficit_calorico',
    'dieta_de_mantenimiento',
    'superavit_calorico',
    'ayuno_intermitente',
    'dietas_keto',
    'dieta_baja_en_fodmaps',
    'medidas_anti_inflamatorias',
    'dieta_muy_baja_en_carbohidratos',
    'esquema_de_suplementacion',
    'otros_proteinas',
    'otros_carbohidratos',
    'otros_frutas',
    'otros_vegetales',
    'otros_lacteos',
    'otros_grasas'
    ];

  /**
  * Método que obtiene los controles asociadas con el paciente
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Paciente
  */
  public function controls()
  {
    return $this->hasMany(Control::class);
  }

  /**
  * Método que obtiene los archivos asociadas con el paciente
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Paciente
  */
  public function attachments()
  {
    return $this->hasMany(Attachment::class);
  }
  /**
  * Método que obtiene las notas asociadas con el paciente
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Patient
  */
  public function notes()
  {
    return $this->hasMany(Note::class);
  }

  // Funciones scope

  function scopeWithName($query, $name)
  {
    // Split each Name by Spaces
    $names = explode(" ", $name);

    // Search each Name Field for any specified Name
    return Patient::where(function($query) use ($names) {
      $query->whereIn('first_name_1', $names);
      $query->orWhere(function($query) use ($names) {
        $query->whereIn('first_name_2', $names);
        $query->orWhere(function($query) use ($names) {
          $query->whereIn('last_name_1', $names);
          $query->orWhere(function($query) use ($names) {
            $query->whereIn('last_name_2', $names);
            $query->orWhere(function($query) use ($names) {
              $query->whereIn('email', $names);
            });
          });
        });
      });
    });
  }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Control extends Model
{
  use HasFactory;
  
  /**
  * Lista de atributos que pueden ser asignados masivamente
  *
  * @var array $fillable
  */
  protected $fillable = [
    'event_id',
    'patient_id',
    'plan_id',
    'city_name',
    'agreement_name',
    'agreement_price',
    'status',
    'date',
    'time',
    'note'
  ];
  
  /**
  * Método que obtiene el paciente asociada a un control
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Control
  */
  public function patient()
  {
    return $this->belongsTo(Patient::class);
  }
  /**
  * Método que obtiene el plan asociada a un control
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Control
  */
  public function plan()
  {
    return $this->belongsTo(Plan::class);
  }
  
  
}

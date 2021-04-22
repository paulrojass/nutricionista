<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
  use HasFactory;
  /**
  * Lista de atributos que pueden ser asignados masivamente
  *
  * @var array $fillable
  */
  protected $fillable = [
    'patient_id',
    'title',
    'body'
  ];
  
  /**
  * Método que obtiene el paciente asociado a una nota
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Note
  */
  public function patient()
  {
    return $this->belongsTo(Patient::class);
  }
}

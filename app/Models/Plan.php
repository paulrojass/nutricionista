<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
  use HasFactory;
  /**
  * Lista de atributos que pueden ser asignados masivamente
  *
  * @var array $fillable
  */
  protected $fillable = [
    'city_id',
    'name',
    'price',
  ];
  /**
  * Método que obtiene la ciudad asociada con el plan
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo Plan
  */
  public function city()
  {
    return $this->belongsTo(City::class);
  }
}

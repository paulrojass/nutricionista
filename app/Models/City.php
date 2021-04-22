<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
  use HasFactory;
  
  /**
  * Lista de atributos que pueden ser asignados masivamente
  *
  * @var array $fillable
  */
  protected $fillable = [
    'name',
    'online',
    'currency'
  ];
  
  /**
  * Método que obtiene los planes asociadas con la ciudad
  *
  * @author  Paúl Rojas <paul.rojase@gmail.com>
  * @return object Objeto con los registros relacionados al modelo City
  */
  public function plans()
  {
    return $this->hasMany(Plan::class);
  }
}

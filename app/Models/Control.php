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
            'patient_id'
        ];

        /**
         * Método que obtiene el paciente asociada a un control
         *
         * @author  Paúl Rojas <paul.rojase@gmail.com>
         * @return object Objeto con los registros relacionados al modelo Control
         */
        public function patient()
        {
            return $this->belongsTo(City::class);
        }
}

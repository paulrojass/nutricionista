<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = [
        'patient_id',
        'name',
        'location'
    ];

    /**
     * Método que obtiene el paciente asociada a un paciente
     *
     * @author  Paúl Rojas <paul.rojase@gmail.com>
     * @return object Objeto con los registros relacionados al modelo Paciente
     */
    public function patient()
    {
        return $this->belongsTo(City::class);
    }
}

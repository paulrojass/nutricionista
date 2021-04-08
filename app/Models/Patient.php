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
        'city_id',
        'first_name_1',
        'first_name_2',
        'last_name_1',
        'last_name_2',
        'birth_date',
        'active',
        'goal',
        'avatar'
    ];

    /**
     * Método que obtiene la ciudad asociada a un paciente
     *
     * @author  Paúl Rojas <paul.rojase@gmail.com>
     * @return object Objeto con los registros relacionados al modelo Paciente
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    /**
     * Método que obtiene la encuesta asociada con el paciente
     *
     * @author  Paúl Rojas <paul.rojase@gmail.com>
     * @return object Objeto con los registros relacionados al modelo Paciente
     */
    public function poll()
    {
        return $this->hasOne(Poll::class);
    }

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
     * Método que obtiene las imagenes asociadas con el paciente
     *
     * @author  Paúl Rojas <paul.rojase@gmail.com>
     * @return object Objeto con los registros relacionados al modelo Paciente
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }

    /**
     * Método que obtiene los archivos asociadas con el paciente
     *
     * @author  Paúl Rojas <paul.rojase@gmail.com>
     * @return object Objeto con los registros relacionados al modelo Paciente
     */
    public function files()
    {
        return $this->hasMany(File::class);
    }
}

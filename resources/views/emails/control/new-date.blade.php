@component('mail::message')

# {{ $control->patient->first_name_1 }} {{ $control->patient->last_name_1 }} 

Hola, gracias por tu confianza en nosotros, a continuación te daremos todos los datos referentes a tu cita.

<b>Cuando:</b> {{ Carbon\Carbon::parse($control->date)->format('d-m-Y') }} - {{ $control->time}} <br>


<b>Ubicación:</b>  {{ $control->city_name}} <br>


Gracias<br>
{{ config('app.name') }}
@endcomponent

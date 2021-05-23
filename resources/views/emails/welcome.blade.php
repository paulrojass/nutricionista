@component('mail::message')
  <h2>Bienvenido a la aplicación, {{$user['name']}}</h2>
  <br/>
  <p>
    Su email de registro es:  {{$user['email']}}
  </p>
  <p>
    Contraseña: {{$password}}
  </p>
  
  Gracias,<br>
  {{ config('app.name') }}
@endcomponent


{{-- <!DOCTYPE html>
<html>
<head>
<title>Bienvenido</title>
</head>

<body>
<h2>Bienvenido a la aplicación, {{$user['name']}}</h2>
<br/>
<p>
Su email de registro es:  {{$user['email']}}
</p>
<br />
<p>
Contraseña: {{$password}}
</p>
</body>

</html> --}}

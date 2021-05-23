<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.ico">
  <meta name="csrf-token" value="{{ csrf_token() }}"/>
  <title>Nutricionista</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  {{-- <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.min.css"> --}}
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons" rel="stylesheet" />
  {{-- <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/> --}}
  <link href="{{ mix('/css/admin/style.vue.css') }}" rel="stylesheet" />
  <link href="{{ asset('/css/styles.css') }}" type="text/css" rel="stylesheet"/>
</head>
<body>
  @inertia
  @routes
  <script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>

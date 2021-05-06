<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.ico">
  <meta name="csrf-token" value="{{ csrf_token() }}"/>
  <title>Nutricionista</title>
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

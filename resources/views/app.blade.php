<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}"/>
    <title>Laravel Vue Example</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="{{ mix('/css/admin/style.vue.css') }}" rel="stylesheet" />
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css"> --}}
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons" rel="stylesheet">
  </head>
  <body>
    @inertia
  	@routes
  <script src="{{ mix('/js/app.js') }}" defer></script>
  </body>
</html>

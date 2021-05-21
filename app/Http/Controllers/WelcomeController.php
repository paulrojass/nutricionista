<?php

namespace App\Http\Controllers;

use Redirect;

class WelcomeController extends Controller
{
  public function __invoke()
  {
    //return Inertia::render('Welcome');
    return Redirect::route('login');
  }
}

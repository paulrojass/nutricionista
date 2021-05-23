<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Redirect;
use DB;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function index()
  {
    if(!auth()->user()){
      return redirect()->route('login');
    }
    $users = User::where('id', '<>', auth()->user()->id)->get();
    return Inertia::render('users/Index', [
      'users' => $users
    ]);
  }
  
  public function create()
  {
    return Inertia::render('users/Create');
  }
  
  public function store(Request $request)
  {
    $password = Str::random(10);
    $request->request->add(['password' => $password]); //add request
    $request->request->add(['password_confirmation' => $password]); //add request
    
    $this->validator($request->all())->validate();
    
    $user = $this->createUser($request->all());
    Mail::to($request['email'])->send(new WelcomeMail($user, $password));
    
    //event(new Registered($user = $this->createUser($request->all())));
    return redirect()->route('users.index')->with('message', 'creado');
    
    //$this->guard()->login($user);
    
    // if ($response = $this->registered($request, $user)) {
    //   return $response;
    // }
    // $check = DB::table('users')->where('email', $request['email'])->first();
    // if ($check === null)
    // {
    //   $password = Str::random();
    //   $user = User::create([
    //     'name' => $request['name'],
    //     'email' => $request['email'],
    //     'password' => bcrypt($password)
    //   ]);
    //   Mail::to($request['email'])->send(new WelcomeMail($user));
    //   return redirect()->route('users.index')->with('message', 'usuario Creado');
    // }
    //
    // else  {
    //   return redirect()->route('users.index')->with('status', 'usuario existe');
    // }
    //$user = User::create(request(['name', 'email', 'password']));
  }
  
  public function show($id)
  {
    $user = User::find($id);
    return Inertia::render('users/Show', [
      'user' => $user
    ]);
  }
  
  public function destroy($id)
  {
    $user = User::find($id);
    $user->delete();
    return redirect()->route('users.index')->with('message', 'eliminado');
  }
  
  public function myProfile()
  {
    return Inertia::render('users/MyProfile');
  }
  public function changePassword(Request $request)
  {
    $user = User::find($request->user_id);
    $user->password = bcrypt($request->password);
    $user->save();
    return redirect()->route('my-profile');
  }
  
  public function validator(array $data)
  {
    return Validator::make($data, [
      'name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:8', 'confirmed']
    ]);
  }
  protected function createUser(array $data)
  {
    return User::create([
      'name' => $data['name'],
      'email' => $data['email'],
      'password' => bcrypt($data['password'])
    ]);
  }
  protected function registered(Request $request, $user)
  {
    //
  }
}

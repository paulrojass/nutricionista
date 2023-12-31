<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;

use App\Models\City;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Redirect;
use Image;
use Carbon\Carbon;


class PatientController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    $patients = Patient::orderBy('created_at', 'DESC')->get();
    return Inertia::render('Patients', [
      'patients' => $patients,
      'status' => 'todos',
      'diagnostic' => 'todos',
      'workplan' => 'todos'
    ]);
  }

  public function candidates()
  {
    $candidates = Patient::where('active', 0)->get();
    return Inertia::render('Candidates', [
      'candidates' => $candidates
    ]);
  }

  public function search(Request $request)
  {
    $query = trim($request->get('search'));

    $patients = Patient::withName($query)->get();

    return Inertia::render('Patients', [
      'patients' => $patients
    ]);

  }

  public function searchStatus(Request $request)
  {
    $patients = Patient::all();
    if ($request->status == 'activo') {
      $patients = Patient::where('active', 1)->get();
    }
    if ($request->status == 'inactivo') {
      $actives = Patient::where('active', 1)->get();
      $patients = Patient::where('active', 1)->get();
      foreach ($actives as $active) {
        $valor_maximo = 4;
        $controls = $active->controls->sortbyDesc('date');
        if($controls->count() > $valor_maximo){
          $contador = 0;
          foreach ($controls as $key => $control) {
            if ($key > 4) break;
            if ($control->status == 'albahaca' || $control->status == 'verde') {
              $contador += 1;
            }
          }
          if($contador < 4){
            $patients = $patients->except($active->id);
          }
        }
      }
    }
    if ($request->status == 'prospecto') {
      $patients = Patient::where('active', 0)->get();
    }
    if ($request->workplan != 'todos') {
      $patients = $patients->where('workplan', $request->workplan);

    }
    if ($request->diagnostic != 'todos') {
      $patients = $patients->where($request->diagnostic, 1);


    }
    //dd($patients);

    return Inertia::render('Patients', [
      'patients' => $patients,
      'status' => $request->status,
      'diagnostic' => $request->diagnostic,
      'workplan' => $request->workplan
    ]);


  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    $cities = City::all();
    return Inertia::render('form/NewPatient', [
      'cities' => $cities,
    ]);
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function createCandidate()
  {
    $cities = City::all();
    return Inertia::render('form/NewPatient', [
      'cities' => $cities,
    ]);
  }

  public function show($id)
  {
    $patient = Patient::where('id', $id)->with('attachments')->
      with(array('controls' => function($query) {
      $query->orderBy('date', 'DESC');
      }))->
      with(array('notes' => function($query) {
      $query->orderBy('created_at', 'DESC');
      }))->first();
      $nextControl = $patient->controls->where('date','>=', Carbon::today() )->first();
      return Inertia::render('Profile', [
        'patient' => $patient,
        'nextControl' => $nextControl ? : null
      ]);
    }

    public function showHistory($id)
    {
      $patient = Patient::find($id);
      return Inertia::render('profile/Show', [
        'patient' => $patient,
      ]);
    }

    public function edit($id)
    {
      $patient = Patient::find($id);
      $cities = City::all();
      return Inertia::render('profile/History', [
        'patient' => $patient,
        'cities' => $cities,
      ]);
    }
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
      $patient = new Patient();
      $patient->first_name_1 = $request->first_name_1;
      $patient->first_name_2 = $request->first_name_2;
      $patient->last_name_1 = $request->last_name_1;
      $patient->last_name_2 = $request->last_name_2;
      $patient->birth_date = $request->birth_date;
      $patient->email = $request->email;
      $patient->phone = $request->phone;
      $patient->active = 0;
      $patient->save();

      return $this->index();
    }

    public function storeCandidate(Request $request)
    {
      $patient = new Patient();
      $patient->city_id = $request->city_id;
      $patient->first_name_1 = $request->first_name_1;
      $patient->first_name_2 = $request->first_name_2;
      $patient->last_name_1 = $request->last_name_1;
      $patient->last_name_2 = $request->last_name_2;
      $patient->email = $request->email;
      $patient->phone = $request->phone;
      $patient->active = 0;
      $patient->save();
      return $this->index();
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \App\Models\Patient  $patient
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, $id)
    {
      $validated = $request->validate([
        'first_name_1' => ['required', 'max:50'],
        'last_name_1' => ['required', 'max:50'],
        'email' => ['required', 'max:50', 'email']
      ]);

      $patient = Patient::find($id);
      if($request->file('avatar')) {
        $this->deleteAvatar($patient->avatar);
        $patient->update($request->all());
        $patient->avatar = $this->saveAvatar($request);
      } else {
        if($request->avatar == null){
          //dd('borraste la imagen sin file');
          $this->deleteAvatar($patient->avatar);
          $request->replace(['avatar' => 'default.jpg']);
          $patient->update($request->all());
        } else {
          $patient->update($request->all());
        }
      }
      if($request->rad_athletic_discipline == 'Otra') {
        $patient->athletic_discipline = $request->athletic_discipline;
      } else {
        $patient->athletic_discipline = $request->rad_athletic_discipline;
      }
      $patient->active = 1;
      $patient->save();

      return $this->show($id);
    }

    public function destroyCandidate($id)
    {
      $patient = Patient::find($id);
      $patient->delete();
      return redirect()->route('candidates.index');
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\Patient  $patient
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
      $patient = Patient::find($id);
      $this->deleteAvatar($patient->avatar);
      $patient->delete();
      return Redirect::route('patients.index');
    }

    public function saveAvatar(Request $request)
    {
      $originalImage= $request->file('avatar');
      $image = Image::make($originalImage);
      $originalPath = public_path().'/storage/avatars/';
      //Nombre aleatorio para la image
      $tempName = Str::random(10) . '.' . $originalImage->getClientOriginalExtension();

      //Redimensinoar la imagen
      if($image->width() >= $image->height()) $image->heighten(400);
      else $image->widen(400);
      $image->resizeCanvas(400,400);

      $image->save($originalPath.$tempName);

      return $tempName;
    }

    public function deleteAvatar($avatar)
    {
      $originalPath = public_path().'/storage/avatars/';

      if ($avatar != 'default.jpg') {
        if (\File::exists($originalPath.$avatar)) {
          \File::delete($originalPath.$avatar);
        }
      }
    }
  }

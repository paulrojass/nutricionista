<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Redirect;
use Image;
use App\Models\Attachment;
use App\Models\Patient;
use Illuminate\Http\Request;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Response;

use Inertia\Inertia;

class AttachmentController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create($id)
  {
    $patient = Patient::find($id);
    return Inertia::render('profile/NewFile', [
      'patient' => $patient
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
    $request->validate([
      'file' => 'required|mimes:txt,xls,xlsx,doc,docx,pdf,jpg,png,jpeg|max:2048'
    ]);
    
    $format = $request->file->getClientOriginalExtension();
    $fileName = time().Str::random(4).'.'.$format;
    $filePath = $request->file('file')->storeAs('/files', $fileName, 'public');
    $location = $filePath;
    
    $attachment = new Attachment;
    $attachment->patient_id = $request->patient_id;
    $attachment->name = $request->name;
    $attachment->description = $request->description;
    $attachment->location = $location;
    $attachment->format = $format;
    $attachment->save();
    
    return redirect()->route('patients.show', $request->patient_id);
  }
  
  /**
  * Display the specified resource.
  *
  * @param  \App\Models\Attachment  $attachment
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    $attachment = Attachment::find($id);
    
    $location = $attachment->location;
    
    $name = $attachment->name.'.'.$attachment->format;
    
    return Storage::disk('public')->download($location, $name);
  }
  
  /**
  * Show the form for editing the specified resource.
  *
  * @param  \App\Models\Attachment  $attachment
  * @return \Illuminate\Http\Response
  */
  public function edit(Attachment $attachment)
  {
    //
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Models\Attachment  $attachment
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, Attachment $attachment)
  {
    //
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Models\Attachment  $attachment
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    $attachment = Attachment::find($id);
    //dd(public_path().$attachment->location);
    \File::delete(public_path().$attachment->location);
    $patient_id = $attachment->patient_id;
    $attachment->delete();
    
    return redirect()->route('patients.show', $patient_id);
  }
}

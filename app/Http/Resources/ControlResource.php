<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ControlResource extends JsonResource
{
  /**
  * Transform the resource into an array.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return array
  */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'patient_id' =>$this->patient_id,
      'date' => $this->date,
      'time' => $this->time,
      'note' => $this->note
    ];
    //return parent::toArray($request);
  }
}

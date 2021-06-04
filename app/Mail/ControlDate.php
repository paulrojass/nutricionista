<?php

namespace App\Mail;

use App\Models\Control;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ControlDate extends Mailable
{
    use Queueable, SerializesModels;

    public $control;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Control $control)
    {
        $this->control = $control;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.control.new-date')->subject('Notificación de cita');
    }
}

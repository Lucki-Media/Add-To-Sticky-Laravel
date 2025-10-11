<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class YourEmailClass extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: $this->data['subject'],
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: $this->data['view'],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }

    public function build()
    {
        if ($this->data['mail'] == "app_install"){
            return $this->from('info.lmrequest@gmail.com', 'LM Sticky Cart Drawer & Upsell')
                ->subject($this->data['subject'])
                ->view('mailTemplate')
                ->with('body', $this->data);
        }
        if ($this->data['mail'] == "app_uninstall") {
            return $this->from('info.lmrequest@gmail.com', 'LM Sticky Cart Drawer & Upsell')
                ->subject($this->data['subject'])
                ->view('app_uninstall')
                ->with('body', $this->data);
        }
        if ($this->data['mail'] == "user_mail") {
            return $this->from('info.lmrequest@gmail.com', 'LM Sticky Cart Drawer & Upsell')
                ->subject($this->data['subject'])
                ->view('user_mail')
                ->with('body', $this->data);
        }
    }
}
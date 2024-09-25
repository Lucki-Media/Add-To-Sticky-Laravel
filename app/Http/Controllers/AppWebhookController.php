<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;

class AppWebhookController extends Controller
{
    public static function appUninstallJob(Request $request)
    {
        // Log::info($request);
        // send uninstallation email to sender
        $data = [
            "to" => [
                // [
                //     "email" => $request->email,
                // ],
                [
                    "email" => 'vidhee.luckimedia@gmail.com', // For testing purpose only
                ],
            ],
            "templateId" => 6,
            "params" => [
                "name" => $request->shop_owner,
            ],
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.brevo.com/v3/smtp/email");
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json',
            'Content-Type: application/json',
            'api-key: ' . env('BREVO_API_KEY')
        ]);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close($ch);
        return json_decode($server_output, true);
    }
}

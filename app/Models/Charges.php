<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Charges extends Model
{
    protected $table = 'charges';

    protected $fillable = [
        'charge_id',
        'test',
        'status',
        'name',
        'terms',
        'type',
        'price',
        'interval',
        'capped_amount',
        'billing_on',
        'trial_days',
        'activated_on',
        'trial_ends_on',
        'cancelled_on',
        'expires_on',
        'plan_id',
        'description',
        'reference_charge',
        'user_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    static public function planData($option)
    {
        $planData = [
            2 => [
                "plan_id" => 2,
                "plan_name" => "Monthly Premium Plan",
                "amount" => 9.99,
                "interval" => "EVERY_30_DAYS",
                'terms' => 'Monthly',
            ],
            3 => [
                "plan_id" => 3,
                "plan_name" => "Annual Premium Plan",
                "amount" => 95.88,
                "interval" => "ANNUAL",
                'terms' => 'Annual',
            ],
        ];

        return $planData[$option];
    }

    static public function getChargeDetails($shopDomain, $charge_id)
    {
        // get required details
        $apiKey = config('shopify-app.api_key');
        $user = User::where(['name' => $shopDomain])->first();

        // get charge details
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
        $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/recurring_application_charges/' . $charge_id . '.json';
        curl_setopt($ch, CURLOPT_URL, $url);
        $server_output = curl_exec($ch);
        $charge_data = json_decode($server_output, true);

        return $charge_data;
    }
}

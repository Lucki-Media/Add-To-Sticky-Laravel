<?php

namespace App\Http\Controllers;

use App\Models\Charges;
use App\Models\User;
use Illuminate\Http\Request;

class PricingController extends Controller
{
    public function updatePricingPlan($shopDomain, $option)
    {
        if ((int) $option === 1) {
            // merchant downgrades from premium plan to free plan, so we need to cancel thier current plan
            $user = User::where(['name' => $shopDomain])->first();
            $charge_data = Charges::where(['user_id' => $user['id'], 'status' => "ACTIVE"])->first();

            if ($charge_data && $charge_data['charge_id']) {
                // get required details
                $apiKey = config('shopify-app.api_key');

                // get charge details
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_HEADER, false);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
                $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/recurring_application_charges/' . $charge_data['charge_id'] . '.json';
                curl_setopt($ch, CURLOPT_URL, $url);
                $server_output = curl_exec($ch);
                $charge_data = json_decode($server_output, true);

                // delete data from the database
                Charges::where(['user_id' => $user['id'], 'status' => "ACTIVE"])->delete();
            }
            return self::sendResponse("", 'Success');

        } else {
            // return plan url, everything else will be managed by Shopify
            return self::sendResponse(route('billing', ['plan' => $option, 'shop' => $shopDomain]), 'Success');
        }
    }

    public function getPlanData($shopDomain)
    {
        $user = User::where(['name' => $shopDomain])->first();
        if ($user) {
            $charge_data = Charges::where(['user_id' => $user['id'], 'status' => "ACTIVE"])->first();

            $plan_id = 1;
            if ($charge_data) {
                $plan_id = (int) $charge_data['plan_id'];
            }
            return self::sendResponse($plan_id, 'Success');
        }
        return self::sendResponse(1, 'Success');
    }
}

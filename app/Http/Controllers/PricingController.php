<?php

namespace App\Http\Controllers;

use App\Models\Charges;
use App\Models\User;
use Illuminate\Http\Request;

class PricingController extends Controller
{
    public function updatePricingPlan($shopDomain, $option)
    {
        return self::sendResponse(route('billing', ['plan' => $option, 'shop' => $shopDomain]), 'Success');
    }

    public function getPlanData($shopDomain)
    {
        $user = User::where(['name' => $shopDomain])->first();
        $charge_data = Charges::where(['user_id' => $user['id'], 'status' => "ACTIVE"])->first();

        $plan_id = 1;
        if ($charge_data) {
            $plan_id = (int) $charge_data['plan_id'];
        }
        return self::sendResponse($plan_id, 'Success');
    }
}

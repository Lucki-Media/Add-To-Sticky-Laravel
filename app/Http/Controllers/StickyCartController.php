<?php

namespace App\Http\Controllers;

use App\Models\ShopifyAPI;
use Illuminate\Http\Request;
use App\Models\StickyCartData;

class StickyCartController extends Controller
{
    public function getStickyCartData($shopDomain)
    {
        $sticky_cart_data = StickyCartData::where('shop_domain', $shopDomain)->first();
        $final_data = [
            'shop_domain' => $sticky_cart_data['shop_domain'],
            'enableSticky' => $sticky_cart_data['enableSticky'] === "1" ? true : false,
            'defaultTemplate' => (int) $sticky_cart_data['defaultTemplate'],
            'current_template' => json_decode($sticky_cart_data['current_template']),
            'sticky_template_1' => json_decode($sticky_cart_data['sticky_template_1']),
            'sticky_template_2' => json_decode($sticky_cart_data['sticky_template_2']),
            'sticky_template_3' => json_decode($sticky_cart_data['sticky_template_3']),
            'sticky_template_4' => json_decode($sticky_cart_data['sticky_template_4']),
            'sticky_template_5' => json_decode($sticky_cart_data['sticky_template_5']),
            'drawer_cart_data' => json_decode($sticky_cart_data['drawer_cart_data'])
        ];
        return self::sendResponse($final_data, 'Success');
    }

    public function saveStickyCartData(Request $request)
    {
        $requestData = $request['data'];
        $sticky_cart_data = StickyCartData::where('shop_domain', $requestData['shop_domain'])->first();
        // echo '<pre>';print_r($requestData);exit;
        $current_template = $requestData['stickyData'];
        $final_data = [
            'shop_domain' => $requestData['shop_domain'],
            'drawer_cart_data' => json_encode($requestData['drawer_cart_data']),
            'enableSticky' => $requestData['enableSticky'],
            'defaultTemplate' => $requestData['defaultTemplate'],
            'current_template' => json_encode($current_template),
            'sticky_template_1' => $requestData['defaultTemplate'] === 1 ? json_encode($current_template) : $sticky_cart_data['sticky_template_1'],
            'sticky_template_2' => $requestData['defaultTemplate'] === 2 ? json_encode($current_template) : $sticky_cart_data['sticky_template_2'],
            'sticky_template_3' => $requestData['defaultTemplate'] === 3 ? json_encode($current_template) : $sticky_cart_data['sticky_template_3'],
            'sticky_template_4' => $requestData['defaultTemplate'] === 4 ? json_encode($current_template) : $sticky_cart_data['sticky_template_4'],
            'sticky_template_5' => $requestData['defaultTemplate'] === 5 ? json_encode($current_template) : $sticky_cart_data['sticky_template_5'],
        ];
        if ($sticky_cart_data) {
            $updateOrInsert = StickyCartData::where('shop_domain', $requestData['shop_domain'])->update($final_data);
        } else {
            $updateOrInsert = StickyCartData::insert($final_data);
        }
        if ($updateOrInsert) {
            return self::sendResponse($final_data, 'Data Updated/Inserted!');
        } else {
            return self::sendError([], 'Data Failed To Update/Insert!');
        }
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\AddToCartStickyData;

class AddToCartStickyController extends Controller
{
    public function saveAddToStickyCartData(Request $request)
    {
        $requestData = $request['data'];
        $sac_data = AddToCartStickyData::where('shop_domain', $requestData['shop_domain'])->first();
        // echo '<pre>';print_r($requestData);exit;
        $current_template = [
            'general_settings' => [
                'checkDesktop' => $requestData['checkDesktop'],
                'checkMobile' => $requestData['checkMobile'],
                'position' => $requestData['position'],
                'gsFontFamily' => $requestData['gsFontFamily'],
                'gsFontsize' => $requestData['gsFontsize'],
                'gsPriceFontsize' => $requestData['gsPriceFontsize'],
                'gsBold' => $requestData['gsBold'],
                'gsItalic' => $requestData['gsItalic'],
                'gsUnderline' => $requestData['gsUnderline'],
                'gsTitleColor' => $requestData['gsTitleColor'],
                'containerHeight' => $requestData['containerHeight'],
                'gsPriceColor' => $requestData['gsPriceColor'],
                'gsBgColor' => $requestData['gsBgColor'],
                'gsOffsetValue' => $requestData['gsOffsetValue'],
                'gsAction' => $requestData['gsAction'],
                'gsDisplayCondition' => $requestData['gsDisplayCondition'],
                'gsNotificationBarText' => $requestData['gsNotificationBarText'],
                'gsNotificationBarItalic' => $requestData['gsNotificationBarItalic'],
                'gsNotificationBarBold' => $requestData['gsNotificationBarBold'],
                'gsNotificationBarTextColor' => $requestData['gsNotificationBarTextColor'],
                'gsNotificationBarBgColor' => $requestData['gsNotificationBarBgColor'],
            ],
            'buy_btn_settings' => [
                'editText' => $requestData['editText'],
                // 'soldOut'               => $requestData['soldOut'],
                'unavailable' => $requestData['unavailable'],
                'btnWidthValue' => $requestData['btnWidthValue'],
                'btnheightValue' => $requestData['btnheightValue'],
                'btnFontsize' => $requestData['btnFontsize'],
                'btnBorderThickness' => $requestData['btnBorderThickness'],
                'btnBorderRadius' => $requestData['btnBorderRadius'],
                'btnBold' => $requestData['btnBold'],
                'btnItalic' => $requestData['btnItalic'],
                'btnUnderline' => $requestData['btnUnderline'],
                'btnTextColor' => $requestData['btnTextColor'],
                'btnBgColor' => $requestData['btnBgColor'],
                'btnTexthoverColor' => $requestData['btnTexthoverColor'],
                'btnBgHoverColor' => $requestData['btnBgHoverColor'],
                'btnBorderColor' => $requestData['btnBorderColor'],
                'btnBorderHoverColor' => $requestData['btnBorderHoverColor'],
            ],
        ];
        $final_data = [
            'shop_domain' => $requestData['shop_domain'],
            'enable' => $requestData['enable'],
            'homePageProduct' => $requestData['homePageProduct'],
            'animationEnable' => $requestData['animationEnable'],
            'defaultTemplate' => $requestData['defaultTemplate'],
            'current_template' => json_encode($current_template),
            'template_1' => $requestData['defaultTemplate'] === '1' ? json_encode($current_template) : $sac_data['template_1'],
            'template_2' => $requestData['defaultTemplate'] === '2' ? json_encode($current_template) : $sac_data['template_2'],
            'template_3' => $requestData['defaultTemplate'] === '3' ? json_encode($current_template) : $sac_data['template_3'],
            'template_4' => $requestData['defaultTemplate'] === '4' ? json_encode($current_template) : $sac_data['template_4'],
            'template_5' => $requestData['defaultTemplate'] === '5' ? json_encode($current_template) : $sac_data['template_5'],
            'template_6' => $requestData['defaultTemplate'] === '6' ? json_encode($current_template) : $sac_data['template_6'],
            'template_7' => $requestData['defaultTemplate'] === '7' ? json_encode($current_template) : $sac_data['template_7'],
            'template_8' => $requestData['defaultTemplate'] === '8' ? json_encode($current_template) : $sac_data['template_8'],
        ];
        if ($sac_data) {
            $updateOrInsert = AddToCartStickyData::where('shop_domain', $requestData['shop_domain'])->update($final_data);
        } else {
            $updateOrInsert = AddToCartStickyData::insert($final_data);
        }
        if ($updateOrInsert) {
            return self::sendResponse($final_data, 'Data Updated/Inserted!');
        } else {
            return self::sendError([], 'Data Failed To Update/Insert!');
        }
    }

    public function getAddToStickyCartData($shopDomain)
    {
        $sac_data = AddToCartStickyData::where('shop_domain', $shopDomain)->first();
        // echo '<pre>';print_r($sac_data);exit;
        $final_data = [
            'shop_domain' => $sac_data['shop_domain'],
            'enable' => $sac_data['enable'] === '1' ? true : false,
            'homePageProduct' => $sac_data['homePageProduct'] ?? "",
            'animationEnable' => (int) $sac_data['animationEnable'] === 1 ? true : false,
            'defaultTemplate' => (int) $sac_data['defaultTemplate'],
            'current_template' => json_decode($sac_data['current_template']),
            'template_1' => json_decode($sac_data['template_1']),
            'template_2' => json_decode($sac_data['template_2']),
            'template_3' => json_decode($sac_data['template_3']),
            'template_4' => json_decode($sac_data['template_4']),
            'template_5' => json_decode($sac_data['template_5']),
            'template_6' => json_decode($sac_data['template_6']),
            'template_7' => json_decode($sac_data['template_7']),
            'template_8' => json_decode($sac_data['template_8']),
        ];
        return self::sendResponse($final_data, 'Success');
        // echo '<pre>';print_r(json_encode($data));exit;
    }

    public function getAllProducts($shopDomain)
    {
        // get required details
        $apiKey = config('shopify-app.api_key');
        $user = User::where(['name' => $shopDomain])->first();

        // get all products
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
        $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/products.json?fields=id%2Cimage%2Ctitle';
        curl_setopt($ch, CURLOPT_URL, $url);
        $server_output = curl_exec($ch);
        $product_data = json_decode($server_output, true);

        return self::sendResponse($product_data, 'Success');
        // echo '<pre>';print_r(json_encode($data));exit;
    }

    public function getProductHandle($shopDomain, $productID)
    {
        // get product ID if stored 
        $homePageProduct = AddToCartStickyData::where('shop_domain', $shopDomain)->value('homePageProduct');

        if ($homePageProduct && $homePageProduct != "") {

            // get required details
            $apiKey = config('shopify-app.api_key');
            $user = User::where(['name' => $shopDomain])->first();

            // get all products
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
            $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/products/' . $productID . '.json?fields=handle';
            curl_setopt($ch, CURLOPT_URL, $url);
            $server_output = curl_exec($ch);
            $product_data = json_decode($server_output, true);

            $handle = $product_data && $product_data['product'] && $product_data['product']['handle'] ? $product_data['product']['handle'] : "";
            return self::sendResponse($handle, 'Success');
        } else {
            return self::sendResponse("", 'Success');
        }
    }
}

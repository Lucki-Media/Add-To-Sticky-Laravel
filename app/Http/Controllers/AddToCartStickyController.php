<?php

namespace App\Http\Controllers;

use App\Models\ShopifyAPI;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\AddToCartStickyData;

class AddToCartStickyController extends Controller
{
    public function saveAddToStickyCartData(Request $request)
    {
        $requestData = $request->all();
        $sac_data = AddToCartStickyData::where('shop_domain', $requestData['shop_domain'])->first();

        if ($sac_data) {
            $updateOrInsert = AddToCartStickyData::where('shop_domain', $requestData['shop_domain'])->update($requestData);
        } else {
            $updateOrInsert = AddToCartStickyData::insert($requestData);
        }
        if ($updateOrInsert) {
            return self::sendResponse($requestData, 'Data Updated/Inserted!');
        } else {
            return self::sendError([], 'Data Failed To Update/Insert!');
        }
    }

    public function saveAddToStickyCartDataOld(Request $request)
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
                'gsNotificationBarText' => $requestData['gsNotificationBarText'] ?? "Yayy! Product Added to Cart!",
                'gsNotificationBarItalic' => $requestData['gsNotificationBarItalic'] ?? false,
                'gsNotificationBarBold' => $requestData['gsNotificationBarBold'] ?? false,
                'gsNotificationBarTextColor' => $requestData['gsNotificationBarTextColor'] ?? "#ffffff",
                'gsNotificationBarBgColor' => $requestData['gsNotificationBarBgColor'] ?? '#000000',
                'gsNotificationBarFontSize' => $requestData['gsNotificationBarFontSize'] ?? 12,
                'gsNotificationBarHeight' => $requestData['gsNotificationBarHeight'] ?? 5,
                'enableUpSell' => $requestData['enableUpSell'] ?? false,
                'CUPLSelection' => $requestData['CUPLSelection'] ?? "1",
                'CUPLManualSelection' => $requestData['CUPLManualSelection'] ?? "1",
                'SelectedCollectionID' => $requestData['SelectedCollectionID'] ?? "",
                'SelectedProductIDs' => $requestData['SelectedProductIDs'] ?? [],
                'CUHeadingText' => $requestData['CUHeadingText'] ?? "Recommended Products",
                'CUBuyBtnText' => $requestData['CUBuyBtnText'] ?? "Buy",
                'CUHeadingFontSize' => $requestData['CUHeadingFontSize'] ?? 15,
                'CUBodyFontSize' => $requestData['CUBodyFontSize'] ?? 14,
                'CUBuyBtnFontSize' => $requestData['CUBuyBtnFontSize'] ?? 14,
                'CUBodyColor' => $requestData['CUBodyColor'] ?? "#eef1f2",
                'CUHeadingBGColor' => $requestData['CUHeadingBGColor'] ?? "#000000",
                'CUHeadingColor' => $requestData['CUHeadingColor'] ?? "#ffffff",
                'CUBtnTextColor' => $requestData['CUBtnTextColor'] ?? "#ffffff",
                'CUBtnBGColor' => $requestData['CUBtnBGColor'] ?? "#000000",
                'CUBtnTextHoverColor' => $requestData['CUBtnTextHoverColor'] ?? "#000000",
                'CUBtnBGHoverColor' => $requestData['CUBtnBGHoverColor'] ?? "#ffffff",
                'CUBorderRadius' => $requestData['CUBorderRadius'] ?? 0,
                'CUBackgroundColor' => $requestData['CUBackgroundColor'] ?? "#fffafa",
                'CUBodyTextColor' => $requestData['CUBodyTextColor'] ?? "#050505",
                'USPosition' => $requestData['USPosition'] ?? "left",
                'USOffset' => $requestData['USOffset'] ?? 0,
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
            'enable' => $sac_data['enable'] === '1' || $sac_data['enable'] === true ? true : false,
            'homePageProduct' => $sac_data['homePageProduct'] ?? "",
            'animationEnable' => $sac_data['animationEnable'] === true || (int) $sac_data['animationEnable'] === 1 ? true : false,
            'defaultTemplate' => (string) $sac_data['defaultTemplate'],
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

    public function getProductHandle($shopDomain)
    {
        // get product ID if stored 
        $sac_data = AddToCartStickyData::where('shop_domain', $shopDomain)->first();

        if ($sac_data['homePageProduct'] && $sac_data['homePageProduct'] != "") {
            $final_data = [
                'shop_domain' => $sac_data['shop_domain'],
                'enable' => $sac_data['enable'] === '1' ? true : false,
                'homePageProduct' => $sac_data['homePageProduct'] ?? "",
                'animationEnable' => (int) $sac_data['animationEnable'] === 1 ? true : false,
                'defaultTemplate' => (string) $sac_data['defaultTemplate'],
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
        } else {
            return self::sendResponse("", 'Success');
        }
    }
}

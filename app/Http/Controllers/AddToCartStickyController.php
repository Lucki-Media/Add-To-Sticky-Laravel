<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddToCartStickyData;

class AddToCartStickyController extends Controller{

    public function saveAddToStickyCartData(Request $request){
        $requestData = $request['data'];
        $sac_data = AddToCartStickyData::where('shop_domain',$requestData['shop_domain'])->first();
        // echo '<pre>';print_r($requestData);exit;
        $current_template = [
            'general_settings'  => [
                'checkDesktop'          => $requestData['checkDesktop'],
                'checkMobile'           => $requestData['checkMobile'],
                'position'              => $requestData['position'],
                'gsFontFamily'          => $requestData['gsFontFamily'],
                'gsFontsize'            => $requestData['gsFontsize'],
                'gsPriceFontsize'       => $requestData['gsPriceFontsize'],
                'gsBold'                => $requestData['gsBold'],
                'gsItalic'              => $requestData['gsItalic'],
                'gsUnderline'           => $requestData['gsUnderline'],
                'gsTitleColor'          => $requestData['gsTitleColor'],
                'containerHeight'       => $requestData['containerHeight'],
                'gsPriceColor'          => $requestData['gsPriceColor'],
                'gsBgColor'             => $requestData['gsBgColor'],
                'gsOffsetValue'         => $requestData['gsOffsetValue'],
                'gsAction'              => $requestData['gsAction'],
                'gsDisplayCondition'    => $requestData['gsDisplayCondition'],
            ],
            'buy_btn_settings'      => [
                'editText'              => $requestData['editText'],
                // 'soldOut'               => $requestData['soldOut'],
                'unavailable'           => $requestData['unavailable'],
                'btnWidthValue'         => $requestData['btnWidthValue'],
                'btnheightValue'        => $requestData['btnheightValue'],
                'btnFontsize'           => $requestData['btnFontsize'],
                'btnBorderThickness'    => $requestData['btnBorderThickness'],
                'btnBorderRadius'       => $requestData['btnBorderRadius'],
                'btnBold'               => $requestData['btnBold'],
                'btnItalic'             => $requestData['btnItalic'],
                'btnUnderline'          => $requestData['btnUnderline'],
                'btnTextColor'          => $requestData['btnTextColor'],
                'btnBgColor'            => $requestData['btnBgColor'],
                'btnTexthoverColor'     => $requestData['btnTexthoverColor'],
                'btnBgHoverColor'       => $requestData['btnBgHoverColor'],
                'btnBorderColor'        => $requestData['btnBorderColor'],
                'btnBorderHoverColor'   => $requestData['btnBorderHoverColor'],
            ],
        ];
        $final_data = [
            'shop_domain'           => $requestData['shop_domain'],
            'enable'                => $requestData['enable'],
            'defaultTemplate'       => $requestData['defaultTemplate'],
            'current_template'      => json_encode($current_template),
            'template_1'            => $requestData['defaultTemplate'] === 1 ? json_encode($current_template) : $sac_data['template_1'],
            'template_2'            => $requestData['defaultTemplate'] === 2 ? json_encode($current_template) : $sac_data['template_2'],
            'template_3'            => $requestData['defaultTemplate'] === 3 ? json_encode($current_template) : $sac_data['template_3'],
            'template_4'            => $requestData['defaultTemplate'] === 4 ? json_encode($current_template) : $sac_data['template_4'],
            'template_5'            => $requestData['defaultTemplate'] === 5 ? json_encode($current_template) : $sac_data['template_5'],
            'template_6'            => $requestData['defaultTemplate'] === 6 ? json_encode($current_template) : $sac_data['template_6'],
            'template_7'            => $requestData['defaultTemplate'] === 7 ? json_encode($current_template) : $sac_data['template_7'],
            'template_8'            => $requestData['defaultTemplate'] === 8 ? json_encode($current_template) : $sac_data['template_8'],
        ];
        if($sac_data){
            $updateOrInsert = AddToCartStickyData::where('shop_domain',$requestData['shop_domain'])->update($final_data);
        }else{
            $updateOrInsert = AddToCartStickyData::insert($final_data);
        }
        if($updateOrInsert){
            return self::sendResponse($final_data, 'Add To Cart Sticky Data Updated/Inserted Successfully!');
        }else{
            return self::sendError([], 'Add To Cart Sticky Data Failed To Update/Insert!');
        }
    }

    public function getAddToStickyCartData($shopDomain){
        $sac_data = AddToCartStickyData::where('shop_domain',$shopDomain)->first();
        $final_data = [
            'shop_domain'           => $sac_data['shop_domain'],
            'enable'                => $sac_data['enable'] === "1" ? true : false,
            'defaultTemplate'       => (int)$sac_data['defaultTemplate'],
            'current_template'      => json_decode($sac_data['current_template']),
            'template_1'            => json_decode($sac_data['template_1']),
            'template_2'            => json_decode($sac_data['template_2']),
            'template_3'            => json_decode($sac_data['template_3']),
            'template_4'            => json_decode($sac_data['template_4']),
            'template_5'            => json_decode($sac_data['template_5']),
            'template_6'            => json_decode($sac_data['template_6']),
            'template_7'            => json_decode($sac_data['template_7']),
            'template_8'            => json_decode($sac_data['template_8'])
        ];
        return self::sendResponse($final_data, 'Success');
        // echo '<pre>';print_r(json_encode($data));exit;
    }
}
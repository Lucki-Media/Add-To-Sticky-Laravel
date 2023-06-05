<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddToCartStickyData;

class AddToCartStickyController extends Controller{

    public static function saveAddToStickyCartData(Request $request){
        $requestData = $request['data'];
        $sac_data = AddToCartStickyData::first();
        // echo '<pre>';print_r($requestData);exit;
        $current_template = [
            'general_settings'      => [
                'desktop'           => $requestData['checkDesktop'],
                'mobile'            => $requestData['checkMobile'],
                'posValue'          => $requestData['posValue'],
                'font_family'       => $requestData['fontFamily'],
                'rangeValue'        => $requestData['rangeValue'],
                'font_bold'         => $requestData['bold'],
                'font_italic'       => $requestData['italic'],
                'font_underline'    => $requestData['underline'],
                'font_title_color'  => $requestData['titleColor'],
                'font_height'       => $requestData['heightValue'],
                'font_price_color'  => $requestData['priceColor'],
                'font_bg_color'     => $requestData['bgColor'],
                'offsetValue'       => $requestData['offsetValue'],
                'selectedAction'    => $requestData['selectedAction'],
                'conditionValue'    => $requestData['conditionValue'],
            ],
            'buy_btn_settings'      => [
                'edit_text'                 => $requestData['editText'],
                'sold_out'                  => $requestData['soldOut'],
                'unavailable'               => $requestData['unavailable'],
                'btn_width'                 => $requestData['widthValue'],
                'btn_height'                => $requestData['buttonheightValue'],
                'font_size'                 => $requestData['fontSizeValue'],
                'btn_size'                  => $requestData['btnSizeValue'],
                'btn_underline'             => $requestData['heightValue'],
                'btn_border'                => $requestData['borderValue'],
                'btn_border_radius'         => $requestData['radiusValue'],
                'btn_bold'                  => $requestData['boldButton'],
                'btn_italic'                => $requestData['italicButton'],
                'btn_underline'             => $requestData['underlineButton'],
                'btn_text_color'            => $requestData['btnTextColor'],
                'btn_bg_color'              => $requestData['btnBGColor'],
                'btn_text_hover_color'      => $requestData['texthoverColor'],
                'btn_bg_hover_color'        => $requestData['bgHoverColor'],
                'btn_border_color'          => $requestData['borderColor'],
                'btn_border_hover_color'    => $requestData['radiusColor'],
            ],
        ];
        $final_data = [
            'shop_domain'           => $requestData['shop_domain'],
            'add_to_cart_sticky'    => $requestData['enable'],
            'default_template'      => $requestData['value'],
            'current_template'      => json_encode($current_template),
            'template_1'            => $requestData['value'] === 1 ? json_encode($current_template) : $sac_data['template_1'],
            'template_2'            => $requestData['value'] === 2 ? json_encode($current_template) : $sac_data['template_2'],
            'template_3'            => $requestData['value'] === 3 ? json_encode($current_template) : $sac_data['template_3'],
            'template_4'            => $requestData['value'] === 4 ? json_encode($current_template) : $sac_data['template_4'],
            'template_5'            => $requestData['value'] === 5 ? json_encode($current_template) : $sac_data['template_5'],
            'template_6'            => $requestData['value'] === 6 ? json_encode($current_template) : $sac_data['template_6'],
            'template_7'            => $requestData['value'] === 7 ? json_encode($current_template) : $sac_data['template_7'],
            'template_8'            => $requestData['value'] === 8 ? json_encode($current_template) : $sac_data['template_8'],
        ];
        $sac_data ? AddToCartStickyData::where('shop_domain',$requestData['shop_domain'])->update($final_data) : AddToCartStickyData::insert($final_data);
        echo '<pre>';print_r(json_encode($current_template));exit;
    }

    public function getAddToStickyCartData($shopDomain){
        $sac_data = AddToCartStickyData::where('shop_domain',$shopDomain)->first();
        $final_data = [
            'shop_domain'           => $sac_data['shop_domain'],
            'add_to_cart_sticky'    => $sac_data['add_to_cart_sticky'] === "1" ? true : false,
            'default_template'      => (int)$sac_data['default_template'],
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
        echo '<pre>';print_r(json_encode($data));exit;

        echo '<pre>';print_r(json_encode($current_template));exit;
    }
}
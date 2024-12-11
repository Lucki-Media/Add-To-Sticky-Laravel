<?php

namespace App\Http\Controllers;

use App\Models\AddToCartStickyData;
use App\Models\ShopifyAPI;
use App\Models\StickyCartData;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\AddToCartStickyCount;
use App\Models\StickyCartCount;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function addBuyButtonClicks(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");
        $request->year = (string) $request->year;
        $getAddToCartStickyCount = AddToCartStickyCount::where(['shop_domain' => $request->shop, 'year' => $request->year])->first();
        if ($getAddToCartStickyCount) {

            $updateData = [
                'shop_domain' => $request->shop,
                'year' => $request->year,
                'total' => $getAddToCartStickyCount['total'] + 1,
                'Jan' => $request->month == "Jan" ? $getAddToCartStickyCount['Jan'] + 1 : $getAddToCartStickyCount['Jan'],
                'Feb' => $request->month == "Feb" ? $getAddToCartStickyCount['Feb'] + 1 : $getAddToCartStickyCount['Feb'],
                'Mar' => $request->month == "Mar" ? $getAddToCartStickyCount['Mar'] + 1 : $getAddToCartStickyCount['Mar'],
                'Apr' => $request->month == "Apr" ? $getAddToCartStickyCount['Apr'] + 1 : $getAddToCartStickyCount['Apr'],
                'May' => $request->month == "May" ? $getAddToCartStickyCount['May'] + 1 : $getAddToCartStickyCount['May'],
                'Jun' => $request->month == "Jun" ? $getAddToCartStickyCount['Jun'] + 1 : $getAddToCartStickyCount['Jun'],
                'Jul' => $request->month == "Jul" ? $getAddToCartStickyCount['Jul'] + 1 : $getAddToCartStickyCount['Jul'],
                'Aug' => $request->month == "Aug" ? $getAddToCartStickyCount['Aug'] + 1 : $getAddToCartStickyCount['Aug'],
                'Sep' => $request->month == "Sep" ? $getAddToCartStickyCount['Sep'] + 1 : $getAddToCartStickyCount['Sep'],
                'Oct' => $request->month == "Oct" ? $getAddToCartStickyCount['Oct'] + 1 : $getAddToCartStickyCount['Oct'],
                'Nov' => $request->month == "Nov" ? $getAddToCartStickyCount['Nov'] + 1 : $getAddToCartStickyCount['Nov'],
                'Dec' => $request->month == "Dec" ? $getAddToCartStickyCount['Dec'] + 1 : $getAddToCartStickyCount['Dec'],
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s')
            ];
            // echo '<pre>';print_r($updateData);exit   ;
            $update = AddToCartStickyCount::where(['shop_domain' => $request->shop, 'year' => $request->year])->update($updateData);
        } else {
            $insertData = [
                'shop_domain' => $request->shop,
                'year' => $request->year,
                'total' => '1',
                'Jan' => $request->month == "Jan" ? '1' : '0',
                'Feb' => $request->month == "Feb" ? '1' : '0',
                'Mar' => $request->month == "Mar" ? '1' : '0',
                'Apr' => $request->month == "Apr" ? '1' : '0',
                'May' => $request->month == "May" ? '1' : '0',
                'Jun' => $request->month == "Jun" ? '1' : '0',
                'Jul' => $request->month == "Jul" ? '1' : '0',
                'Aug' => $request->month == "Aug" ? '1' : '0',
                'Sep' => $request->month == "Sep" ? '1' : '0',
                'Oct' => $request->month == "Oct" ? '1' : '0',
                'Nov' => $request->month == "Nov" ? '1' : '0',
                'Dec' => $request->month == "Dec" ? '1' : '0',
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s')
            ];
            $insert = AddToCartStickyCount::insert($insertData);
        }
        return self::sendResponse([], 'Clicked Successfully!');
        // echo '<pre>';print_r($request->all());exit;
    }

    public function addStickyButtonClicks(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");
        $request->year = (string) $request->year;
        $getStickyCartCount = StickyCartCount::where(['shop_domain' => $request->shop, 'year' => $request->year])->first();
        if ($getStickyCartCount) {

            $updateData = [
                'shop_domain' => $request->shop,
                'year' => $request->year,
                'total' => $getStickyCartCount['total'] + 1,
                'Jan' => $request->month == "Jan" ? $getStickyCartCount['Jan'] + 1 : $getStickyCartCount['Jan'],
                'Feb' => $request->month == "Feb" ? $getStickyCartCount['Feb'] + 1 : $getStickyCartCount['Feb'],
                'Mar' => $request->month == "Mar" ? $getStickyCartCount['Mar'] + 1 : $getStickyCartCount['Mar'],
                'Apr' => $request->month == "Apr" ? $getStickyCartCount['Apr'] + 1 : $getStickyCartCount['Apr'],
                'May' => $request->month == "May" ? $getStickyCartCount['May'] + 1 : $getStickyCartCount['May'],
                'Jun' => $request->month == "Jun" ? $getStickyCartCount['Jun'] + 1 : $getStickyCartCount['Jun'],
                'Jul' => $request->month == "Jul" ? $getStickyCartCount['Jul'] + 1 : $getStickyCartCount['Jul'],
                'Aug' => $request->month == "Aug" ? $getStickyCartCount['Aug'] + 1 : $getStickyCartCount['Aug'],
                'Sep' => $request->month == "Sep" ? $getStickyCartCount['Sep'] + 1 : $getStickyCartCount['Sep'],
                'Oct' => $request->month == "Oct" ? $getStickyCartCount['Oct'] + 1 : $getStickyCartCount['Oct'],
                'Nov' => $request->month == "Nov" ? $getStickyCartCount['Nov'] + 1 : $getStickyCartCount['Nov'],
                'Dec' => $request->month == "Dec" ? $getStickyCartCount['Dec'] + 1 : $getStickyCartCount['Dec'],
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s')
            ];
            // echo '<pre>';print_r($updateData);exit   ;
            $update = StickyCartCount::where(['shop_domain' => $request->shop, 'year' => $request->year])->update($updateData);
            return self::sendResponse([], 'Clicked Successfully!');
        } else {
            $insertData = [
                'shop_domain' => $request->shop,
                'year' => $request->year,
                'total' => '1',
                'Jan' => $request->month == "Jan" ? '1' : '0',
                'Feb' => $request->month == "Feb" ? '1' : '0',
                'Mar' => $request->month == "Mar" ? '1' : '0',
                'Apr' => $request->month == "Apr" ? '1' : '0',
                'May' => $request->month == "May" ? '1' : '0',
                'Jun' => $request->month == "Jun" ? '1' : '0',
                'Jul' => $request->month == "Jul" ? '1' : '0',
                'Aug' => $request->month == "Aug" ? '1' : '0',
                'Sep' => $request->month == "Sep" ? '1' : '0',
                'Oct' => $request->month == "Oct" ? '1' : '0',
                'Nov' => $request->month == "Nov" ? '1' : '0',
                'Dec' => $request->month == "Dec" ? '1' : '0',
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s')
            ];
            $insert = StickyCartCount::insert($insertData);
            return self::sendResponse([], 'Clicked Successfully!');
        }
        // echo '<pre>';print_r($request->all());exit;
    }

    public function updateReviewBannerStatus($shopDomain, $selected)
    {
        AddToCartStickyData::where('shop_domain', $shopDomain)->update([
            'review_banner' => $selected,
            'updated_at' => Carbon::now(),
        ]);
        return self::sendResponse("", 'Success');
    }

    public function getDashboardCount($shopDomain)
    {
        header("Access-Control-Allow-Origin: *");

        // get shop name from shopify API
        $apiKey = config('shopify-app.api_key');
        $user = User::where(['name' => $shopDomain])->first();

        if ($user) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
            $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/shop.json?fields=name';
            curl_setopt($ch, CURLOPT_URL, $url);
            $server_output = curl_exec($ch);
            $shop_data = json_decode($server_output, true);
        }
        // get details about counts
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->format('M');
        $getStickyCartCount = StickyCartCount::where(['shop_domain' => $shopDomain, 'year' => $currentYear])->first();
        $getAddToCartStickyCount = AddToCartStickyCount::where(['shop_domain' => $shopDomain, 'year' => $currentYear])->first();

        // get details to show enable/disable onboarding steps 
        $sac_enable = AddToCartStickyData::where('shop_domain', $shopDomain)->first();
        $sc_enable = StickyCartData::where('shop_domain', $shopDomain)->value('enableSticky');

        // check whether review banner need to show or not 
        if ($sac_enable && $sac_enable['review_banner'] == '1' && Carbon::parse($sac_enable['updated_at'])->lte(Carbon::now()->subMonth())) {
            $showReviewBanner = true;
        } else {
            $showReviewBanner = false;
        }

        // Final array
        $finalArray = [
            'shop_name' => $shop_data['shop']['name'] ?? "There",
            'extension_id' => env('SHOPIFY_LM_ADD_TO_CART_THEME_EXTENTION_ID'),
            'year' => $currentYear,
            'current_month' => Carbon::now()->format('F'),
            'sacMonthValue' => $getAddToCartStickyCount[$currentMonth] ?? 0,
            'scMonthValue' => $getStickyCartCount[$currentMonth] ?? 0,
            'sac_array' => [
                $getAddToCartStickyCount['Jan'] ?? 0,
                $getAddToCartStickyCount['Feb'] ?? 0,
                $getAddToCartStickyCount['Mar'] ?? 0,
                $getAddToCartStickyCount['Apr'] ?? 0,
                $getAddToCartStickyCount['May'] ?? 0,
                $getAddToCartStickyCount['Jun'] ?? 0,
                $getAddToCartStickyCount['Jul'] ?? 0,
                $getAddToCartStickyCount['Aug'] ?? 0,
                $getAddToCartStickyCount['Sep'] ?? 0,
                $getAddToCartStickyCount['Oct'] ?? 0,
                $getAddToCartStickyCount['Nov'] ?? 0,
                $getAddToCartStickyCount['Dec'] ?? 0,
            ],
            'sc_array' => [
                $getStickyCartCount['Jan'] ?? 0,
                $getStickyCartCount['Feb'] ?? 0,
                $getStickyCartCount['Mar'] ?? 0,
                $getStickyCartCount['Apr'] ?? 0,
                $getStickyCartCount['May'] ?? 0,
                $getStickyCartCount['Jun'] ?? 0,
                $getStickyCartCount['Jul'] ?? 0,
                $getStickyCartCount['Aug'] ?? 0,
                $getStickyCartCount['Sep'] ?? 0,
                $getStickyCartCount['Oct'] ?? 0,
                $getStickyCartCount['Nov'] ?? 0,
                $getStickyCartCount['Dec'] ?? 0,
            ],
            'sac_enable' => $sac_enable && $sac_enable['enable'] ? $sac_enable['enable'] : '0',
            'sc_enable' => $sc_enable ?? '0',
            'review_banner' => $showReviewBanner,
            'theme_ext_enabled' => $this->checkIsExtensionEnabled($shopDomain),
        ];
        return self::sendResponse($finalArray, 'Success');
    }

    private function checkIsExtensionEnabled($shopDomain)
    {
        // get required details
        $apiKey = config('shopify-app.api_key');
        $user = User::where(['name' => $shopDomain])->first();

        if ($user) {
            // get all themes
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
            $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/themes.json?fields=id,name,role';
            curl_setopt($ch, CURLOPT_URL, $url);
            $server_output = curl_exec($ch);
            $theme_data = json_decode($server_output, true);
            $themes = isset($theme_data['themes']) && is_array($theme_data['themes']) ? $theme_data['themes'] : [];

            // Filter the array to get objects where the role is 'main', this is how we'll get current theme ID
            $filteredArray = [];
            foreach ($themes as $item) {
                if ($item['role'] === 'main') {
                    $filteredArray = $item;
                    break; // Exit the loop as we found the main role
                }
            }
            $currentThemeId = $filteredArray && $filteredArray['id'] ? $filteredArray['id'] : "";

            // get settings_data.json asset to get details about extension is enabled or not
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
            $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/themes/' . $currentThemeId . '/assets.json?asset%5Bkey%5D=config%2Fsettings_data.json';
            curl_setopt($ch, CURLOPT_URL, $url);
            $server_output = curl_exec($ch);
            $asset_data = json_decode($server_output, true);
            $asset_json = isset($asset_data['asset']['value']) ? json_decode($asset_data['asset']['value'], true) : null;
            // get json decoded data of settings_data.json file
            $block_details = optional(optional($asset_json)['current'])['blocks'] ?? [];
            // get blocks where extension details are stored

            // get details of block of our app
            $app_block = [
                "disabled" => true
            ];
            $app_slugs = [env('APP_SLUG1'), env('APP_SLUG2')];

            foreach ($block_details as $key => $value) {
                foreach ($app_slugs as $slug) {
                    if ($value['type'] === "shopify://apps/" . $slug . "/blocks/app-embed/" . env('SHOPIFY_LM_ADD_TO_CART_THEME_EXTENTION_ID')) {
                        $app_block = $value;
                        break 2; // Exit both loops as we found the app block
                    }
                }
            }

            return isset($app_block) && $app_block['disabled'] === false ? '1' : '0';
        }
        return '0';
    }
}
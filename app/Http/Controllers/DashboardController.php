<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddToCartStickyCount;
use App\Models\StickyCartCount;
use Carbon\Carbon;
use MailerLite\MailerLite;

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

    public function getDashboardCount($shopDomain)
    {
        header("Access-Control-Allow-Origin: *");
        $currentYear = Carbon::now()->year;
        $currentMonth = Carbon::now()->format('M');
        $getStickyCartCount = StickyCartCount::where(['shop_domain' => $shopDomain, 'year' => $currentYear])->first();
        $getAddToCartStickyCount = AddToCartStickyCount::where(['shop_domain' => $shopDomain, 'year' => $currentYear])->first();
        $finalArray = [
            'year' => $currentYear,
            'current_month' => Carbon::now()->format('F'),
            'sacMonthValue' => $getAddToCartStickyCount[$currentMonth],
            'scMonthValue' => $getStickyCartCount[$currentMonth],
            'sac_array' => [
                $getAddToCartStickyCount['Jan'],
                $getAddToCartStickyCount['Feb'],
                $getAddToCartStickyCount['Mar'],
                $getAddToCartStickyCount['Apr'],
                $getAddToCartStickyCount['May'],
                $getAddToCartStickyCount['Jun'],
                $getAddToCartStickyCount['Jul'],
                $getAddToCartStickyCount['Aug'],
                $getAddToCartStickyCount['Sep'],
                $getAddToCartStickyCount['Oct'],
                $getAddToCartStickyCount['Nov'],
                $getAddToCartStickyCount['Dec'],
            ],
            'sc_array' => [
                $getStickyCartCount['Jan'],
                $getStickyCartCount['Feb'],
                $getStickyCartCount['Mar'],
                $getStickyCartCount['Apr'],
                $getStickyCartCount['May'],
                $getStickyCartCount['Jun'],
                $getStickyCartCount['Jul'],
                $getStickyCartCount['Aug'],
                $getStickyCartCount['Sep'],
                $getStickyCartCount['Oct'],
                $getStickyCartCount['Nov'],
                $getStickyCartCount['Dec'],
            ],
        ];
        return self::sendResponse($finalArray, 'Success');
        echo '<pre>';
        print_r($finalArray);
        exit;
        echo '<pre>';
        print_r($getStickyCartCount);
        echo '<pre>';
        print_r($getAddToCartStickyCount);
        exit;
    }
}
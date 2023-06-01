<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::namespace('App\\Http\\Controllers')->group(function (){

    //DEFAULT DATA INSERT
    Route::get('addDefaultData/{shop}', 'SettingsController@addDefaultData');

    //PLANS API
    Route::get('ifPlanIdExists/{shopDomain}','PlanController@ifPlanIdExists');
    Route::post('downgradePlan/{shopDomain}','PlanController@downgradePlan');

    //LM RFQ PRODUCTS API
    Route::get('getApiKey','PlanController@getApiKey');

    //GET ALL THEMES
    Route::get('/getAllThemes/{store_domain}', 'SettingsController@getAllThemes');

    //INSTALLTION
    Route::post('/installRequestQuote', 'SettingsController@installRequestQuote');

    //LOGIN DASHBOARD
    Route::get('/getLoginDasboard/{store_domain}', 'SettingsController@getLoginDasboard');

    //LM PRODUCTS AFTER LOGIN
    Route::get('/getSelectedProductType/{store_domain}', 'SettingsController@getSelectedProductType');
    Route::get('/getOldSettings', 'TestController@getOldSettings');

    //GET EMAIL SETTINGS
    Route::get('/getEmailSettings/{store_domain}', 'EmailSettingsController@getEmailSettings');
    Route::post('/getEmailPreview/{store_domain}', 'EmailSettingsController@getEmailPreview');
    Route::post('/postEmail/{store_domain}', 'EmailSettingsController@postEmail');

    //QUOTES PRODUCTS API
    Route::post('/getQuoteProductsData/{shop}', 'LMQuotesController@getQuoteProductsData');
    Route::get('/getDataByQuoteId/{shop}/{id}', 'LMQuotesController@getDataByQuoteId');
    Route::post('deleteQuotesAdmin/{shop}', 'LMQuotesController@deleteQuotesAdmin');
    Route::post('convertToOrder/{shop}', 'LMQuotesController@convertToOrder');
    Route::post('unreadStatus/{shop}', 'LMQuotesController@unreadStatus');
    Route::post('getFilterData/{shop}', 'LMQuotesController@getFilterData');
    Route::post('statusFilter/{shop}', 'LMQuotesController@statusFilter');
    Route::post('updateQuotedProductsAdmin/{shop}', 'LMQuotesController@updateQuotedProductsAdmin');
    Route::post('updateTotalQuoteAdmin/{shop}', 'LMQuotesController@updateTotalQuoteAdmin');

    //SAVE PRODUCTS API
    Route::post('/saveProducts', 'LMProductsController@saveProducts');
    Route::get('/getProductsData/{shop}', 'LMProductsController@getProductsData');

    //SAVE GENERAL SETTINGS API
    Route::post('/saveGeneralSettings', 'SettingsController@saveGeneralSettings');
    Route::get('/getGeneralSettings/{shop_domain}', 'SettingsController@getGeneralSettings');

    //SAVE HIDE PRICE SETTINGS API
    Route::post('/saveHidePriceSettings', 'SettingsController@saveHidePriceSettings');
    Route::get('/getHidePriceSettings/{shop_domain}', 'SettingsController@getHidePriceSettings');
    Route::post('/deleteRecurringCharge', 'SettingsController@deleteRecurringCharge');
    Route::post('/updateRecurringCharge', 'SettingsController@updateRecurringCharge');

    //SAVE MAIL NOTIFICATIONS SETTINGS API
    Route::post('/saveMailNotificationsSettings', 'SettingsController@saveMailNotificationsSettings');
    Route::get('/getHidePriceSettings/{shop_domain}', 'SettingsController@getHidePriceSettings');

    //SAVE TRANSLATION SETTINGS API
    Route::post('/saveTranslationSettings', 'TranslationSettingsController@saveTranslationSettings');
    Route::get('/getTranslationSettings/{shop_domain}', 'TranslationSettingsController@getTranslationSettings');

    //SAVE General Email SETTINGS API
    Route::post('/saveGeneralEmailSettings', 'EmailSettingsController@saveGeneralEmailSettings');
    Route::get('/getGeneralEmailSettings/{shop_domain}', 'EmailSettingsController@getGeneralEmailSettings');

    //FRONT APIS
    Route::get('getAllInitialSettings/{shop}','SettingsController@getAllInitialSettings');
    Route::post('getInitData/{shop}/{product_id}','FrontApiController@getInitData');
    Route::get('getButtonSettings/{shop}','FrontApiController@getButtonSettings');
    Route::post('addToQuote','FrontApiController@addToQuote');
    Route::post('addToQuoteCollection','FrontApiController@addToQuoteCollection');
    Route::post('getQuotedProductCount', 'FrontApiController@getQuotedProductCount');
    Route::get('getQuotedProducts/{shop}/{session_id}','FrontApiController@getQuotedProducts');
    Route::post('deleteQuotedProduct','FrontApiController@deleteQuotedProduct');
    Route::post('updateQuantity','FrontApiController@updateQuantity');
    Route::post('storeQuotedProductsAdmin','FrontApiController@storeQuotedProductsAdmin');
    Route::post('getInitDataCollectionPage','FrontApiController@getInitDataCollectionPage');

    //WEBHOOK API
    Route::post('/requestEndpoint', 'CustomerEndpointController@requestEndpoint');
    Route::post('/erasureEndpoint', 'CustomerEndpointController@erasureEndpoint');
    Route::post('/shopErasureEndpoint', 'CustomerEndpointController@shopErasureEndpoint');





});
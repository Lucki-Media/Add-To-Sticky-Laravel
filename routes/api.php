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

    /*ADD TO CART STICKY API START*/
    Route::post('saveAddToStickyCartData', 'AddToCartStickyController@saveAddToStickyCartData');
    Route::get('getAddToStickyCartData/{shop_domain}', 'AddToCartStickyController@getAddToStickyCartData');
    /*ADD TO CART STICKY API END*/

    /*STICKY CART API START*/
    Route::post('saveStickyCartData', 'StickyCartController@saveStickyCartData');
    Route::get('getStickyCartData/{shop_domain}', 'StickyCartController@getStickyCartData');
    /*STICKY CART API END*/

    //WEBHOOK API
    Route::post('/requestEndpoint', 'CustomerEndpointController@requestEndpoint');
    Route::post('/erasureEndpoint', 'CustomerEndpointController@erasureEndpoint');
    Route::post('/shopErasureEndpoint', 'CustomerEndpointController@shopErasureEndpoint');
});
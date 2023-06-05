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
    Route::post('saveAddToStickyCartData', 'AddToCartStickyController@saveAddToStickyCartData');
    Route::get('getAddToStickyCartData/{shop_domain}', 'AddToCartStickyController@getAddToStickyCartData');

    //WEBHOOK API
    Route::post('/requestEndpoint', 'CustomerEndpointController@requestEndpoint');
    Route::post('/erasureEndpoint', 'CustomerEndpointController@erasureEndpoint');
    Route::post('/shopErasureEndpoint', 'CustomerEndpointController@shopErasureEndpoint');
});
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Shopify Laravel Example</title>
        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body>
        <div id="app"></div>
        <input type="hidden" id="apiKey" value="a7dd85323742d09ea6b32fa2d365e302">
        <input type="hidden" id="shopOrigin" value="<?php  echo $_GET['shop']; ?>">
        {{-- <input type="hidden" id="shopOrigin" value="{{ $shopDomain ?? Auth::user()->name }}"> --}}
    </body>
</html>

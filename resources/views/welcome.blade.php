<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LM Add To Cart Sticky</title>
    @viteReactRefresh
    @vite('resources/js/app.js')
</head>

<body>
    <div id="app"></div>
    <input type="hidden" id="apiKey" value={{ env('VITE_SHOPIFY_API_KEY') }}>
    <input type="hidden" id="shopOrigin" value="<?php echo $_GET['shop']; ?>">
    {{-- <input type="hidden" id="shopOrigin" value="{{ $shopDomain ?? Auth::user()->name }}"> --}}
    <!--Start of Tawk.to Script-->
    {{-- <script type="text/javascript">
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/64b50f1c94cf5d49dc640de0/1h5hk62p5';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
    </script> --}}
    <!--End of Tawk.to Script-->
</body>

</html>

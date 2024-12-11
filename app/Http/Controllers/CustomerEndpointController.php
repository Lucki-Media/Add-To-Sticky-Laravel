<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;

class CustomerEndpointController extends Controller
{
    function verify_webhook($data, $hmac_header)
    {
        $calculated_hmac = base64_encode(hash_hmac('sha256', $data, env('SHOPIFY_API_SECRET'), true));
        return hash_equals($hmac_header, $calculated_hmac);
    }

    public function requestEndpoint(Request $request)
    {
            $hmac_header =  $request->header('X-Shopify-Hmac-Sha256');
            $data = file_get_contents('php://input');
            $verified = $this->verify_webhook($data, $hmac_header);
            Log::info('Webhook verified: '.var_export($verified, true)); // Check error.log to see the result
            if ($verified) {
                echo "success";
            } else {
              http_response_code(401);
            }
           exit;
    }

    public function erasureEndpoint(Request $request)
    {
            $hmac_header =  $request->header('X-Shopify-Hmac-Sha256');
            $data = file_get_contents('php://input');
            $verified = $this->verify_webhook($data, $hmac_header);
            Log::info('Webhook verified: '.var_export($verified, true)); // Check error.log to see the result
            if ($verified) {
                echo "success";
            } else {
              http_response_code(401);
            }
           exit;

    }

    public function shopErasureEndpoint(Request $request)
    {
            $hmac_header = $request->header('X-Shopify-Hmac-Sha256');
            $data = file_get_contents('php://input');
            $verified = $this->verify_webhook($data, $hmac_header);
            Log::info('Webhook verified: '.var_export($verified, true)); // Check error.log to see the result
            if ($verified) {
                echo "success";
            } else {
              http_response_code(401);
            }
           exit;
    }
}
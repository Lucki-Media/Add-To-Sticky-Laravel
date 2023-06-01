<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Models\Charges;
use App\Webhook;
use Mail;

class ShopUpdateJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($shopDomain){
        $path = public_path();
        $this->shopDomain = $shopDomain;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(){
        $path = public_path();
        $api_key = env('SHOPIFY_API_KEY');
        $get_resonse = file_get_contents('php://input');
        $result = json_decode($get_resonse, true);
        file_put_contents($path.'/get_resonse.txt',json_encode($get_resonse));
        $user = User::where(['name'=>$result['myshopify_domain']])->first();
        $hostname = $result['myshopify_domain'];
        $apppassword = $user['password'];
        file_put_contents($path.'/shop_data.txt',json_encode($user),FILE_APPEND);
        $plan_name = $result['plan_name'];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_HTTPHEADER,array('Content-Type:application/json'));
        $url = 'https://'.$api_key.':'.$apppassword.'@'.$hostname.'/admin/api/'.env('SHOPIFY_API_VERSION').'/shop.json';
        curl_setopt($ch, CURLOPT_URL,$url);
        $server_output = curl_exec($ch);
        $shop_data = json_decode($server_output,true);
        file_put_contents($path.'/shop_data_shopify.txt',json_encode($shop_data),FILE_APPEND);
        if($shop_data){
            if($plan_name == 'affiliate' || $plan_name == 'partner_test' || $plan_name == 'plus_partner_sandbox' || $plan_name == 'staff' || $plan_name == 'staff_business' ){
                $test = 1;
            }
            else {
                $test = 0;
            }
            file_put_contents($path.'/plan_name.txt',json_encode($plan_name),FILE_APPEND);
            $charge = Charges::where('user_id',$user['id'])->first();
            file_put_contents($path.'/charge.txt',json_encode($charge),FILE_APPEND);
            if($test == 0){
                if($charge){
                    if($charge['test'] == '1'){
                        $ch = curl_init();
                        curl_setopt($ch, CURLOPT_HEADER, false);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                        curl_setopt($ch, CURLOPT_HTTPHEADER,array('Content-Type:application/json'));
                        $url = 'https://'.$api_key.':'.$apppassword.'@'.$hostname.'/admin/api/'.env('SHOPIFY_API_VERSION').'/recurring_application_charges/'.$charge['charge_id'].'.json';
                        curl_setopt($ch, CURLOPT_URL,$url);
                        $server_output = curl_exec($ch);
                        $charge_create = json_decode($server_output,true);
                        file_put_contents($path.'/charge_create.txt',json_encode($charge_create),FILE_APPEND);
                        $charge = Charges::where('user_id',$user['id'])->delete();
                    }
                }

            }
        }else{
            $response = [
                'status' => true,
                'message' => "Shop not available.",
                'data'    => [],
            ];
            return response()->json($response, 200);
        }

    }
}
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Webhook;
use Mail;

class AfterAuthenticateJob implements ShouldQueue{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Shop's myshopify domain
     *
     * @var ShopDomain|string
     */
    public $shopDomain;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($shopDomain){
        $this->shopDomain = $shopDomain['name'];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(){
        $path = public_path();
        $shop = User::where('name', $this->shopDomain)->firstOrFail();
        $shopDecode = json_decode($shop);
        // echo '<pre>';print_r($shopDecode);exit;
        $api_key = env('SHOPIFY_API_KEY');
        $path = public_path();
        $shop_arr = json_decode($shop,true);
        $theme = $shop->api()->rest('GET', '/admin/themes.json')['body'];
        $theme_data = json_encode($theme);
        $theme_array = json_decode($theme_data, true);
        foreach ($theme_array['themes'] as $key => $value) {
            if ($value['role'] == 'main') {
                $current_themeId = $value['id'];
            }
        }
        // sleep(10);

        // // CREATE Snippet File For Selected Products
        // $scriptProdSnippet = public_path() . '/lm_script_files/lm_selected_products_script.liquid';
        // // echo '<pre>';print_r($scriptProdSnippet);exit;
        // $shop->api()->rest('PUT', '/admin/api/'.env('SHOPIFY_API_VERSION').'/themes/'.$current_themeId.'/assets.json', [
        //     'asset' => [
        //         'key'   => 'snippets/lm_selected_products_script.liquid',
        //         'value' => file_get_contents($scriptProdSnippet)
        //     ]
        // ]);

        // // CREATE Snippet File For Selected Products
        // $scriptSettingsSnippet = public_path() . '/lm_script_files/lm_settings_script.liquid';
        // $shop->api()->rest('PUT', '/admin/api/'.env('SHOPIFY_API_VERSION').'/themes/'.$current_themeId.'/assets.json', [
        //     'asset' => [
        //         'key'   => 'snippets/lm_settings_script.liquid',
        //         'value' => file_get_contents($scriptSettingsSnippet)
        //     ]
        // ]);
        // // READ CONTENT OF THEME LIQUID
        // $configure = $shop->api()->rest('GET','/admin/api/'.env('SHOPIFY_API_VERSION').'/themes/'.$current_themeId.'/assets.json', [
        //     'asset' => [
        //         'key'      => 'layout/theme.liquid',
        //         'theme_id' => $current_themeId
        //     ]
        // ]);
        // $configureData = json_encode($configure);
        // $configureArray = json_decode($configureData, true);
        // $themeContent = $configureArray['body']['asset']['value'];

        // $result = str_contains($themeContent, "{% render 'lm_selected_products_script' %}{% render 'lm_settings_script' %}") ? '1' : '0';
        // // echo '<pre>';print_r($result);exit;
        // if($result == '0'){
        //     // INCLUDE CSS & JS IN THEME LIQUID
        //     $head = "{% render 'lm_selected_products_script' %}{% render 'lm_settings_script' %}</head>";
        //     $newContent = str_replace("</head>", $head, $themeContent);

        //     // MODIFY THEME LIQUID FILE
        //     $shop->api()->rest('PUT', '/admin/api/'.env('SHOPIFY_API_VERSION').'/themes/'.$current_themeId.'/assets.json', [
        //         'asset'=> [
        //             'key'   => 'layout/theme.liquid',
        //             'value' => $newContent
        //         ]
        //     ]);
        // }
    }
}
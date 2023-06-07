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
use App\Models\AddToCartStickyData;
use App\Models\StickyCartData;

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
        /*ADD TO CART STICKY TEMPLATE INSERT START*/
        $template_1 = json_encode(require $path.'/template_files/template_1.php');
        $template_2 = json_encode(require $path.'/template_files/template_2.php');
        $template_3 = json_encode(require $path.'/template_files/template_3.php');
        $template_4 = json_encode(require $path.'/template_files/template_4.php');
        $template_5 = json_encode(require $path.'/template_files/template_5.php');
        $template_6 = json_encode(require $path.'/template_files/template_6.php');
        $template_7 = json_encode(require $path.'/template_files/template_7.php');
        $template_8 = json_encode(require $path.'/template_files/template_8.php');
        $final_data = [
            'shop_domain'           => $this->shopDomain,
            'enable'                => '1',
            'defaultTemplate'       => 1,
            'current_template'      => $template_1,
            'template_1'            => $template_1,
            'template_2'            => $template_2,
            'template_3'            => $template_3,
            'template_4'            => $template_4,
            'template_5'            => $template_5,
            'template_6'            => $template_6,
            'template_7'            => $template_7,
            'template_8'            => $template_8,
        ];
        $updateOrInsert = AddToCartStickyData::insert($final_data);
        /*ADD TO CART STICKY TEMPLATE INSERT END*/

        /*STICKY CART TEMPLATE INSERT START*/
        $sticky_template_1 = json_encode(require $path.'/template_files/sticky_template_1.php');
        $sticky_template_2 = json_encode(require $path.'/template_files/sticky_template_2.php');
        $sticky_template_3 = json_encode(require $path.'/template_files/sticky_template_3.php');
        $sticky_template_4 = json_encode(require $path.'/template_files/sticky_template_4.php');
        $sticky_template_5 = json_encode(require $path.'/template_files/sticky_template_5.php');
        $final_data_sticky = [
            'shop_domain'           => $this->shopDomain,
            'enableSticky'          => '1',
            'defaultTemplate'       => 1,
            'current_template'      => $sticky_template_1,
            'sticky_template_1'     => $sticky_template_1,
            'sticky_template_2'     => $sticky_template_2,
            'sticky_template_3'     => $sticky_template_3,
            'sticky_template_4'     => $sticky_template_4,
            'sticky_template_5'     => $sticky_template_5,
        ];
        $updateOrInsert = StickyCartData::insert($final_data_sticky);
        /*STICKY CART TEMPLATE INSERT END*/


        // $theme = $shop->api()->rest('GET', '/admin/themes.json')['body'];
        // $theme_data = json_encode($theme);
        // $theme_array = json_decode($theme_data, true);
        // foreach ($theme_array['themes'] as $key => $value) {
        //     if ($value['role'] == 'main') {
        //         $current_themeId = $value['id'];
        //     }
        // }
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
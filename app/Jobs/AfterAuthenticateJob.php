<?php

namespace App\Jobs;

use App\Models\AddToCartStickyCount;
use App\Models\StickyCartCount;
use Carbon\Carbon;
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
use App\Mail\YourEmailClass;
use MailerLite\MailerLite;

class AfterAuthenticateJob implements ShouldQueue
{
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
    public function __construct($shopDomain)
    {
        $this->shopDomain = $shopDomain['name'];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path();
        $shop = User::where('name', $this->shopDomain)->firstOrFail();
        $shopDecode = json_decode($shop);
        $shopifyData = $shop->api()->rest('GET', '/admin/shop.json')['body'];
        $api_key = env('SHOPIFY_API_KEY');
        $path = public_path();
        $shop_arr = json_decode($shop, true);

        /*MAILER LITE INTEGRATION START*/
        /*CREATING SUBSCRIBER*/

        $data = [
            'email' => $shopifyData['shop']['email'],
            'groups' => [env('MAILER_GROUP_ID')],
            'fields' => (object) [
                "phone" => (string) $shopifyData['shop']['phone'],
            ]
        ];
        $data_string = json_encode($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        $url = 'https://api.mailerlite.com/api/v2/subscribers';
        // echo '<pre>';print_r($url);exit;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'X-MailerLite-ApiKey:' . env('MAILERLITE_API_KEY')]);
        $server_output = curl_exec($ch);
        $response = json_decode($server_output, true);
        file_put_contents($path . '/subscribers.txt', json_encode($response));
        /*CREATING SUBSCRIBER COMPLETE*/
        /*ASSIGNING SUBSCRIBER TO LM-STICKY GROUP*/
        // $mailerLite = new MailerLite(['api_key' => 'key']);

        // $groupId = '108161502776656925';
        // $subscriberId = '456';

        // $response = $mailerLite->groups->assignSubscriber($groupId, $subscriberId);
        /*MAILER LITE INTEGRATION END*/

        /*ADD TO CART STICKY TEMPLATE INSERT START*/
        $template_1 = json_encode(require $path . '/template_files/template_1.php');
        $template_2 = json_encode(require $path . '/template_files/template_2.php');
        $template_3 = json_encode(require $path . '/template_files/template_3.php');
        $template_4 = json_encode(require $path . '/template_files/template_4.php');
        $template_5 = json_encode(require $path . '/template_files/template_5.php');
        $template_6 = json_encode(require $path . '/template_files/template_6.php');
        $template_7 = json_encode(require $path . '/template_files/template_7.php');
        $template_8 = json_encode(require $path . '/template_files/template_8.php');
        $final_data = [
            'shop_domain' => $this->shopDomain,
            'enable' => '0',
            'homePageProduct' => '',
            'animationEnable' => '1',
            'defaultTemplate' => '2',
            'current_template' => $template_2,
            'template_1' => $template_1,
            'template_2' => $template_2,
            'template_3' => $template_3,
            'template_4' => $template_4,
            'template_5' => $template_5,
            'template_6' => $template_6,
            'template_7' => $template_7,
            'template_8' => $template_8,
        ];
        $uniqueKey = ['shop_domain' => $this->shopDomain];

        // Use updateOrInsert to perform the upsert
        AddToCartStickyData::updateOrInsert($uniqueKey, $final_data);
        // $updateOrInsert = AddToCartStickyData::insert($final_data);
        /*ADD TO CART STICKY TEMPLATE INSERT END*/

        /*STICKY CART TEMPLATE INSERT START*/
        $sticky_template_1 = json_encode(require $path . '/template_files/sticky_template_1.php');
        $sticky_template_2 = json_encode(require $path . '/template_files/sticky_template_2.php');
        $sticky_template_3 = json_encode(require $path . '/template_files/sticky_template_3.php');
        $sticky_template_4 = json_encode(require $path . '/template_files/sticky_template_4.php');
        $sticky_template_5 = json_encode(require $path . '/template_files/sticky_template_5.php');
        $drawer_cart_data = json_encode(require $path . '/template_files/drawerCartData.php');
        $final_data_sticky = [
            'shop_domain' => $this->shopDomain,
            'enableSticky' => '0',
            'defaultTemplate' => 1,
            'current_template' => $sticky_template_1,
            'sticky_template_1' => $sticky_template_1,
            'sticky_template_2' => $sticky_template_2,
            'sticky_template_3' => $sticky_template_3,
            'sticky_template_4' => $sticky_template_4,
            'sticky_template_5' => $sticky_template_5,
            'drawer_cart_data' => $drawer_cart_data,
        ];
        // Specify the unique key and values to check for existing records
        $uniqueKey = ['shop_domain' => $this->shopDomain];

        // Use updateOrInsert to perform the upsert
        StickyCartData::updateOrInsert($uniqueKey, $final_data_sticky);
        // $updateOrInsert = StickyCartData::insert($final_data_sticky);
        /*STICKY CART TEMPLATE INSERT END*/

        /*INSERT INITIAL DATA IN add_to_cart_sticky_counts TABLE END*/
        $setAddToCartStickyCount = new AddToCartStickyCount();
        $setAddToCartStickyCount->shop_domain = $this->shopDomain;
        $setAddToCartStickyCount->year = Carbon::now()->year;
        $setAddToCartStickyCount->Jan = '0';
        $setAddToCartStickyCount->Feb = '0';
        $setAddToCartStickyCount->Mar = '0';
        $setAddToCartStickyCount->Apr = '0';
        $setAddToCartStickyCount->May = '0';
        $setAddToCartStickyCount->Jun = '0';
        $setAddToCartStickyCount->Jul = '0';
        $setAddToCartStickyCount->Aug = '0';
        $setAddToCartStickyCount->Sep = '0';
        $setAddToCartStickyCount->Oct = '0';
        $setAddToCartStickyCount->Nov = '0';
        $setAddToCartStickyCount->Dec = '0';
        $setAddToCartStickyCount->total = '0';
        $setAddToCartStickyCount->created_at = Carbon::now();
        $setAddToCartStickyCount->updated_at = Carbon::now();
        $setAddToCartStickyCount->save();
        /*INSERT INITIAL DATA IN add_to_cart_sticky_counts TABLE END*/

        /*INSERT INITIAL DATA IN sticky_cart_counts TABLE END*/
        $setStickyCartCount = new StickyCartCount();
        $setStickyCartCount->shop_domain = $this->shopDomain;
        $setStickyCartCount->year = Carbon::now()->year;
        $setStickyCartCount->Jan = '0';
        $setStickyCartCount->Feb = '0';
        $setStickyCartCount->Mar = '0';
        $setStickyCartCount->Apr = '0';
        $setStickyCartCount->May = '0';
        $setStickyCartCount->Jun = '0';
        $setStickyCartCount->Jul = '0';
        $setStickyCartCount->Aug = '0';
        $setStickyCartCount->Sep = '0';
        $setStickyCartCount->Oct = '0';
        $setStickyCartCount->Nov = '0';
        $setStickyCartCount->Dec = '0';
        $setStickyCartCount->total = '0';
        $setStickyCartCount->created_at = Carbon::now();
        $setStickyCartCount->updated_at = Carbon::now();
        $setStickyCartCount->save();
        /*INSERT INITIAL DATA IN sticky_cart_counts TABLE END*/

        //ADDING WEBHOOK START
        $shop = User::where('name', $this->shopDomain)->firstOrFail();
        $data['webhook'] = [
            'topic' => 'app/uninstalled',
            'address' => env('APP_URL') . '/api/appUninstallJob',
            'format' => 'json',
        ];
        $data_string = json_encode($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        $url = 'https://' . $api_key . ':' . $shop->password . '@' . $shop->name . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/webhooks.json';
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
        $output = curl_exec($ch);
        //ADDING WEBHOOK END

        /*CREATING CONTACT IN BREVO START*/
        $data = [
            "attributes" => [
                "FNAME" => $shopifyData['shop']['shop_owner'],
                "CONTACT" => $shopifyData['shop']['phone'] ?? null
            ],
            "email" => $shopifyData['shop']['email'],
            "email_id" => $shopifyData['shop']['email'],
            "updateEnabled" => true,
            "listIds" => [
                10
            ]
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.brevo.com/v3/contacts");
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json',
            'Content-Type: application/json',
            'api-key: ' . env('BREVO_API_KEY')
        ]);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output1 = curl_exec($ch);
        curl_close($ch);
        /*CREATING CONTACT IN BREVO END*/

        // SENDING MAIL TO AUTHORIZED PERSONS START
        $data1 = [
            "to" => [
                // [
                //     "email" => $shopifyData['shop']['email'],
                // ],
                [
                    "email" => 'vidhee.luckimedia@gmail.com', // For testing purpose only
                ],
            ],
            "templateId" => 5,
            "params" => [
                "name" => $shopifyData['shop']['shop_owner'],
            ],
        ];

        $ch1 = curl_init();
        curl_setopt($ch1, CURLOPT_URL, "https://api.brevo.com/v3/smtp/email");
        curl_setopt($ch1, CURLOPT_HTTPHEADER, [
            'Accept: application/json',
            'Content-Type: application/json',
            'api-key: ' . env('BREVO_API_KEY')
        ]);
        curl_setopt($ch1, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch1, CURLOPT_POSTFIELDS, json_encode($data1));
        curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
        $server_output1 = curl_exec($ch1);
        curl_close($ch1);
        // SENDING MAIL TO AUTHORIZED PERSONS END
    }
}

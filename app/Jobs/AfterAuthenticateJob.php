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
        // file_put_contents($path . '/shopifyData.txt', json_encode($mailerAPIKey));
        // echo '<pre>';print_r($shopDecode);exit;
        $api_key = env('SHOPIFY_API_KEY');
        $path = public_path();
        $shop_arr = json_decode($shop, true);

        /*MAILER LITE INTEGRATION START*/
        /*CREATING SUBSCRIBER*/

        $data = [
            'email' => $shopifyData['shop']['email'],
            'groups' => [env('MAILER_GROUP_ID')],
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
            'enable' => '1',
            'animationEnable' => '1',
            'defaultTemplate' => 1,
            'current_template' => $template_1,
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
        $final_data_sticky = [
            'shop_domain' => $this->shopDomain,
            'enableSticky' => '1',
            'defaultTemplate' => 1,
            'current_template' => $sticky_template_1,
            'sticky_template_1' => $sticky_template_1,
            'sticky_template_2' => $sticky_template_2,
            'sticky_template_3' => $sticky_template_3,
            'sticky_template_4' => $sticky_template_4,
            'sticky_template_5' => $sticky_template_5,
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
        // SENDING MAIL TO AUTHORIZED PERSONS
        // $recipients = ['somin.parate@gmail.com', 'info.lmrequest@gmail.com', 'bhumil.luckimedia@gmail.com', 'vidhee.luckimedia@gmail.com'];

        // $mailData = [
        //     'subject' => 'LM Add To Cart Sticky Installed in New Store',
        //     'shop_name' => $shop['name'],
        //     'shop_email' => $shop['email'],
        //     'view' => 'mailTemplate',
        //     'mail' => 'app_install',
        // ];

        // Mail::to($recipients)->send(new YourEmailClass($mailData));
    }
}

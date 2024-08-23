<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopifyAPI extends Model
{
    use HasFactory;

    static public function getAllProducts($shopDomain)
    {
        // get required details
        $apiKey = config('shopify-app.api_key');
        $user = User::where(['name' => $shopDomain])->first();

        // get all products
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
        $url = 'https://' . $apiKey . ':' . $user['password'] . '@' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/products.json?fields=id%2Cimage%2Ctitle%2Chandle';
        curl_setopt($ch, CURLOPT_URL, $url);
        $server_output = curl_exec($ch);
        $product_data = json_decode($server_output, true);

        return $product_data;
    }

    static public function getAllCollections($shopDomain)
    {
        // get required details
        $user = User::where(['name' => $shopDomain])->first();

        // get all collections
        $url = 'https://' . $shopDomain . '/admin/api/' . env('SHOPIFY_API_VERSION') . '/graphql.json';
        $qry = '{
                    collections(first: 100) {
                    edges {
                        node {
                            id
                            handle
                            title
                            image {
                                originalSrc
                            }
                        }
                    }
                }
                }';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $qry);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            array(
                'Content-Type: application/graphql',
                'X-Shopify-Access-Token:' . $user['password']
            )
        );
        $server_output = curl_exec($ch);
        $collection_data = json_decode($server_output, true);

        $edges = (isset($collection_data['data']['collections']['edges'])) ? $collection_data['data']['collections']['edges'] : [];

        $collections_array = [];
        foreach ($edges as $value) {
            $collections_array[] = [
                'id' => $value['node']['id'],
                'handle' => $value['node']['handle'],
                'title' => $value['node']['title'],
                'image' => $value['node']['image']['originalSrc'] ?? "",
            ];
        }
        return $collections_array;
    }
}

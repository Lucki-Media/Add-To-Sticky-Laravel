<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddToCartStickyData extends Model
{
    use HasFactory;
    protected $table = 'add_to_cart_sticky_data';
    protected $fillable = [
        'shop_domain',
        'add_to_cart_sticky',
        'default_template',
        'current_template',
        'template_1',
        'template_2',
        'template_3',
        'template_4',
        'template_5',
        'template_6',
        'template_7',
        'template_8'
    ];
}
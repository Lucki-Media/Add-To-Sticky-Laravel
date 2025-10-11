<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StickyCartData extends Model
{
    use HasFactory;
    protected $table = 'sticky_cart_data';
    protected $fillable = [
        'shop_domain',
        'enableSticky',
        'defaultTemplate',
        'current_template',
        'sticky_template_1',
        'sticky_template_2',
        'sticky_template_3',
        'sticky_template_4',
        'sticky_template_5'
    ];
}
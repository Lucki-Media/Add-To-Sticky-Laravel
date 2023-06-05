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
        'enable_sticky',
        'default_template',
        'action_value',
        'main_size',
        'bg_color',
        'bg_hover_color',
        'border_size',
        'border_color',
        'border_hover_color',
        'pos_top',
        'pos_bottom',
        'pos_left',
        'pos_right',
        'icon_size',
        'icon_color',
        'icon_hover_color',
        'enable_count',
        'count_num',
        'count_size',
        'count_font_size',
        'count_color',
        'count_hover_color',
        'countBG_color',
        'countBG_hover_color'
    ];
}
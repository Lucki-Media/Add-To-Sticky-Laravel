<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddToCartStickyCount extends Model
{
    use HasFactory;
    protected $table = 'add_to_cart_sticky_counts';
    protected $fillable = [
        'shop_domain',
        'year',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'total'
    ];
}
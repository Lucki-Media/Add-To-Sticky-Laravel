<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StickyCartCount extends Model
{
    use HasFactory;
    protected $table = 'sticky_cart_counts';
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
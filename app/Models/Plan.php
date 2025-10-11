<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $table = 'plans';

    protected $fillable = [
        'type',
        'name',
        'price',
        'interval',
        'capped_amount',
        'terms',
        'trial_days',
        'test',
        'on_install',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];
}

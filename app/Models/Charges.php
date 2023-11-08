<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Charges extends Model
{
    protected $table = 'charges';

    protected $fillable = [
        'charge_id',
        'test',
        'status',
        'name',
        'terms',
        'type',
        'price',
        'interval',
        'capped_amount',
        'billing_on',
        'trial_days',
        'activated_on',
        'trial_ends_on',
        'cancelled_on',
        'expires_on',
        'plan_id',
        'description',
        'reference_charge',
        'user_id',
    ];

    protected $hidden = [
        'created_at', 'updated_at','deleted_at',
    ];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sticky_cart_counts', function (Blueprint $table) {
            $table->id();
            $table->string('shop_domain', 50)->nullable();
            $table->string('year', 50)->nullable();
            $table->string('Jan', 50)->nullable();
            $table->string('Feb', 50)->nullable();
            $table->string('Mar', 50)->nullable();
            $table->string('Apr', 50)->nullable();
            $table->string('May', 50)->nullable();
            $table->string('Jun', 50)->nullable();
            $table->string('Jul', 50)->nullable();
            $table->string('Aug', 50)->nullable();
            $table->string('Sep', 50)->nullable();
            $table->string('Oct', 50)->nullable();
            $table->string('Nov', 50)->nullable();
            $table->string('Dec', 50)->nullable();
            $table->string('total', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sticky_cart_counts');
    }
};
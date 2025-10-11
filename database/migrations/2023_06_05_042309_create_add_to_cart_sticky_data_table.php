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
        Schema::create('add_to_cart_sticky_data', function (Blueprint $table) {
            $table->id();
            $table->string('shop_domain', 50)->nullable();
            $table->string('add_to_cart_sticky', 50)->nullable();
            $table->string('default_template', 50)->nullable();
            $table->longText('current_template')->nullable();
            $table->longText('template_1')->nullable();
            $table->longText('template_2')->nullable();
            $table->longText('template_3')->nullable();
            $table->longText('template_4')->nullable();
            $table->longText('template_5')->nullable();
            $table->longText('template_6')->nullable();
            $table->longText('template_7')->nullable();
            $table->longText('template_8')->nullable();
            $table->string('review_banner', 11)->nullable()->default('1')->comment('1=Ask after a month, 2=never ask');
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
        Schema::dropIfExists('add_to_cart_sticky_data');
    }
};
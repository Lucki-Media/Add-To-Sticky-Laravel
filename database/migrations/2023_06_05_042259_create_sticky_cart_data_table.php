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
        Schema::create('sticky_cart_data', function (Blueprint $table) {
            $table->id();
            $table->string('shop_domain', 50)->nullable();
            $table->string('enable_sticky', 50)->nullable();
            $table->string('default_template', 50)->nullable();
            $table->string('action_value', 50)->nullable();
            $table->string('main_size', 50)->nullable();
            $table->string('bg_color', 100)->nullable();
            $table->string('bg_hover_color', 100)->nullable();
            $table->string('border_size', 100)->nullable();
            $table->string('border_color', 100)->nullable();
            $table->string('border_hover_color', 100)->nullable();
            $table->string('pos_top', 100)->nullable();
            $table->string('pos_bottom', 100)->nullable();
            $table->string('pos_left', 100)->nullable();
            $table->string('pos_right', 100)->nullable();
            $table->string('icon_size', 100)->nullable();
            $table->string('icon_color', 100)->nullable();
            $table->string('icon_hover_color', 100)->nullable();
            $table->string('enable_count', 100)->nullable();
            $table->string('count_num', 100)->nullable();
            $table->string('count_size', 100)->nullable();
            $table->string('count_font_size', 100)->nullable();
            $table->string('count_color', 100)->nullable();
            $table->string('count_hover_color', 100)->nullable();
            $table->string('countBG_color', 100)->nullable();
            $table->string('countBG_hover_color', 100)->nullable();
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
        Schema::dropIfExists('sticky_cart_data');
    }
};
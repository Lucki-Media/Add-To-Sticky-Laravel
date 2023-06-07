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
            $table->string('enableSticky', 50)->nullable();
            $table->string('defaultTemplate', 50)->nullable();
            $table->longText('sticky_template_1')->nullable();
            $table->longText('sticky_template_2')->nullable();
            $table->longText('sticky_template_3')->nullable();
            $table->longText('sticky_template_4')->nullable();
            $table->longText('sticky_template_5')->nullable();
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
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
        Schema::create('method_reading', function (Blueprint $table) {
            $table->id();
            $table->foreignId('method_id')->references('id')->on('methods')->cascadeOnDelete();
            $table->foreignId('reading_id')->references('id')->on('readings')->cascadeOnDelete();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
};

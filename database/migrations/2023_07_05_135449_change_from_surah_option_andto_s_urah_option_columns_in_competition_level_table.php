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
        Schema::table('competition_level', function (Blueprint $table) {
            $table->string('fromSurahOption')->nullable()->change();
            $table->string('toSurahOption')->nullable()->change();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('competition_level', function (Blueprint $table) {
            $table->integer('fromSurahOption')->nullable()->change();
            $table->integer('toSurahOption')->nullable()->change();
        });
    }
};

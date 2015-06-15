<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'domains',
            function (Blueprint $table) {
                $table->increments('id');
                $table->integer('category_id')->unsigned()->nullable();
                $table->string('title');
                $table->string('url');
                $table->text('notes')->nullable();
                $table->timestamp('expiration')->nullable();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('domains');
    }
}

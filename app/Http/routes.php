<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Default pages
$app->get('/', ['as' => 'pdp.home', 'uses' => 'App\Http\Controllers\DomainController@home']);
$app->get('settings', ['as' => 'pdp.settings', 'uses' => 'App\Http\Controllers\SettingsController@home']);
$app->get('categories', ['as' => 'pdp.categories', 'uses' => 'App\Http\Controllers\CategoryController@home']);

// Domain
$app->get('domain/{id}', ['as' => 'domains.show', 'uses' => 'App\Http\Controllers\DomainController@show']);

$app->post('domain', ['as' => 'domains.index', 'uses' => 'App\Http\Controllers\DomainController@getAll']);
$app->post('domain/add', ['as' => 'domains.store', 'uses' => 'App\Http\Controllers\DomainController@store']);
$app->post('domain/delete/{id}', ['as' => 'domains.destroy', 'uses' => 'App\Http\Controllers\DomainController@destroy']);
$app->post('domain/edit/{id}', ['as' => 'domains.update', 'uses' => 'App\Http\Controllers\DomainController@edit']);

$app->post('domain/getStatus', ['as' => 'domains.getStatus', 'uses' => 'App\Http\Controllers\DomainController@getDomainStatus']);
$app->post('domain/getInfo', ['as' => 'domains.getInfo', 'uses' => 'App\Http\Controllers\DomainController@getDomainInfo']);

$app->post('domain/editNotes', ['as' => 'domains.editNotes', 'uses' => 'App\Http\Controllers\DomainController@editNotes']);
$app->post('domain/editExpiration', ['as' => 'domains.editExpiration', 'uses' => 'App\Http\Controllers\DomainController@editExpiration']);

// Category
$app->post('category', ['as' => 'categories.index', 'uses' => 'App\Http\Controllers\CategoryController@getAll']);
$app->post('category/add', ['as' => 'categories.store', 'uses' => 'App\Http\Controllers\CategoryController@store']);
$app->post('category/delete/{id}', ['as' => 'categories.destroy', 'uses' => 'App\Http\Controllers\CategoryController@destroy']);

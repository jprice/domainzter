<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    /**
     * Settings view
     * @return \Illuminate\View\View
     */
    public function home()
    {
        return view('partials.settings');
    }
}

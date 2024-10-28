<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::middleware('api')->group(function () {
    Route::get('/weather/current', [WeatherController::class, 'getCurrentWeather']);
    Route::get('/weather/forecast', [WeatherController::class, 'getWeatherForecast']);
});

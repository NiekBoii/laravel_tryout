<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(UserController::class)->middleware("auth:web")->group(function () {
    Route::get("/users", "index")->name("users");
});

Route::get('/', function (Request $request) {
    return Inertia::render('Home');
})->name("home");

Route::controller(LoginController::class)->group(function () {
    Route::post("/login", "login")->name("login");
    Route::post("/logout", "logout")->name("logout");
});

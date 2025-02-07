<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::apiResource("users", UserController::class)->middleware("auth:sanctum")->names(
    [
        "index" => "api.users.index",
        "store" => "api.users.store",
        "show" => "api.users.show",
        "update" => "api.users.update",
        "destroy" => "api.users.destroy",
    ]
);

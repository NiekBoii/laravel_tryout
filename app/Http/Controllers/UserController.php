<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{

    public function index(Request $request)
    {
        if ($request->user()->cannot("viewAny", User::class)) {
            return redirect(route("home"));
        }
        return Inertia::render("Users", ["users" => User::all()]);
    }
}

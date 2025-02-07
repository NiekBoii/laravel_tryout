<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        if (Auth::attempt($request->safe()->only(['email', 'password']), true)) {
            $request->session()->regenerate();
            return redirect(route("home"));
        }
        return response()->json(['mail' => 'No valid mail and password combination found.'], 401);
    }

    public function logout(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(["message" => "User is not authenticated."], 400);
        }
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect(route('home'));
    }
}

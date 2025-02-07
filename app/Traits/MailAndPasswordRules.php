<?php

namespace App\Traits;


use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

trait MailAndPasswordRules
{
    public static function getMailAndPasswordRules(): array
    {
        return [
            "email" => ["required", Rule::email()],
            "password" => Password::min(8)->rules(["min:5", "max:200"])
        ];
    }
}

<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->is('api/*')) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Alloww-Method: GET, POST');
            header('Access-Control-Allow-Headers: content-type');
        }
        return $next($request);
    }
}

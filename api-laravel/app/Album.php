<?php

namespace App;



use Illuminate\Database\Eloquent\Model;
use App\Photo;

class Album extends Model
{
    protected $fillable = ['name'];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }
}

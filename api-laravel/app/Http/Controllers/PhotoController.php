<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Album;
use App\Photo;
use App\Http\Resources\PhotoResource;
class PhotoController extends Controller
{
    public function index(Album $album)
    {
        return PhotoResource::collection($album->photos);
    }
    
    public function store(Request $request, Album $album)
    {
        $request
                ->file('file_name')
                ->store("$album->id");
        
        $filename = $request
                ->file('file_name')
                ->hashName();

        $photo = Photo::create([
            'name' => $request->name,
            'album_id' => $album->id,
            'file_name' => $filename
        ]);

        return new PhotoResource($photo);
    }    

    
    public function update($id, Request $request)
    {
        return false;
    }
    
    public function destroy(Request $request)
    {
        return false;
    }
    
    public function photoUrl($photoName)
    {
        $photos = Photo::whereFileName($photoName)->get();
        if (!$photos->count()) {
            abort(404);
        }

        
        $photo      = $photos->first();
        $photoPath  =  storage_path("app/{$photo->album_id}/$photo->file_name");

        return response()->download($photoPath);
    }

}

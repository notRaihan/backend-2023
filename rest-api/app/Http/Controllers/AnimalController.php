<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    private $animals = ["Kucing", "Ayam", "Ikan", "Kambing", "Sapi"];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        foreach ($this->animals as $id => $animal) {
            echo "ID: {$id} - {$animal} <br>";
        }
    }

    /**
     * store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        array_push($this->animals, $request->name);
        
        $this->index(); // show all animals
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,string $id)
    {
        if (!isset($this->animals[$id])) {
            echo "ID {$id} not found";
            return;
        }

        $this->animals[$id] = $request->name;
        echo "Success Updating {$request->name} on id {$id}". "<br>";

        $this->index(); // show all animals
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (!isset($this->animals[$id])) {
            echo "ID {$id} not found";
            return;
        }

        unset($this->animals[$id]);

        $this->index(); // show all animals
    }
    
}

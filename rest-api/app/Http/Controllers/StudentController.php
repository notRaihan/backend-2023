<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index() {
        $students = (new Student())->getStudents();

        $data = [
            'message' => 'List All Students',
            'data' => $students
        ];

        return response()->json($data,200);
    }

    public function store(Request $request) {

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student Created',
            'data' => $student
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, string $id) {

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::find($id);
        $student->update($input);

        $data = [
            'message' => 'Student Updated',
            'data' => $student
        ];

        return response()->json($data, 200);

    }

    public function destroy(string $id) {

        $student = Student::find($id);
        $student->delete();

        $data = [
            'message' => 'ID: '. $id . ' Student Success Deleted',
        ];

        return response()->json($data, 200);

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index()
    {
        $statusCode = 200;
        $students = Student::all();

        if ($students->isEmpty()) {
            $data = [
                'message' => 'Student Not Found',
                'data' => null
            ];

            $statusCode = 404;
        } else {
            $data = [
                'message' => 'Student Found',
                'data' => $students
            ];

            $statusCode = 200;
        }


        return response()->json($data, $statusCode);
    }

    public function show(string $id)
    {
        $statusCode = 200;
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Student Found',
                'data' => $student
            ];
        } else {
            $data = [
                'message' => 'Student Not Found',
                'data' => null
            ];

            $statusCode = 404;
        }

        return response()->json($data, $statusCode);
    }

    public function store(Request $request)
    {
        $statusCode = 201;

        $messages = [
            'nama.required' => 'Nama harus diisi',
            'nim.required' => 'NIM harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email tidak valid',
            'jurusan.required' => 'Jurusan harus diisi'
        ];

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'nim' => 'required',
            'email' => 'required|email',
            'jurusan' => 'required'
        ], $messages);
    
        if ($validator->fails()) {
            $data = [
                'message' => 'Validation Error',
                'data' => $validator->errors()
            ];

            $statusCode = 400;
        } else {
            $student = Student::create($validator->validate());
            $data = [
                'message' => 'Student Created',
                'data' => $student
            ];
        }

        return response()->json($data, $statusCode);
    }

    public function update(Request $request, string $id)
    {
        $statusCode = 200;
        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama, // Jika request->nama tidak ada, maka ambil data dari $student->nama
                'nim' => $request->nim ?? $student->nim, // Jika request->nim tidak ada, maka ambil data dari $student->nim
                'email' => $request->email ?? $student->email, // Jika request->email tidak ada, maka ambil data dari $student->email
                'jurusan' => $request->jurusan ?? $student->jurusan // Jika request->jurusan tidak ada, maka ambil data dari $student->jurusan
            ];

            $student->update($input);

            $data = [
                'message' => 'Student Updated',
                'data' => $student
            ];
        } else {
            $data = [
                'message' => 'Student Not Found',
                'data' => null
            ];

            $statusCode = 404;
        }
        return response()->json($data, $statusCode);
    }

    public function destroy(string $id)
    {
        $statusCode = 200;
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'ID: ' . $id . ' Student Success Deleted',
            ];
        } else {
            $data = [
                'message' => 'Student Not Found',
            ];

            $statusCode = 404;
        }


        return response()->json($data, $statusCode);
    }
}

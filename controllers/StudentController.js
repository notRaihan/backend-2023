class StudentController {
    index(req, res) {
        const data = {
            status: "success",
            code: 200,
            message: "Menampilkan data student",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        const { name } = req.body;
        const data = {
            status: "success",
            code: 200,
            message: `Menambahkan data student ${name}`,
            data: [],
        };
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const data = {
            status: "success",
            code: 200,
            message: `Mengubah data student id: ${id}, name: ${name}`,
            data: [],
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        const data = {
            status: "success",
            code: 200,
            message: `Menghapus data student id: ${id}`,
            data: [],
        };
        res.json(data);
    }
}

module.exports = new StudentController();

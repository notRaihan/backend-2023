class StudentController {
    index(req, res) {
        res.render("student");
    }

    create(req, res) {
        res.send("Menambahkan data student");
    }

    store(req, res) {
        res.send("Menyimpan data student");
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengubah data student ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send(`Menghapus data student ${id}`);
    }
}

module.exports = new StudentController();

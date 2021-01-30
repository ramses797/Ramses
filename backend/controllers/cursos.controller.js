const CURSOS = require('../models/cursos.dto');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let cursos = await CURSOS.create(req.body);
            res.status(201).send({
                message: 'Cursos insertados correctamente.',
                cursos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar los cursos.',
                e
            });
        }
    },

    async get(req, res) {
        try {
            let cursos = await CURSOS.find({});
            res.status(200).send(cursos);
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger los cursos.',
                e
            });
        }
    },

    async getOneById(req, res) {
        try {
            let cursos = await CURSOS.find(req.body._id);
            res.status(201).send(cursos);
        } catch(e){
            res.status(500).send({
                message: 'Error al recoger los datos de un curso',
                e
            });
        }
    },

    async update(req,res) {
        try {
            let cursos = await CURSOS.findOneAndUpdate(req.body._id, req.body);
            res.satus(200).send({
                message: 'Datos del curso modificados con exito.',
                cursos
            });
        } catch(e) {
            res.satus(500).send({
                message: 'Error al modificar los datos del curso.',
                e
            });
        }
    },

    async delete(req, res) {
        try {
            let cursos = CURSOS.deleteOne(req.body._id);
            res.status(200).send({
                message: 'curso eliminado correctamente.',
                cursos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar los cursos',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;
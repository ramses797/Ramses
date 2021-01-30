const TRABAJOS = require('../models/trabajos.dto');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let trabajos = await TRABAJOS.create(req.body);
            res.status(201).send({
                message: 'Trabajos insertados correctamente.',
                trabajos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar los trabajos.',
                e
            });
        }
    },

    async get(req, res) {
        try {
            let trabajos = await TRABAJOS.find({});
            res.status(200).send(trabajos);
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger los trabajos.',
                e
            });
        }
    },

    async getOneById(req, res) {
        try {
            let trabajos = await TRABAJOS.find(req.body._id);
            res.status(201).send(trabajos);
        } catch(e){
            res.status(500).send({
                message: 'Error al recoger los datos de un trabajo',
                e
            });
        }
    },

    async update(req,res) {
        try {
            let trabajos = await TRABAJOS.findOneAndUpdate(req.body._id, req.body);
            res.satus(200).send({
                message: 'Datos del trabajo modificados con exito.',
                trabajos
            });
        } catch(e) {
            res.satus(500).send({
                message: 'Error al modificar los datos del trabajo.',
                e
            });
        }
    },

    async delete(req, res) {
        try {
            let trabajos = TRABAJOS.deleteOne(req.body._id);
            res.status(200).send({
                message: 'Trabajo eliminado correctamente.',
                trabajos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar el trabajo',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;
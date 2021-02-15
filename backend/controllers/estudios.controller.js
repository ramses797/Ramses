const ESTUDIOS = require('../models/estudios.dto');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let estudios = await ESTUDIOS.create(req.body);
            res.status(201).send({
                message: 'Estudios insertados correctamente.',
                estudios
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar los estudios.',
                e
            });
        }
    },

    async get(req, res) {
        try {
            let estudios = await ESTUDIOS.find({});
            res.status(200).send(estudios);
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger los estudios.',
                e
            });
        }
    },

    async getOneById(req, res) {
        try {
            let estudios = await ESTUDIOS.find(req.body._id);
            res.status(201).send(estudios);
        } catch(e){
            res.status(500).send({
                message: 'Error al recoger los datos de un estudio',
                e
            });
        }
    },

    async update(req,res) {
        try {
            let estudios = await ESTUDIOS.findByIdAndUpdate(req.body._id, req.body);
            res.status(200).send({
                message: 'Datos del estudio modificados con exito.',
                estudios
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al modificar los datos del estudio.',
                e
            });
        }
    },

    async delete(req, res) {
        try {
            let estudios = await ESTUDIOS.findByIdAndDelete(req.params._id);
            res.status(200).send({
                message: 'Estudio eliminado correctamente.',
                estudios
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar el estudio',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;
const CONTACTO = require('../models/contacto.dto');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let contacto = await CONTACTO.create(req.body);
            res.status(201).send({
                message: 'Contacto insertado correctamente.',
                contacto
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar el contacto.',
                e
            });
        }
    },

    async get(req, res) {
        try {
            let contacto = await CONTACTO.find({});
            res.status(200).send(contacto)
        } catch(e) {
            res.status(500).send({
                message: 'Error al leer los contactos.',
                e
            })
        }
    },

    async getOneById(req, res) {
        try {
            let contacto = await CONTACTO.findOne(req.body._id);
            res.status(200).send(contacto);
        } catch(e) {
            res.status(500).send({
                message: 'Error al leer un contacto',
                e
            });
        }
    },

    async update(req,res) {
        try {
            let contacto = await CONTACTO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: 'Contacto actualizado correctamente.',
                contacto
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al actualizar el contacto.',
                e
            })
        }
    },

    async delete(req, res) {
        try {
            let contacto = await CONTACTO.findByIdAndDelete(req.params._id);
            res.status(201).send({
                message: 'Contacto eliminado correctamente.',
                contacto
            })
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar el contacto.',
                e
            })
        }
    }
};

module.exports = CONTROLADOR;
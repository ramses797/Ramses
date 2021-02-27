const CONTACTO = require('../models/contacto.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const contacto = await CONTACTO.create(req.body);
            res.status(201).send({
                //TODO: Quitar los mensajes de todos los controladores.
                message: 'Contacto insertado correctamente.',
                contacto
            });
        } catch(e) {
            res.status(400).send({
                message: 'Error al insertar el contacto.',
                e
            });
        }
    },
    get: async (req, res) => {
        try {
            const contacto = await CONTACTO.find({});
            res.status(200).send(contacto)
        } catch(e) {
            res.status(400).send({
                message: 'Error al leer los contactos.',
                e
            })
        }
    },
    //TODO: Pasar todos los getOneById a por parametros y e codigo de error de 400 a 404.
    getOneById: async (req, res) => {
        try {
            const contacto = await CONTACTO.findOne(req.body._id);
            res.status(200).send(contacto);
        } catch(e) {
            res.status(400).send({
                message: 'Error al leer un contacto',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            await CONTACTO.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al actualizar el contacto.',
                e
            })
        }
    },
    delete: async (req, res) => {
        try {
            await CONTACTO.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al eliminar el contacto.',
                e
            })
        }
    }
};

module.exports = CONTROLADOR;

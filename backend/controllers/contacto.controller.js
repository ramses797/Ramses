const CONTACTO = require('../models/contacto.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const contacto = await CONTACTO.create(req.body);
            res.status(201).send(contacto);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    get: async (req, res) => {
        try {
            const contacto = await CONTACTO.find({});
            res.status(200).send(contacto)
        } catch(e) {
            res.status(400).send(e)
        }
    },
    getOneById: async (req, res) => {
        try {
            const contacto = await CONTACTO.findById(req.params.id);
            res.status(200).send(contacto);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await CONTACTO.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await CONTACTO.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
};

module.exports = CONTROLADOR;

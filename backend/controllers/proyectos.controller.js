const PROYECTOS = require('../models/proyectos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const proyecto = await PROYECTOS.create(req.body);
            res.status(201).send(proyecto);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    get: async (req, res) => {
        try {
            const proyectos = await PROYECTOS.find({});
            res.status(200).send(proyectos);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    getOneById: async (req, res) => {
        try {
            const proyecto = await PROYECTOS.findById(req.params.id);
            res.status(200).send(proyecto);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await PROYECTOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await PROYECTOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
};

module.exports = CONTROLADOR;

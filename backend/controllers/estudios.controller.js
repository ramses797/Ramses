const ESTUDIOS = require('../models/estudios.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const estudio = await ESTUDIOS.create(req.body);
            res.status(201).send(estudio);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    get: async (rq, res) => {
        try {
            const estudios = await ESTUDIOS.find({});
            res.status(200).send(estudios);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    getOneById: async (req, res) => {
        try {
            const estudio = await ESTUDIOS.findById(req.params.id);
            res.status(201).send(estudio);
        } catch(e){
            res.status(404).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await ESTUDIOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await ESTUDIOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
 }

 module.exports = CONTROLADOR;

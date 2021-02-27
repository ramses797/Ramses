const INICIO = require('../models/inicio.dto.js');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const inicio = await INICIO.create(req.body);
            res.status(201).send(inicio);
        } catch(e) {
            res.status(400).send(e);
        } 
    },
    get: async (req, res) => {
        try{
            const inicio = await INICIO.find({});
            res.status(200).send(inicio);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await INICIO.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await INICIO.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
}

module.exports = CONTROLADOR;

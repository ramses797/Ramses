// TODO: ELIMINAR MENSAJES
// TODO: REVISAR CODIGOS DE RESPUESTA
// TODO: GETBYID
const TRABAJOS = require('../models/trabajos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const trabajo = await TRABAJOS.create(req.body);
            res.status(201).send(trabajo);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    get: async (req, res) => {
        try {
            const trabajos = await TRABAJOS.find({});
            res.status(200).send(trabajos);
        } catch(e) {
            res.status(400).send(e);
        }
    },

    getOneById: async (req, res) => {
        try {
            const trabajo = await TRABAJOS.findById(req.params.id);
            res.status(201).send(trabajo);
        } catch(e){
            res.status(400).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await TRABAJOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await TRABAJOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
 }

 module.exports = CONTROLADOR;

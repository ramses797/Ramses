// TODO: GETBYID
const CURSOS = require('../models/cursos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const curso = await CURSOS.create(req.body);
            res.status(201).send(curso);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    get: async (req, res) => {
        try {
            const cursos = await CURSOS.find({});
            res.status(200).send(cursos);
        } catch(e) {
            res.status(400).send(e);
        }
    },
    getOneById: async(req, res) => {
        try {
            const curso = await CURSOS.findById(req.params.id);
            res.status(200).send(curso);
        } catch(e){
            res.status(404).send(e);
        }
    },
    update: async (req, res) => {
        try {
            await CURSOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            await CURSOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send(e);
        }
    }
 }

 module.exports = CONTROLADOR;

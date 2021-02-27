// TODO: ELIMINAR MENSAJES
// TODO: REVISAR CODIGOS DE RESPUESTA
// TODO: GETBYID
const TRABAJOS = require('../models/trabajos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const trabajos = await TRABAJOS.create(req.body);
            res.status(201).send({
                message: 'Trabajos insertados correctamente.',
                trabajos
            });
        } catch(e) {
            res.status(400).send({
                message: 'Error al insertar los trabajos.',
                e
            });
        }
    },
    get: async (req, res) => {
        try {
            const trabajos = await TRABAJOS.find({});
            res.status(200).send(trabajos);
        } catch(e) {
            res.status(400).send({
                message: 'Error al recoger los trabajos.',
                e
            });
        }
    },

    getOneById: async (req, res) => {
        try {
            const trabajos = await TRABAJOS.find(req.body._id);
            res.status(201).send(trabajos);
        } catch(e){
            res.status(400).send({
                message: 'Error al recoger los datos de un trabajo',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            await TRABAJOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al modificar los datos del trabajo.',
                e
            });
        }
    },
    delete: async (req, res) => {
        try {
            await TRABAJOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al eliminar el trabajo',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;

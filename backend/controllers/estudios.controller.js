const ESTUDIOS = require('../models/estudios.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const estudios = await ESTUDIOS.create(req.body);
            res.status(201).send({
                message: 'Estudios insertados correctamente.',
                estudios
            });
        } catch(e) {
            res.status(400).send({
                message: 'Error al insertar los estudios.',
                e
            });
        }
    },
    get: async (rq, res) => {
        try {
            const estudios = await ESTUDIOS.find({});
            res.status(200).send(estudios);
        } catch(e) {
            res.status(400).send({
                message: 'Error al recoger los estudios.',
                e
            });
        }
    },
    getOneById: async (req, res) => {
        try {
            const estudios = await ESTUDIOS.find(req.body._id);
            res.status(201).send(estudios);
        } catch(e){
            res.status(404).send({
                message: 'Error al recoger los datos de un estudio',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            await ESTUDIOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(500).send({
                message: 'Error al modificar los datos del estudio.',
                e
            });
        }
    },
    delete: async (req, res) => {
        try {
            await ESTUDIOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar el estudio',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;
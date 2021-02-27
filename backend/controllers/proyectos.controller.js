// TODO: ELIMINAR MENSAJES
// TODO: REVISAR CODIGOS DE RESPUESTA
// TODO: GETBYID
const PROYECTOS = require('../models/proyectos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const proyectos = await PROYECTOS.create(req.body);
            res.status(201).send({
                message: 'Datos de los proyectos insertados con exito.',
                proyectos
            });
        } catch(e) {
            res.status(400).send({
                message:'Error al insertar los datos de proyectos.',
                e
            });
        }
    },
    get: async (req, res) => {
        try {
            const proyectos = await PROYECTOS.find({});
            res.status(200).send(proyectos);
        } catch(e) {
            res.status(400).send({
                message: 'Error al recoger los datos de los proyectos',
                e
            });
        }
    },
    getOneById: async (req, res) => {
        try {
            const proyectos = await PROYECTOS.findOne(req.body._id);
            res.status(200).send(proyectos);
        } catch(e) {
            res.status(404).send({
                message: 'Error al recoger los datos de un proyecto.',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            await PROYECTOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al medificar los datos de un proyecto.',
                e
            });
        }
    },
    delete: async (req, res) => {
        try {
            await PROYECTOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al eliminar los datos de un proyecto.',
                e
            });
        }
    }
};

module.exports = CONTROLADOR;

const PROYECTOS = require('../models/proyectos.dto');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let proyectos = await PROYECTOS.insert(req.body);
            res.status(201).send({
                message: 'Datos de los proyectos insertados con exito.',
                proyectos
            });
        } catch(e) {
            res.status(500).send({
                message:'Error al insertar los datos de proyectos.',
                e
            });
        }
    },

    async getAll(req, res) {
        try {
            let proyectos = await PROYECTOS.find({});
            res.status(200).send({
                message: 'Datos al recoger los datos de los proyectos.',
                proyectos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger los datos de los proyectos',
                e
            });
        }
    },

    async getOneById(req, res) {
        try {
            let proyectos = await PROYECTOS.findById(req.body._id);
            res.status(200).send({
                message: 'Datos de un proyecto recogidos correctamente.',
                proyectos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger los datos de un proyecto.',
                e
            });
        }
    },

    async updateOneById(req, res) {
        try {
            let proyectos = await PROYECTOS.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: 'Datos de un proyecto modificados correctamente.',
                proyectos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al medificar los datos de un proyecto.',
                e
            });
        }
    },

    async delete(req, res) {
        try {
            let proyectos = await PROYECTOS.delete(req.body._id);
            res.status(201).send({
                message: 'Datos de un proyecto eliminados correctamente.',
                proyectos
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar los datos de un proyecto.',
                proyectos
            });
        }
    }
};

module.export = CONTROLADOR;
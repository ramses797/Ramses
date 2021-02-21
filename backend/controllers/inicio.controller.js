const INICIO = require('../models/inicio.dto.js');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            let inicio = await INICIO.create(req.body);
            res.status(201).send({
                message: 'Datos del inicio insertado correctamente.',
                inicio
            });
        } catch(e) {
            res.status(400).send({
                message: 'Error al insertar datos del inicio.',
                e
            });
        } 
    },
    get: async (req, res) => {
        try{
            let inicio = await INICIO.find({});
            res.status(200).send(inicio);
        } catch(e) {
            res.status(400).send({
                message: 'Error al recoger datos del inicio',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            await INICIO.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al actualizar los datos del inicio.',
                e
            });
        }
    },
    delete: async (req, res) => {
        try {
            await INICIO.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al eliminar los datos del inicio',
                e
            });
        }
    }
}

module.exports = CONTROLADOR;
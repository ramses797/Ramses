const INICIO = require('../models/inicio.dto.js');

const CONTROLADOR = {
    /**
     * Metodo para insertar datos del inicio.
     * @param {*} req 
     * @param {*} res 
     */
    async insert(req, res) {
        try {
            let inicio = await INICIO.create(req.body);
            res.status(201).send({
                message: 'Datos del inicio insertado correctamente.',
                inicio
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar datos del inicio.',
                e
            });
        }         
    },

    /**
     * Metodo para recoger datos del inicio.
     * @param {*} req 
     * @param {*} res 
     */
    async get(req, res) {
        try{
            let inicio = await INICIO.find({});
            res.status(200).send(inicio);
        } catch(e) {
            res.status(500).send({
                message: 'Error al recoger datos del inicio',
                e
            });
        }
    },

    /**
     * Metodo para actualizar datos del inicio.
     * @param {*} req 
     * @param {*} res 
     */
    async update(req, res) {
        try {
            let inicio = await INICIO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: 'Datos del inicio actualizado correctamente.',
                inicio
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al actualizar los datos del inicio.',
                e
            });
        }
    },

    /**
     * Metodo para eliminar los datos del inicio.
     * @param {*} req 
     * @param {*} res 
     */
    async delete(req, res) {
        try {
            let inicio = await INICIO.findOneAndDelete(req.body);
            res.status(201).send({
                message: 'Datos del inicio eliminados correctamente.',
                inicio
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al eliminar los datos del inicio',
                e
            });
        }
    },
}

module.exports = CONTROLADOR;
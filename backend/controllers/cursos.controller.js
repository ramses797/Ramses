// TODO: ELIMINAR MENSAJES
// TODO: REVISAR CODIGOS DE RESPUESTA
// TODO: GETBYID
// TODO: ELIMINAR CONSTANTES SIN UTILIZAR
const CURSOS = require('../models/cursos.dto');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            const cursos = await CURSOS.create(req.body);
            res.status(201).send({
                message: 'Cursos insertados correctamente.',
                cursos
            });
        } catch(e) {
            res.status(400).send({
                message: 'Error al insertar los cursos.',
                e
            });
        }
    },
    get: async (req, res) => {
        try {
            const cursos = await CURSOS.find({});
            res.status(200).send(cursos);
        } catch(e) {
            res.status(400).send({
                message: 'Error al recoger los cursos.',
                e
            });
        }
    },
    getOneById: async(req, res) => {
        try {
            const cursos = await CURSOS.find(req.body._id);
            res.status(201).send(cursos);
        } catch(e){
            res.status(400).send({
                message: 'Error al recoger los datos de un curso',
                e
            });
        }
    },
    update: async (req, res) => {
        try {
            //TODO: eliminar costantes en update y delete.
            const cursos = await CURSOS.findByIdAndUpdate(req.params.id, req.body);
            res.sendStatus(201);
        } catch(e) {
            res.satus(404).send({
                message: 'Error al modificar los datos del curso.',
                e
            });
        }
    },
    delete: async (req, res) => {
        try {
            const cursos = await CURSOS.findByIdAndDelete(req.params.id);
            res.sendStatus(201);
        } catch(e) {
            res.status(404).send({
                message: 'Error al eliminar los cursos',
                e
            });
        }
    }
 }

 module.exports = CONTROLADOR;

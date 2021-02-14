const USUARIOS = require('../models/usuarios.dto');
const BCRYPTJS = require('bcryptjs');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            req.body.contrasenya = await BCRYPTJS.hash(req.body.contrasenya, 10);
            let usuarios = await USUARIOS.create(req.body);
            res.status(201).send({
                message: 'Usuario insertado correctamente.',
                usuarios
            });
        } catch(e) {
            res.status(500).send({
                message: 'Error al insertar el usuario.',
                e
            })
        }
    },

    async login(req, res) {
        try{
        const usuario = await USUARIOS.findOne({correo: req.body.correo});
        const comparacion = await BCRYPTJS.compare(req.body.contrasenya, usuario.contrasenya);
        if(!comparacion || !usuario) {
            res.status(400).send({
                message: 'Los datos introducidos son incorrectos.'
            });
        } else {
            res.status(200).send({
                message: true,
                usuario
            });
        }
        } catch(e) {
            res.status(500).send({
                message: 'Error al intentar loguearse.',
                e
            });
        }
    },
}

module.exports = CONTROLADOR;
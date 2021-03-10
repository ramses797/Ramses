const USUARIOS = require('../models/usuarios.dto');
const BCRYPTJS = require('bcryptjs');

const CONTROLADOR = {
    insert: async (req, res) => {
        try {
            req.body.contrasenya = await BCRYPTJS.hash(req.body.contrasenya, 10);
            const usuario = await USUARIOS.create(req.body);
            res.status(201).send(usuario);
        } catch(e) {
            res.status(400).send(e)
        }
    },
    login: async (req, res) => {
        try{
            const usuario = await USUARIOS.findOne({correo: req.body.correo});
            const passmatch = await BCRYPTJS.compare(req.body.contrasenya, usuario.contrasenya);
            if(!passmatch) res.sendStatus(400);
            res.status(200).send({
                message: true,
                usuario
            });
        } catch(e) {
            res.status(400).send(e);
        }
    }
}

module.exports = CONTROLADOR;

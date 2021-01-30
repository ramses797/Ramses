const CONTACTO = require('../models/contacto.dto');
//const NODEMAILER = require('nodemailer');

const CONTROLADOR = {
    async insert(req, res) {
        try {
            let contacto = await CONTACTO.create(req.body);
            res.status(200).send({
                message: 'correo enviado',
                contacto
            });
        } catch(e) {
            res.status(500).send({
                message: 'error al enviar el correo',
                e
            });
        }
    }
};

module.exports = CONTROLADOR;
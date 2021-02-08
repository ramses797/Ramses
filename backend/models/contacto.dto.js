const MONGOOSE = require('mongoose');

const CONTACTO  = MONGOOSE.Schema(
    {
        nombre: {
            type: String
        },
        empresa: {
            type: String
        },
        correo: {
            type: String
        },
        explicacion: {
            type: String
        },
        terminos: {
            type: Boolean,
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('contacto', CONTACTO);
module.exports = MODEL;
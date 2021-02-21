const MONGOOSE = require('mongoose');

const CONTACTO  = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        empresa: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        explicacion: {
            type: String,
            required: true
        },
        terminos: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('contacto', CONTACTO);
module.exports = MODEL;
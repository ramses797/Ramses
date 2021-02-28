const MONGOOSE = require('mongoose');
const ms = require('ms');

const stringValidator = require('../validators/stringValidator.js');
const correoValidator = require('../validators/correoValidator.js');

const CONTACTO  = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
            required: true,
            validate: stringValidator
        },
        empresa: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true,
            validator: correoValidator
        },
        explicacion: {
            type: String,
            required: true
        },
        terminos: {
            type: Boolean,
            default: false
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: {
                expires: ms('30 days'),
            },
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('contacto', CONTACTO);
module.exports = MODEL;

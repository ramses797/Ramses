const MONGOOSE = require('mongoose');

const USUARIOS = new MONGOOSE.Schema (
    {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            unique: true,
            required: true
        },
        contrasenya: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const MODULE = MONGOOSE.model('usuarios', USUARIOS);
module.exports = MODULE;
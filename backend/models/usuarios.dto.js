const MONGOOSE = require('mongoose');

const USUARIOS = new MONGOOSE.Schema (
    {
        nombre: {
            type: String
        },
        correo: {
            type: String,
            unique: true
        },
        contrasenya: {
            type: String
        }
    },
    {timestamps: true}
);

const MODULE = MONGOOSE.model('usuarios', USUARIOS);
module.exports = MODULE;
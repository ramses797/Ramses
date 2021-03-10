const MONGOOSE = require('mongoose');

const USUARIOS = new MONGOOSE.Schema (
    // TODO: CONFIGURACIÓN PARA RESTRINGIR EL TAMAÑO DE LOS REGISTROS DE LA COLECCIÓN
    // TODO: TOKEN STRING[]
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

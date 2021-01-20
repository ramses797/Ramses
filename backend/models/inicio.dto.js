const MONGOOSE = require('mongoose');

const INICIO = MONGOOSE.Schema (
    {
        titulo: {
            type: String
        },
        subtitulo: {
            type: String
        },
        explicacionPersonal: {
            type: String
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('inicio', INICIO)
module.exports = MODEL;
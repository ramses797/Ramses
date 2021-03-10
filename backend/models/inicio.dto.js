const MONGOOSE = require('mongoose');

const INICIO = new MONGOOSE.Schema (
    {
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: true
        },
        explicacionPersonal: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('inicio', INICIO)
module.exports = MODEL;
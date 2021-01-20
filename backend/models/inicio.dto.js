const MONGOOSE = require('mongoose');

const INICIO = MONGOOSE.Schema (
    {
        tiutlo: {
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
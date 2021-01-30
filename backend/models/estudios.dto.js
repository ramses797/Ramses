const MONGOOSE = require('mongoose');

const ESTUDIOS = MONGOOSE.Schema (
    {
        fechaInicio: {
            type: String
        },
        fechaFin: {
            type: String
        },
        localizacion: {
            type: String
        },
        centro: {
            type: String
        },
        titulo: {
            type: String
        },
        aprendizaje: {
            type: String
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('estudios', ESTUDIOS);
module.exports = MODEL;
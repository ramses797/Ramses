const MONGOOSE = require('mongoose');

const ESTUDIOS = new MONGOOSE.Schema (
    {
        // TODO: VALIDADOR QUE CHEQUEE QUE LA FECHA DE INICIO ES MENOR A LA FECHA FIN
        fechaInicio: {
            type: Date,
            required: true
        },
        fechaFin: {
            type: Date,
            required: true
        },
        localizacion: {
            type: String,
            required: true
        },
        centro: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        aprendizaje: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('estudios', ESTUDIOS);
module.exports = MODEL;

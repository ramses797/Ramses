const MONGOOSE = require('mongoose');

const TRABAJOS = new MONGOOSE.Schema (
    {
        // TODO: VALIDADOR QUE CHEQUE QUE LA FECHA DE INICIO ES MENOR A LA FECHA FIN
        fechaInicio: {
            type: String,
            required: true
        },
        fechaFin: {
            type: String,
            required: true
        },
        localizacion: {
            type: String,
            required: true
        },
        institucion: {
            type: String,
            required: true
        },
        puesto: {
            type: String,
            required: true
        },
        tareas: {
            type: String,
            required: true
        } 
    },
    {timestamps: true}
);

const MODULE = MONGOOSE.model('trabajos', TRABAJOS);
module.exports = MODULE;

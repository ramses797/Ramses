const MONGOOSE = require('mongoose');

const TRABAJOS = MONGOOSE.Schema (
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
        institucion: {
            type: String
        },
        puesto: {
            type: String
        },
        tareas: {
            type: String
        } 
    }
);

const MODULE = MONGOOSE.model('trabajos', TRABAJOS);
module.exports = MODULE;
const MONGOOSE = require('mongoose');

const CURSOS = MONGOOSE.Schema (
    {
        titulo: {
            type: String
        },
        aprendizaje: {
            type: String
        }
    }
);

const MODEL = MONGOOSE.model('cursos', CURSOS);
module.exports = MODEL;
const MONGOOSE = require('mongoose');

const CURSOS = new MONGOOSE.Schema (
    {
        titulo: {
            type: String
        },
        aprendizaje: {
            type: String
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('cursos', CURSOS);
module.exports = MODEL;
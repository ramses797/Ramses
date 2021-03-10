const MONGOOSE = require('mongoose');

const CURSOS = new MONGOOSE.Schema (
    {
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

const MODEL = MONGOOSE.model('cursos', CURSOS);
module.exports = MODEL;
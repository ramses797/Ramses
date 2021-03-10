const MONGOOSE = require('mongoose');

const PROYECTOS = new MONGOOSE.Schema(
    {
        nombreProyecto: {
            type: String,
            required: true
        },
        empresa: {
            type: String,
            required: true
        },
        tecnologias: {
            type: String,
            required: true
        }
        
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('proyectos', PROYECTOS);
module.exports = MODEL;
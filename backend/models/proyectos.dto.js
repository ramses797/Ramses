const MONGOOSE = require('mongoose');

const PROYECTOS = new MONGOOSE.Schema(
    {
        nombreProyecto: {
            type: String
        },
        empresa: {
            type: String
        },
        tecnologias: {
            type: String
        }
        
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('proyectos', PROYECTOS);
module.exports = MODEL;
const MONGOOSE = require('mongoose');

const PROYECTOS = MONGOOSE.Schema(
    {
        nombreProyecto: {
            type: String
        },
        empresa: {
            type: String
        }
        
    },
    {timestamps: true}
)
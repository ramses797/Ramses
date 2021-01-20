const EXPRESS = require('express');
const MORGAN = require('morgan');
const MONGOOSE = require('mongoose');

/**
 * Importamos el archivo .env
 */
require('dotenv').config();

/**
 * Recojemos los datos del archivo .env
 */
const PORT = process.env.PORT;
const URI = process.env.ATLAS_URI;
const MONGO_OK_MSG = process.env.MONGO_CONNECTION_OK_MSG;
const LOCALHOST_URL = process.env.LOCALHOST_URL;
const SO_MSG = process.env.SERVER_ONLINE_MSG;

/**
 * Creamos la conexion a la BD.
 * Indicamos las propiedades que va a tener la BD.
 * Mostramos un mensaje segun si a ido bien la conexion o no.
 */
MONGOOSE.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).then(() => console.log(MONGO_OK_MSG)).catch(console.error);

/**
 * Importamos los cors
 */
const CORS = require('./middlewares/cors.js');

/**
 * Importamos los archivos de rutas
 */
const _INICIO = require('./routes/inicio.router.js');
const _PROYECTOS = require('./routes/proyectos.router.js');

/**
 * Preguntar para que es esto.
 */
const APP = EXPRESS();

/**
 * Sca por consola los datos de la peticion Ej.(Donde se ejecuto, timepo de ejecucion...)
 */
APP.use(MORGAN('combined'));
APP.use(EXPRESS.urlencoded({
    extended: true
}))

APP.use(EXPRESS.json());
APP.use(CORS);

APP.use('/inicio', _INICIO);
APP.use('/proyectos', _PROYECTOS)

APP.listen(PORT, () => {
    console.log(SO_MSG + PORT);
    console.log(LOCALHOST_URL);
});
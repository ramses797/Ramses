const EXPRESS = require('express');
const MORGAN = require('morgan');

/**
 * Importamos el archivo .env
 */
require('dotenv').config();

/**
 * Recojemos los datos del archivo .env
 */
const PORT = process.env.PORT;
const LOCALHOST_URL = process.env.LOCALHOST_URL;
const SO_MSG = process.env.SERVER_ONLINE_MSG;

require('./config/dbConnect');

/**
 * Importamos los cors
 */
const CORS = require('./middlewares/cors');

/**
 * Importamos los archivos de rutas
 */
const _INICIO = require('./routes/inicio.router');
const _PROYECTOS = require('./routes/proyectos.router');
const _ESTUDIOS = require('./routes/estudios.router');
const _TRABAJOS = require('./routes/trabajos.router');
const _CURSOS = require('./routes/cursos.router');
const _CONTACTO = require('./routes/contacto.router');
const _USUARIOS = require('./routes/usuarios.router');

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
APP.use('/proyectos', _PROYECTOS);
APP.use('/estudios', _ESTUDIOS);
APP.use('/trabajos', _TRABAJOS);
APP.use('/cursos', _CURSOS);
APP.use('/contacto', _CONTACTO);
APP.use('/usuarios', _USUARIOS);

APP.listen(PORT, () => {
    console.log(SO_MSG + PORT);
    console.log(LOCALHOST_URL);
});
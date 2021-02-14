const EXPRESS = require('express');

const USUARIOS = require('../controllers/usuarios.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', USUARIOS.insert);
ROUTER.post('/login', USUARIOS.login);

module.exports = ROUTER;
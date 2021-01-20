const EXPRESS = require('express');

const INICIO = require('../controllers/inicio.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', INICIO.insert);
ROUTER.get('/get', INICIO.get);
ROUTER.put('/update', INICIO.update);
ROUTER.delete('/delete', INICIO.delete);

module.exports = ROUTER;
const EXPRESS = require('express');

const INICIO = require('../controllers/inicio.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', INICIO.insert);
ROUTER.get('/get', INICIO.get);
ROUTER.put('/update/:id', INICIO.update);
ROUTER.delete('/delete/:id', INICIO.delete);

module.exports = ROUTER;
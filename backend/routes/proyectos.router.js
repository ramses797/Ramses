const EXPRESS = require('express');

const PROYECTOS = require('../controllers/proyectos.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', PROYECTOS.insert);
ROUTER.get('/get', PROYECTOS.get);
ROUTER.get('/getOneById', PROYECTOS.getOneById);
ROUTER.put('/update', PROYECTOS.update);
ROUTER.delete('/delete/:id', PROYECTOS.delete);

module.exports = ROUTER;
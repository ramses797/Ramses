const EXPRESS = require('express');

const PROYECTOS = require('../controllers/proyectos.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', PROYECTOS.insert);
ROUTER.get('/get', PROYECTOS.getAll);
ROUTER.get('/get/:id', PROYECTOS.getOneById);
ROUTER.update('/update/:id', PROYECTOS.updateOneById);
ROUTER.delete('/delete/:id', PROYECTOS.delete);

module.exports = ROUTER;
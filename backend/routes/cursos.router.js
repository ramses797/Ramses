const EXPRESS = require('express');

const CURSOS = require('../controllers/cursos.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', CURSOS.insert);
ROUTER.get('/get', CURSOS.get);
ROUTER.get('/getOneById', CURSOS.getOneById);
ROUTER.put('/update/:id', CURSOS.update);
ROUTER.delete('/delete/:id', CURSOS.delete);

module.exports = ROUTER;
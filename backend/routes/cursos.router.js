const EXPRESS = require('express');

const CURSOS = require('../controllers/cursos.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', CURSOS.insert);
ROUTER.get('/get', CURSOS.get);
ROUTER.get('/getOneById', CURSOS.getOneById);
ROUTER.put('/update', CURSOS.update);
ROUTER.put('/delete/:_id', CURSOS.delete);

module.exports = ROUTER;
const EXPRESS = require('express');

const TRABAJOS = require('../controllers/trabajos.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', TRABAJOS.insert);
ROUTER.get('/get', TRABAJOS.get);
ROUTER.get('/getOneById', TRABAJOS.getOneById);
ROUTER.put('/update/:id', TRABAJOS.update);
ROUTER.delete('/delete/:id', TRABAJOS.delete);

module.exports = ROUTER;

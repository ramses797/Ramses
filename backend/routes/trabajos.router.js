const EXPRESS = require('express');

const TRABAJOS = require('../controllers/trabajos.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', TRABAJOS.insert);
ROUTER.get('/get', TRABAJOS.get);
ROUTER.get('/getOneById', TRABAJOS.getOneById);
ROUTER.put('/update', TRABAJOS.update);
ROUTER.delete('/delete', TRABAJOS.delete);

module.exports = ROUTER;
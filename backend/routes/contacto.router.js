const EXPRESS = require('express');

const CONTACTO = require('../controllers/contacto.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', CONTACTO.insert);
ROUTER.get('/get', CONTACTO.get);
ROUTER.get('/getOneById', CONTACTO.getOneById);
ROUTER.put('/update', CONTACTO.update);
ROUTER.delete('/delete', CONTACTO.delete);

module.exports = ROUTER;
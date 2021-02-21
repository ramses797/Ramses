const EXPRESS = require('express');

const CONTACTO = require('../controllers/contacto.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', CONTACTO.insert);
ROUTER.get('/get', CONTACTO.get);
ROUTER.get('/getOneById', CONTACTO.getOneById);
ROUTER.put('/update/:id', CONTACTO.update);
ROUTER.delete('/delete/:id', CONTACTO.delete);

module.exports = ROUTER;
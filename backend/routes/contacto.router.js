const EXPRESS = require('express');

const CONTACTO = require('../controllers/contacto.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', CONTACTO.insert);

module.exports = ROUTER;
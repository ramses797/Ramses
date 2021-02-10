const EXPRESS = require('express');

const ESTUDIOS = require('../controllers/estudios.controller');

const ROUTER = EXPRESS.Router();

ROUTER.post('/insert', ESTUDIOS.insert);
ROUTER.get('/get', ESTUDIOS.get);
ROUTER.get('/getOneById', ESTUDIOS.getOneById);
ROUTER.put('/update', ESTUDIOS.update);
ROUTER.delete('/delete/:_id', ESTUDIOS.delete);

module.exports = ROUTER;
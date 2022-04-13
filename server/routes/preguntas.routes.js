const express = require('express');
const router = express.Router();

const preguntaCtrl = require('../controllers/preguntas.controller');

router.get('/getPreguntas', preguntaCtrl.getPreguntas);

router.post('/addPregunta', preguntaCtrl.addPregunta);

router.post('/updatePregunta', preguntaCtrl.updatePregunta);

module.exports = router;
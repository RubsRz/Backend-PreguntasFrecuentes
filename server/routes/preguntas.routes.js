const express = require('express');
const router = express.Router();

const preguntaCtrl = require('../controllers/preguntas.controller');

router.get('/getPreguntas', preguntaCtrl.getPreguntas);

// router.get('/getPregunta/:id',contactCtrl.getPregunta);

router.post('/addPregunta', preguntaCtrl.addPregunta);

router.post('/updatePregunta', preguntaCtrl.updatePregunta);



// router.put('/:id',contactCtrl.editCotact);

// router.delete('/:id',contactCtrl.deleteContact);

module.exports = router;
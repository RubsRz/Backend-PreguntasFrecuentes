const express = require('express');
const router = express.Router();

const preguntaCtrl = require('../controllers/preguntas.controller');

router.get('/getPreguntas', preguntaCtrl.getPreguntas);

router.post('/addPregunta', preguntaCtrl.addPregunta);



// router.get('/:id',contactCtrl.getContact);

// router.put('/:id',contactCtrl.editCotact);

// router.delete('/:id',contactCtrl.deleteContact);

module.exports = router;
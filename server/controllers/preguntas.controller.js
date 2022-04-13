const pregunta = require('../models/preguntas');
const preguntaCtrl = {};


preguntaCtrl.getPreguntas = async (req, res) => {
    const preguntas = await pregunta.find();
    res.json(preguntas);
};

preguntaCtrl.addPregunta = async (req,res) => {
    const newPregunta = new pregunta({
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta,
        edificio: req.body.edificio,
        estado: req.body.estado
    });
    await newPregunta.save();
    res.json({
       'status' : 'Pregunta saved'
    });
};

preguntaCtrl.updatePregunta = async(req, res) => {
    let body = req.body;
    await pregunta.findByIdAndUpdate(body.id, { $set: { estado: body.estado } })
    res.json({ res: "Pregunta Actualizada" });
}

module.exports = preguntaCtrl;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PreguntaSchema = new Schema({
    pregunta: { type: String, required: true },
    respuesta: { type : String, required: true },
    edificio: { type : String, required: true },
    estado: { type : String, required: true },

});

module.exports = mongoose.model('Preguntas', PreguntaSchema, 'preguntas');
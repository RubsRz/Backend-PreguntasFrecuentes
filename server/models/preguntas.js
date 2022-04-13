const mongoose = require('mongoose');
const { Schema } = mongoose;

const PreguntaSchema = new Schema({
    pregunta: { type: String, required: true },
    respuesta: { type : String },
    edificio: { type : String },
    estado: { type : Boolean }
});

module.exports = mongoose.model('Preguntas', PreguntaSchema, 'preguntas');
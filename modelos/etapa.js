const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date
    }
});

module.exports = model('Etapa', EtapaSchema);

const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'Email es requerido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: null 
    }
});

module.exports = model('Cliente', ClienteSchema);


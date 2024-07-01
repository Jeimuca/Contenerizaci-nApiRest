const { Schema, model } = require('mongoose');

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'],
        unique: [true]
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('TipoProyecto', TipoProyectoSchema);

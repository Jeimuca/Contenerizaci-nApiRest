const { Schema, model } = require('mongoose');

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'],
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date
    }
});

module.exports = model('TipoProyecto', TipoProyectoSchema);

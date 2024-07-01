

const { Schema, model } = require('mongoose');

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: null 
    }
});

module.exports = model('TipoProyecto', TipoProyectoSchema);


module.exports = model('TipoProyecto', TipoProyectoSchema);

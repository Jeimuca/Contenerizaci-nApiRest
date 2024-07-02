const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: Number,
        required: [true, 'Número es requerido'],
        unique: [true]
    },
    titulo: {
        type: String,
        required: [true, 'Título es requerido'],
        unique: [true]
    },
    fechaInicio: {
        type: Date,
        required: [true, 'Fecha de inicio es requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'Fecha de entrega es requerida']
    },
    valor: {
        type: Number,
        required: [true, 'Valor es requerido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Cliente es requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: [true, 'Tipo de proyecto es requerido']
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: [true, 'Universidad es requerida']
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: [true, 'Etapa es requerida']
    }
});

module.exports = model('Proyecto', ProyectoSchema);


const {Schema, model} = require ('mongoose')

const GeneroSchema = Schema ({
    nombre: {
        type: String,
        unique:[true, 'Nombre es unico' ],
        required: [true, 'Nombre es requerido' ],
        minLength: 1
    },
    estado:{
        type: Boolean,
        default: true,
        requerid: true
    }, 
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date 
    },
    descripcion:{
        type: String
    },
})


module.exports = model ('Genero', GeneroSchema)
const {Schema, model} = require ('mongoose')

const MediaSchema = Schema({
    serial:{
        type: String,
        required: [true, 'Serial es requerido' ],
        unique: [true, 'Serial ya exixte' ]
    },
    titulo:{
        type: String,
        required: [true, 'titulo es requerido' ]
    },
    sinopsis:{
        type: String   
    },

    url:{
        type: String 
    },

    image:{
        type: String
    },

    fechaCreacion:{
        type: Date
    },
    fechaActualizacion:{
        type: Date 
    },

    fechaEstreno:{
        type: Date 
    },

    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    directores:{
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },

    productora:{
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
},
    tipo:{
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
},
    
})


    module.exports= model ('Media', MediaSchema)
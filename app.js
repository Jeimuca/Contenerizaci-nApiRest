const express = require('express');
const { mongoConection } = require('./DataBases/config');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
mongoConection();

app.use(
    cors({
        origin: '*'
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Importar rutas
const generos = require('./rutas/generoRouter');
const tipos = require('./rutas/tipoRouter');
const medias = require('./rutas/mediaRouter'); 
const directores = require('./rutas/directorRouter');
const productoras = require('./rutas/productoraRouter');

// Usar las rutas
app.use('/api/v1/generos', generos);
app.use('/api/v1/tipos', tipos);
app.use('/api/v1/medias', medias); 
app.use('/api/v1/directores', directores);
app.use('/api/v1/productoras', productoras);

// Ruta para manejar errores 404
app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    });
});

module.exports = app;

 


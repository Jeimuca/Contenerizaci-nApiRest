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
app.use(express.urlencoded({ extended: false }));

// Importar rutas
const etapas = require('./rutas/etapaRouter');
const universidades = require('./rutas/universidadRouter');
 
const clientes = require('./rutas/clienteRouter');
const tiposProyecto = require('./rutas/tipoProyectoRouter');

// Usar las rutas
app.use('/api/v1/etapas', etapas);
app.use('/api/v1/universidades', universidades);
 
app.use('/api/v1/clientes', clientes);
app.use('/api/v1/tipos-proyecto', tiposProyecto);

// Ruta para manejar errores 404
app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    });
});

module.exports = app;

 


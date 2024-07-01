const {
    listarEtapas,
    crearEtapa,
    editarEtapa
} = 
require('../controllers/etapaController');

const { Router } = require('express');

const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');
router.get('/', listarEtapas);
router.post('/', crearEtapa);
router.put('/:id', editarEtapa);

module.exports = router;


const express = require('express');
const router = express.Router(); 

const {
    obtenerMedias,
    crearMedia,
    actualizarMedia,
    borrarMedia
} = require('../controllers/mediaController');

router.get('/', obtenerMedias);
router.post('/', crearMedia);
router.put('/:id', actualizarMedia);
router.delete('/:id', borrarMedia);

module.exports = router




const {
    obtenerTipos,
    crearTipo,
    actualizarTipo,
    borrarTipo
} = require('../controllers/tipoController');

const { Router } = require('express');

const router = Router();

router.get('/', obtenerTipos);
router.post('/', crearTipo);
router.put('/:id', actualizarTipo);
router.delete('/:id', borrarTipo);

module.exports = router;

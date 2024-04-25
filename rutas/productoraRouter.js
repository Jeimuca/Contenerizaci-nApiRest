const {
    obtenerProductoras,
    crearProductora,
    actualizarProductora,
    borrarProductora
} = require('../controllers/productoraController');

const { Router } = require('express');

const router = Router();

router.get('/', obtenerProductoras);
router.post('/', crearProductora);
router.put('/:id', actualizarProductora);
router.delete('/:id', borrarProductora);

module.exports = router;

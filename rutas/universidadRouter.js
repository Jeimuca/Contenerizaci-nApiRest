const {
    listarUniversidades,
    crearUniversidad,
    editarUniversidad
} = require('../controllers/universidadController');

const { Router } = require('express');

const router = Router();

router.get('/', listarUniversidades);
router.post('/', crearUniversidad);
router.put('/:id', editarUniversidad);

module.exports = router;


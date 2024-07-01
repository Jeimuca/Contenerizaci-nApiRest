const {
    listarTiposProyecto,
    crearTipoProyecto,
    editarTipoProyecto
} = require('../controllers/tipoProyectoController');

const { Router } = require('express');

const router = Router();

router.get('/', listarTiposProyecto);
router.post('/', crearTipoProyecto);
router.put('/:id', editarTipoProyecto);

module.exports = router;

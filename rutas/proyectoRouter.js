const {
    listarProyectos,
    crearProyecto,
    editarProyecto
} = require('../controllers/proyectoController');

const { Router } = require('express');

const router = Router();

router.get('/', listarProyectos);
router.post('/', crearProyecto);
router.put('/:id', editarProyecto);

module.exports = router;





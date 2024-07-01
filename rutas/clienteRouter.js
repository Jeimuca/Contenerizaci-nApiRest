const {
    listarClientes,
    crearCliente,
    editarCliente
} = require('../controllers/ClienteController');

const { Router } = require('express');

const router = Router();

router.get('/', listarClientes);
router.post('/', crearCliente);
router.put('/:id', editarCliente);

module.exports = router;


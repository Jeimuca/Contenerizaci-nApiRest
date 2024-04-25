const {
    obtenerGeneros, 
    crearGenero,
    actualizarGenero,
    borrarGenero
} = require('../controllers/generoController')

const { Router } = require('express')

const router = Router()


router.get('/', obtenerGeneros)
router.post('/', crearGenero)
router.put('/:id', actualizarGenero)
router.delete('/:id', borrarGenero)

module.exports = router

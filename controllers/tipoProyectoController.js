const TipoProyecto = require('../modelos/TipoProyecto');
const { request, response } = require('express');

const listarTiposProyecto = async (req, res) => {
    try {
        const tiposProyecto = await TipoProyecto.find();
        return res.json(tiposProyecto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearTipoProyecto = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const tipoProyecto = new TipoProyecto({ nombre });
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editarTipoProyecto = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre } = req.body;
        const tipoProyectoActualizado = await TipoProyecto.findByIdAndUpdate(id, { nombre }, { new: true });
        if (!tipoProyectoActualizado) {
            return res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
        }
        return res.status(200).json(tipoProyectoActualizado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    listarTiposProyecto,
    crearTipoProyecto,
    editarTipoProyecto
}

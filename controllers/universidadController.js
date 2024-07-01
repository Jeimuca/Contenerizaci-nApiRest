const Universidad = require('../modelos/universidad');
const { request, response } = require('express');

const listarUniversidades = async (req, res) => {
    try {
        const universidades = await Universidad.find();
        return res.json(universidades);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearUniversidad = async (req = request, res = response) => {
    try {
        const { nombre, direccion, telefono } = req.body;
        const universidad = new Universidad({ nombre, direccion, telefono });
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editarUniversidad = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre, direccion, telefono } = req.body;
        const universidadActualizada = await Universidad.findByIdAndUpdate(id, { nombre, direccion, telefono }, { new: true });
        if (!universidadActualizada) {
            return res.status(404).json({ message: 'Universidad no encontrada' });
        }
        return res.status(200).json(universidadActualizada);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    listarUniversidades,
    crearUniversidad,
    editarUniversidad
}


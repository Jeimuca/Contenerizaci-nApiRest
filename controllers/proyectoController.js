const Proyecto = require('../modelos/proyecto');
const { request, response } = require('express');

const listarProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        return res.json(proyectos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearProyecto = async (req = request, res = response) => {
    try {
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        return res.status(201).json(proyecto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editarProyecto = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, req.body, { new: true });
        if (!proyectoActualizado) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        return res.status(200).json(proyectoActualizado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    listarProyectos,
    crearProyecto,
    editarProyecto
}



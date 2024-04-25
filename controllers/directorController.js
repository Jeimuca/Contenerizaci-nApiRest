const Director = require('../modelos/director');
const { request, response } = require('express');

const obtenerDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        return res.json(directores);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearDirector = async (req = request, res = response) => {
    try {
        const body = req.body;
        const director = new Director(body);
        await director.save();
        return res.status(201).json(director);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const actualizarDirector = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.fechaActualizacion = new Date();
        const director = await Director.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json(director);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const borrarDirector = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Director.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    obtenerDirectores,
    crearDirector,
    actualizarDirector,
    borrarDirector
}

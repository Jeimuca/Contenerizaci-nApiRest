const Tipo = require('../modelos/tipo');
const { request, response } = require('express');

const obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        return res.json(tipos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearTipo = async (req = request, res = response) => {
    try {
        const body = req.body;
        const tipo = new Tipo(body);
        await tipo.save();
        return res.status(201).json(tipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const actualizarTipo = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.fechaActualizacion = new Date();
        const tipo = await Tipo.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json(tipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const borrarTipo = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Tipo.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    obtenerTipos,
    crearTipo,
    actualizarTipo,
    borrarTipo
}

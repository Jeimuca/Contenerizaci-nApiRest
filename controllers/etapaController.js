const Etapa = require('../modelos/etapa');
const { request, response } = require('express');

const listarEtapas = async (req, res) => {
    try {
        const etapas = await Etapa.find();
        return res.json(etapas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearEtapa = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const etapa = new Etapa({ nombre });
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editarEtapa = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre } = req.body;
        const etapaActualizada = await Etapa.findByIdAndUpdate(id, { nombre }, { new: true });
        if (!etapaActualizada) {
            return res.status(404).json({ message: 'Etapa no encontrada' });
        }
        return res.status(200).json(etapaActualizada);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    listarEtapas,
    crearEtapa,
    editarEtapa
}

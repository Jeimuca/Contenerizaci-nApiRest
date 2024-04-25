const Productora = require('../modelos/productora');
const { request, response } = require('express');

const obtenerProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        return res.json(productoras);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearProductora = async (req = request, res = response) => {
    try {
        const body = req.body;
        const productora = new Productora(body);
        await productora.save();
        return res.status(201).json(productora);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const actualizarProductora = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.fechaActualizacion = new Date();
        const productora = await Productora.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json(productora);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const borrarProductora = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Productora.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    obtenerProductoras,
    crearProductora,
    actualizarProductora,
    borrarProductora
}

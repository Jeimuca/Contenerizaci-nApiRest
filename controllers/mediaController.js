const Media = require('../modelos/media');
const { request, response } = require('express');

const obtenerMedias = async (req, res) => {
    try {
        const medias = await Media.find();
        return res.json(medias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearMedia = async (req = request, res = response) => {
    try {
        const body = req.body;
        const media = new Media(body);
        await media.save();
        return res.status(201).json(media);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const actualizarMedia = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.fechaActualizacion = new Date();
        const media = await Media.findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json(media);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const borrarMedia = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Media.findByIdAndDelete(id);
        return res.status(204).json({ message: "Borrado" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    obtenerMedias,
    crearMedia,
    actualizarMedia,
    borrarMedia
}



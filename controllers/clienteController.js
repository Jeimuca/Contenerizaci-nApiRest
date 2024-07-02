const Cliente = require('../modelos/cliente');
const { request, response } = require('express');

const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const crearCliente = async (req = request, res = response) => {
    try {
        const { nombre, email } = req.body;
        const clienteExistente = await Cliente.findOne({ email });
        if (clienteExistente) {
            return res.status(400).json({ message: 'El cliente ya existe' });
        }
        const cliente = new Cliente({ nombre, email });
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const editarCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const { nombre, email } = req.body;
        const clienteActualizado = await Cliente.findByIdAndUpdate(id, { nombre, email }, { new: true });

        if (!clienteActualizado) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        clienteActualizado.fechaActualizacion = new Date();
        await clienteActualizado.save();

        return res.status(200).json(clienteActualizado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    listarClientes,
    crearCliente,
    editarCliente
}

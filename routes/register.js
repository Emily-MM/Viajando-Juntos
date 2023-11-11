const express = require('express');
const router = express.Router();
const User = require('../models/User');
const path = require('path');

router.use(express.static(path.join(__dirname, '../public')));

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

// Ruta para manejar el registro de usuario
router.post('/', async (req, res) => {
    try {
        // Obtener datos del formulario
        const { username, email, dni, password } = req.body;

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            email,
            dni,
            password,
        });

        // Guardar el nuevo usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: savedUser });
    } catch (error) {
    if (error.name === 'ValidationError') {
        console.error('Error de validación al registrar usuario:', error.errors);
        res.status(400).json({ error: 'Error de validación', details: error.errors });
    } else {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

});

module.exports = router;

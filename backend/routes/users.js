const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para obtener un usuario por su ID
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  const user = new User({
    idUsuario: req.body.idUsuario,
    email: req.body.email,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nombreUsuario: req.body.nombreUsuario,
    contrasena: req.body.contrasena,
    cuil: req.body.cuil,
    situacionFiscal: req.body.situacionFiscal,
    provincia: req.body.provincia,
    ciudad: req.body.ciudad,
    codigoPostal: req.body.codigoPostal,
    direccion: req.body.direccion,
    telefono: req.body.telefono
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para actualizar un usuario
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.nombre != null) {
    res.user.nombre = req.body.nombre;
  }
  // Agregar el resto de campos que se pueden actualizar

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un usuario
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
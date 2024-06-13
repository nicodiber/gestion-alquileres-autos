const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  idUsuario: { type: String, required: true },
  email: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  nombreUsuario: { type: String, required: true },
  contrasena: { type: String, required: true },
  cuil: { type: String, required: true },
  situacionFiscal: { type: String, required: true },
  provincia: { type: String, required: true },
  ciudad: { type: String, required: true },
  codigoPostal: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
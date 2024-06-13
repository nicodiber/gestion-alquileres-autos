const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
  denominacionSucursal: { type: String, required: true },
  nroTelefonoSucursal: { type: String },
  provinciaSucursal: { type: String },
  ciudadSucursal: { type: String },
  direccionSucursal: { type: String },
  horarioAperturaSucursal: { type: String },
  horarioCierreSucursal: { type: String }
});

module.exports = mongoose.model('Sucursal', sucursalSchema);
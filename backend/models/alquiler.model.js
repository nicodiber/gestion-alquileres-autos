const mongoose = require('mongoose');

const alquilerSchema = new mongoose.Schema({
  fechaHoraRetiro: { type: Date, required: true },
  fechaHoraDevolucionPrevista: { type: Date, required: true },
  fechaHoraDevolucionReal: { type: Date },
  estadoAlquiler: { type: String, required: true },
  precioTotalAlquiler: { type: Number, required: true }
});

module.exports = mongoose.model('Alquiler', alquilerSchema);
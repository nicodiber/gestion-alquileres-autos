const Alquiler = require('../models/alquiler.model');

// Función para crear un nuevo alquiler
exports.create = (req, res) => {
  const alquiler = new Alquiler({
    fechaHoraRetiro: req.body.fechaHoraRetiro,
    fechaHoraDevolucionPrevista: req.body.fechaHoraDevolucionPrevista,
    fechaHoraDevolucionReal: req.body.fechaHoraDevolucionReal,
    estadoAlquiler: req.body.estadoAlquiler,
    precioTotalAlquiler: req.body.precioTotalAlquiler
  });

  alquiler.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error al crear el alquiler.'
      });
    });
};

// Función para obtener todos los alquileres
exports.findAll = (req, res) => {
  Alquiler.find()
    .then(alquileres => {
      res.send(alquileres);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error al obtener los alquileres.'
      });
    });
};

// Función para obtener un alquiler por ID
exports.findOne = (req, res) => {
  Alquiler.findById(req.params.id)
    .then(alquiler => {
      if (!alquiler) {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      res.send(alquiler);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error al obtener el alquiler con id ' + req.params.id
      });
    });
};

// Función para actualizar un alquiler por ID
exports.update = (req, res) => {
  Alquiler.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(alquiler => {
      if (!alquiler) {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      res.send(alquiler);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error al actualizar el alquiler con id ' + req.params.id
      });
    });
};

// Función para eliminar un alquiler por ID
exports.delete = (req, res) => {
  Alquiler.findByIdAndRemove(req.params.id)
    .then(alquiler => {
      if (!alquiler) {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      res.send({ message: 'Alquiler eliminado exitosamente.' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Alquiler no encontrado con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'No se puede eliminar el alquiler con id ' + req.params.id
      });
    });
};
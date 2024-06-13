const Sucursal = require('../models/sucursal.model');

// Función para crear una nueva sucursal
exports.create = (req, res) => {
  const sucursal = new Sucursal({
    denominacionSucursal: req.body.denominacionSucursal,
    nroTelefonoSucursal: req.body.nroTelefonoSucursal,
    provinciaSucursal: req.body.provinciaSucursal,
    ciudadSucursal: req.body.ciudadSucursal,
    direccionSucursal: req.body.direccionSucursal,
    horarioAperturaSucursal: req.body.horarioAperturaSucursal,
    horarioCierreSucursal: req.body.horarioCierreSucursal
  });

  sucursal.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error al crear la sucursal.'
      });
    });
};

// Función para obtener todas las sucursales
exports.findAll = (req, res) => {
  Sucursal.find()
    .then(sucursales => {
      res.send(sucursales);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error al obtener las sucursales.'
      });
    });
};

// Función para obtener una sucursal por ID
exports.findOne = (req, res) => {
  Sucursal.findById(req.params.id)
    .then(sucursal => {
      if (!sucursal) {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      res.send(sucursal);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error al obtener la sucursal con id ' + req.params.id
      });
    });
};

// Función para actualizar una sucursal por ID
exports.update = (req, res) => {
  Sucursal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(sucursal => {
      if (!sucursal) {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      res.send(sucursal);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error al actualizar la sucursal con id ' + req.params.id
      });
    });
};

// Función para eliminar una sucursal por ID
exports.delete = (req, res) => {
  Sucursal.findByIdAndRemove(req.params.id)
    .then(sucursal => {
      if (!sucursal) {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      res.send({ message: 'Sucursal eliminada exitosamente.' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Sucursal no encontrada con id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'No se puede eliminar la sucursal con id ' + req.params.id
      });
    });
};
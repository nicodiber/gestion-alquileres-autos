module.exports = (app) => {
  const sucursales = require('../controllers/sucursal.controller');

  // Rutas para la gestión de sucursales
  app.post('/api/sucursales', sucursales.create);
  app.get('/api/sucursales', sucursales.findAll);
  app.get('/api/sucursales/:id', sucursales.findOne);
  app.put('/api/sucursales/:id', sucursales.update);
  app.delete('/api/sucursales/:id', sucursales.delete);
};

module.exports = (app) => {
  const alquileres = require('../controllers/alquiler.controller');

  // Rutas para la gestión de alquileres
  app.post('/api/alquileres', alquileres.create);
  app.get('/api/alquileres', alquileres.findAll);
  app.get('/api/alquileres/:id', alquileres.findOne);
  app.put('/api/alquileres/:id', alquileres.update);
  app.delete('/api/alquileres/:id', alquileres.delete);
};
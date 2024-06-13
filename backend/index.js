const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gestion-alquileres-autos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Servidor de backend corriendo en http://localhost:3000');
});

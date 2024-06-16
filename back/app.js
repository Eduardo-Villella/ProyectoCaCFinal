const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
      dotenv.config();
const { initializeSequelize, getSequelize } = require('./dataBase/db');
const testDatabaseConnection = require('../test/test-db-connection');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../front')));

/*---------------BORRAR es para prueba de conexion DB usando test-db-connection.js----------------*/
// Ruta de prueba para verificar la conexion a la base de datos
app.get('/api/test-db-connection', async (req, res) => {
  try {
    const message = await testDatabaseConnection(); // Realiza la prueba de conexion a la base de datos
    res.status(200).send('Conexión de test en APP a la base de datos verificada con éxito.');
  } catch (error) {
    console.log('Error en APP de test al conectar con la base de datos:', error)
    res.status(500).send('Error de test en APP al conectar con la base de datos.');
  }
});
/*----------------------------------------------------------------------------------------------------*/

// Rutas de la API
//app.use('/api/libros', libroRoutes); // Recordatorio de modelo para usar las rutas de libros

// Manejar la conexion a la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    const sequelize = await initializeSequelize();
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito desde app.js.');

    // Sincronizar modelos (opcional)
    await sequelize.sync();

    // Arrancar el servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando desde app.js en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('No se pudo conectar con el server desde app.js a la base de datos:', error);
  }
};

startServer();

module.exports = app;

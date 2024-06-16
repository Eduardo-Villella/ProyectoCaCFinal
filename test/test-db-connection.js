const { initializeSequelize, getSequelize } = require('../back/dataBase/db');

async function testDatabaseConnection() {
  try {
    const sequelize = await initializeSequelize(); // Inicializamos Sequelize y nos conectamos a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos libros_ceij establecida con éxito desde test.');
    return 'Conexión a la base de datos establecida con éxito';
  } catch (error) {
    console.error('Error al tratar de conectar con la base de datos desde test:', error);
    throw error; 
  } finally {
    const sequelize = getSequelize();
    if (sequelize) {
      await sequelize.close(); // Cerramos la conexión a la base de datos
    }
  }
}

// Ejecutamos: node test-db-connection.js para probar la conexión a la base de datos
testDatabaseConnection();

module.exports = testDatabaseConnection;

const dotenv = require('dotenv');                       // Importamos dotenv para poder leer variables de entorno desde el archivo .env
    dotenv.config({ path: '../../.env' });              // Configuramos dotenv y carga las variables de entorno desde el archivo .env
/* Las dos lineas anteriores, importacion de dotenv y su configuracion, puede ser redundante ya que en la linea siguiente ya importamos config.js en el cual ya esta importado dotenv, sin embargo hasta estar seguro la dejaremos activas */
const mysql = require('mysql2/promise');                // Importamos mysql2/promise, que nos permite usar promesas para conectarnos a MySQL
const { Sequelize } = require('sequelize');             // Importamos Sequelize, que es el ORM que usaremos para interactuar con la base de datos
const dbConfig = require('./config/config').default;    // Importamos la configuracion de la base de datos desde el archivo config.js, donde exportamos: default (nuestro entorno)


// Esta funcion se encargara de crear la base de datos si no existe, no se ejecuta aqui sino en la funcion siguiente
const createDataBase = async () => {
  const { database, username, password, host } = dbConfig; // Extraemos los datos de configuracion
  try {
    const connection = await mysql.createConnection({ host, user: username, password }); // Nos conectamos a MySQL usando los datos de configuracion
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`); // Ejecutamos una consulta para crear la base de datos si no existe (con SQL)
    console.log(`db.js informa: Base de datos ${database} creada o ya existente`); // Mensaje de exito
  } catch (error) {
    console.error('db.js informa: No se pudo crear la base de datos:', error); // Mensaje de error
  }
};

// Esta funcion inicializa Sequelize
let sequelize;
const initializeSequelize = async () => {
  await createDataBase(); // Primero, ejecuta la funcion anterior y creamos la base de datos si no existe // Luego, inicializamos Sequelize con los datos de configuracion

  const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,// dbConfig es la variable que creamos al importar nuestro entorno default
  }); 


    return sequelize; // Devolvemos la instancia de Sequelize, notese que usamos el nombre con minuscula para la variable creada
};

module.exports = { initializeSequelize, getSequelize: () => sequelize }; // Exportamos la funcion de inicializacion de Sequelize


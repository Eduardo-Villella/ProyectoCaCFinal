/* Forma comun de importar con CommonJS (require y module.exports) -no el actual ECMAScript Modules (ESM) (import y export) mas usado en frontend y cambiando el archivo a .mjs o agregando en package.json el campo: "type": "module"- */ 

//const dotenv = require('dotenv');
//dotenv.config({ path: '../../.env' }); // Aqui carga las variables de entorno desde el archivo .env que esta en la raiz del proyecto

// modo abreviado CommobnJS: Importa y configura dotenv
require('dotenv').config('../../.env');

module.exports = {
  /*development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },// Entorno desarrollador
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },// Entorno testing
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },// Entorno produccion */
  default: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
};// Exporta la configuración de la base de datos a los distintos entornos
/* Como usaremos un solo entorno le puedo poner default o el nombre que quiera ya que es el nombre de una propiedad de un objeto que exporto*/

/* Se puede hacer de manera mas simple y explicita:
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });

const ddbbConfiguracion = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }

module.exports = dddbbConfiguracion;

Asi, la configuracion de nuestra base de datos leera las variables desde nuestro archivo .env
El nombre de la variable "ddbbConfiguracion" se puede cambiar a gusto mientras no se usen palabras reservadas de javaScript
*/
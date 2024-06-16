/* El archivo index.js de la carpeta models crea un objeto vacio "const db = {};" donde colocara todos los modelos (tablas) de la nuestra base de datos, ademas es donde se definen las relaciones entre tablas, centralizando asi en un solo lugar todas las tablas y sus relaciones. Finalmente exporta ese objeto "db" que sera importado en cada archivo donde se necesite interactuar con las tablas. 
Este enfoque es el correcto, ya que limpia de codigo excesivo cada modelo, centraliza datos en un objeto unico y permite minimizar errores.
Dado que nuestro proyecto es pequeño y de aprendizaje nos sera mas beneficioso que cada modelo contenga sus relaciones ya que se nos hara mas visible por su similitud con lo aprendido en mysql y workbrench.
El archivo index.js de model permanecera aqui a modo de ejemplo y recordarnos que nos falta aprender aun. */



/*
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/

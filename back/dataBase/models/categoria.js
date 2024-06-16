const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Categoria extends Model {}

Categoria.init({
  id_categoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  nombre_cat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Categoria',
  tableName: 'categoria',
  timestamps: false,
});

module.exports = Categoria;



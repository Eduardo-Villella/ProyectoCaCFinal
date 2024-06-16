const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Categoria = require('./categoria');

class Libros extends Model {}

Libros.init({
  id_libro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id_categoria',
    },
  },
  editorial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Libros',
  tableName: 'libros',
  timestamps: false,
});

Libros.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Categoria.hasMany(Libros, { foreignKey: 'id_categoria' });

module.exports = Libros;



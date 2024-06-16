const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Carrito = require('./carrito');
const Libros = require('./libros');

class DetalleCarrito extends Model {}

DetalleCarrito.init({
  id_detalle_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  id_carrito: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Carrito,
      key: 'id_carrito',
    },
  },
  id_libro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Libros,
      key: 'id_libro',
    },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DetalleCarrito',
  tableName: 'detalle_carrito',
  timestamps: false,
});

DetalleCarrito.belongsTo(Carrito, { foreignKey: 'id_carrito' });
DetalleCarrito.belongsTo(Libros, { foreignKey: 'id_libro' });
Carrito.hasMany(DetalleCarrito, { foreignKey: 'id_carrito' });
Libros.hasMany(DetalleCarrito, { foreignKey: 'id_libro' });

module.exports = DetalleCarrito;





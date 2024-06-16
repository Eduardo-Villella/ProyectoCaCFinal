const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./usuarios');

class Carrito extends Model {}

Carrito.init({
  id_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario',
    },
  },
}, {
  sequelize,
  modelName: 'Carrito',
  tableName: 'carrito',
  timestamps: false,
});

Carrito.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Usuario.hasMany(Carrito, { foreignKey: 'id_usuario' });

module.exports = Carrito;



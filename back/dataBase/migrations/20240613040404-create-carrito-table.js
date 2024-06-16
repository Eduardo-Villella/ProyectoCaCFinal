'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('carrito', {
    id_carrito: {
      type: 'int',
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    id_usuario: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'carrito_usuario_fk',
        table: 'usuarios',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_usuario',
      },
    },
  });
};

exports.down = function(db) {
  return db.dropTable('carrito');
};

exports._meta = {
  version: 1
};



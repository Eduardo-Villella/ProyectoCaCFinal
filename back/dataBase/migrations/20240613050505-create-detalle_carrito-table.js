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
  return db.createTable('detalle_carrito', {
    id_detalle_carrito: {
      type: 'int',
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    id_carrito: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'detalle_carrito_carrito_fk',
        table: 'carrito',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_carrito',
      },
    },
    id_libro: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'detalle_carrito_libro_fk',
        table: 'libros',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_libro',
      },
    },
    cantidad: {
      type: 'int',
      notNull: true,
    },
    precio: {
      type: 'decimal',
      precision: 10,
      scale: 2, 
      notNull: true,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('detalle_carrito');
};

exports._meta = {
  version: 1
};



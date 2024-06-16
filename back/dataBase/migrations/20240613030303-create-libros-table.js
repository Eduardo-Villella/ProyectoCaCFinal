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
  return db.createTable('libros', {
    id_libro: {
      type: 'int',
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    nombre: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    id_categoria: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'libros_categoria_fk',
        table: 'categoria',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_categoria',
      },
    },
    editorial: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    precio: {
      type: 'decimal',
      precision: 10,
      scale: 2,
      notNull: true,
    },
    stock: {
      type: 'int',
      notNull: true,
    },
    descripcion: {
      type: 'text',
      notNull: true,
    },
    imagen: {
      type: 'blob',
      notNull: true,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('libros');
};

exports._meta = {
  version: 1
};


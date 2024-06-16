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
  return db.createTable('usuarios', {
    id_usuario: {
      type: 'int',
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    usuario: {
      type: 'string',
      length: 255,
      notNull: true,
      unique: true,
    },
    email: {
      type: 'string',
      length: 255,
      notNull: true,
      unique: true,
    },
    contrasena: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    nombre: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    apellido: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    fecha_nacimiento: {
      type: 'date',
    },
    telefono: {
      type: 'string',
      length: 20,
      notNull: true,
    },
    direccion: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    ciudad: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    provincia: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    pais: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    codigo_postal: {
      type: 'string',
      length: 20,
      notNull: true,
    },
    rol: {
      type: 'string',
      length: 20,
      notNull: true,
      defaultValue: 'cliente',
    },
    estado: {
      type: 'string',
      length: 20,
      notNull: true,
      defaultValue: 'activo',
    },
  });
};

exports.down = function(db) {
  return db.dropTable('usuarios');
};

exports._meta = {
  version: 1
};



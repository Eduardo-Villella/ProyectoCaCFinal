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
  return db.createTable('categoria', {
    id_categoria: {
      type: 'int',
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    nombre_cat: {
      type: 'string',
      length: 255,
      notNull: true,
    },
  });
};

exports.down = function(db) {
  return db.dropTable('categoria');
};

exports._meta = {
  version: 1
};


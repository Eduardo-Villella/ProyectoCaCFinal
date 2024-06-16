const bcrypt = require('bcrypt');
const Libros = require('../models/libros');
const Categoria = require('../models/categoria');
const saltRounds = 10;

exports.seed = function(db, callback) {
  const libros = [
    {
      nombre: 'Libro 1',
      id_categoria: 1,
      editorial: 'Editorial A',
      precio: 29.99,
      stock: 100,
      descripcion: 'Descripción del libro 1',
      imagen: 'URL de la imagen o BLOB del libro 1',
    },
    {
      nombre: 'Libro 2',
      id_categoria: 2,
      editorial: 'Editorial B',
      precio: 19.99,
      stock: 50,
      descripcion: 'Descripción del libro 2',
      imagen: 'URL de la imagen o BLOB del libro 2',
    },
    // Agregar mas aqui
  ];

  const promises = libros.map(libro => {
    return Libros.create(libro);
  });

  Promise.all(promises)
    .then(() => {
      console.log('Libros insertados correctamente.');
      callback();
    })
    .catch(err => callback(err));
};

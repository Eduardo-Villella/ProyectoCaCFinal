const Categoria = require('../models/categoria');

exports.seed = function(db, callback) {
  const categorias = [
    { 
      nombre_cat: 'Ciencia ficción' 
    },
    { 
      nombre_cat: 'Novela histórica' 
    },
    { 
      nombre_cat: 'Filosofía' 
    },
    // Agregar mas aqui
  ];

  Categoria.bulkCreate(categorias)
    .then(() => {
      console.log('Categorías insertadas correctamente.');
      callback();
    })
    .catch(err => callback(err));
};

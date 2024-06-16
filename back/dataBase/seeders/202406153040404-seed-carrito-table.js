const Carrito = require('../models/carrito');
const Usuario = require('../models/usuarios');

exports.seed = function(db, callback) {
  const carritos = [
    {
      id_usuario: 1,
    },
    {
      id_usuario: 2,
    },
    // Agregar mas aqui
  ];

  const promises = carritos.map(carrito => {
    return Carrito.create(carrito);
  });

  Promise.all(promises)
    .then(() => {
      console.log('Carritos insertados correctamente.');
      callback();
    })
    .catch(err => callback(err));
};

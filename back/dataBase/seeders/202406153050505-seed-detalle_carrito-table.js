const DetalleCarrito = require('../models/detalle_carrito');
const Carrito = require('../models/carrito');
const Libros = require('../models/libros');

exports.seed = function(db, callback) {
  const detallesCarrito = [
    {
      id_carrito: 1,
      id_libro: 1,
      cantidad: 2,
      precio: 29.99,
    },
    {
      id_carrito: 2,
      id_libro: 2,
      cantidad: 1,
      precio: 19.99,
    },
    // Agregar mas aqui
  ];

  const promises = detallesCarrito.map(detalle => {
    return DetalleCarrito.create(detalle);
  });

  Promise.all(promises)
    .then(() => {
      console.log('Detalles de carrito insertados correctamente.');
      callback();
    })
    .catch(err => callback(err));
};

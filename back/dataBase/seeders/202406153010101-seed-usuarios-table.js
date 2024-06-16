const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios');
const saltRounds = 10;

exports.seed = function(db, callback) {
  const usuarios = [
    {
      usuario: 'admin',
      email: 'admin@example.com',
      contrasena: 'admin123',
      nombre: 'Admin',
      apellido: 'User',
      fecha_nacimiento: '1980-01-01',
      telefono: '1234567890',
      direccion: '123 Admin St',
      ciudad: 'Admin City',
      provincia: 'Admin State',
      pais: 'Admin Country',
      codigo_postal: '12345',
      rol: 'administrador',
      estado: 'activo'
    },
    {
      usuario: 'cliente',
      email: 'cliente@example.com',
      contrasena: 'cliente123',
      nombre: 'Cliente',
      apellido: 'User',
      fecha_nacimiento: '1990-01-01',
      telefono: '0987654321',
      direccion: '456 Cliente St',
      ciudad: 'Cliente City',
      provincia: 'Cliente State',
      pais: 'Cliente Country',
      codigo_postal: '54321',
      rol: 'cliente',
      estado: 'activo'
    }
    // Agregar mas aqui
  ];

  const promises = usuarios.map(usuario => {
    // Estudiar hash de la contraseña antes de insertar en la base de datos
    return bcrypt.hash(usuario.contrasena, saltRounds)
      .then(hash => {
        usuario.contrasena = hash;
        return Usuario.create(usuario);
      });
  });

  Promise.all(promises)
    .then(() => {
      console.log('Usuarios insertados correctamente.');
      callback();
    })
    .catch(err => callback(err));
};

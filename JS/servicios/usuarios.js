const { db } = require("./sqlite");

const creaUsuario = async (usuario) => {
  return new Promise(async (resolve, reject) => {
    const sql = `INSERT INTO usuario (nombre, edad, rut,telefono, direccion ) VALUES ('${usuario.nombre}', '${usuario.edad}', '${usuario.rut}', '${usuario.telefono}', '${usuario.direccion}' )  `;
    let result = await db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("usuario creado");
      }
    });
  });
};

const getAll = async () => {
  return new Promise(async (resolve, reject) => {
    const sql = `SELECT * FROM usuario`;
    db.all(sql, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const actualizaUsuario = async (usuario) => {
  return new Promise(async (resolve, reject) => {
    const sql = `UPDATE usuario SET nombre = '${usuario.nombre}', edad = '${usuario.edad}', rut='${usuario.rut}', telefono='${usuario.telefono}', direccion='${usuario.direccion}' WHERE id='${usuario.id}';`;
    db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("usuario actualizado");
      }
    });
  });
};

const eliminaUsuario = async (idUsuario) => {
  return new Promise(async (resolve, reject) => {
    const sql = `DELETE FROM usuario WHERE id='${idUsuario}'`;
    db.run(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("usuarioEliminado");
      }
    });
  });
};

module.exports = { creaUsuario, getAll, actualizaUsuario, eliminaUsuario };

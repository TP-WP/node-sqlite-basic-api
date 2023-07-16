const sqlite3 = require("sqlite3").verbose();
const pathToDB = __dirname + "/test.db";

const db = new sqlite3.Database(pathToDB, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err);
  } else {
    console.log("conexion a la base de datos exitosa");
  }
});

const tabla_usuario = `
  CREATE TABLE IF NOT EXISTS usuario
  (
    id INTEGER PRIMARY KEY,
    nombre VARCHAR(20),
    edad VARCHAR(20),
    rut VARCHAR(10),
    telefono INT,
    direccion VARCHAR
    (50)
    )`;

db.run(tabla_usuario);

module.exports = { db };

const sqlite3 = require("sqlite3").verbose();
const pathToDB = __dirname + "/test.db";

const db = new sqlite3.Database(pathToDB, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err);
  } else {
    console.log("conexion a la base de datos exitosa");
  }
});

let drop_usuario = "DROP TABLE usuario";

db.run(drop_usuario, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("usuario eliminado");
  }
});

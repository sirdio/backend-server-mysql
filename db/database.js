var mysql = require('mysql');

const mysqlConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebadb'
});

mysqlConexion.connect((err) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
    }
});

module.exports = mysqlConexion;
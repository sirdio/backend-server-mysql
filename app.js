/// Requieres 
var express = require('express');
var mysqlConexion = require('./db/database');



// Iniciaalizar variables
var app = express();
const mysqldb = mysqlConexion;


// rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensje: 'Petición Realizada con exito.'
    })
});

// peticion get DB
app.get('/usuarioDB', (req, res, next) => {

    mysqldb.query('Select * from usuarios', (err, row, field) => {
        if (!err) {
            res.status(200).json({
                ok: true,
                usuario: row
            })
        } else {
            res.status(400).json({
                ok: false,
                mensaje: `Se produjo un ${ err }`
            })
        }
    });
});





/// Escuchando Peticiones
app.listen(3000, () => {
    console.log('Servidor Express escuchando peticiones en el puerto \x1b[31m 3000: \x1b[32m%s\x1b[0m', ' online');
})
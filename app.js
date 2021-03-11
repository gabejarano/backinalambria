require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Initialization
const app = express();
//----------------------Middleware (Exec before call routes)-----------------------------

//Logs in console
app.use(morgan('dev'));

//Server can receive json 
app.use(express.json());

//enable cors
app.use(cors());

//Routes components
app.use('/api',
    require('./componentes/usuarios/usuario.route'),
    require('./componentes/ventas/venta.route')
)

//handle errors
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.json({ "error": "Ruta no encontrada" })
});
// handle error, print stacktrace
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
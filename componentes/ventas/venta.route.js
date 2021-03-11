const {Router} = require('express');
const {createVenta,getVentas} = require('./venta.controller');
const {verifyToken} = require('../../utils/verifytoken');


router = Router();

//Crea la venta
router.post('/venta', verifyToken, createVenta)

router.get('/ventas/:proveedorid', verifyToken, getVentas)

module.exports = router;
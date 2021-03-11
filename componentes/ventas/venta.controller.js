const Venta = require('./venta.model');
const Sequelize = require('sequelize');

exports.createVenta = async function (req, res) {
    const { id, proveedorid, precio, clienteid } = req.body;
    const venta = await Venta.create({
        id,
        proveedorid,
        precio,
        clienteid
    })
    res.json({ data: "Se ha creado la venta satisfactoriamente" })
}

exports.getVentas = async function (req, res) {
    const Op = Sequelize.Op
    const { id, precio, clienteid } = req.body;
    const { proveedorid } = req.params
    var where = {
        [Op.and]: [
            { proveedorid },
            id === undefined ? {} : { id },
            precio === undefined ? {} : { precio },
            clienteid === undefined ? {} : { clienteid }
        ],
    }
    const ventas = await Venta.findAll({
        where
    })
    res.json({ data: ventas })
}
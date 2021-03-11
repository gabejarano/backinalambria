const Sequelize = require ('sequelize');
const sequelize = require ('../../servicios/database/database');


//model of the table ventas
const Venta = sequelize.define('ventas', {
    
    id: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    proveedorid: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    precio: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    clienteid: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {
    timestamps:false
})



module.exports= Venta;
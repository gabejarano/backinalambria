const Sequelize = require ('sequelize');
const sequelize = require ('../../servicios/database/database');



//model of the table usuario
const Usuario = sequelize.define('usuarios', {
    
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    correo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    passwordsalt: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps:false
})



module.exports= Usuario;
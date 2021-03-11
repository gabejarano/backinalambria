const Sequalize = require('sequelize');
const config = require('config');
//conecction of database using sequelize
const sequelize = new Sequalize(
    config.get('postresqlDB.DB'),
    config.get('postresqlDB.USER_DB'),
    config.get('postresqlDB.PASSWORD_DB'),
    {
        host: config.get('postresqlDB.HOST_DB'),
        dialect: 'postgres',
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        },
        pool: {
            max: 20,
            min: 0,
            require: 30000,
            idle: 200000,
            acquire: 1000000
        },
        loggin: false
    }
)
module.exports = sequelize;
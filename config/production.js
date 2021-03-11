module.exports = {
    postresqlDB: {
        DB: process.env.DB_PRODUCTION,
        USER_DB: process.env.USER_DB_PRODUCTION,
        PASSWORD_DB: process.env.PASSWORD_DB_PRODUCTION,
        HOST_DB: process.env.HOST_DB_PRODUCTION 
    },
    auth: {
        secretkey: 'lc*9AN$NXwPzb8ZEEx0D'
    }
}
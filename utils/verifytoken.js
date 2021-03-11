const jwt = require('jsonwebtoken');
const config = require('config');

exports.verifyToken =  function (req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send(" No se ha autenticado")
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send(" No se ha autenticado")
    }
    const payload = jwt.verify(token, config.get('auth.secretkey'))
    req.userId= payload._id
    req.rolId= payload._rolid
    next();
}
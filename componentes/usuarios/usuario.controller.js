const Usuario = require('./usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.login = async function (req, res) {
    const { correo, password } = req.body;
    var usuario = await Usuario.findOne({ where: { correo }, attributes: ['id', 'nombre', 'correo', 'passwordsalt'] })
        .catch((err) => {
            if (err.statusCode) {
                res.status(err.statusCode);
            } else {
                res.status(500);
            }
            res.json({ 'error': err.message + " obteniendo login" });
        });
    if (usuario != null) {
        bcrypt.compare(password, usuario.passwordsalt, function (err, result) {
            if (result) {
                const token = jwt.sign({ _id: usuario.id }, config.get('auth.secretkey'));
                res.status(200).json({
                    "token": token,
                    "usuarioid": usuario.id,
                    "nombre": usuario.nombre
                })
            } else {
                res.status(401).send("Contraseña o usuario incorrecta")
            }
        });
    }
    else {
        res.status(401).send("El usuario no existe")
    }
}



exports.signup = async function (req, res) {
    const { nombre, correo, password, id} = req.body;
    const usuarioanterior = await Usuario.findAll({ limit: 1, attributes: ['id'], order: [['id', 'DESC']]  });
    var secuencia = 0;
    if (usuarioanterior.length != 0) {
        secuencia = parseInt(usuarioanterior[0].dataValues.id.toString()) + 1;
    } else {
        secuencia = 1;
    }
    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
            res.json("hubo un error, por favor intentalo más tarde")
        } else {
            await Usuario.create({
                nombre, correo, passwordsalt: hash, id:secuencia
            })
            res.json("Usuario creado")
        }
    });
}
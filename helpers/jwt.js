const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

     return new Promise((resolve,reject) => {

        const payload = { uid }

        jwt.sign(payload,process.env.JWT_KEY,{
            expiresIn:'24h'
        },(err,token) => {
            if(err){
                // no se pudo crear el token
                reject('No se puedo crear el JWT');
            }else{
                // se creo el token 
                resolve(token);
            }
        });

     });

    
}

module.exports = {
    generarJWT
}
const {io} = require('../index'); 
 

io.on('connection',client => { 
    client.on('disconnect',() => { console.log('Cliente desconectado'); });
   
});
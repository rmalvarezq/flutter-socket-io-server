const {io}= require('../index');


// Mensajes de Socktes
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.on('disconnect', () => { 
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje****',payload);

        io.emit('mensaje', {admin: 'Mensaje nuevo'});
    });


  });
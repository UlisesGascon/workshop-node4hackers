//import eventos from 'events';
const eventos = require('events');

const EmisorEventos = eventos.EventEmitter;
const ee = new EmisorEventos();

ee.on('datos', fecha => {
   console.log(fecha);
});

setInterval(() => {
   ee.emit('datos', Date.now());
}, 500);
var events = require('events');
var emitter = new events.EventEmitter();

function a() {
  setTimeout(function() {
    console.log('resultado funcion a');
    emitter.emit('evento-b');
  }, 3000)
}

function b() {
  setTimeout(function() {
    console.log('resultado funcion b');
  }, 1000)
}

emitter.on('evento-a', a);
emitter.on('evento-b', b);

emitter.emit('evento-a');



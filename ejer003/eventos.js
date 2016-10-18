var event = require('events');

var emitter= new event.EventEmitter();

emitter.on('ping', function(){
  console.log('Hicieron ping')
  console.log('pong!');
})

setInterval(function() {
  emitter.emit('ping');
}, 1000)

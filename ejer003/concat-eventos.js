var fs = require('fs');
var events = require('events');
var emitter = new events.EventEmitter();

function leer1() {
  fs.readFile('arch1.txt', 'utf8', function(err, data) {
    if (err) {
      console.log('Error al leer arch1');
      return;
    }
    emitter.emit('leerArchivo2', data);
  });
}

function leer2(data1) {
  fs.readFile('arch2.txt', 'utf8', function(err, data) {
    if (err) {
      console.log('Error al leer arch2');
      return;
    }
    emitter.emit('escribirResultado', data+data1);
  });
}

function escribir(resultado) {
  fs.writeFile('res.txt', resultado, function(err) {
    if (err) {
      console.log('Error al escribir resultado');
      return;
    }

    console.log('FIN');

  });
}

//registar eventos
emitter.on('leerArchivo1', leer1);
emitter.on('leerArchivo2', leer2);
emitter.on('escribirResultado', escribir);

// evento disparador
emitter.emit('leerArchivo1');

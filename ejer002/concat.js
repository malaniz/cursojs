var fs = require('fs');

fs.readFile('arch1.txt', 'utf8', function (err, data1) {
  if (err) {
    console.log('error, no continuo');
    return;
  }
  fs.readFile('arch2.txt', 'utf8', function(err, data2) {
    if (err) {
      console.log('error, no continuo');
      return;
    }
    var resultado = data1 + data2;
    //console.log(resultado);
    fs.writeFile('res.txt', resultado, function(err) {
      if (err) {
        console.log('error, no pude escribir');
        return;
      }
      console.log('Todo terminado');
    });

  });
});


function a() {
  var promesa = new Promise(function(resolv, reject){
    err = true;
    if (err) {
      console.log('hay error en a');
      reject();
    } else {
      console.log('exito a');
      resolv();
    }
  });
  return promesa;
}

function b() {
  console.log('despues soy b');
}

var d = a();
d.then(function() {
  console.log('termino a con exito');
  b();
}, function() {
  console.log('termino a con error');
});


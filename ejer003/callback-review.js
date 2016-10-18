function f2(success, error) {
  // leer un archivo
  // 2 callbacks (error, success)
  if (error) {
    throw err;
  } else {
    success();
  }
}

function f1(callback) {
  // leer un archivo
  // 1 callbacks 
  if (error) {
    callback(error);
  } else {
    callback();
  }
    
}


f1(function(err){
  if(err) {
    console.log(error);
  } else {
    // mi codigo de exito
  }
});

f2(function() {
  // mi codigo de exito
}, function(err) {
  console.log(error)
});

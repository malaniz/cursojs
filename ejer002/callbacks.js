function x2(v, callback) {
  setTimeout(function(){
    v= v*2;
    callback(v);
  }, 1000)
}

function square(v) {
  v = v*v;
  console.log(v);
}

x2(8, square);
  

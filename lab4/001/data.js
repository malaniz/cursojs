var fs = require('fs');
var rr = require('request');

fs.readFile('./entrada.txt', 'utf8', function(err, data) {
  if (err) {
    return;
  }
  data = data.split('\n').filter(function(x){
    return x!==''
  });

  var username;
  for (var i = 0; i < data.length; i++) {
    username = data[i];
    qList.push(new Promise(function(resolve, reject){
      rr('http://www.instagram.com/' + username + '/media/', function (error, response, body) {
        if (error) {
          reject(error)
        }
        resolve(body)
      });
    }));
  }

  Promise.all(function(res) {
    // escribir los archivos desde res 
    console.log(res);
  })
})

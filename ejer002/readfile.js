fs = require('fs')
fs.readFile('txt.txt', 'utf8', function (err,data) {
  if (err) {
    console.log(data);
    return console.log(err);
  }
  console.log(data);
});

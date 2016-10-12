var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  var text = data.toString();
  var array = text.split('\n');
  console.log(array.length - 1);

});




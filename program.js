var module = require('./module');

var directory = process.argv[2];
var ext = process.argv[3]

module(directory, ext, function(err, data){
  if (err){
    return console.error('There was an error:', err);
  }
  data.forEach(function(file){
    console.log(file);
  });

});

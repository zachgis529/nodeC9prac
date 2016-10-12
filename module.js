var fs = require('fs');
var path = require('path');

module.exports = function (directory, filter, callback){
  fs.readdir(directory, (err, data) => {
  if (err) {
  return callback(err)
  } else {
      var data = data.filter(function(filename) {
        return path.extname(filename) === '.' + filter;
    });
      return callback(null, data);
    }
  });
};

var fs = require('fs')

fs.readdir(process.argv[2], (err, data) => {
  if (err) throw err;
    
  var filterArr = [];

  for (i = 0; i < data.length; i++){
    if ((data[i]).search("." + process.argv[3]) !== -1){
      console.log(data[i]);
    }
  }  

});




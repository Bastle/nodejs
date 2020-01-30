var fs = require('fs');


fs.readFile('./index.txt', function(err, data) {
    console.log(err);
    // if(err){
    //     console.log(`err: ${err}`);
    // }

    console.log(data.toString());
})
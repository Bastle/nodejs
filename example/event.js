var events = require('events');

var myEnv = new events.EventEmitter();
myEnv.on('123', function(data) {
    console.log(`data: ${data}`);
})


myEnv.emit('123', 'lalala');
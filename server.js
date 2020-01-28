var http = require('http');


http.createServer(function(request, response) {
    console.log(123123123)
    // response.writeHead(200, {'Content-Type': 'text/plain'});

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world');
}) 

console.log('server is running at http://127.0.0.1:8888')
const http = require('http');

var server = http.createServer(function(request, response) { 
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hello World - Siva ....\n");
});

server.listen(4000,()=>{
    console.log("Node Server Started at port 4000 !!!");
});
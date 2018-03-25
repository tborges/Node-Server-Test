var http = require('http');
var server = http.createServer(function(request, response){
console.log('Got a request Troy!');
response.write('Hiii');
response.end();

});

server.listen(3000);
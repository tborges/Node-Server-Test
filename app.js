var express = require('express');
var app = express();

app.get('/blocks', function(request, response){
    
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.send(blocks);
    
    //console.log('Got a request Troy!');
    //response.send('Hello world');
    
});

app.listen(3000);
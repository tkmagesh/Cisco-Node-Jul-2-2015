var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
    var resourceRequested = path.join(__dirname, req.url);
    if (!fs.existsSync(resourceRequested)){
        res.statusCode = 404;
        res.end();
        return;
    }
    fs.createReadStream(resourceRequested).pipe(res);
    /*var stream = fs.createReadStream(resourceRequested);
    stream.on('data', function(chunk){
        res.write(chunk);
    });
    stream.on('end', function(){
        res.end();
    });
    stream.on('error', function(err){
        console.error(err);
    });*/

});
server.listen(8080);

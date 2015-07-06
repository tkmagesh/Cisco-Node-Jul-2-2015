/*
if the request is for a static resource (html, css, js, jpg, png, json, txt, ico)
    if the resurce exists
        serve the resource
    else
        serve 404
    end
else if request is '/calculator?number1=100&number2=200&operation=add
    //use url.parse, querystring.parse for parsing req.url
    use the calculator.js to perform the calculation and return the result
else
    serve 404
end if
*/



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

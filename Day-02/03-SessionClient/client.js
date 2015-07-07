var net = require("net");

var socket = net.connect(9090);
socket.setEncoding("utf8");
var sessionId = null;

socket.on('data', function(data){
    var response = JSON.parse(data);
    if (response.sessionId)
        sessionId = response.sessionId;

    console.log(data);
});
console.log("creating a session");
socket.write(JSON.stringify({type : "create"}));

setTimeout(function(){
    var saveRequest = JSON.stringify({
        sessionId : sessionId,
        type : "save",
        key : "username",
        value : "magesh"
    });
    console.log("save request = ", saveRequest);
    socket.write(saveRequest);
    setTimeout(function(){
        var getRequest = JSON.stringify({
            sessionId : sessionId,
            type : "get",
            key : "username"
        });
        console.log("get request = ", getRequest);
        socket.write(getRequest);
    },10000)
},5000);

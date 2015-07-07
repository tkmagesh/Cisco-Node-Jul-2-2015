var net = require("net");
var guid = require("guid");

var sessionStore = {

};

function createSession(){
    var sessionId = guid.raw();
    sessionStore[sessionId] = {};
    return sessionId;
}

function save(sessionId, key, value){
    var session = sessionStore[sessionId];
    if (!session) return false;
    session[key] = value;
    return true;
}

function get(sessionId, key){
    var session = sessionStore[sessionId];
    if (!session) return false;
    if (key)
        return session[key];
    return session;
}

function remove(sessionId){
    delete sessionStore[sessionId];
}

var server = net.createServer(function(socket){
    socket.setEncoding("utf8");

    socket.on("data", function(req){
        var reqObject = JSON.parse(req);
        switch (reqObject.type){
            case "create" :
                var sessionId = createSession();
                var responseObj = {
                    status : 'OK',
                    sessionId : sessionId
                };
                socket.write(JSON.stringify(responseObj));
                break;
            case "save" :
                save(reqObject.sessionId, reqObject.key, reqObject.value);
                var responseObj = {
                    status : 'OK'
                };
                socket.write(JSON.stringify(responseObj));
                break;
            case "get" :
                var value = get(reqObject.sessionId, reqObject.key);
                var responseObj = {
                    status : 'OK',
                    value : value
                };
                socket.write(JSON.stringify(responseObj));
                break;
            default :
                socket.write(JSON.stringify({
                    staus : 'ERROR',
                    message : 'I am sorry i dont understand!'
                }));
        }
    });
    socket.on("close", function(){
        console.log("connection closed");
    });
    socket.on("error", function(err){
        console.log(err);
    });
});

server.listen(9090);
console.log("Session server listening on port 9090");

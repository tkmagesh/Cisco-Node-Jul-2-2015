var fs = require("fs");
var stream = fs.createReadStream("test.txt", {encoding : "utf8"});
var readCount = 0;

stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});
stream.on('end', function(chunk){
    console.log("======================= EOF ======================== ");
    console.log("file read with " , readCount , " read operations");
});
console.log("Beginning to read the file");

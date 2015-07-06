var fs = require("fs");

/*
var fileContents = fs.readFileSync("test.txt", {encoding : "utf8"});
console.log(fileContents);
console.log("=================== EOF ============= ");
*/

//Not the right way to handle exceptions
/*try {
    fs.readFile("test.txt", {encoding : "utf8"}, function(err, fileContents){
        console.log(fileContents);
        console.log("=================== EOF ============= ");
    });
} catch (err){
    console.log("error occurred - ", err);
}*/


//the right way to handle exceptions

fs.readFile("test.txt", {encoding : "utf8"}, function(err, fileContents){
    if (err){
        console.log("Error - ", err);
        return;
    }
    console.log(fileContents);
    console.log("=================== EOF ============= ");
});

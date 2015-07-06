var fs = require("fs");
var calculator = require("./stepCalculator")();

fs.readFile("calculatorData.csv", {encoding : "utf8"}, function(err, fileContents){
    fileContents
        .split('\n')
        .forEach(function(line){
            var entries = line.split(',');
            var action = entries[0];
            var value = parseInt(entries[1],10);
            calculator[action](value);
        });
    console.log("result =", calculator.getResult());
});

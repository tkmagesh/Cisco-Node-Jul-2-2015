var fs = require("fs");
var calculator = require("./stepCalculator")();
var operationLookup = {
    '+' : 'add',
    '-' : 'subtract',
    '*' : 'multiply',
    '/' : 'divide'
};
fs.readFile("calculatorData-2.csv", {encoding : "utf8"}, function(err, fileContents){
    fileContents
        .split('\n')
        .forEach(function(line){
            var entries = line.split(',');
            var action = operationLookup[entries[0]];
            var value = parseInt(entries[1],10);
            calculator[action](value);
        });
    console.log("result =", calculator.getResult());
});

function getStepCalculator(){
    var result = 0;
    var stepCalculator = {
        add : function(number){
            result += number;
        },
        subtract : function(number){
            result -= number;
        },
        multiply : function(number){
            result *= number;
        },
        divide : function(number){
            result /= number;
        },
        getResult : function(){
            return result;
        }
    }
    return stepCalculator;
}
module.exports = getStepCalculator;

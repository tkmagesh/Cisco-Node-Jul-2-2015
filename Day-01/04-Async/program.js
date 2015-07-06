function addAsync(x,y, onResult){
    setTimeout(function(){
        if (x % 2 === 0 || y % 2 === 0){
            var error = new Error("Invalid arguments");
            onResult(error, null);
            return;
        }
        var result = x + y;
        onResult(null, result);
    }, 3000);
}

function addAsyncClient(n1, n2){
    addAsync(n1, n2, function(error, result){
        if (error){
            console.log("unexpected error - ", error);
            return;
        }
        console.log("result =", result);
    });
}

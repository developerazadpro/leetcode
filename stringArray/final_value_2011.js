var finalValueAfterOperations = function(operations) {
    let finalValue = 0;
    for(let s = 0; s < operations.length;s++){
        console.log(operations[s]);
        operations[s][1] == '+' ? finalValue++ : finalValue--;
        
    }
    return finalValue;
};
const operations = ["++X","++X","X++"];
console.log(finalValueAfterOperations(operations));
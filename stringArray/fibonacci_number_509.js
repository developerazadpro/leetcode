var fib = function(n) {
    // method 1

    //if(n <= 1) return n;    
    // return fib(n - 1) + fib(n - 2);

    // method 2 (golden ration formula)
    let goldenRation = (1 + Math.sqrt(5))/2;
    return Math.round(Math.pow(goldenRation, n)/ Math.sqrt(5))

};

console.log(fib(2));
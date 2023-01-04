var countPrimes = function(n) {
    let totalPrime = 0;
    const notPrimes = [];
    notPrimes[0] = true;
    notPrimes[1] = true;
    for(let i = 2; i < n; i++){
        notPrimes[i] = false;        
    }
    for(let i = 2; i < Math.sqrt(n); i++){
        if(notPrimes[i] == false){
            for(let j = 2; j * i < n; j++){
                notPrimes[j * i] = true;
            }
        }
        
    }
    //console.log(notPrimes);
    totalPrime = notPrimes.filter((num) => num == false).length;
    return totalPrime;
};
console.log(countPrimes(100));
console.log(Math.sqrt(4979));
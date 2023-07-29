// method 1
var isPowerOfTwo = function(n) {
    if(n < 1){
        return false;
    }
    if(n == 1){
        return true;
    }
    if(n % 2 == 1){
        return false;
    }
    return isPowerOfTwo(n/2);
};
console.log(isPowerOfTwo(24));
// method 2
var isPowerOfTwo2 = function(n) {
    return Math.log2(n) % 1 == 0;
};
console.log(isPowerOfTwo2(16));


// method 3
var isPowerOfTwo3 = function(n) {
    if(n < 1){
        return false;
    }

    return (n & (n - 1)) === 0 ?true:false
};
console.log(isPowerOfTwo3(88));
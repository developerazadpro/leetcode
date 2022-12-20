var reverse = function(x) {
    //int-> string-> split-> reverse-> join-> parseFloat(to remove -) -> sign_add
    var res = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    if(res > (Math.pow(2,31)-1) || res < Math.pow(-2,31) ){
        res = 0;
    }
    return res;
};
console.log(reverse(-1534236469));
console.log(reverse(-560.01));
console.log(Math.pow(2,31)-1);
var subtractProductAndSum = function(n){
    num = Array.from(String(n), Number);console.log(num);
    sum = num.reduce((a, b) => a+b );//console.log(sum);
    product = num.reduce((a,b) => a * b);//console.log(product);
    return product - sum;
};
console.log(subtractProductAndSum(111));
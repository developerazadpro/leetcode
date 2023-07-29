// method 1
function fibonnacci(n){
    const res = [0, 1]
    for(let i = 2; i <= n; i++){
        console.log(res[i - 1]);
        res.push(res[i - 1] + res[i - 2])
    }
    console.log(res);
    return res[n];
}
console.log(fibonnacci(4))

// method 2

function fibonnacci2(n){
    if(n <=2){
        return 1
    }
    return fibonnacci2(n-1) + fibonnacci2(n-2)
    
}
console.log(fibonnacci2(10))
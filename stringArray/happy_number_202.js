var isHappy = function(n) {
    var map = {}, num;
    
    while(!map[n]) {
        map[n] = true;console.log(map);
        
        num = 0
        while(n > 0) {
            num += (n%10) * (n%10);console.log(n%10);
            n = Math.floor(n/10);console.log(n);
        }
        if(num === 1) {
            return true;
        }
        n = num; console.log(num);
    }
    return false;
    
};
console.log(isHappy(2));


console.log(2%10);
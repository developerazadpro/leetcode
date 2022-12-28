var guessNumber = function(n) {
    let left = 0
    let right = n-1
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let guessNumber = guess(mid)
        if(guessNumber == 0){
            return mid
        }else if(guessNumber == 1){
            left = mid + 1;
        }else{
            right = mid - 1
        }
    }
    return left
}
console.log(guessNumber(10));
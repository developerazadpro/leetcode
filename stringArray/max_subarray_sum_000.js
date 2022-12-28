function maxSubarraySum(arr, num){

    if(arr.length < num){
        return null
    } 
    let max = -Infinity;
    for(let i = 0; i < arr.length-num +1; i++){
        let temSum = 0
        //console.log(arr[i])
        for(let j = 0; j < num; j++){
            temSum += arr[i + j]; console.log(temSum)
            console.log(arr[i+j]);
        }
        max = Math.max(temSum, max);
    }
    return max
}
console.log(maxSubarraySum([1,2,5], 2));
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum  = 0;
    let result = Infinity;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum >= target){
            result = Math.min(result, i+1-left);
            sum -= nums[left]
            left++
        }
    }
    return result = result == Infinity? 0:result;
};

let target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums));
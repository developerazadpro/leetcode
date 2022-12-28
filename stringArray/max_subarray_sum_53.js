// part of dynamic programming
// first sum 0 and 1 index which is -1
// then compare it by 1 index (-1, 1) where 1 index (value 1) is greater
// then compare it with max sum, if current sum > max sum then assign current sum to max sum
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum     = nums[0];

    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum     = Math.max(currentSum, maxSum);
    }
    return maxSum;
};
//const nums = [-2,1,-3,4,-1,2,1,-5,4];    
const nums = [5,4,-1,7,8];    
console.log(maxSubArray(nums));
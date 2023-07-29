var runningSum = function(nums) {
    const newNums = []
    let temSum = 0;
    
    for(let i = 0;i < nums.length; i++){
        temSum += nums[i]
        newNums.push(temSum)
    }
    return  newNums
};
const nums = [3,1,2,10,1];
console.log(runningSum(nums));
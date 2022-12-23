/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hasMap = {};
    for(let i = 0; i < nums.length; i++){
        let subTractedVal = target - nums[i]; 
        if(subTractedVal in hasMap){
           return [hasMap[subTractedVal], i] 
        }
        hasMap[nums[i]] = i
    }
    return hasMap
};

const nums = [3,2,4];
let target = 6;
console.log(twoSum(nums, target));
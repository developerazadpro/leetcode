var containsNearbyDuplicate = function(nums, k) {
    const hasTable = {};
    
    
    for (let i = 0; i < nums.length; i++){
        if(nums[i] in hasTable && Math.abs(i - hasTable[nums[i]]) <= k){
            console.log(nums[i]);
            console.log(hasTable[nums[i]]);
            return true;
        }
        hasTable[nums[i]] = i; //value:index

    }
    console.log(hasTable);
    
    return false
    
};
const nums = [1,0,1,1];
let k = 1;
console.log(containsNearbyDuplicate(nums, k));
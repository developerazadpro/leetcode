var findDuplicates = function(nums) {
    const hasTable = {};
    const duplicates = [];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] in hasTable){
            duplicates.push(nums[i]);
        }
        
        hasTable[nums[i]] = i;

    }
    console.log(hasTable);
    return duplicates
};
const nums = [1,1,2];
console.log(findDuplicates(nums));
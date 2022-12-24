var containsDuplicate = function(nums) {
    const hasTable = {};
    
    for (let i of nums){
        console.log(i);
        if(i in hasTable){
            return true;
        }
        hasTable[i] = 1;

    }
    console.log(hasTable);
    
    return false
    
};
const nums = [1,5,-2,-4,0];
console.log(containsDuplicate(nums));
var removeDuplicates = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if(!res.includes(nums[i])){
            res.push(nums[i]);
        }
    }
    return res;
};

const nums = [1,1,2];
console.log(removeDuplicates(nums));
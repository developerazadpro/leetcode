var buildArray = function(nums) {
    const res = []
    for(let i of nums){
        console.log(i)
        res.push(nums[i])
    }
    return res
};
const nums = [5,0,1,2,3,4]
console.log(buildArray(nums))
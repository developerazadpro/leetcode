var shuffle = function(nums, n) {
    const res = []
    for(let i = 0; i < n; i++){
        res.push(nums[i]);
        res.push(nums[i + n]);
    }
    return res
};
const nums = [2,5,1,3,4,7];
let n = 3;
console.log(shuffle(nums, n));



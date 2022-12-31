var arraySign = function(nums) {
    const x = nums.reduce((a, b) => a * b);
    return x ? (x > 0 ? 1 : -1) : 0;
};
const nums = [1,2,5,-9];
console.log(arraySign(nums));
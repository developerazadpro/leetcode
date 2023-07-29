var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    console.log(sorted);
    return nums.map(num => 
        sorted.indexOf(num)
    );
};

const nums = [8,1,2,2,3,500];
console.log(smallerNumbersThanCurrent(nums))
var singleNumber = function(nums) {
    const res = {};
    const sortedArr = nums.sort();
    
    for(let i of sortedArr){
        res[i] = (res[i] || 0) + 1;
    }
    //console.log(res)

    for(let i = 0; i < sortedArr.length; i++){
        //console.log(res[sortedArr[i]]);
        if(res[sortedArr[i]] == 1){
            return sortedArr[i]
        }
    }

    return -1;
};
const nums = [2,2,4,4,3];
console.log(singleNumber(nums));


var singleNumber2 = function(nums) {
    let single = nums[0]; // take lowest element
    console.log(nums[0]);
    
    for(let i=1; i<nums.length; i++){
        single = single ^ nums[i];// carret operator, XOR, set 0 for the value come more than once, else return 1 for non repeating value
    }
    //console.log(2^2);
    return single;
};
console.log(singleNumber2(nums));
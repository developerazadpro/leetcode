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

// method 2
function areThereduplicates(numbers){
    let left  = 0
    let right = 1
    while(left < right){
        if(numbers[left] == numbers[right]) return true
        left++
        right++
    }
    return false
}
const numbers = [1,5,-2,-4,0,1];
console.log(containsDuplicate(numbers));
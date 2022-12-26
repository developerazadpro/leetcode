function sumZero(nums){
    let left  = 0;
    let right = nums.length - 1;
    while(left < right){
        if(nums[left] + nums[right] == 0){
            return [nums[left], nums[right]];
        }
        if(nums[left] + nums[right] < 0){
            left++;
        }
        if(nums[left] + nums[right] > 0){
            right--;
        }        
    }
    return undefined;
}

const nums = [-3,0,2,3];
console.log(sumZero(nums));

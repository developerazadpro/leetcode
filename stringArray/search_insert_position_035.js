function searchInsert(nums, target){
    let left  = 0;
    let right = nums.length - 1;
   
    while(left <= right){
        let midle = Math.floor((left + right) / 2); //console.log(midle)
        let midleVal = nums[midle]

        if(target == midleVal){
            return midle
        }   
        if(target >  midleVal){
            left = midle + 1   ;// console.log(left)
        }else{
            right = midle - 1; //console.log(right)
        }
        
    }
    return left;
    
    
}
const nums = [1,3,4,5,6];
const target = 2;
console.log(searchInsert(nums, target));
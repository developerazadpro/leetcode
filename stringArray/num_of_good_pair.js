// var numIdenticalPairs = function(nums) {
//     let res = 0;
//     console.log(nums.length);
//     for(let i = 0; i < nums.length-1; i++){        
//          for(let j = i+1; j < nums.length; j++){ 
//             //console.log(nums[j]);
//             if(nums[i] == nums[j]){
//                 console.log(nums[i], nums[j]);
//                  res++;
//                 // res.push(nums[j]);
//             }
//          }        
//    }
//     return res
// };
// const nums = [1,1,1,1];

// console.log(numIdenticalPairs(nums));

// 2nd method
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    for(const num of nums){    
        //console.log(num)
        if(map[num]){            
            count += map[num]
            //console.log(count)
            map[num] += 1
        }else{
           map[num]   = 1
        }
    }
    //console.log(map);
   
   
    return count
};
//const nums = [1,1,1,1];
const nums = [1,2,3,1];

console.log(numIdenticalPairs(nums));



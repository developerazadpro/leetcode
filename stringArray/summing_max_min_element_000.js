// sum of an array
function sum(num){
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total += parseInt(num[i]);
    }
    return total;
}
console.log(sum([5,6,7,8,10]));


// finding max number in array
const numArray = [5,6,7,8,10];
function maxNumber(numArray){
    let max = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > max){
            max = numArray[i];
        }
    }
    return max;
}
console.log(maxNumber(numArray));

// finding min number in array
function minNumber(numArray){
    let min = numArray[0];
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] < min){
            min = numArray[i];
        }
    }
    return min;
}
console.log(minNumber(numArray));
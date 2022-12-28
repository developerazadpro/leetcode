function searchElementByBinarySearch(arr, num){
    let left  = 0;
    let right = arr.length - 1;
    while(left <= right){
        let midle = Math.floor((left + right) / 2); console.log(midle)
        let midleVal = arr[midle]

        if(num == midleVal){
            return midle
        }   
        if(num >  midleVal){
            left = midle + 1   ; console.log(left)
        }else{
            right = midle - 1; console.log(right)
        }
    }
}
const arr = [1,2,3,4,8,9,10];
const num = 11;
console.log(searchElementByBinarySearch(arr, num));
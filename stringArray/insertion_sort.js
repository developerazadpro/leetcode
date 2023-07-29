var insertionSort = function(arr){
    for(let i = 1; i < arr.length; i++){        
        let temp = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j--            
        }
        arr[j + 1] = temp;        
    }    
    return arr;
}
const arr = [10,11,200,100,2,1];
console.log(insertionSort(arr));


var insertionsortMethod = function(){
    for(let i = 1; i < myArr.length; i++){        
        let temp = myArr[i];
        let j = i - 1;
        while(j >= 0 && myArr[j] > temp){
            myArr[j+1] = myArr[j];
            j--
        }
        myArr[j+1] = temp
    }
    return myArr;
}
const myArr = [5,4,2,1,3];
console.log(insertionsortMethod(myArr));
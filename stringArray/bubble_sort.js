var bubbleSort = function(arr){
    for(let i = 0; i < arr.length - 1; i++){
        console.log(i)
        for(let j = 0; j < arr.length - 1 - i; j++){
            console.log(j)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

const arr = [200,100,20,10,2,1,500];
console.log(bubbleSort(arr));
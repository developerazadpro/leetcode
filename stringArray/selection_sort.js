var selectionSort = function(arr){
    for(let i = 0; i < arr.length - 1; i++){
        
        let min = i;
        
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        
        //if( min !== i){
        if( arr[min] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[min]
            arr[min] = temp
        }
        
    }
    
    return arr;
}

const arr = [200,100,20,10,2,10];
console.log(selectionSort(arr));
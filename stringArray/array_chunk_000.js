// problem divide array into sub array

// method one
function chunk (arr, size) {
    const chunked = [];
    for(let elm of arr){
        const last = chunked[chunked.length - 1];
        console.log(last);
        if(last && last.length < size){
            last.push(elm)
            console.log(last)
        }else{
            chunked.push([elm])
           
        }  
    }
    return chunked;
}

const arr = [1,2,3,4,5];
console.log(chunk(arr, 2));

// method two
function chunkFunction(carr, size) {
    
    let index = 0;
    const chunkedArr = [];
    while(index < carr.length){
        const slicedArr = carr.slice(index, index+size);
        console.log(slicedArr);
        chunkedArr.push(slicedArr);
        index += size;
    }
    return chunkedArr;
}
const carr = [1,2,3,4,5];
console.log(chunkFunction(carr, 2));

    var replaceElements = function(arr) {
        const res = []
        for(let index=0; index < arr.length; index++){
            if(index == (arr.length - 1)){
                res.push(-1)
            }else{
                const rightArr = arr.slice(index+1);
                let maxNum = Math.max(...rightArr);// find max value in array in js
                res.push(maxNum)
            }
        }
        return res;
    };
    const arr = [17,18,5,4,6,1];
    console.log(replaceElements(arr));
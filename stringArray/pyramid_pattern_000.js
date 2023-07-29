var pyramid = function(n){
    let midpoint = Math.floor(((2 * n) - 1)/2);
    //console.log((2 * n) - 1);
    //console.log(mid);

    for(let row = 0;row < n; row++){
        //console.log(row);
        let shape = ''
        
        for(let col = 0; col < (2 * n) - 1; col++ ){
            //if(midpoint - row <= col && midpoint + row >= col){
            if(col >= midpoint - row && col <= midpoint + row){
                shape += '#'
            }else{
                shape += ' '
            }
        }
        console.log(shape)
    }
    
    
}

console.log(pyramid(5));
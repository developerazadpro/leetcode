function stepPattern(n){
    for(let row = 0; row < n; row++){
        let step = '';
        for(let col = 0; col < n; col++){
            if(col <=row){
                step  += '#';
            }else{
                step  += '';
            }
            
        }
        console.log(step)
    }
    
}
// try in browser console for beautyful output
console.log(stepPattern(3));
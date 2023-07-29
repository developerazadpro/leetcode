var generateMatrix = function(n){
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    //direction, 0 --> left to right, 1 --> right to bottom, 2 --> bottom to left, 3--> left to top  
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0));console.log(res);
    let i;
    let count = 0;
    let size = n * n;
    
    while(count < size){
        // move left to right
        for( i = left; i <= right;i++){
            count++
            res[top][i] = count            
        }
        top ++;

        // move right to bottom
        for( i = top; i <= bottom;i++){
            count++
            res[i][right] = count               
        }
        right --;

        // move bottom to left
        for( i = right; i >= left;i--){
            count++
            res[bottom][i] = count               
        }
        bottom --;

        // move left to top
        for( i = bottom; i >= top;i--){
            count++
            res[i][left] = count
        }
        left ++;
    }
    return res;

    
}
console.log(generateMatrix(3))
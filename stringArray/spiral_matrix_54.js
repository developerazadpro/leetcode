var spiralOrder = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let top = 0, bottom = row - 1, left = 0, right = col - 1;
    let count = 0;
    
    let i;
    const res = [];

    while(left <= right && top <= bottom){
        // left to right
        for(i = left; i <= right; i++){
            res.push(matrix[top][i])
        }
        top++
        // top to bottom
        for(i = top; i <= bottom; i++){
            res.push(matrix[i][right])
        }
        right--

        // right to left
        if(top <= bottom){
            for(i = right; i >= left; i--){
                res.push(matrix[bottom][i])
            }
            bottom--
        }
        
        

        // bottom to top
        if(left <= right){
            for(i = bottom; i >= top;i--){
                count++
                res.push(matrix[i][left])
            }
            left++
        }
    }
    return res
};

//const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
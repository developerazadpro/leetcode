var sortPeople = function(names, heights) {
    let finalArray = [];
    for(let i = 0; i < names.length; i++){
        finalArray.push([names[i], heights[i]]);
    }
    finalArray.sort((a, b) =>  b[1] - a[1]);
    finalArray = finalArray.map((x) => x[0]);
    return finalArray;
    
};



const names = ["Mary","John","Emma"];
const heights = [180,165,170];
console.log(sortPeople(names, heights));
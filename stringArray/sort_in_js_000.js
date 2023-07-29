var sortNumber = function(arr){
    return arr.sort(function(a, b){
        // if a - b = -ve value then a comes before b, if a - b = +ve value then b comes before a, else nothing
        
        return a - b;// ascending
        return b - a;// descending
    });
}

var arr = [8,5,2,7,10];
console.log(sortNumber(arr));



var sortLetter = function(arr){
    return arr.sort(function(a, b){
        var nameA = a.toLowerCase();console.log(nameA);
        var nameB = b.toLowerCase();console.log(nameB);
        
        if(nameA < nameB){
            return -1;
        }else if(nameA > nameB){
            return 1;
        }else{
            return 0;
        }
    });
}

var arr = ["Banana", "Orange", "Apple", "Mango"];
console.log(sortLetter(arr));


var sortObjectString = function(arr){
    return arr.sort(function(a, b){
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        
        if(nameA < nameB){
            return -1;
        }else if(nameA > nameB){
            return 1;
        }else{
            return 0;
        }
    });
}

var arr = [
            {name:"Banana", price:100}, 
            {name:"Orange", price:1}, 
            {name:"Apple", price:200}, 
            {name:"Mango", price:10}
        ];
console.log(sortObjectString(arr));



var sortObjectValue = function(arr){
    return arr.sort(function(a, b){
        var nameA = a.price;
        var nameB = b.price;
        
        if(nameA < nameB){
            return -1;
        }else if(nameA > nameB){
            return 1;
        }else{
            return 0;
        }
    });
}

var arr = [
            {price:100}, 
            {price:1}, 
            {price:200}, 
            {price:10}
        ];
console.log(sortObjectValue(arr));
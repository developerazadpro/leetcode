var maximumWealth = function(accounts) {
    const result = []
    accounts.forEach(function(item){
        item = item.reduce(function(a, b){
            return a+b
        })
        result.push(item)
    })
    var max = Math.max.apply(Math, result)
    return max
};

const accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts));
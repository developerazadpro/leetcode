
var mergeTwoLists = function(list1, list2) {
    const list = [...list1, ...list2];// concate in ES6
    //const list = list1.concat(list2);// concate in ES6
    return list.sort();
}

const list1 = [1,2,4], list2 = [1,3,5];
console.log(mergeTwoLists(list1, list2));